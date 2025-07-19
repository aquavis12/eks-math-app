/**
 * Math operations module
 * Contains functions for basic math operations
 */

// Addition function
function add(a, b) {
    return a + b;
}

// Subtraction function
function subtract(a, b) {
    return a - b;
}

// Multiplication function
function multiply(a, b) {
    return a * b;
}

// Division function
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

// Evaluate a mathematical expression
function evaluateExpression(expression) {
    try {
        // Using Function constructor to evaluate the expression
        // This is safer than eval() as it runs in a separate scope
        return new Function('return ' + expression)();
    } catch (error) {
        throw new Error("Invalid expression");
    }
}