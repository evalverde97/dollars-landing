import { build } from 'vite';
import react from '@vitejs/plugin-react';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { readFile, writeFile, rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { questions } from '../src/content/faq.js';

const site = 'https://doll-ars.netlify.app/';
const workDir = '.prerender';
try {
  await build({
    configFile: false,
    plugins: [react()],
    ssr: { noExternal: [/^@fontsource/] },
    build: { ssr: 'src/App.jsx', outDir: workDir, emptyOutDir: true },
  });
  const { default: App } = await import(pathToFileURL(resolve(workDir, 'App.js')).href);
  const markup = renderToString(createElement(App));
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': site + '#organization', name: 'DOLL·ARS', url: site,
        description: 'Agencia de management de cuentas de OnlyFans, Fanvue y creadores de contenido.' },
      { '@type': 'WebSite', '@id': site + '#website', name: 'DOLL·ARS', url: site,
        inLanguage: 'es', publisher: { '@id': site + '#organization' } },
      { '@type': 'WebPage', '@id': site + '#webpage', url: site,
        name: 'DOLL·ARS | Management de OnlyFans, Fanvue y creadores',
        inLanguage: 'es', isPartOf: { '@id': site + '#website' },
        about: { '@id': site + '#organization' } },
      ...['Gestión de cuenta', 'Dirección de contenido', 'Gestión de chats', 'Marketing y promoción'].map(name => ({
        '@type': 'Service', name, provider: { '@id': site + '#organization' }, url: site + '#servicios',
        serviceType: name + ' para cuentas de OnlyFans, Fanvue y creadores de contenido',
      })),
      { '@type': 'FAQPage', '@id': site + '#faq', mainEntity: questions.map(([name, text]) => ({
        '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text },
      })) },
    ],
  };
  const json = JSON.stringify(schema).replace(/</g, '\\u003c');
  let html = await readFile('dist/index.html', 'utf8');
  if (!html.includes('<div id="root"></div>')) throw new Error('Missing prerender root');
  html = html.replace('<div id="root"></div>', '<div id="root">' + markup + '</div>');
  html = html.replace('</head>', '<script type="application/ld+json">' + json + '</script></head>');
  await writeFile('dist/index.html', html);
  console.log('Prerender complete: HTML content and shared JSON-LD.');
} finally {
  await rm(workDir, { recursive: true, force: true });
}
