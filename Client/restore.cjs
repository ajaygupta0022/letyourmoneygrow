const fs = require('fs');
const path = require('path');
const logPath = 'C:/Users/ajayg/.gemini/antigravity-ide/brain/7fe1ef3d-1bc1-4035-b2ad-bb0f5daf6f78/.system_generated/logs/transcript_full.jsonl';
const lines = fs.readFileSync(logPath, 'utf8').split('\n').filter(Boolean);
const filesToRestore = {};

for (const line of lines) {
  const step = JSON.parse(line);
  if (step.type === 'VIEW_FILE' && step.content && step.content.includes('File Path: `file:///')) {
    // Extract file path
    const match = step.content.match(/File Path: \`file:\/\/\/.*?\/Client\/([^`]+)\`/i);
    if (match) {
      const relPath = match[1];
      if (!filesToRestore[relPath]) {
        // Extract content
        // Content starts after 'leading space.\n'
        const contentMatch = step.content.split('leading space.\n');
        if (contentMatch.length > 1) {
          let code = contentMatch[1];
          // Remove trailing lines like '\nThe above content shows the entire...'
          code = code.split('\nThe above content')[0];
          
          // Remove line numbers (e.g., '1: ', '123: ')
          code = code.split('\n').map(l => l.replace(/^[0-9]+:\s/, '')).join('\n');
          
          filesToRestore[relPath] = code;
        }
      }
    }
  }
}

// Write the files back!
for (const [relPath, code] of Object.entries(filesToRestore)) {
  const absPath = path.resolve('c:/Users/ajayg/Desktop/Grow your money/Client', decodeURIComponent(relPath));
  console.log('Restoring', absPath);
  fs.writeFileSync(absPath, code);
}
console.log('Restored ' + Object.keys(filesToRestore).length + ' files successfully!');
