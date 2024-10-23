import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, d as addAttribute, a as renderComponent, b as createAstro, u as unescapeHTML, F as Fragment, f as renderHead, g as renderSlot } from './astro/server_CvFyiNK6.mjs';
import 'kleur/colors';
import 'clsx';
import { getIconData, iconToSVG } from '@iconify/utils';
/* empty css                        */

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-800 p-4 mt-10"> <div class="max-w-4xl mx-auto text-center text-white px-4"> <p class="text-sm md:text-base">© ${(/* @__PURE__ */ new Date()).getFullYear()} Mi Sitio de Anime. Todos los derechos reservados.</p> <div class="mt-2"></div></div></footer>`;
}, "C:/Users/Adrian/Dev/Webs/anime-web/src/components/Footer.astro", void 0);


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$3 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "C:/Users/Adrian/Dev/Webs/anime-web/node_modules/astro-icon/components/Icon.astro", void 0);

const $$SearchWidget = createComponent(async ($$result, $$props, $$slots) => {
  let searchQuery = "";
  let searchResults = [];
  let isLoading = false;
  return renderTemplate`${maybeRenderHead()}<form class="flex items-center"> <input type="text" placeholder="Buscar anime..."${addAttribute(searchQuery, "value")} class="bg-gray-800 text-white rounded px-2 py-1 focus:outline-none"> <button type="submit" class="ml-2 p-2 bg-blue-600 rounded hover:bg-blue-700"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:magnify" })} </button> </form> ${isLoading} <div class="anime-results grid grid-cols-3 gap-4"> ${searchResults.map((anime) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "key": anime.mal_id }, { "default": ($$result2) => renderTemplate` <div class="anime-card border p-4 rounded"> <img${addAttribute(anime.images.jpg.large_image_url, "src")}${addAttribute(anime.title, "alt")} class="w-full h-auto"> <h3 class="font-bold">${anime.title}</h3> <p>Score: ${anime.score}</p> <p>Rank: ${anime.rank}</p> <p>Members: ${anime.members}</p> <a${addAttribute(`/anime/${anime.mal_id}`, "href")} class="text-blue-500">Ver detalles</a> </div> ` })}`)} </div>`;
}, "C:/Users/Adrian/Dev/Webs/anime-web/src/components/SearchWidget.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="bg-gray-900 text-white py-4"> <div class="max-w-6xl mx-auto flex justify-between items-center px-4"> <div class="flex items-center"> <h1 class="text-2xl font-bold">AN</h1> <nav class="ml-6"> <ul class="flex space-x-4"> <li> <a href="/"${addAttribute(`nav-link text-gray-400 hover:text-white font-bold ${currentPath === "/" ? "active text-white" : ""}`, "class")}>
Inicio
</a> </li> <li> <a href="/releases"${addAttribute(`nav-link text-gray-400 hover:text-white font-bold ${currentPath === "/releases" ? "active text-white" : ""}`, "class")}>
Releases
</a> </li> <li> <a href="/horario"${addAttribute(`nav-link text-gray-400 hover:text-white font-bold ${currentPath === "/horario" ? "active text-white" : ""}`, "class")}>
Horario
</a> </li> </ul> </nav> </div> <div class="flex items-center"> ${renderComponent($$result, "SearchWidget", $$SearchWidget, {})} <div class="ml-4"> <button class="focus:outline-none"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:moon-waxing-crescent" })} </button> </div> </div> </div> </header> `;
}, "C:/Users/Adrian/Dev/Webs/anime-web/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Adrian/Dev/Webs/anime-web/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="es" class="bg-gray-900 text-gray-100"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title ? title : "Mi Sitio de Anime"}</title><meta name="description"${addAttribute(description ? description : "Una web de anime con horario semanal.", "content")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-gray-900 text-gray-100 transition-colors duration-300"> ${renderComponent($$result, "Header", $$Header, {})} <!-- Contenido principal que cambiará dependiendo de la página --> <main class="w-full"> ${renderSlot($$result, $$slots["default"])} <!-- Aquí se inserta el contenido de cada página --> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Adrian/Dev/Webs/anime-web/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };