/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CvFyiNK6.mjs';
import 'kleur/colors';
import { f as fetchAnimeById, a as fetchTopAnimes } from '../../chunks/api_DYqD7FBU.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DPw_rS8n.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const topAnimes = await fetchTopAnimes();
  return topAnimes.map((anime) => ({
    params: { id: anime.mal_id.toString() }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let anime = null;
  let error = null;
  try {
    anime = await fetchAnimeById(id);
  } catch (err) {
    error = "Error al cargar los detalles del anime";
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": anime ? anime.title : "Anime", "data-astro-cid-giasaeej": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full p-0 bg-gray-900 text-white" data-astro-cid-giasaeej> ${error ? renderTemplate`<p data-astro-cid-giasaeej>${error}</p>` : anime && renderTemplate`<div class="anime-details" data-astro-cid-giasaeej> <div class="w-full h-[400px] relative overflow-hidden" data-astro-cid-giasaeej> <iframe class="absolute top-0 left-0 w-full h-full"${addAttribute(`https://www.youtube.com/embed/${anime.trailer.youtube_id}?autoplay=1&mute=1&loop=1&controls=0&playlist=${anime.trailer.youtube_id}`, "src")} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="transform: scale(1.90); transform-origin: center;" data-astro-cid-giasaeej></iframe> </div> <div class="container mx-auto px-4" data-astro-cid-giasaeej> <div class="flex flex-col md:flex-row items-start md:items-end justify-between relative z-10 mt-[-150px]" data-astro-cid-giasaeej> <img${addAttribute(anime.images.jpg.large_image_url, "src")}${addAttribute(anime.title, "alt")} class="w-80 h-auto rounded-md shadow-lg mb-4 md:mb-0" data-astro-cid-giasaeej> <div class="md:ml-8 flex-grow" data-astro-cid-giasaeej> <h1 class="text-4xl font-bold text-white mb-2" data-astro-cid-giasaeej>${anime.title}</h1> <div class="flex items-center space-x-2 mb-4" data-astro-cid-giasaeej> <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-giasaeej> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-giasaeej></path> </svg> <span class="text-xl" data-astro-cid-giasaeej>${anime.score}</span> </div> <div class="flex flex-wrap gap-4 mb-4" data-astro-cid-giasaeej> <button class="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg flex items-center" data-astro-cid-giasaeej> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-giasaeej> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" data-astro-cid-giasaeej></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-giasaeej></path> </svg>
Watching
</button> <button class="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg flex items-center" data-astro-cid-giasaeej> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-giasaeej> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" data-astro-cid-giasaeej></path> </svg>
To Watch
</button> <button class="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg flex items-center" data-astro-cid-giasaeej> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-giasaeej> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-giasaeej></path> </svg>
Watched
</button> <button class="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg flex items-center" data-astro-cid-giasaeej> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-giasaeej> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-astro-cid-giasaeej></path> </svg>
Add to Collection
</button> </div> <a${addAttribute(`https://www.youtube.com/watch?v=${anime.trailer.youtube_id}`, "href")} target="_blank" class="inline-block" data-astro-cid-giasaeej> <button class="bg-white text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-200 flex items-center" data-astro-cid-giasaeej> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-giasaeej> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" data-astro-cid-giasaeej></path> </svg>
Watch Trailer
</button> </a> </div> </div> </div> <!-- Tab Navigation --> <div class="tabs flex justify-around mt-4" data-astro-cid-giasaeej> <button class="tab active" data-tab="overview" data-astro-cid-giasaeej>Overview</button> <button class="tab" data-tab="relations" data-astro-cid-giasaeej>Relations</button> <button class="tab" data-tab="staff" data-astro-cid-giasaeej>Staff</button> <button class="tab" data-tab="reviews" data-astro-cid-giasaeej>Reviews</button> </div> <!-- Tab Content --> <div id="overview" class="tab-content px-8" data-astro-cid-giasaeej> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-giasaeej> <div data-astro-cid-giasaeej> <h2 class="text-2xl font-bold mb-4" data-astro-cid-giasaeej>Details</h2> <dl class="space-y-2" data-astro-cid-giasaeej> ${[
    ["Type", anime.type],
    ["Episodes", anime.episodes],
    ["Status", anime.status],
    ["Aired", `${anime.aired.from} to ${anime.aired.to}`],
    ["Premiered", `${anime.season} ${anime.year}`],
    ["Broadcast", anime.broadcast.string],
    ["Producers", anime.producers.map((p) => p.name).join(", ")],
    ["Licensors", anime.licensors.map((l) => l.name).join(", ")],
    ["Studios", anime.studios.map((s) => s.name).join(", ")],
    ["Source", anime.source],
    ["Genres", anime.genres.map((g) => g.name).join(", ")],
    ["Duration", anime.duration],
    ["Rating", anime.rating]
  ].map(([key, value]) => renderTemplate`<div class="flex" data-astro-cid-giasaeej> <dt class="w-24 font-medium text-gray-400" data-astro-cid-giasaeej>${key}</dt> <dd data-astro-cid-giasaeej>${value}</dd> </div>`)} </dl> </div> <div data-astro-cid-giasaeej> <h2 class="text-2xl font-bold mb-4" data-astro-cid-giasaeej>Synopsis</h2> <p class="text-sm leading-relaxed" data-astro-cid-giasaeej>${anime.synopsis}</p> </div> </div> </div> </div>`} </main> ` })} `;
}, "C:/Users/Adrian/Dev/Webs/anime-web/src/pages/anime/[id].astro", void 0);

const $$file = "C:/Users/Adrian/Dev/Webs/anime-web/src/pages/anime/[id].astro";
const $$url = "/anime/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
