#!/usr/bin/env python3
"""
NovaSphere Event System
Event-driven architecture with pub/sub pattern
"""

from typing import Callable, List, Dict, Any, Optional
from datetime import datetime
from collections import defaultdict
from dataclasses import dataclass, field
import time


@dataclass
class Event:
    """Represents an event in the system"""
    name: str
    data: Dict[str, Any] = field(default_factory=dict)
    timestamp: datetime = field(default_factory=datetime.now)
    source: Optional[str] = None
    
    def __str__(self) -> str:
        return f"Event({self.name}, source={self.source}, data={self.data})"


@dataclass
class EventListener:
    """Represents an event listener"""
    callback: Callable
    priority: int = 0
    once: bool = False
    filter_func: Optional[Callable] = None
    
    def should_handle(self, event: Event) -> bool:
        """Check if this listener should handle the event"""
        if self.filter_func:
            return self.filter_func(event)
        return True


class EventEmitter:
    """Event emitter for pub/sub pattern"""
    
    def __init__(self, name: str = "default"):
        self.name = name
        self.listeners: Dict[str, List[EventListener]] = defaultdict(list)
        self.event_history: List[Event] = []
        self.max_history = 100
        self.stats = {
            'events_emitted': 0,
            'listeners_called': 0
        }
    
    def on(self, event_name: str, callback: Callable, priority: int = 0, 
           filter_func: Optional[Callable] = None) -> 'EventEmitter':
        """Register an event listener"""
        listener = EventListener(callback, priority, once=False, filter_func=filter_func)
        self.listeners[event_name].append(listener)
        # Sort by priority (higher priority first)
        self.listeners[event_name].sort(key=lambda l: l.priority, reverse=True)
        return self
    
    def once(self, event_name: str, callback: Callable, priority: int = 0) -> 'EventEmitter':
        """Register a one-time event listener"""
        listener = EventListener(callback, priority, once=True)
        self.listeners[event_name].append(listener)
        self.listeners[event_name].sort(key=lambda l: l.priority, reverse=True)
        return self
    
    def off(self, event_name: str, callback: Optional[Callable] = None) -> 'EventEmitter':
        """Remove event listener(s)"""
        if event_name not in self.listeners:
            return self
        
        if callback is None:
            # Remove all listeners for this event
            del self.listeners[event_name]
        else:
            # Remove specific listener
            self.listeners[event_name] = [
                l for l in self.listeners[event_name]
                if l.callback != callback
            ]
        
        return self
    
    def emit(self, event_name: str, data: Optional[Dict[str, Any]] = None, 
             source: Optional[str] = None) -> Event:
        """Emit an event"""
        event = Event(event_name, data or {}, source=source or self.name)
        self.event_history.append(event)
        
        # Trim history if needed
        if len(self.event_history) > self.max_history:
            self.event_history = self.event_history[-self.max_history:]
        
        self.stats['events_emitted'] += 1
        
        if event_name not in self.listeners:
            return event
        
        # Call listeners
        listeners_to_remove = []
        for listener in self.listeners[event_name]:
            if listener.should_handle(event):
                try:
                    listener.callback(event)
                    self.stats['listeners_called'] += 1
                    
                    if listener.once:
                        listeners_to_remove.append(listener)
                except Exception as e:
                    print(f"Error in event listener: {e}")
        
        # Remove one-time listeners
        for listener in listeners_to_remove:
            self.listeners[event_name].remove(listener)
        
        return event
    
    def listener_count(self, event_name: str) -> int:
        """Get number of listeners for an event"""
        return len(self.listeners.get(event_name, []))
    
    def event_names(self) -> List[str]:
        """Get all registered event names"""
        return list(self.listeners.keys())
    
    def get_history(self, event_name: Optional[str] = None, limit: int = 10) -> List[Event]:
        """Get event history"""
        if event_name:
            history = [e for e in self.event_history if e.name == event_name]
        else:
            history = self.event_history
        
        return history[-limit:]
    
    def clear_history(self) -> None:
        """Clear event history"""
        self.event_history.clear()
    
    def get_statistics(self) -> Dict[str, Any]:
        """Get emitter statistics"""
        return {
            'name': self.name,
            'events_emitted': self.stats['events_emitted'],
            'listeners_called': self.stats['listeners_called'],
            'registered_events': len(self.listeners),
            'total_listeners': sum(len(listeners) for listeners in self.listeners.values()),
            'history_size': len(self.event_history)
        }


class EventBus:
    """Global event bus for application-wide events"""
    
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.emitter = EventEmitter("global")
        return cls._instance
    
    def on(self, event_name: str, callback: Callable, priority: int = 0) -> 'EventBus':
        """Register event listener"""
        self.emitter.on(event_name, callback, priority)
        return self
    
    def once(self, event_name: str, callback: Callable) -> 'EventBus':
        """Register one-time listener"""
        self.emitter.once(event_name, callback)
        return self
    
    def off(self, event_name: str, callback: Optional[Callable] = None) -> 'EventBus':
        """Remove listener"""
        self.emitter.off(event_name, callback)
        return self
    
    def emit(self, event_name: str, data: Optional[Dict[str, Any]] = None) -> Event:
        """Emit event"""
        return self.emitter.emit(event_name, data, source="EventBus")
    
    def get_statistics(self) -> Dict[str, Any]:
        """Get statistics"""
        return self.emitter.get_statistics()


class EventAggregator:
    """Aggregate multiple events into a single event"""
    
    def __init__(self, emitter: EventEmitter, output_event: str, 
                 input_events: List[str], window_seconds: float = 1.0):
        self.emitter = emitter
        self.output_event = output_event
        self.input_events = input_events
        self.window_seconds = window_seconds
        self.collected_events: List[Event] = []
        self.last_emit_time = time.time()
        
        # Register listeners for input events
        for event_name in input_events:
            emitter.on(event_name, self._collect_event)
    
    def _collect_event(self, event: Event) -> None:
        """Collect an event"""
        self.collected_events.append(event)
        
        # Check if we should emit aggregated event
        if time.time() - self.last_emit_time >= self.window_seconds:
            self._emit_aggregated()
    
    def _emit_aggregated(self) -> None:
        """Emit aggregated event"""
        if not self.collected_events:
            return
        
        aggregated_data = {
            'count': len(self.collected_events),
            'events': [
                {'name': e.name, 'data': e.data, 'timestamp': e.timestamp.isoformat()}
                for e in self.collected_events
            ]
        }
        
        self.emitter.emit(self.output_event, aggregated_data, source="EventAggregator")
        self.collected_events.clear()
        self.last_emit_time = time.time()


def demo_event_system():
    """Demonstrate event system capabilities"""
    print("\n" + "=" * 60)
    print("  NovaSphere Event System Demo")
    print("=" * 60)
    
    # Basic event emitter
    print("\n--- Basic Event Emitter ---")
    emitter = EventEmitter("app")
    
    def on_user_login(event: Event):
        print(f"User logged in: {event.data.get('username')}")
    
    def on_user_logout(event: Event):
        print(f"User logged out: {event.data.get('username')}")
    
    emitter.on('user:login', on_user_login)
    emitter.on('user:logout', on_user_logout)
    
    emitter.emit('user:login', {'username': 'alice', 'timestamp': datetime.now().isoformat()})
    emitter.emit('user:logout', {'username': 'alice'})
    
    # Priority listeners
    print("\n--- Priority Listeners ---")
    emitter2 = EventEmitter("priority_test")
    
    emitter2.on('message', lambda e: print(f"  [Priority 0] {e.data.get('text')}"), priority=0)
    emitter2.on('message', lambda e: print(f"  [Priority 10] {e.data.get('text')}"), priority=10)
    emitter2.on('message', lambda e: print(f"  [Priority 5] {e.data.get('text')}"), priority=5)
    
    emitter2.emit('message', {'text': 'Hello!'})
    
    # One-time listeners
    print("\n--- One-Time Listeners ---")
    emitter3 = EventEmitter("once_test")
    
    call_count = {'count': 0}
    
    def once_handler(event: Event):
        call_count['count'] += 1
        print(f"  One-time handler called (count: {call_count['count']})")
    
    emitter3.once('startup', once_handler)
    
    emitter3.emit('startup', {'message': 'First call'})
    emitter3.emit('startup', {'message': 'Second call (handler should not be called)'})
    print(f"Handler was called {call_count['count']} time(s)")
    
    # Event filtering
    print("\n--- Event Filtering ---")
    emitter4 = EventEmitter("filter_test")
    
    def high_priority_only(event: Event):
        return event.data.get('priority', 0) >= 5
    
    emitter4.on('task', 
                lambda e: print(f"  High priority task: {e.data.get('name')}"),
                filter_func=high_priority_only)
    
    emitter4.emit('task', {'name': 'Low priority task', 'priority': 2})
    emitter4.emit('task', {'name': 'High priority task', 'priority': 8})
    
    # Event history
    print("\n--- Event History ---")
    emitter5 = EventEmitter("history_test")
    
    emitter5.emit('action', {'type': 'create', 'item': 'document1'})
    emitter5.emit('action', {'type': 'update', 'item': 'document1'})
    emitter5.emit('action', {'type': 'delete', 'item': 'document1'})
    
    history = emitter5.get_history(limit=3)
    print(f"Recent events: {len(history)}")
    for event in history:
        print(f"  • {event.name}: {event.data}")
    
    # Global event bus
    print("\n--- Global Event Bus ---")
    bus = EventBus()
    
    def on_system_event(event: Event):
        print(f"  System event: {event.data.get('message')}")
    
    bus.on('system:notification', on_system_event)
    
    bus.emit('system:notification', {'message': 'System started'})
    bus.emit('system:notification', {'message': 'All services online'})
    
    # Statistics
    print("\n--- Event Statistics ---")
    emitter6 = EventEmitter("stats_test")
    
    emitter6.on('event1', lambda e: None)
    emitter6.on('event1', lambda e: None)
    emitter6.on('event2', lambda e: None)
    
    for i in range(5):
        emitter6.emit('event1', {'count': i})
    
    for i in range(3):
        emitter6.emit('event2', {'count': i})
    
    stats = emitter6.get_statistics()
    print(f"Emitter: {stats['name']}")
    print(f"Events emitted: {stats['events_emitted']}")
    print(f"Listeners called: {stats['listeners_called']}")
    print(f"Registered events: {stats['registered_events']}")
    print(f"Total listeners: {stats['total_listeners']}")
    
    # Complex event flow
    print("\n--- Complex Event Flow ---")
    app_emitter = EventEmitter("application")
    
    # Device events
    def on_device_connected(event: Event):
        device_name = event.data.get('device')
        print(f"  ✓ Device connected: {device_name}")
        app_emitter.emit('system:status', {'status': 'device_added', 'device': device_name})
    
    def on_device_disconnected(event: Event):
        device_name = event.data.get('device')
        print(f"  ✗ Device disconnected: {device_name}")
        app_emitter.emit('system:status', {'status': 'device_removed', 'device': device_name})
    
    def on_system_status(event: Event):
        print(f"  → System status update: {event.data.get('status')}")
    
    app_emitter.on('device:connected', on_device_connected)
    app_emitter.on('device:disconnected', on_device_disconnected)
    app_emitter.on('system:status', on_system_status)
    
    app_emitter.emit('device:connected', {'device': 'NovaSphere Pro'})
    app_emitter.emit('device:connected', {'device': 'NovaSphere Mini'})
    app_emitter.emit('device:disconnected', {'device': 'NovaSphere Pro'})
    
    print("\n" + "=" * 60)


if __name__ == "__main__":
    demo_event_system()
