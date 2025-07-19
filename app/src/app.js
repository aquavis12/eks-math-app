/**
 * Main application logic
 */

// Get DOM elements
const resultInput = document.getElementById('result');
const historyList = document.getElementById('history-list');

// Initialize history array
let calculationHistory = [];

// Function to append characters to the display
function appendToDisplay(value) {
    resultInput.value += value;
}

// Function to clear the display
function clearDisplay() {
    resultInput.value = '';
}

// Function to calculate the result
function calculate() {
    try {
        const expression = resultInput.value;
        
        // Don't calculate if the input is empty
        if (!expression) return;
        
        // Calculate the result
        const result = evaluateExpression(expression);
        
        // Format the result to avoid extremely long decimals
        const formattedResult = Number.isInteger(result) ? 
            result.toString() : 
            parseFloat(result.toFixed(8)).toString();
        
        // Add to history
        addToHistory(expression, formattedResult);
        
        // Display the result
        resultInput.value = formattedResult;
    } catch (error) {
        resultInput.value = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}

// Function to add calculation to history
function addToHistory(expression, result) {
    // Create history item
    const historyItem = {
        expression: expression,
        result: result,
        timestamp: new Date().toLocaleTimeString()
    };
    
    // Add to history array (limit to 10 items)
    calculationHistory.unshift(historyItem);
    if (calculationHistory.length > 10) {
        calculationHistory.pop();
    }
    
    // Update history display
    updateHistoryDisplay();
}

// Function to update history display
function updateHistoryDisplay() {
    // Clear current history
    historyList.innerHTML = '';
    
    // Add each history item to the list
    calculationHistory.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.timestamp}: ${item.expression} = ${item.result}`;
        historyList.appendChild(li);
    });
}

// Add keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    // Allow numbers, operators, and parentheses
    if (/[\d+\-*/.()]/.test(key)) {
        appendToDisplay(key);
    } 
    // Allow Enter key for calculation
    else if (key === 'Enter') {
        calculate();
    } 
    // Allow Backspace for deleting
    else if (key === 'Backspace') {
        resultInput.value = resultInput.value.slice(0, -1);
    }
    // Allow Escape key for clearing
    else if (key === 'Escape') {
        clearDisplay();
    }
});