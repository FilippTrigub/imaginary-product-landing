#!/usr/bin/env python3
"""
NovaSphere Validator
Data validation and sanitization utilities
"""

import re
from typing import Any, List, Dict, Optional, Callable, Union
from datetime import datetime
from enum import Enum


class ValidationError(Exception):
    """Custom exception for validation errors"""
    pass


class ValidationType(Enum):
    """Types of validation"""
    STRING = "string"
    NUMBER = "number"
    EMAIL = "email"
    URL = "url"
    DATE = "date"
    BOOLEAN = "boolean"
    LIST = "list"
    DICT = "dict"


class ValidationRule:
    """Represents a validation rule"""
    
    def __init__(self, field: str, rule_type: ValidationType, **options):
        self.field = field
        self.rule_type = rule_type
        self.options = options
        self.required = options.get('required', False)
        self.custom_validator = options.get('validator')
    
    def validate(self, value: Any) -> tuple[bool, Optional[str]]:
        """Validate a value against this rule"""
        # Check if required
        if self.required and (value is None or value == ''):
            return False, f"{self.field} is required"
        
        # If not required and value is None/empty, skip validation
        if not self.required and (value is None or value == ''):
            return True, None
        
        # Type-specific validation
        if self.rule_type == ValidationType.STRING:
            return self._validate_string(value)
        elif self.rule_type == ValidationType.NUMBER:
            return self._validate_number(value)
        elif self.rule_type == ValidationType.EMAIL:
            return self._validate_email(value)
        elif self.rule_type == ValidationType.URL:
            return self._validate_url(value)
        elif self.rule_type == ValidationType.DATE:
            return self._validate_date(value)
        elif self.rule_type == ValidationType.BOOLEAN:
            return self._validate_boolean(value)
        elif self.rule_type == ValidationType.LIST:
            return self._validate_list(value)
        elif self.rule_type == ValidationType.DICT:
            return self._validate_dict(value)
        
        # Custom validator
        if self.custom_validator:
            try:
                if self.custom_validator(value):
                    return True, None
                return False, f"{self.field} failed custom validation"
            except Exception as e:
                return False, str(e)
        
        return True, None
    
    def _validate_string(self, value: Any) -> tuple[bool, Optional[str]]:
        """Validate string type"""
        if not isinstance(value, str):
            return False, f"{self.field} must be a string"
        
        min_length = self.options.get('min_length')
        max_length = self.options.get('max_length')
        pattern = self.options.get('pattern')
        
        if min_length and len(value) < min_length:
            return False, f"{self.field} must be at least {min_length} characters"
        
        if max_length and len(value) > max_length:
            return False, f"{self.field} must be at most {max_length} characters"
        
        if pattern and not re.match(pattern, value):
            return False, f"{self.field} does not match required pattern"
        
        return True, None
    
    def _validate_number(self, value: Any) -> tuple[bool, Optional[str]]:
        """Validate number type"""
        if not isinstance(value, (int, float)):
            return False, f"{self.field} must be a number"
        
        min_val = self.options.get('min')
        max_val = self.options.get('max')
        
        if min_val is not None and value < min_val:
            return False, f"{self.field} must be at least {min_val}"
        
        if max_val is not None and value > max_val:
            return False, f"{self.field} must be at most {max_val}"
        
        return True, None
    
    def _validate_email(self, value: Any) -> tuple[bool, Optional[str]]:
        """Validate email format"""
        if not isinstance(value, str):
            return False, f"{self.field} must be a string"
        
        email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        if not re.match(email_pattern, value):
            return False, f"{self.field} must be a valid email address"
        
        return True, None
    
    def _validate_url(self, value: Any) -> tuple[bool, Optional[str]]:
        """Validate URL format"""
        if not isinstance(value, str):
            return False, f"{self.field} must be a string"
        
        url_pattern = r'^https?://[^\s/$.?#].[^\s]*$'
        if not re.match(url_pattern, value):
            return False, f"{self.field} must be a valid URL"
        
        return True, None
    
    def _validate_date(self, value: Any) -> tuple[bool, Optional[str]]:
        """Validate date format"""
        if isinstance(value, datetime):
            return True, None
        
        if not isinstance(value, str):
            return False, f"{self.field} must be a date string"
        
        date_format = self.options.get('format', '%Y-%m-%d')
        try:
            datetime.strptime(value, date_format)
            return True, None
        except ValueError:
            return False, f"{self.field} must be a valid date in format {date_format}"
    
    def _validate_boolean(self, value: Any) -> tuple[bool, Optional[str]]:
        """Validate boolean type"""
        if not isinstance(value, bool):
            return False, f"{self.field} must be a boolean"
        return True, None
    
    def _validate_list(self, value: Any) -> tuple[bool, Optional[str]]:
        """Validate list type"""
        if not isinstance(value, list):
            return False, f"{self.field} must be a list"
        
        min_items = self.options.get('min_items')
        max_items = self.options.get('max_items')
        
        if min_items and len(value) < min_items:
            return False, f"{self.field} must have at least {min_items} items"
        
        if max_items and len(value) > max_items:
            return False, f"{self.field} must have at most {max_items} items"
        
        return True, None
    
    def _validate_dict(self, value: Any) -> tuple[bool, Optional[str]]:
        """Validate dictionary type"""
        if not isinstance(value, dict):
            return False, f"{self.field} must be a dictionary"
        
        required_keys = self.options.get('required_keys', [])
        for key in required_keys:
            if key not in value:
                return False, f"{self.field} must contain key '{key}'"
        
        return True, None


class Validator:
    """Main validator class for data validation"""
    
    def __init__(self):
        self.rules: List[ValidationRule] = []
        self.errors: List[str] = []
    
    def add_rule(self, field: str, rule_type: ValidationType, **options) -> 'Validator':
        """Add a validation rule"""
        rule = ValidationRule(field, rule_type, **options)
        self.rules.append(rule)
        return self
    
    def string(self, field: str, **options) -> 'Validator':
        """Add string validation rule"""
        return self.add_rule(field, ValidationType.STRING, **options)
    
    def number(self, field: str, **options) -> 'Validator':
        """Add number validation rule"""
        return self.add_rule(field, ValidationType.NUMBER, **options)
    
    def email(self, field: str, **options) -> 'Validator':
        """Add email validation rule"""
        return self.add_rule(field, ValidationType.EMAIL, **options)
    
    def url(self, field: str, **options) -> 'Validator':
        """Add URL validation rule"""
        return self.add_rule(field, ValidationType.URL, **options)
    
    def date(self, field: str, **options) -> 'Validator':
        """Add date validation rule"""
        return self.add_rule(field, ValidationType.DATE, **options)
    
    def boolean(self, field: str, **options) -> 'Validator':
        """Add boolean validation rule"""
        return self.add_rule(field, ValidationType.BOOLEAN, **options)
    
    def list_type(self, field: str, **options) -> 'Validator':
        """Add list validation rule"""
        return self.add_rule(field, ValidationType.LIST, **options)
    
    def dict_type(self, field: str, **options) -> 'Validator':
        """Add dictionary validation rule"""
        return self.add_rule(field, ValidationType.DICT, **options)
    
    def validate(self, data: Dict[str, Any]) -> bool:
        """Validate data against all rules"""
        self.errors.clear()
        
        for rule in self.rules:
            value = data.get(rule.field)
            is_valid, error = rule.validate(value)
            
            if not is_valid:
                self.errors.append(error)
        
        return len(self.errors) == 0
    
    def get_errors(self) -> List[str]:
        """Get validation errors"""
        return self.errors.copy()
    
    def validate_or_raise(self, data: Dict[str, Any]) -> None:
        """Validate and raise exception if invalid"""
        if not self.validate(data):
            raise ValidationError("; ".join(self.errors))


class Sanitizer:
    """Data sanitization utilities"""
    
    @staticmethod
    def strip_html(text: str) -> str:
        """Remove HTML tags from text"""
        return re.sub(r'<[^>]+>', '', text)
    
    @staticmethod
    def strip_whitespace(text: str) -> str:
        """Remove extra whitespace"""
        return ' '.join(text.split())
    
    @staticmethod
    def lowercase(text: str) -> str:
        """Convert to lowercase"""
        return text.lower()
    
    @staticmethod
    def uppercase(text: str) -> str:
        """Convert to uppercase"""
        return text.upper()
    
    @staticmethod
    def trim(text: str) -> str:
        """Trim whitespace from ends"""
        return text.strip()
    
    @staticmethod
    def remove_special_chars(text: str, keep: str = '') -> str:
        """Remove special characters, optionally keeping some"""
        pattern = f'[^a-zA-Z0-9{re.escape(keep)}]'
        return re.sub(pattern, '', text)
    
    @staticmethod
    def sanitize_filename(filename: str) -> str:
        """Sanitize filename for safe file system use"""
        # Remove path separators and special chars
        filename = re.sub(r'[/\\:*?"<>|]', '', filename)
        # Replace spaces with underscores
        filename = filename.replace(' ', '_')
        # Remove multiple underscores
        filename = re.sub(r'_+', '_', filename)
        return filename.strip('_')
    
    @staticmethod
    def sanitize_email(email: str) -> str:
        """Sanitize email address"""
        return email.strip().lower()
    
    @staticmethod
    def truncate(text: str, max_length: int, suffix: str = '...') -> str:
        """Truncate text to max length"""
        if len(text) <= max_length:
            return text
        return text[:max_length - len(suffix)] + suffix


def demo_validator():
    """Demonstrate validator capabilities"""
    print("\n" + "=" * 60)
    print("  NovaSphere Validator Demo")
    print("=" * 60)
    
    # String validation
    print("\n--- String Validation ---")
    validator = Validator()
    validator.string('username', required=True, min_length=3, max_length=20)
    validator.string('bio', max_length=200)
    
    valid_data = {'username': 'alice123', 'bio': 'Software engineer'}
    invalid_data = {'username': 'ab', 'bio': 'Valid bio'}
    
    print(f"Valid data: {validator.validate(valid_data)}")
    print(f"Invalid data: {validator.validate(invalid_data)}")
    if validator.errors:
        print(f"Errors: {validator.get_errors()}")
    
    # Number validation
    print("\n--- Number Validation ---")
    validator = Validator()
    validator.number('age', required=True, min=0, max=150)
    validator.number('score', min=0, max=100)
    
    valid_data = {'age': 25, 'score': 95}
    invalid_data = {'age': 200, 'score': 50}
    
    print(f"Valid data: {validator.validate(valid_data)}")
    print(f"Invalid data: {validator.validate(invalid_data)}")
    if validator.errors:
        print(f"Errors: {validator.get_errors()}")
    
    # Email validation
    print("\n--- Email Validation ---")
    validator = Validator()
    validator.email('email', required=True)
    
    emails = [
        {'email': 'user@novasphere.com'},
        {'email': 'invalid.email'},
        {'email': 'test@domain.co.uk'}
    ]
    
    for data in emails:
        is_valid = validator.validate(data)
        status = "✓" if is_valid else "✗"
        print(f"{status} {data['email']}")
        if not is_valid:
            print(f"  Error: {validator.get_errors()[0]}")
    
    # URL validation
    print("\n--- URL Validation ---")
    validator = Validator()
    validator.url('website', required=True)
    
    urls = [
        {'website': 'https://novasphere.com'},
        {'website': 'http://example.org/path'},
        {'website': 'not-a-url'}
    ]
    
    for data in urls:
        is_valid = validator.validate(data)
        status = "✓" if is_valid else "✗"
        print(f"{status} {data['website']}")
    
    # Complex validation
    print("\n--- Complex User Validation ---")
    validator = Validator()
    validator.string('username', required=True, min_length=3, max_length=20)
    validator.email('email', required=True)
    validator.number('age', required=True, min=18, max=100)
    validator.boolean('active', required=True)
    validator.list_type('tags', min_items=1, max_items=5)
    
    user_data = {
        'username': 'alice',
        'email': 'alice@novasphere.com',
        'age': 25,
        'active': True,
        'tags': ['admin', 'developer']
    }
    
    print(f"User data validation: {validator.validate(user_data)}")
    print(f"User data: {user_data}")
    
    # Sanitization
    print("\n--- Data Sanitization ---")
    
    html_text = "<p>Hello <b>World</b>!</p>"
    print(f"Strip HTML: '{html_text}' -> '{Sanitizer.strip_html(html_text)}'")
    
    messy_text = "  Too   much    whitespace  "
    print(f"Strip whitespace: '{messy_text}' -> '{Sanitizer.strip_whitespace(messy_text)}'")
    
    filename = "My File: Name*.txt"
    print(f"Sanitize filename: '{filename}' -> '{Sanitizer.sanitize_filename(filename)}'")
    
    email = "  USER@EXAMPLE.COM  "
    print(f"Sanitize email: '{email}' -> '{Sanitizer.sanitize_email(email)}'")
    
    long_text = "This is a very long text that needs to be truncated"
    print(f"Truncate: '{long_text}' -> '{Sanitizer.truncate(long_text, 30)}'")
    
    special_text = "Hello@World#2024!"
    print(f"Remove special chars: '{special_text}' -> '{Sanitizer.remove_special_chars(special_text)}'")
    print(f"Keep some chars: '{special_text}' -> '{Sanitizer.remove_special_chars(special_text, keep='@')}'")
    
    # Custom validator
    print("\n--- Custom Validator ---")
    
    def is_even(value):
        return value % 2 == 0
    
    validator = Validator()
    validator.number('even_number', required=True, validator=is_even)
    
    print(f"Validate 4: {validator.validate({'even_number': 4})}")
    print(f"Validate 5: {validator.validate({'even_number': 5})}")
    if validator.errors:
        print(f"Error: {validator.get_errors()[0]}")
    
    print("\n" + "=" * 60)


if __name__ == "__main__":
    demo_validator()
