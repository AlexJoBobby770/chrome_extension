async function generateButton()
{
    const threshold = parseFloat(document.getElementById('threshold').value);
    const slowAudio=document.getElementById('slowaudio').files[0];
    const medAudio=document.getElementById('medAudio').files[0];
    const fastAudio=document.getElementById('fastAudio').files[0];

    if(!validateInputs(threshold,slowAudio,medAudio,fastAudio))
        return;

    showLoading();

    try{
        createExtensionZip(threshold,slowAudio,medAudio,fastAudio)


    }
    catch(error){
        console.error('error:',error);
        showError(error);
    }
    function showLoading() {
    const button = document.getElementById('generateBtn');
    button.disabled = true;
    button.textContent = '🔄 Generating...';
    
    const statusDiv = document.getElementById('status');
    statusDiv.innerHTML = '<div class="status info">📦 Creating your extension...</div>';
}
    function validateInputs(threshold,slowAudio,medAudio,fastAudio)
    {
       
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



}