/* empty css                                */
import { c as createComponent, r as renderTemplate, b as createAstro } from '../chunks/astro/server_CvFyiNK6.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  return renderTemplate`<!-- ---
import Layout from '../layouts/Layout.astro';
import { fetchAnimesByQuery } from '../lib/api.js';

const { query } = Astro.request.url.search;
let animes = [];
let error = null;

if (query) {
  try {
    animes = await fetchAnimesByQuery(query);
  } catch (err) {
    error = 'Error al buscar animes';
  }
}
---

<Layout title="Resultados de búsqueda">
  <main class="max-w-4xl mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">Resultados de búsqueda para "{query}"</h2>
    {error ? (
      <p>{error}</p>
    ) : (
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {animes.map((anime) => (
          <div class="anime-card" key={anime.mal_id}>
            <a href={\`/anime/\${anime.mal_id}\`}>
              <img src={anime.images.jpg.large_image_url} alt={anime.title} class="w-full h-auto rounded-md shadow-md mb-2" />
              <h3 class="text-lg font-bold">{anime.title}</h3>
              <p class="text-sm">Score: {anime.score}</p>
            </a>
          </div>
        ))}
      </div>
    )}
  </main>
</Layout>

<style>
  .anime-card img {
    max-width: 100%;
    height: auto;
  }
</style> -->`;
}, "C:/Users/Adrian/Dev/Webs/anime-web/src/pages/search.astro", void 0);

const $$file = "C:/Users/Adrian/Dev/Webs/anime-web/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
