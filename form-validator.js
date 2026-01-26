/**
 * Form Validator Script
 * Validates form inputs with dummy validation rules
 */

class FormValidator {
    constructor(formId) {
        this.form = typeof document !== 'undefined' ? document.getElementById(formId) : null;
        this.errors = {};
        this.rules = {
            email: {
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address'
            },
            phone: {
                pattern: /^\+?[\d\s\-()]+$/,
                message: 'Please enter a valid phone number'
            },
            password: {
                minLength: 8,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                message: 'Password must be at least 8 characters with uppercase, lowercase, and number'
            },
            required: {
                message: 'This field is required'
            }
        };
    }

    // Validate email
    validateEmail(email) {
        return this.rules.email.pattern.test(email);
    }

    // Validate phone
    validatePhone(phone) {
        return this.rules.phone.pattern.test(phone);
    }

    // Validate password
    validatePassword(password) {
        return password.length >= this.rules.password.minLength && 
               this.rules.password.pattern.test(password);
    }

    // Validate required field
    validateRequired(value) {
        return value && value.trim().length > 0;
    }

    // Add error message
    addError(fieldName, message) {
        this.errors[fieldName] = message;
    }

    // Clear errors
    clearErrors() {
        this.errors = {};
    }

    // Display errors
    displayErrors() {
        console.log('Validation Errors:', this.errors);
        return Object.keys(this.errors).length === 0;
    }

    // Validate form
    validate(formData) {
        this.clearErrors();

        // Validate each field
        for (const [field, value] of Object.entries(formData)) {
            if (!this.validateRequired(value)) {
                this.addError(field, `${field} is required`);
                continue;
            }

            if (field.toLowerCase().includes('email') && !this.validateEmail(value)) {
                this.addError(field, this.rules.email.message);
            }

            if (field.toLowerCase().includes('phone') && !this.validatePhone(value)) {
                this.addError(field, this.rules.phone.message);
            }

            if (field.toLowerCase().includes('password') && !this.validatePassword(value)) {
                this.addError(field, this.rules.password.message);
            }
        }

        return this.displayErrors();
    }
}

// Dummy test data
const testFormData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1-555-123-4567',
    password: 'SecurePass123',
    message: 'This is a test message'
};

const invalidFormData = {
    name: '',
    email: 'invalid-email',
    phone: 'abc',
    password: 'weak',
    message: ''
};

// Test the validator
console.log('=== FORM VALIDATOR TEST ===\n');
const validator = new FormValidator('test-form');

console.log('Testing valid data:');
const validResult = validator.validate(testFormData);
console.log('Valid:', validResult);

console.log('\nTesting invalid data:');
const invalidResult = validator.validate(invalidFormData);
console.log('Valid:', invalidResult);

if (typeof module !== 'undefined' && module.exports) {
    module.exports = FormValidator;
}
