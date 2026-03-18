const fs = require('fs');
let c = fs.readFileSync('src/app/prestations/page.tsx', 'utf8');
c = c.split("l'").join("l&rsquo;");
fs.writeFileSync('src/app/prestations/page.tsx', c);
