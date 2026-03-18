const fs = require('fs');
let c = fs.readFileSync('src/app/prestations/page.tsx', 'utf8');

c = c.replace(/'/g, '&rsquo;');
// Wait, replacing ALL single quotes might break imports and attributes!
// I must only replace quotes inside the text. Let's do a smarter replace.

let lines = c.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('desc={[')) {
        let j = i + 1;
        while (j < lines.length && !lines[j].includes(']}')) {
            lines[j] = lines[j].replace(/'/g, '&rsquo;');
            j++;
        }
    }
}

fs.writeFileSync('src/app/prestations/page.tsx', lines.join('\n'));
