
async function createExtensionZip(threshold, audioSlow, audioMedium, audioFast) {
    console.log('Creating ZIP with threshold:', threshold);
    
    
    const zip = new JSZip();
    
    
    const manifestContent = createManifestContent();
    zip.file("manifest.json", manifestContent);
    

    const scriptContent = createScriptContent(threshold);
    zip.file("script.js", scriptContent);
    

    await addAudioFiles(zip, audioSlow, audioMedium, audioFast);
    
  
    await downloadZip(zip);
}


function createManifestContent() {
    const manifest = {
        "manifest_version": 3,
        "name": "Malayalam Typing Judge",
        "version": "1.0",
        "description": "Plays Malayalam audio based on typing speed",
        "permissions": [],
        "content_scripts": [
            {
                "matches": ["<all_urls>"],
                "js": ["script.js"]
            }
        ],
        "web_accessible_resources": [
            {
                "resources": ["audio/*.mp3"],
                "matches": ["<all_urls>"]
            }
        ]
    };
    

    return JSON.stringify(manifest, null, 2);
}

async function addAudioFiles(zip, audioSlow, audioMedium, audioFast) {
    console.log('Adding audio files to ZIP...');
    
    const audioFolder = zip.folder("audio");
    
    
    audioFolder.file("slow.mp3", audioSlow);
    audioFolder.file("medium.mp3", audioMedium);
    audioFolder.file("fast.mp3", audioFast);
    
    console.log('Audio files added with standardized MP3 names');
}


function getFileExtension(filename) {
    return '.' + filename.split('.').pop().toLowerCase();
}

async function downloadZip(zip) {
    console.log('Generating ZIP file...');
    
  
    const zipBlob = await zip.generateAsync({
        type: "blob",
        compression: "DEFLATE",
        compressionOptions: { level: 6 }
    });
    
  
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(zipBlob);
    downloadLink.download = 'malayalam-typing-judge-extension.zip';
    
   
    downloadLink.click();
    
    console.log('ZIP download triggered');
}