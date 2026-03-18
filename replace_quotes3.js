const fs = require('fs');
let c = fs.readFileSync('src/app/prestations/page.tsx', 'utf8');

c = c.replace(/favoriser l'/g, 'favoriser l&rsquo;');
c = c.replace(/r&eacute;v&eacute;ler l'/g, 'r&eacute;v&eacute;ler l&rsquo;');

fs.writeFileSync('src/app/prestations/page.tsx', c);
