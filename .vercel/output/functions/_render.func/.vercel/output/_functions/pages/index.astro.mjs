/* empty css                                */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as createAstro, d as addAttribute, F as Fragment } from '../chunks/astro/server_CvFyiNK6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DPw_rS8n.mjs';
import { a as fetchTopAnimes, b as fetchSeasonAnimes } from '../chunks/api_DYqD7FBU.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Slider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Slider;
  const { title, animes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative w-full"> <!-- Encabezado y botones de navegación --> <div class="flex justify-between items-center mb-4"> <h2 class="text-2xl font-bold">${title}</h2> <div class="flex space-x-2"> <!-- Botón para deslizar a la izquierda --> <button class="bg-blue-600 rounded-full z-10 hover:bg-gray-600 focus:outline-none" id="prevButton"> <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"></path> </svg> </button> <!-- Botón para deslizar a la derecha --> <button class="bg-blue-600 rounded-full z-10 hover:bg-gray-600 focus:outline-none" id="nextButton"> <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"></path> </svg> </button> </div> </div> <!-- Carrusel --> <div id="carousel" class="flex space-x-2 overflow-x-hidden py-2"> ${animes.map((anime, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "key": index }, { "default": ($$result2) => renderTemplate` <div class="flex-none w-40 relative"> <a${addAttribute(`/anime/${anime.id}`, "href")}> <img${addAttribute(anime.image, "src")}${addAttribute(anime.title, "alt")} class="w-full h-auto rounded-md shadow-md transition-transform duration-300 hover:scale-105"> </a> <h3 class="absolute bottom-1 left-1 text-white text-sm font-medium bg-black bg-opacity-75 px-1 py-0.5 rounded"> ${anime.title} </h3> <span class="absolute top-1 right-1 text-white text-sm font-medium bg-black bg-opacity-75 px-1 py-0.5 rounded"> ${anime.score} ⭐
</span> </div> ` })}`)} </div> </div> `;
}, "C:/Users/Adrian/Dev/Webs/anime-web/src/components/Slider.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let topAnimes = [];
  let seasonAnimes = [];
  let error = null;
  try {
    topAnimes = await fetchTopAnimes();
  } catch (err) {
    error = "Error al cargar los animes top";
  }
  try {
    seasonAnimes = await fetchSeasonAnimes();
  } catch (err) {
    error = "Error al cargar los animes de temporada";
  }
  const topanimes = topAnimes.map((anime) => ({
    title: anime.title,
    image: anime.images.jpg.large_image_url,
    // URL de la imagen
    score: anime.score,
    id: anime.mal_id
  }));
  const seasonanimes = seasonAnimes.map((anime) => ({
    title: anime.title,
    image: anime.images.jpg.large_image_url,
    // URL de la imagen
    score: anime.score,
    id: anime.mal_id
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4 md:px-8 lg:px-16"> ${error ? renderTemplate`<p>${error}</p>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Slider", $$Slider, { "title": "Top Animes", "animes": topanimes })} ${renderComponent($$result3, "Slider", $$Slider, { "title": "Animes de Temporada", "animes": seasonanimes })} ` })}`} </main> ` })}`;
}, "C:/Users/Adrian/Dev/Webs/anime-web/src/pages/index.astro", void 0);

const $$file = "C:/Users/Adrian/Dev/Webs/anime-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
