#!/bin/bash

################################################################################
# NovaSphere Test Script
# Comprehensive testing suite for HTML pages and JavaScript functionality
################################################################################

set -e

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Test counters
TESTS_RUN=0
TESTS_PASSED=0
TESTS_FAILED=0

# Print section header
print_header() {
    echo -e "\n${BLUE}════════════════════════════════════════════════════════════${NC}"
    echo -e "${BLUE}  $1${NC}"
    echo -e "${BLUE}════════════════════════════════════════════════════════════${NC}\n"
}

# Print test result
print_test() {
    TESTS_RUN=$((TESTS_RUN + 1))
    if [ "$1" = "PASS" ]; then
        TESTS_PASSED=$((TESTS_PASSED + 1))
        echo -e "${GREEN}✓ PASS${NC}: $2"
    else
        TESTS_FAILED=$((TESTS_FAILED + 1))
        echo -e "${RED}✗ FAIL${NC}: $2"
        if [ -n "$3" ]; then
            echo -e "  ${YELLOW}Details: $3${NC}"
        fi
    fi
}

# Check if file exists
test_file_exists() {
    if [ -f "$1" ]; then
        print_test "PASS" "File exists: $1"
        return 0
    else
        print_test "FAIL" "File exists: $1" "File not found"
        return 1
    fi
}

# Check if file contains a string
test_file_contains() {
    if grep -q "$2" "$1" 2>/dev/null; then
        print_test "PASS" "$3"
        return 0
    else
        print_test "FAIL" "$3" "String not found: $2"
        return 1
    fi
}

# Test HTML validity (basic checks)
test_html_structure() {
    local file=$1
    local errors=0

    # Check for DOCTYPE
    if ! grep -q "<!DOCTYPE html>" "$file"; then
        print_test "FAIL" "HTML has DOCTYPE declaration: $file" "Missing DOCTYPE"
        errors=$((errors + 1))
    else
        print_test "PASS" "HTML has DOCTYPE declaration: $file"
    fi

    # Check for html tag
    if ! grep -q "<html" "$file"; then
        print_test "FAIL" "HTML has <html> tag: $file" "Missing <html> tag"
        errors=$((errors + 1))
    else
        print_test "PASS" "HTML has <html> tag: $file"
    fi

    # Check for head tag
    if ! grep -q "<head>" "$file"; then
        print_test "FAIL" "HTML has <head> tag: $file" "Missing <head> tag"
        errors=$((errors + 1))
    else
        print_test "PASS" "HTML has <head> tag: $file"
    fi

    # Check for body tag
    if ! grep -q "<body>" "$file"; then
        print_test "FAIL" "HTML has <body> tag: $file" "Missing <body> tag"
        errors=$((errors + 1))
    else
        print_test "PASS" "HTML has <body> tag: $file"
    fi

    # Check for title tag
    if ! grep -q "<title>" "$file"; then
        print_test "FAIL" "HTML has <title> tag: $file" "Missing <title> tag"
        errors=$((errors + 1))
    else
        print_test "PASS" "HTML has <title> tag: $file"
    fi

    # Check for charset
    if ! grep -q 'charset=' "$file"; then
        print_test "FAIL" "HTML has charset declaration: $file" "Missing charset"
        errors=$((errors + 1))
    else
        print_test "PASS" "HTML has charset declaration: $file"
    fi

    # Check for viewport meta tag
    if ! grep -q 'name="viewport"' "$file"; then
        print_test "FAIL" "HTML has viewport meta tag: $file" "Missing viewport meta tag"
        errors=$((errors + 1))
    else
        print_test "PASS" "HTML has viewport meta tag: $file"
    fi

    return $errors
}

# Test JavaScript syntax (basic checks)
test_js_syntax() {
    local file=$1

    # Use node to check syntax
    if command -v node &> /dev/null; then
        if node --check "$file" 2>/dev/null; then
            print_test "PASS" "JavaScript syntax valid: $file"
            return 0
        else
            print_test "FAIL" "JavaScript syntax valid: $file" "Syntax errors detected"
            return 1
        fi
    else
        print_test "FAIL" "JavaScript syntax check: $file" "Node.js not available"
        return 1
    fi
}

# Test CSS file references
test_css_reference() {
    local html_file=$1
    local css_file=$2

    if grep -q "$css_file" "$html_file"; then
        if [ -f "$css_file" ]; then
            print_test "PASS" "CSS file referenced and exists: $css_file"
            return 0
        else
            print_test "FAIL" "CSS file exists: $css_file" "Referenced but file not found"
            return 1
        fi
    else
        print_test "FAIL" "CSS file referenced: $css_file" "Not referenced in HTML"
        return 1
    fi
}

################################################################################
# MAIN TEST EXECUTION
################################################################################

print_header "NovaSphere Landing Page Test Suite"

# Test 1: File Existence
print_header "Test Suite 1: File Existence"
test_file_exists "header.html"
test_file_exists "team.html"
test_file_exists "main.js"
test_file_exists "script.js"
test_file_exists "styles.css"
test_file_exists "images/logo.svg"
test_file_exists "images/product.svg"
test_file_exists "README.md"

# Test 2: HTML Structure Validation
print_header "Test Suite 2: HTML Structure Validation"
echo "Testing header.html..."
test_html_structure "header.html"
echo ""
echo "Testing team.html..."
test_html_structure "team.html"

# Test 3: HTML Content Validation
print_header "Test Suite 3: HTML Content Validation"

# header.html tests
test_file_contains "header.html" "NovaSphere" "header.html contains NovaSphere branding"
test_file_contains "header.html" "enhanced-header" "header.html has enhanced-header class"
test_file_contains "header.html" "enhanced-nav" "header.html has navigation"
test_file_contains "header.html" "dropdown" "header.html has dropdown menus"
test_file_contains "header.html" "toggleMobileMenu" "header.html has mobile menu toggle function"
test_file_contains "header.html" "breadcrumb" "header.html has breadcrumb navigation"

# team.html tests
test_file_contains "team.html" "team-section" "team.html has team section"
test_file_contains "team.html" "team-grid" "team.html has team grid layout"
test_file_contains "team.html" "Sarah Chen" "team.html contains team member: Sarah Chen"
test_file_contains "team.html" "Marcus Rodriguez" "team.html contains team member: Marcus Rodriguez"
test_file_contains "team.html" "Dr. Aisha Patel" "team.html contains team member: Dr. Aisha Patel"
test_file_contains "team.html" "James Wilson" "team.html contains team member: James Wilson"

# Test 4: CSS References
print_header "Test Suite 4: CSS and Asset References"
test_css_reference "header.html" "styles.css"
test_css_reference "team.html" "styles.css"

# Check for image references
test_file_contains "header.html" "images/logo.svg" "header.html references logo.svg"
test_file_contains "team.html" "images/logo.svg" "team.html references logo.svg"

# Test 5: JavaScript Validation
print_header "Test Suite 5: JavaScript Validation"

# Check syntax
test_js_syntax "main.js"
test_js_syntax "script.js"

# Test JavaScript content
test_file_contains "script.js" "DOMContentLoaded" "script.js uses DOMContentLoaded event"
test_file_contains "script.js" "querySelectorAll" "script.js uses querySelectorAll"
test_file_contains "script.js" "addEventListener" "script.js uses addEventListener"
test_file_contains "script.js" "preventDefault" "script.js handles preventDefault for links"
test_file_contains "script.js" "scrollTo" "script.js implements smooth scrolling"
test_file_contains "script.js" "contact-form" "script.js handles contact form"

# Test main.js content
test_file_contains "main.js" "createElement" "main.js uses createElement"
test_file_contains "main.js" "appendChild" "main.js uses appendChild"

# Test 6: JavaScript Function Tests
print_header "Test Suite 6: JavaScript Functionality Tests"

# Test smooth scrolling functionality
test_file_contains "script.js" 'href\^="#"' "script.js implements anchor link handling"
test_file_contains "script.js" "behavior: 'smooth'" "script.js uses smooth scroll behavior"

# Test form handling
test_file_contains "script.js" ".contact-form" "script.js selects contact form"
test_file_contains "script.js" "submit" "script.js handles form submission"
test_file_contains "script.js" "getElementById" "script.js uses getElementById for form fields"

# Test animation functionality
test_file_contains "script.js" "animateOnScroll" "script.js has scroll animation function"
test_file_contains "script.js" "getBoundingClientRect" "script.js uses getBoundingClientRect for positioning"
test_file_contains "script.js" "style.opacity" "script.js manipulates opacity for animations"
test_file_contains "script.js" "style.transform" "script.js uses transform for animations"

# Test header.html inline JavaScript
test_file_contains "header.html" "toggleMobileMenu" "header.html has toggleMobileMenu function"
test_file_contains "header.html" "classList.toggle" "header.html toggles classes for mobile menu"

# Test 7: Responsive Design Features
print_header "Test Suite 7: Responsive Design Features"
test_file_contains "header.html" "@media" "header.html has media queries"
test_file_contains "header.html" "mobile-menu-toggle" "header.html has mobile menu toggle"
test_file_contains "team.html" "grid-template-columns" "team.html uses CSS grid"
test_file_contains "team.html" "auto-fit" "team.html uses responsive grid auto-fit"

# Test 8: Accessibility Features
print_header "Test Suite 8: Accessibility Features"
test_file_contains "header.html" 'alt=' "header.html has alt attributes for images"
test_file_contains "team.html" 'alt=' "team.html has alt attributes for images"
test_file_contains "header.html" 'lang=' "header.html has language attribute"
test_file_contains "team.html" 'lang=' "team.html has language attribute"

# Test 9: SEO and Meta Tags
print_header "Test Suite 9: SEO and Meta Tags"
test_file_contains "header.html" '<meta name="viewport"' "header.html has viewport meta tag"
test_file_contains "team.html" '<meta name="viewport"' "team.html has viewport meta tag"
test_file_contains "header.html" "<title>" "header.html has title tag"
test_file_contains "team.html" "<title>" "team.html has title tag"

# Test 10: Navigation and Links
print_header "Test Suite 10: Navigation and Links Structure"
test_file_contains "header.html" "index.html" "header.html links to index.html"
test_file_contains "team.html" "index.html" "team.html links to index.html"
test_file_contains "header.html" "#features" "header.html has anchor links"
test_file_contains "header.html" "#contact" "header.html links to contact section"
test_file_contains "header.html" "team.html" "header.html links to team page"

################################################################################
# TEST SUMMARY
################################################################################

print_header "Test Summary"
echo -e "Total Tests Run:    ${BLUE}${TESTS_RUN}${NC}"
echo -e "Tests Passed:       ${GREEN}${TESTS_PASSED}${NC}"
echo -e "Tests Failed:       ${RED}${TESTS_FAILED}${NC}"

if [ $TESTS_FAILED -eq 0 ]; then
    echo -e "\n${GREEN}════════════════════════════════════════════════════════════${NC}"
    echo -e "${GREEN}  ✓ ALL TESTS PASSED!${NC}"
    echo -e "${GREEN}════════════════════════════════════════════════════════════${NC}\n"
    exit 0
else
    echo -e "\n${RED}════════════════════════════════════════════════════════════${NC}"
    echo -e "${RED}  ✗ SOME TESTS FAILED${NC}"
    echo -e "${RED}════════════════════════════════════════════════════════════${NC}\n"
    exit 1
fi
