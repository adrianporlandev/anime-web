/* empty css                                */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../chunks/astro/server_CvFyiNK6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DPw_rS8n.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

// /src/data/horario.js
const horario = [
    { dia: "Lunes", nombre: "Ao no Hako", hora: "16:00", tipo:"Manga" },
    { dia: "Miercoles", nombre: "Dan Da Dan", hora: "18:00", tipo:"Anime" },
    { dia: "Miercoles", nombre: "Rent a Girlfriend", hora: "16:00", tipo:"Manga" },
    { dia: "Jueves", nombre: "Ao no Hako", hora: "00:00", tipo:"Anime" },
    { dia: "Jueves", nombre: "One Piece", hora: "18:00", tipo:"Manga" },
    { dia: "Viernes", nombre: "Dragon Ball Daima", hora: "19:00", tipo:"Anime" },
    { dia: "Sabado", nombre: "Blue Lock", hora: "18:00", tipo:"Anime" },
    { dia: "Sabado", nombre: "Boku no Hero Academia", hora: "11:40", tipo:"Anime" },
    { dia: "Domingo", nombre: "One Piece", hora: "10:00", tipo:"Anime" },
    { dia: "Domingo", nombre: "Uzumaki", hora: "15:00", tipo:"Anime" },
    { dia: "Domingo", nombre: "MF Ghost", hora: "18:00", tipo:"Anime" },

  ];

const $$HorarioSemanl = createComponent(($$result, $$props, $$slots) => {
  const horarioPorDia = horario.reduce((acc, evento) => {
    if (!acc[evento.dia]) {
      acc[evento.dia] = [];
    }
    acc[evento.dia].push(evento);
    return acc;
  }, {});
  const ordenDias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
  const diasConEventos = ordenDias.filter((dia) => horarioPorDia[dia]);
  function getColor(tipo) {
    return tipo === "Anime" ? "bg-blue-800 text-blue-100" : "bg-green-800 text-green-100";
  }
  return renderTemplate`${maybeRenderHead()}<div class="max-w-6xl mx-auto p-4"> <h2 class="text-3xl font-bold text-center mb-8 text-gray-100">Horario Semanal de Anime y Manga</h2> <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"> ${diasConEventos.map((dia) => renderTemplate`<div class="bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-700"> <div class="bg-gray-700 text-gray-100 px-4 py-2 font-semibold">${dia}</div> <ul class="divide-y divide-gray-700"> ${horarioPorDia[dia].sort((a, b) => a.hora.localeCompare(b.hora)).map((evento) => renderTemplate`<li class="px-4 py-3 flex justify-between items-center hover:bg-gray-750 transition-colors duration-200"> <div> <p class="font-medium text-gray-100">${evento.nombre}</p> <p class="text-sm text-gray-400">${evento.hora}</p> </div> <span${addAttribute(`px-2 py-1 rounded-full text-xs font-medium ${getColor(evento.tipo)}`, "class")}> ${evento.tipo} </span> </li>`)} </ul> </div>`)} </div> </div>`;
}, "C:/Users/Adrian/Dev/Webs/anime-web/src/components/HorarioSemanl.astro", void 0);

const $$Horario = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Horario Semanal de Anime" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "HorarioSemanl", $$HorarioSemanl, {})} </main> ` })}`;
}, "C:/Users/Adrian/Dev/Webs/anime-web/src/pages/horario.astro", void 0);

const $$file = "C:/Users/Adrian/Dev/Webs/anime-web/src/pages/horario.astro";
const $$url = "/horario";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Horario,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
