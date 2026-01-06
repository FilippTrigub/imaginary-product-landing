#!/usr/bin/env python3
"""
NovaSphere Project Statistics
Generate comprehensive project statistics and visualizations
"""

import os
import re
from typing import Dict, List, Tuple
from datetime import datetime
from collections import defaultdict


class ProjectAnalyzer:
    """Analyze Python project statistics"""
    
    def __init__(self, project_path: str = "."):
        self.project_path = project_path
        self.files: List[str] = []
        self.stats: Dict = {}
    
    def scan_files(self, extension: str = ".py") -> List[str]:
        """Scan for Python files"""
        files = []
        for file in os.listdir(self.project_path):
            if file.endswith(extension) and not file.startswith("__"):
                files.append(file)
        self.files = sorted(files)
        return self.files
    
    def analyze_file(self, filename: str) -> Dict:
        """Analyze a single file"""
        filepath = os.path.join(self.project_path, filename)
        
        with open(filepath, 'r') as f:
            content = f.read()
            lines = content.split('\n')
        
        # Count various elements
        total_lines = len(lines)
        code_lines = len([l for l in lines if l.strip() and not l.strip().startswith('#')])
        comment_lines = len([l for l in lines if l.strip().startswith('#')])
        blank_lines = len([l for l in lines if not l.strip()])
        
        # Count classes and functions
        classes = len(re.findall(r'^class\s+\w+', content, re.MULTILINE))
        functions = len(re.findall(r'^def\s+\w+', content, re.MULTILINE))
        methods = len(re.findall(r'^\s+def\s+\w+', content, re.MULTILINE))
        
        # Count imports
        imports = len(re.findall(r'^import\s+|^from\s+\w+\s+import', content, re.MULTILINE))
        
        # Find docstrings
        docstrings = len(re.findall(r'"""[\s\S]*?"""', content))
        
        # File size
        file_size = os.path.getsize(filepath)
        
        return {
            'filename': filename,
            'total_lines': total_lines,
            'code_lines': code_lines,
            'comment_lines': comment_lines,
            'blank_lines': blank_lines,
            'classes': classes,
            'functions': functions,
            'methods': methods,
            'imports': imports,
            'docstrings': docstrings,
            'file_size': file_size
        }
    
    def analyze_project(self) -> Dict:
        """Analyze entire project"""
        self.scan_files()
        
        file_stats = []
        totals = defaultdict(int)
        
        for filename in self.files:
            stats = self.analyze_file(filename)
            file_stats.append(stats)
            
            for key, value in stats.items():
                if isinstance(value, int):
                    totals[key] += value
        
        self.stats = {
            'files': file_stats,
            'totals': dict(totals),
            'file_count': len(self.files),
            'analyzed_at': datetime.now().isoformat()
        }
        
        return self.stats
    
    def generate_report(self) -> str:
        """Generate a text report"""
        if not self.stats:
            self.analyze_project()
        
        report = []
        report.append("=" * 70)
        report.append("  NovaSphere Project Statistics Report")
        report.append("=" * 70)
        report.append(f"\nGenerated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        report.append(f"Project Path: {os.path.abspath(self.project_path)}")
        
        # Overall statistics
        report.append("\n" + "=" * 70)
        report.append("  Overall Statistics")
        report.append("=" * 70)
        
        totals = self.stats['totals']
        report.append(f"\nTotal Files:        {self.stats['file_count']}")
        report.append(f"Total Lines:        {totals['total_lines']:,}")
        report.append(f"Code Lines:         {totals['code_lines']:,}")
        report.append(f"Comment Lines:      {totals['comment_lines']:,}")
        report.append(f"Blank Lines:        {totals['blank_lines']:,}")
        report.append(f"Total Classes:      {totals['classes']}")
        report.append(f"Total Functions:    {totals['functions']}")
        report.append(f"Total Methods:      {totals['methods']}")
        report.append(f"Total Imports:      {totals['imports']}")
        report.append(f"Total Docstrings:   {totals['docstrings']}")
        report.append(f"Total Size:         {self._format_bytes(totals['file_size'])}")
        
        # Code composition
        code_percent = (totals['code_lines'] / totals['total_lines'] * 100) if totals['total_lines'] > 0 else 0
        comment_percent = (totals['comment_lines'] / totals['total_lines'] * 100) if totals['total_lines'] > 0 else 0
        blank_percent = (totals['blank_lines'] / totals['total_lines'] * 100) if totals['total_lines'] > 0 else 0
        
        report.append("\n" + "-" * 70)
        report.append("  Code Composition")
        report.append("-" * 70)
        report.append(f"\nCode:     {code_percent:.1f}% {self._bar(code_percent)}")
        report.append(f"Comments: {comment_percent:.1f}% {self._bar(comment_percent)}")
        report.append(f"Blank:    {blank_percent:.1f}% {self._bar(blank_percent)}")
        
        # File breakdown
        report.append("\n" + "=" * 70)
        report.append("  File Breakdown")
        report.append("=" * 70)
        report.append(f"\n{'File':<30} {'Lines':<8} {'Classes':<8} {'Functions':<10} {'Size':<10}")
        report.append("-" * 70)
        
        for file_stat in sorted(self.stats['files'], key=lambda x: x['total_lines'], reverse=True):
            report.append(
                f"{file_stat['filename']:<30} "
                f"{file_stat['total_lines']:<8} "
                f"{file_stat['classes']:<8} "
                f"{file_stat['functions']:<10} "
                f"{self._format_bytes(file_stat['file_size']):<10}"
            )
        
        # Top files by metric
        report.append("\n" + "=" * 70)
        report.append("  Top Files by Metric")
        report.append("=" * 70)
        
        # Largest files
        report.append("\nLargest Files (by lines):")
        top_files = sorted(self.stats['files'], key=lambda x: x['total_lines'], reverse=True)[:5]
        for i, f in enumerate(top_files, 1):
            report.append(f"  {i}. {f['filename']:<30} {f['total_lines']:>5} lines")
        
        # Most classes
        report.append("\nMost Classes:")
        top_classes = sorted(self.stats['files'], key=lambda x: x['classes'], reverse=True)[:5]
        for i, f in enumerate(top_classes, 1):
            if f['classes'] > 0:
                report.append(f"  {i}. {f['filename']:<30} {f['classes']:>5} classes")
        
        # Most functions
        report.append("\nMost Functions:")
        top_functions = sorted(self.stats['files'], key=lambda x: x['functions'], reverse=True)[:5]
        for i, f in enumerate(top_functions, 1):
            if f['functions'] > 0:
                report.append(f"  {i}. {f['filename']:<30} {f['functions']:>5} functions")
        
        report.append("\n" + "=" * 70)
        
        return '\n'.join(report)
    
    def _format_bytes(self, bytes_size: int) -> str:
        """Format bytes to human readable"""
        for unit in ['B', 'KB', 'MB']:
            if bytes_size < 1024.0:
                return f"{bytes_size:.1f}{unit}"
            bytes_size /= 1024.0
        return f"{bytes_size:.1f}GB"
    
    def _bar(self, percent: float, width: int = 30) -> str:
        """Generate a text progress bar"""
        filled = int(width * percent / 100)
        return '█' * filled + '░' * (width - filled)
    
    def export_json(self) -> str:
        """Export statistics as JSON"""
        import json
        return json.dumps(self.stats, indent=2)
    
    def generate_markdown_table(self) -> str:
        """Generate markdown table of statistics"""
        if not self.stats:
            self.analyze_project()
        
        lines = []
        lines.append("# Project Statistics\n")
        lines.append("| File | Lines | Code | Comments | Classes | Functions | Size |")
        lines.append("|------|-------|------|----------|---------|-----------|------|")
        
        for file_stat in sorted(self.stats['files'], key=lambda x: x['total_lines'], reverse=True):
            lines.append(
                f"| {file_stat['filename']} "
                f"| {file_stat['total_lines']} "
                f"| {file_stat['code_lines']} "
                f"| {file_stat['comment_lines']} "
                f"| {file_stat['classes']} "
                f"| {file_stat['functions']} "
                f"| {self._format_bytes(file_stat['file_size'])} |"
            )
        
        # Add totals
        totals = self.stats['totals']
        lines.append(
            f"| **TOTAL** "
            f"| **{totals['total_lines']}** "
            f"| **{totals['code_lines']}** "
            f"| **{totals['comment_lines']}** "
            f"| **{totals['classes']}** "
            f"| **{totals['functions']}** "
            f"| **{self._format_bytes(totals['file_size'])}** |"
        )
        
        return '\n'.join(lines)


def main():
    """Main function"""
    print("\n" + "=" * 70)
    print("  NovaSphere Project Analyzer")
    print("=" * 70)
    
    analyzer = ProjectAnalyzer()
    
    print("\nScanning project files...")
    files = analyzer.scan_files()
    print(f"Found {len(files)} Python files")
    
    print("\nAnalyzing project...")
    analyzer.analyze_project()
    
    # Generate and print report
    report = analyzer.generate_report()
    print("\n" + report)
    
    # Generate markdown table
    print("\n" + "=" * 70)
    print("  Markdown Table")
    print("=" * 70)
    print("\n" + analyzer.generate_markdown_table())
    
    print("\n" + "=" * 70)
    print("  Analysis Complete")
    print("=" * 70)


if __name__ == "__main__":
    main()
