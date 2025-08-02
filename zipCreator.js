async function createExtensionZip(threshold, audioSlow, audioMedium, audioFast) {
    console.log('Creating ZIP with threshold:', threshold);
   
    const zip = new JSZip();
   
    // Create manifest
    const manifestContent = createManifestContent();
    zip.file("manifest.json", manifestContent);

    // Create content script
    const scriptContent = createScriptContent(threshold);
    zip.file("script.js", scriptContent);
    
    // Add audio files
    await addAudioFiles(zip, audioSlow, audioMedium, audioFast);
    
    // Add README
    const readmeContent = createReadmeContent();
    zip.file("README.md", readmeContent);
    
    // Download the ZIP
    await downloadZip(zip);
}

function createManifestContent() {
    const manifest = {
        "manifest_version": 3,
        "name": "Malayalam Typing Judge",
        "version": "1.0",
        "description": "Plays Malayalam audio based on typing speed - Works on ALL websites!",
        "permissions": [],
        "content_scripts": [
            {
                "matches": ["<all_urls>"],
                "js": ["script.js"]
            }
        ],
        "web_accessible_resources": [
            {
                "resources": ["audio/*"],
                "matches": ["<all_urls>"]
            }
        ]
    };
    
    return JSON.stringify(manifest, null, 2);
}

async function addAudioFiles(zip, audioSlow, audioMedium, audioFast) {
    console.log('Adding audio files to ZIP...');
    
    const audioFolder = zip.folder("audio");
    
    // Determine file extensions
    const slowExt = getFileExtension(audioSlow.name);
    const mediumExt = getFileExtension(audioMedium.name);
    const fastExt = getFileExtension(audioFast.name);
    
    // Add files with original extensions
    audioFolder.file(`slow${slowExt}`, audioSlow);
    audioFolder.file(`medium${mediumExt}`, audioMedium);
    audioFolder.file(`fast${fastExt}`, audioFast);
    
    console.log('Audio files added with extensions:', { slow: slowExt, medium: mediumExt, fast: fastExt });
}

function getFileExtension(filename) {
    return '.' + filename.split('.').pop().toLowerCase();
}

function createReadmeContent() {
    return `# Malayalam Typing Judge Extension

## What it does:
This Chrome extension monitors your typing speed across ALL websites and plays custom Malayalam audio commentary based on your performance!

## Features:
- 🔄 Real-time typing speed detection
- 🎵 Custom Malayalam audio feedback
- 🌐 Works on ALL websites (YouTube, Gmail, Discord, etc.)
- ⚡ Configurable speed thresholds
- 🎯 Smart input field detection

## Speed Categories:
- **Slow typing**: Below your threshold (gets roasted!)
- **Medium typing**: Around your threshold (neutral feedback)
- **Fast typing**: Above threshold x2 (gets praised!)

## Installation:
1. Unzip this folder
2. Open Chrome → chrome://extensions/
3. Enable "Developer mode" (top right)
4. Click "Load unpacked" → select this folder
5. Start typing anywhere and get judged! 🎭

## Tested Websites:
✅ YouTube comments
✅ Gmail compose
✅ WhatsApp Web
✅ Discord chat
✅ Twitter/X posts
✅ Facebook posts
✅ Instagram comments
✅ Reddit posts
✅ Any text input field!

---
Made with ❤️ at TinkerHub Useless Projects
Because your typing needed cultural commentary! 🎯`;
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
  
    // Trigger download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    // Clean up object URL
    setTimeout(() => {
        URL.revokeObjectURL(downloadLink.href);
    }, 1000);
    
    console.log('ZIP download triggered');
}