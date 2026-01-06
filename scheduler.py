#!/usr/bin/env python3
"""
NovaSphere Scheduler
Task scheduling and job management system
"""

import time
from datetime import datetime, timedelta
from typing import Callable, Optional, List, Dict, Any
from enum import Enum
from threading import Thread, Lock


class TaskStatus(Enum):
    """Task execution status"""
    PENDING = "pending"
    RUNNING = "running"
    COMPLETED = "completed"
    FAILED = "failed"
    CANCELLED = "cancelled"


class TaskPriority(Enum):
    """Task priority levels"""
    LOW = 1
    NORMAL = 2
    HIGH = 3
    CRITICAL = 4


class Task:
    """Represents a scheduled task"""
    
    def __init__(self, name: str, func: Callable, priority: TaskPriority = TaskPriority.NORMAL):
        self.id = id(self)
        self.name = name
        self.func = func
        self.priority = priority
        self.status = TaskStatus.PENDING
        self.created_at = datetime.now()
        self.started_at: Optional[datetime] = None
        self.completed_at: Optional[datetime] = None
        self.result: Any = None
        self.error: Optional[str] = None
        self.execution_count = 0
    
    def execute(self) -> None:
        """Execute the task"""
        self.status = TaskStatus.RUNNING
        self.started_at = datetime.now()
        self.execution_count += 1
        
        try:
            self.result = self.func()
            self.status = TaskStatus.COMPLETED
        except Exception as e:
            self.status = TaskStatus.FAILED
            self.error = str(e)
        finally:
            self.completed_at = datetime.now()
    
    def cancel(self) -> bool:
        """Cancel the task if not running"""
        if self.status == TaskStatus.PENDING:
            self.status = TaskStatus.CANCELLED
            return True
        return False
    
    def get_duration(self) -> Optional[float]:
        """Get task execution duration in seconds"""
        if self.started_at and self.completed_at:
            return (self.completed_at - self.started_at).total_seconds()
        return None
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert task to dictionary"""
        return {
            "id": self.id,
            "name": self.name,
            "priority": self.priority.name,
            "status": self.status.value,
            "created_at": self.created_at.isoformat(),
            "started_at": self.started_at.isoformat() if self.started_at else None,
            "completed_at": self.completed_at.isoformat() if self.completed_at else None,
            "duration": self.get_duration(),
            "execution_count": self.execution_count,
            "error": self.error
        }


class RecurringTask(Task):
    """Task that runs on a schedule"""
    
    def __init__(self, name: str, func: Callable, interval_seconds: int, 
                 max_runs: Optional[int] = None, priority: TaskPriority = TaskPriority.NORMAL):
        super().__init__(name, func, priority)
        self.interval_seconds = interval_seconds
        self.max_runs = max_runs
        self.next_run = datetime.now()
    
    def should_run(self) -> bool:
        """Check if task should run now"""
        if self.status == TaskStatus.CANCELLED:
            return False
        
        if self.max_runs and self.execution_count >= self.max_runs:
            return False
        
        return datetime.now() >= self.next_run
    
    def schedule_next_run(self) -> None:
        """Schedule the next execution"""
        self.next_run = datetime.now() + timedelta(seconds=self.interval_seconds)
        self.status = TaskStatus.PENDING


class Scheduler:
    """Task scheduler for managing and executing tasks"""
    
    def __init__(self):
        self.tasks: List[Task] = []
        self.recurring_tasks: List[RecurringTask] = []
        self.lock = Lock()
        self.running = False
    
    def add_task(self, name: str, func: Callable, priority: TaskPriority = TaskPriority.NORMAL) -> Task:
        """Add a one-time task"""
        task = Task(name, func, priority)
        with self.lock:
            self.tasks.append(task)
        return task
    
    def add_recurring_task(self, name: str, func: Callable, interval_seconds: int,
                          max_runs: Optional[int] = None, 
                          priority: TaskPriority = TaskPriority.NORMAL) -> RecurringTask:
        """Add a recurring task"""
        task = RecurringTask(name, func, interval_seconds, max_runs, priority)
        with self.lock:
            self.recurring_tasks.append(task)
        return task
    
    def cancel_task(self, task_id: int) -> bool:
        """Cancel a task by ID"""
        with self.lock:
            for task in self.tasks + self.recurring_tasks:
                if task.id == task_id:
                    return task.cancel()
        return False
    
    def get_task(self, task_id: int) -> Optional[Task]:
        """Get a task by ID"""
        with self.lock:
            for task in self.tasks + self.recurring_tasks:
                if task.id == task_id:
                    return task
        return None
    
    def get_pending_tasks(self) -> List[Task]:
        """Get all pending one-time tasks"""
        with self.lock:
            return [t for t in self.tasks if t.status == TaskStatus.PENDING]
    
    def get_tasks_by_status(self, status: TaskStatus) -> List[Task]:
        """Get tasks by status"""
        with self.lock:
            all_tasks = self.tasks + self.recurring_tasks
            return [t for t in all_tasks if t.status == status]
    
    def execute_next_task(self) -> Optional[Task]:
        """Execute the next pending task based on priority"""
        pending = self.get_pending_tasks()
        
        if not pending:
            return None
        
        # Sort by priority (highest first)
        pending.sort(key=lambda t: t.priority.value, reverse=True)
        task = pending[0]
        
        task.execute()
        return task
    
    def process_recurring_tasks(self) -> List[RecurringTask]:
        """Process recurring tasks that are due"""
        executed = []
        
        with self.lock:
            for task in self.recurring_tasks:
                if task.should_run():
                    task.execute()
                    task.schedule_next_run()
                    executed.append(task)
        
        return executed
    
    def run_all(self) -> Dict[str, int]:
        """Run all pending tasks"""
        executed = 0
        failed = 0
        
        while True:
            task = self.execute_next_task()
            if not task:
                break
            
            if task.status == TaskStatus.COMPLETED:
                executed += 1
            elif task.status == TaskStatus.FAILED:
                failed += 1
        
        return {"executed": executed, "failed": failed}
    
    def get_statistics(self) -> Dict[str, Any]:
        """Get scheduler statistics"""
        with self.lock:
            all_tasks = self.tasks + self.recurring_tasks
            
            return {
                "total_tasks": len(all_tasks),
                "one_time_tasks": len(self.tasks),
                "recurring_tasks": len(self.recurring_tasks),
                "by_status": {
                    status.value: len([t for t in all_tasks if t.status == status])
                    for status in TaskStatus
                },
                "by_priority": {
                    priority.name: len([t for t in all_tasks if t.priority == priority])
                    for priority in TaskPriority
                }
            }
    
    def clear_completed(self) -> int:
        """Remove completed tasks"""
        with self.lock:
            initial_count = len(self.tasks)
            self.tasks = [t for t in self.tasks if t.status != TaskStatus.COMPLETED]
            return initial_count - len(self.tasks)


def demo_scheduler():
    """Demonstrate scheduler capabilities"""
    print("\n" + "=" * 60)
    print("  NovaSphere Scheduler Demo")
    print("=" * 60)
    
    scheduler = Scheduler()
    
    # Define sample tasks
    def process_data():
        """Simulate data processing"""
        time.sleep(0.1)
        return "Data processed successfully"
    
    def send_notification():
        """Simulate sending notification"""
        return "Notification sent"
    
    def backup_database():
        """Simulate database backup"""
        time.sleep(0.05)
        return "Database backed up"
    
    def cleanup_temp_files():
        """Simulate cleanup"""
        return "Temp files cleaned"
    
    def failing_task():
        """Task that fails"""
        raise Exception("Simulated failure")
    
    # Add one-time tasks
    print("\n--- Adding One-Time Tasks ---")
    task1 = scheduler.add_task("Process Data", process_data, TaskPriority.HIGH)
    task2 = scheduler.add_task("Send Notification", send_notification, TaskPriority.NORMAL)
    task3 = scheduler.add_task("Backup Database", backup_database, TaskPriority.CRITICAL)
    task4 = scheduler.add_task("Cleanup", cleanup_temp_files, TaskPriority.LOW)
    task5 = scheduler.add_task("Failing Task", failing_task, TaskPriority.NORMAL)
    
    print(f"Added 5 one-time tasks")
    
    # Add recurring tasks
    print("\n--- Adding Recurring Tasks ---")
    recurring1 = scheduler.add_recurring_task(
        "Periodic Backup",
        backup_database,
        interval_seconds=2,
        max_runs=3,
        priority=TaskPriority.HIGH
    )
    
    recurring2 = scheduler.add_recurring_task(
        "Health Check",
        lambda: "System healthy",
        interval_seconds=1,
        max_runs=2,
        priority=TaskPriority.NORMAL
    )
    
    print(f"Added 2 recurring tasks")
    
    # Show initial statistics
    print("\n--- Initial Statistics ---")
    stats = scheduler.get_statistics()
    print(f"Total tasks: {stats['total_tasks']}")
    print(f"One-time tasks: {stats['one_time_tasks']}")
    print(f"Recurring tasks: {stats['recurring_tasks']}")
    print(f"Pending: {stats['by_status']['pending']}")
    
    # Execute all one-time tasks
    print("\n--- Executing One-Time Tasks ---")
    results = scheduler.run_all()
    print(f"Executed: {results['executed']}")
    print(f"Failed: {results['failed']}")
    
    # Show task results
    print("\n--- Task Results ---")
    for task in [task1, task2, task3, task4, task5]:
        status_symbol = "✓" if task.status == TaskStatus.COMPLETED else "✗"
        duration = f"{task.get_duration():.4f}s" if task.get_duration() else "N/A"
        print(f"{status_symbol} {task.name} ({task.priority.name}) - {task.status.value} - {duration}")
        if task.error:
            print(f"  Error: {task.error}")
    
    # Process recurring tasks
    print("\n--- Processing Recurring Tasks ---")
    print("Running recurring tasks for 3 seconds...")
    
    start_time = time.time()
    execution_log = []
    
    while time.time() - start_time < 3:
        executed = scheduler.process_recurring_tasks()
        for task in executed:
            execution_log.append(f"[{datetime.now().strftime('%H:%M:%S')}] {task.name} executed (run #{task.execution_count})")
        time.sleep(0.5)
    
    for log_entry in execution_log:
        print(f"  {log_entry}")
    
    # Final statistics
    print("\n--- Final Statistics ---")
    stats = scheduler.get_statistics()
    print(f"Total tasks: {stats['total_tasks']}")
    print("Status breakdown:")
    for status, count in stats['by_status'].items():
        if count > 0:
            print(f"  • {status}: {count}")
    
    print("\nPriority breakdown:")
    for priority, count in stats['by_priority'].items():
        if count > 0:
            print(f"  • {priority}: {count}")
    
    # Clear completed tasks
    print("\n--- Cleanup ---")
    cleared = scheduler.clear_completed()
    print(f"Cleared {cleared} completed tasks")
    
    print("\n" + "=" * 60)


if __name__ == "__main__":
    demo_scheduler()
