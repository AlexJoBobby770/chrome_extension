// scriptTemplate.js - Creates the content script for the Chrome extension

// Create the content script that will run in the Chrome extension
function createScriptContent(threshold) {
    console.log('Creating content script with threshold:', threshold);
    const scriptCode = `

console.log('Malayalam Typing Judge Extension Loaded!');

let startTime = null;
let charCount = 0;
let lastAudioTime = 0;
const THRESHOLD = ${threshold};
const COOLDOWN_TIME = 8000; // 8 seconds between audio plays
document.addEventListener('keydown', function(event) {
    handleKeyPress(event);
}, true);

function handleKeyPress(event) {
    // Only count actual typing keys (letters, numbers, space, etc.)
    const key = event.key;
    if (key.length > 1 && !['Backspace', 'Enter', 'Tab', 'Space'].includes(key)) {
        return;
    }
    const element = event.target;
    
    if (!isEditableElement(element)) {
        return; 

    if (!startTime) {
        startTime = Date.now();
        charCount = 0;
        console.log('Started timing typing session on:', element.tagName, element.className);
    }
    charCount++;
    const elapsedSeconds = (Date.now() - startTime) / 1000;
    const charactersPerSecond = charCount / elapsedSeconds;
    
    console.log('Key pressed:', key, '| Speed:', charactersPerSecond.toFixed(2), 'CPS | Element:', element.tagName);

    if (charCount % 10 === 0) {
        checkTypingSpeed(charactersPerSecond);
    }`
}
