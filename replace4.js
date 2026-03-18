const fs = require('fs');
let lines = fs.readFileSync('src/app/prestations/page.tsx', 'utf8').split('\n');

// Line 78 in zero-index is 77
// Unfortunately the previous view_file numbering does not exactly match the file line numbering after splits due to \r omissions, so we'll look for the content string
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('de relancer la circulation') && lines[i].includes('de favoriser l\\'')) {
        lines[i] = lines[i].replace(/l\'/g, 'l&rsquo;');
    }
    if (lines[i].includes('r&eacute;v&eacute;ler l\\'')) {
        lines[i] = lines[i].replace(/l\'/g, 'l&rsquo;');
    }
}
fs.writeFileSync('src/app/prestations/page.tsx', lines.join('\n'));
