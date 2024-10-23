import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BXjDtpQK.mjs';
import { manifest } from './manifest_D_TPKOpg.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/anime/_id_.astro.mjs');
const _page2 = () => import('./pages/horario.astro.mjs');
const _page3 = () => import('./pages/search.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/anime/[id].astro", _page1],
    ["src/pages/horario.astro", _page2],
    ["src/pages/search.astro", _page3],
    ["src/pages/index.astro", _page4]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b8ba57a0-1dda-4d0d-9daf-1ae9b1a9f3b7",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
