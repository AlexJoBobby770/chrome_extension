
async function generateExtension() {
    console.log('Generate button clicked!');
   
    const threshold = parseFloat(document.getElementById('threshold').value);
    const audioSlow = document.getElementById('audioFileSlow').files[0];
    const audioMedium = document.getElementById('audioFileMedium').files[0];
    const audioFast = document.getElementById('audioFileFast').files[0];
    
    
    if (!validateInputs(threshold, audioSlow, audioMedium, audioFast)) {
        return; 
    }

    showLoading();
    
    try {
    
        await createExtensionZip(threshold, audioSlow, audioMedium, audioFast);
        showSuccess();
    } catch (error) {
        console.error('Error:', error);
        showError(error.message);
    } finally {
        hideLoading();
    }
}


function validateInputs(threshold, audioSlow, audioMedium, audioFast) {
   
    if (!audioSlow || !audioMedium || !audioFast) {
        showError('Please upload all 3 audio files!');
        return false;
    }
  
    if (isNaN(threshold) || threshold <= 0) {
        showError('Please enter a valid threshold value!');
        return false;
    }
    
    return true;
}

function showLoading() {
    const button = document.getElementById('generateBtn');
    button.disabled = true;
    button.textContent = '🔄 Generating...';
    
    const statusDiv = document.getElementById('status');
    statusDiv.innerHTML = '<div class="status info">📦 Creating your extension...</div>';
}

function hideLoading() {
    const button = document.getElementById('generateBtn');
    button.disabled = false;
    button.textContent = '🚀 Generate Chrome Extension';
}


function showSuccess() {
    const statusDiv = document.getElementById('status');
    statusDiv.innerHTML = '<div class="status success">✅ Extension created! Check your downloads.</div>';
}

function showError(message) {
    const statusDiv = document.getElementById('status');
    statusDiv.innerHTML = `<div class="status error">❌ ${message}</div>`;
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, setting up file validation...');
    setupFileValidation();
});


function setupFileValidation() {
    const fileInputs = ['audioFileSlow', 'audioFileMedium', 'audioFileFast'];
    
    fileInputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        input.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                validateAudioFile(file, this);
            }
        });
    });
}

function validateAudioFile(file, inputElement) {
    const validTypes = ['audio/mp3'];
    const maxSize = 5 * 1024 * 1024; 
    
    if (!validTypes.includes(file.type)) {
        alert('Please upload a valid audio file (MP3)');
        inputElement.value = '';
        return false;
    }
    
    if (file.size > maxSize) {
        alert('File too large! Please use files under 5MB');
        inputElement.value = '';
        return false;
    }
    
    console.log('Valid audio file uploaded:', file.name);
    return true;
}