const fs = require('fs');

let c = fs.readFileSync('src/app/prestations/page.tsx', 'utf8');

c = c.replace(/de favoriser l'(&eacute;limination)/g, 'de favoriser l&rsquo;$1');

c = c.replace(/un v&eacute;ritable moment de l&acirc;cher-prise et de r&eacute;g&eacute;n&eacute;ration, pour r&eacute;v&eacute;ler l'(&eacute;clat)/g, 'un v&eacute;ritable moment de l&acirc;cher-prise et de r&eacute;g&eacute;n&eacute;ration, pour r&eacute;v&eacute;ler l&rsquo;$1');

c = c.replace(/                                "Un v&eacute;ritable moment de l&acirc;cher-prise et de r&eacute;g&eacute;n&eacute;ration, pour r&eacute;v&eacute;ler l&rsquo;&eacute;clat naturel de votre peau."\r\n                                subtitle="Id&eacute;alement espac&eacute;es d&rsquo;une semaine"\r\n                                desc={\[/g, '                                "Un v&eacute;ritable moment de l&acirc;cher-prise et de r&eacute;g&eacute;n&eacute;ration, pour r&eacute;v&eacute;ler l&rsquo;&eacute;clat naturel de votre peau."\n                                ]}\n                            />\n                            <ServiceCard \n                                title="Forfait 5 s&eacute;ances Kobido" \n                                price="280&euro;" \n                                subtitle="Id&eacute;alement espac&eacute;es d&rsquo;une semaine"\n                                desc={[');

c = c.replace(/                                "Un v&eacute;ritable moment de l&acirc;cher-prise et de r&eacute;g&eacute;n&eacute;ration, pour r&eacute;v&eacute;ler l&rsquo;&eacute;clat naturel de votre peau."\n                                subtitle="Id&eacute;alement espac&eacute;es d&rsquo;une semaine"\n                                desc={\[/g, '                                "Un v&eacute;ritable moment de l&acirc;cher-prise et de r&eacute;g&eacute;n&eacute;ration, pour r&eacute;v&eacute;ler l&rsquo;&eacute;clat naturel de votre peau."\n                                ]}\n                            />\n                            <ServiceCard \n                                title="Forfait 5 s&eacute;ances Kobido" \n                                price="280&euro;" \n                                subtitle="Id&eacute;alement espac&eacute;es d&rsquo;une semaine"\n                                desc={[');

fs.writeFileSync('src/app/prestations/page.tsx', c);
