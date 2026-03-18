const fs = require('fs');
let c = fs.readFileSync('src/app/prestations/page.tsx', 'utf8');

c = c.replace(/favoriser l'(&eacute;limination)/g, 'favoriser l&rsquo;$1');
c = c.replace(/l'(&eacute;clat)/g, 'l&rsquo;$1');

// Double check just in case the regex doesn't match the exact pattern
c = c.replace("l'&eacute;limination", "l&rsquo;&eacute;limination");
c = c.replace("l'&eacute;clat", "l&rsquo;&eacute;clat");

fs.writeFileSync('src/app/prestations/page.tsx', c);
