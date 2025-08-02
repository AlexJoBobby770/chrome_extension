# Malayalam Typing Judge 🎯

<img width="3188" height="1202" alt="Malayalam Typing Judge Banner" src="https://github.com/user-attachments/assets/517ad8e9-ad22-457d-9538-a9e62d137cd7" />

## Basic Details
### Team Name: VITAMIN D

### Team Members
- Team Lead: [Alex Jo Bobby] - [Albertian Institute of Science and technology]
- Member 2: [Harigovind kr] - [Albertian Institute of Science and technology]


### Project Description
A Chrome extension generator that creates personalized typing speed judges with Malayalam audio commentary. Monitor your typing across ALL websites and get real-time feedback based on your speed - from encouraging praise to hilarious roasts!

### The Problem (that doesn't exist)
Ever felt like your typing was too peaceful? Missing that judgmental Malayalam uncle/aunty who comments on everything you do? Your keyboard was feeling too quiet and your typing sessions lacked proper cultural commentary! Plus, there was absolutely no way to get unsolicited opinions about your typing speed while browsing the internet.

### The Solution (that nobody asked for)
We created a Chrome extension generator that monitors your typing speed across ALL websites and plays custom Malayalam MP3 audio files to judge your performance:
- Type slow? Get roasted in Malayalam! 🐌
- Type at average speed? Get balanced feedback! ⚖️
- Type fast? Get praised in Malayalam! 🚀

Because apparently, we needed to add more pressure to our daily typing activities and make every keystroke a performance review!

## Technical Details
### Technologies/Components Used
For Software:
- **Languages:** JavaScript (ES6+), HTML5, CSS3
- **Libraries:** JSZip 3.10.1 for dynamic extension packaging
- **APIs:** Chrome Extension Manifest V3, Web Audio API, File API
- **Audio Format:** MP3 only for maximum compatibility
- **Frameworks:** Vanilla JavaScript (because sometimes less is more)
- **Tools:** Chrome Developer Tools, Content Script Injection

### Implementation
For Software:

#### Installation & Setup
```bash
# Clone the repository
git clone [https://github.com/AlexJoBobby770/chrome_extension.git]
# Open index.html in any modern browser
# No build process required - pure client-side magic!
```

#### How to Use the Generator
1. Open `index.html` in your browser
2. **Try the demo first**: Download the sample extension with beep sounds
3. **Create custom version**: 
   - Set your typing speed threshold (Characters Per Second)
   - Upload 3 Malayalam MP3 audio files:
     - Slow typing audio (for roasting)
     - Medium typing audio (neutral feedback)  
     - Fast typing audio (praise)
4. Click "Generate Custom Malayalam Extension"
5. Download the generated ZIP file

#### How to Install Generated Extensions
1. Unzip the downloaded file
2. Open Chrome → `chrome://extensions/`
3. Enable "Developer mode" (top right toggle)
4. Click "Load unpacked" → select your unzipped folder
5. Start typing anywhere and get judged! 🎭

### Audio Requirements
#### MP3 Format Only
- ✅ **Supported:** MP3 files only (.mp3 extension)
- 📎 **File Size:** Maximum 5MB per MP3 file
- ⏱️ **Duration:** Recommended 2-5 seconds each for best experience
- 🎵 **Quality:** Standard MP3 bitrates (128kbps-320kbps) work perfectly

#### Why MP3 Only?
- **Universal Browser Support:** MP3 works across all modern browsers
- **Optimal Compression:** Smaller file sizes for faster loading
- **Chrome Extension Compatibility:** Best performance in Chrome's security model
- **User Convenience:** Most users already have MP3 files

### Project Documentation

#### Screenshots
![Extension Generator Interface](screenshots/generator-interface.png)


![Typing Speed Detection](screenshots/typing-notification.png)


![Multi-Website Support](screenshots/multi-website.png)




### Key Features & Technical Highlights

#### MP3 Audio System
- **Format Validation**: Strict MP3-only file checking
- **Size Optimization**: 5MB limit for optimal performance  
- **Quality Support**: All standard MP3 bitrates supported
- **Fallback Handling**: Graceful degradation when MP3 playback fails
- **Volume Control**: Optimized audio levels for user experience

#### Universal Website Compatibility
- **Smart Input Detection**: Recognizes text areas, content-editable divs, and input fields
- **Platform-Specific Handlers**: Special detection for YouTube, Gmail, Discord, Twitter, etc.
- **Dynamic Element Recognition**: Works with dynamically loaded content (SPAs)

#### Intelligent Typing Analysis
- **Real-Time Speed Calculation**: Characters Per Second (CPS) with sub-second precision
- **Adaptive Thresholds**: User-configurable speed benchmarks
- **Smart Filtering**: Only counts meaningful keystrokes (excludes navigation keys)
- **Session Management**: Auto-resets after inactivity periods

#### Performance Optimizations
- **Event Debouncing**: Efficient keystroke handling without lag
- **Memory Management**: Automatic cleanup of MP3 audio objects and notifications
- **Cross-Site Compatibility**: Works with CSP restrictions and CORS policies
- **Lightweight Footprint**: Minimal resource usage across all websites

### Supported Platforms & Testing

#### Verified Website Compatibility
- ✅ **YouTube**: Comments, live chat, video descriptions (MP3 audio plays)
- ✅ **Gmail**: Compose emails, replies, drafts (MP3 feedback works)
- ✅ **WhatsApp Web**: Message composition, group chats (MP3 audio plays)
- ✅ **Discord**: Text channels, DMs, server messages (MP3 feedback active)
- ✅ **Twitter/X**: Tweet composition, replies, DMs (MP3 audio works)
- ✅ **Facebook**: Posts, comments, messages (MP3 playback tested)
- ✅ **Instagram**: Comments, DMs, captions (MP3 audio functional)
- ✅ **Reddit**: Posts, comments, messages (MP3 feedback works)
- ✅ **LinkedIn**: Posts, messages, comments (MP3 audio plays)
- ✅ **Slack**: Channel messages, DMs, threads (MP3 playback active)

#### Technical Implementation Details
- **Content Script Injection**: Monitors all page interactions
- **Event Capturing**: Uses `keydown` events with `true` capture flag
- **Element Analysis**: Multi-layer detection for various input types
- **Cross-Frame Support**: Works with iframes and embedded content
- **MP3 Resource Loading**: Efficient audio file loading via Chrome extension APIs

### Project Demo
#### Video Demo Features
https://youtu.be/gw4_nCLsVpQ
Youtube Demo 👆👆👆

#### Live Demo Scenarios
1. **Slow Typing Demo**: Show typing at 1 CPS → Malayalam roasting MP3 plays
2. **Fast Typing Demo**: Show typing at 5+ CPS → Malayalam praise MP3 plays
3. **Multi-Website Demo**: Rapid switching between platforms showing MP3 audio
4. **Custom MP3 Demo**: Upload process and custom MP3 file integration

## Team Contributions
- **[Harigovind kr]**: Frontend development, MP3 audio integration, Chrome extension architecture, audio validation system
- **[Alex Jo Bobby]**: Typing detection algorithms, cross-website compatibility, MP3 performance optimization, testing framework, ZIP generation system, MP3 file handling, error management, documentation, deployment optimization

## Why This Project is Perfectly Useless Yet Brilliant

### The "Useless" Aspects
1. **Nobody Asked for Typing Judgment**: Yet here we are, adding performance anxiety to every keystroke
2. **Malayalam MP3 Commentary**: Because your typing definitely needed cultural context in high-quality audio
3. **Works on ALL Websites**: Even your private messages get MP3 judgment now - nowhere is safe!
4. **Customizable MP3 Roasting**: Fine-tune exactly how much audio criticism you want while browsing
5. **No Practical Benefit**: Except making typing unnecessarily dramatic with Malayalam MP3s

### The Technical Brilliance
1. **MP3-Only Optimization**: Smart format restriction for maximum compatibility
2. **Universal Compatibility**: Actually works across all major websites without breaking
3. **Real-Time Processing**: Genuinely impressive keystroke analysis and speed calculation
4. **Dynamic Extension Generation**: Complete Chrome extension created in browser with custom MP3s
5. **Smart Detection**: Sophisticated input field recognition across diverse web platforms
6. **Performance Optimized**: Runs efficiently without impacting browsing experience

### Cultural Impact
- Brings Malayalam MP3 commentary to the global internet
- Gamifies typing in the most unnecessary way possible with audio feedback
- Creates typing anxiety where none existed before (with sound effects!)
- Adds family-style judgment to solo activities in crystal-clear MP3 quality
- Makes every text input a performance evaluation with Malayalam audio

## Future Useless Enhancements
- **Multi-Language MP3 Support**: Expand to Tamil, Telugu, Hindi roasting in MP3 format
- **AI-Powered Personalized MP3 Roasting**: Learn your weaknesses for targeted MP3 criticism
- **Social Features**: Share your typing MP3 shame with friends and family
- **Smart Speaker Integration**: Announce typing failures via high-quality MP3 playback
- **Typing Style Analysis**: Judge not just speed but typing rhythm with custom MP3s
- **MP3 Remix Features**: Auto-remix your Malayalam audio files
- **Parent Mode**: Send typing MP3 reports to family WhatsApp groups

## Installation Troubleshooting

### Common MP3 Issues
1. **MP3 Not Playing**: Check file format - only MP3 files are supported
2. **Extension Not Loading**: Ensure Developer Mode is enabled
3. **No Typing Detection**: Refresh page after installing extension
4. **Too Frequent MP3 Audio**: Extension has built-in 8-second cooldown
5. **Large MP3 Files**: Keep files under 5MB for best performance

### MP3 File Requirements
- ✅ **Format**: MP3 only (.mp3 extension required)
- ✅ **Size**: Maximum 5MB per file
- ✅ **Quality**: Any standard MP3 bitrate (128-320kbps)
- ✅ **Duration**: 2-5 seconds recommended
- ❌ **Not Supported**: WAV, OGG, FLAC, or other audio formats

### Browser Compatibility
- ✅ **Chrome**: Full MP3 support (recommended)
- ✅ **Edge**: Full MP3 support with Chromium base
- ⚠️ **Firefox**: Requires manifest conversion (MP3 support varies)
- ❌ **Safari**: Not supported (different extension system)

---
Made with ❤️ and unnecessary MP3 complexity at TinkerHub Useless Projects 

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProjects--25-25?link=https%3A%2F%2Fwww.tinkerhub.org%2Fevents%2FQ2Q1TQKX6Q%2FUseless%2520Projects)

## License
MIT License - Feel free to judge typing speeds responsibly with MP3 audio

## Disclaimer
This MP3-powered extension may cause:
- ✋ Increased typing anxiety and performance pressure (with sound effects!)
- 🎭 Unnecessary drama during casual browsing sessions (now with audio!)
- 🤔 Friends asking "What's that Malayalam MP3 coming from your computer?"
- ⚡ Improved typing speed (unintended positive side effect with audio motivation)
- 👨‍👩‍👧‍👦 Family members wanting their own custom MP3 roasting extensions
- 🌍 Spreading Malayalam MP3 commentary across the global internet

**Use at your own risk of becoming a more judged (and possibly faster) typist with Malayalam MP3 soundtrack!** 🎯

### Technical Disclaimers
- Extension monitors all typing activity for speed calculation
- MP3 audio files are stored locally within the extension
- No data is transmitted to external servers
- Extension permissions are minimal (content script only)
- Compatible with Chrome's latest security policies
- Optimized for MP3 audio format only
