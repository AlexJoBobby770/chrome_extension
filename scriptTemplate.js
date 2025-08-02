function createScriptContent(threshold) {
    console.log('Creating content script with threshold:', threshold);
    const scriptCode = `
console.log('Malayalam Typing Judge Extension Loaded!');

let startTime = null;
let charCount = 0;
let lastAudioTime = 0;
const THRESHOLD = ${threshold};
const COOLDOWN_TIME = 8000; // 8 seconds between audio plays

function isEditableElement(element) {
    if (!element) return false;
    
    const tagName = element.tagName.toLowerCase();
    
    // Standard input elements
    if (tagName === 'input' || tagName === 'textarea') {
        return true;
    }
    
    // Content editable elements
    if (element.contentEditable === 'true' || element.isContentEditable) {
        return true;
    }
    
    // Website-specific checks
    if (element.getAttribute('aria-label')?.toLowerCase().includes('comment') ||
        element.getAttribute('data-tab') === '10' ||
        element.classList.contains('_13NKt') ||
        element.getAttribute('role') === 'textbox' ||
        element.getAttribute('aria-label')?.toLowerCase().includes('message') ||
        element.getAttribute('data-testid') === 'tweetTextarea_0' ||
        element.classList.contains('DraftEditor-editorContainer') ||
        element.getAttribute('aria-label')?.toLowerCase().includes('post') ||
        element.getAttribute('aria-label')?.toLowerCase().includes('add a comment') ||
        (element.classList.contains('notranslate') && element.getAttribute('contenteditable') === 'true')) {
        return true;
    }
    
    // Generic editable elements
    return (tagName === 'div' || tagName === 'span') && 
           (element.getAttribute('contenteditable') === 'true' ||
            element.getAttribute('role') === 'textbox' ||
            element.classList.contains('editable'));
}

document.addEventListener('keydown', function(event) {
    handleKeyPress(event);
}, true);

function handleKeyPress(event) {
    const key = event.key;
    if (key.length > 1 && !['Backspace', 'Enter', 'Tab', 'Space'].includes(key)) {
        return;
    }
    
    const element = event.target;
    if (!isEditableElement(element)) {
        return;
    }

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
    }
}

function checkTypingSpeed(cps) {
    const currentTime = Date.now();
    
    if (currentTime - lastAudioTime < COOLDOWN_TIME) {
        return;
    }
    
    console.log('Current typing speed:', cps.toFixed(2), 'CPS');
    
    let audioType = '';
    let message = '';
    
    if (cps < THRESHOLD) {
        audioType = 'slow';
        message = '🐌 Slow typing detected!(Do Better)';
    } else if (cps < THRESHOLD * 2) {
        audioType = 'medium';
        message = '⚖️ Average typing speed(Stay Mid)';
    } else {
        audioType = 'fast';
        message = '🚀 Fast typing!(Whats the rush?)';
    }
    
    playAudio(audioType, message, cps);
    lastAudioTime = currentTime;
}

function playAudio(audioType, message, cps) {
    if (!chrome?.runtime) {
        console.error('Chrome runtime not available');
        return;
    }
    
    try {
        const audioUrl = chrome.runtime.getURL(\`audio/\${audioType}.mp3\`);
        console.log('Attempting to play:', audioUrl);
        
        const audio = new Audio(audioUrl);
        audio.volume = 0.8;
        
        audio.play()
            .then(() => {
                console.log('✅ Successfully played audio:', audioType + '.mp3');
                showNotification(message, cps);
            })
            .catch(error => {
                console.log('❌ Failed to play audio:', error);
                showNotification(message + ' (Audio failed)', cps);
            });
    } catch (error) {
        console.error('Error creating audio:', error);
    }
}

function showNotification(message, cps) {
    const notification = document.createElement('div');
    notification.innerHTML = message + '<br><small>' + cps.toFixed(1) + ' CPS</small>';
    const notificationId = 'malayalam-typing-notification-' + Date.now();
    notification.id = notificationId;
    
    notification.style.cssText = \`
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #667eea, #764ba2);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        font-weight: bold;
        font-size: 14px;
        z-index: 999999;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        max-width: 250px;
        text-align: center;
        font-family: Arial, sans-serif;
        animation: slideInRight 0.3s ease-out;
    \`;
    
    if (!document.getElementById('malayalam-typing-styles')) {
        const style = document.createElement('style');
        style.id = 'malayalam-typing-styles';
        style.textContent = \`
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        \`;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        const element = document.getElementById(notificationId);
        element?.remove();
    }, 4000);
}

let inactivityTimer;
document.addEventListener('keydown', function() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        startTime = null;
        charCount = 0;
        console.log('Typing session reset due to inactivity');
    }, 10000);
}, true);

console.log('🎯 Malayalam Typing Judge Extension Ready!');
console.log('Threshold:', THRESHOLD, 'CPS');
console.log('Will monitor typing on ALL editable elements across websites!');
`;
    
    return scriptCode;
}