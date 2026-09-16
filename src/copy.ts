export type Lang = "es" | "en";

type Copy = {
  langGroup: string;
  marquee: string;
  lead: string;
  intro1: string;
  intro2: string;
  saturday: string;
  saturdayValue: string;
  place: string;
  bring: string;
  bringValue: string;
  register: string;
  badge: string;
  startsIn: string;
  countdown: { days: string; hours: string; minutes: string; seconds: string };
  agenda: string;
  program: { name: string; desc: string }[];
  agendaNote: string;
  openBlurb: string;
  whatIs: string;
  whatIsBody: string;
  faq: string;
  who: string;
  who1: string;
  who2: string;
  readings: string;
  readings1: string;
  readings2: string;
  readingSummaries: [string, string, string, string];
  sponsor: string;
  sponsorBody: string;
  writeUs: string;
  ctaHeadline: string;
  ctaSub: string;
  registerFree: string;
  footer: string;
  conduct: string;
  mlhEvent: string;
};

export const copy: Record<Lang, Copy> = {
  es: {
    langGroup: "Idioma",
    marquee: "10 DE OCTUBRE ◆ MADRID ◆ OPEN SOURCE ◆ ENTRADA GRATUITA ◆ ",
    lead: "Un Hack Day presencial y gratuito en Madrid para construir proyectos open source con inteligencia artificial abierta.",
    intro1:
      "Durante la tarde, los participantes se organizarán en equipos, probarán herramientas y modelos abiertos, desarrollarán una idea y la presentarán al final en una ronda de demos.",
    intro2:
      "No hace falta venir con equipo ni con una idea cerrada: los grupos se forman durante el evento. Está abierto a estudiantes, profesionales y cualquier persona con interés en open source, IA y desarrollo de software.",
    saturday: "Sábado",
    saturdayValue: "10 de octubre · 15:00–20:00",
    place: "Lugar",
    bring: "Qué llevar",
    bringValue: "Tu portátil y el cargador.",
    register: "Registrarme",
    badge: "Gratis · plazas limitadas",
    startsIn: "Empieza en",
    countdown: { days: "días", hours: "horas", minutes: "min", seconds: "seg" },
    agenda: "Agenda",
    program: [
      {
        name: "Equipos",
        desc: "Presentación de la consigna, de los participantes y sus intereses, y formación de equipos para trabajar durante la tarde.",
      },
      {
        name: "Construcción",
        desc: "El bloque principal de la tarde: desarrollo, experimentación y posibles contribuciones a repositorios abiertos.",
      },
      {
        name: "Demos",
        desc: "Ronda final para que cada equipo presente lo que construyó durante el evento.",
      },
    ],
    agendaNote:
      "El horario detallado de cada bloque se confirmará más cerca de la fecha.",
    openBlurb:
      "Evento abierto a profesionales y estudiantes. Entrada gratuita, con plazas limitadas por el aforo del espacio.",
    whatIs: "¿Qué es Hacktoberfest?",
    whatIsBody:
      "Hacktoberfest es una celebración global del open source que se realiza durante todo octubre. Este año, Hacktoberfest está organizado por Major League Hacking (MLH) y DEV, en alianza con DigitalOcean.",
    faq: "Ver preguntas frecuentes",
    who: "Quién lo organiza",
    who1:
      "Esta es la sede de Madrid de Hacktoberfest 2026. La organizamos Lara Díaz, Leonardo Apiwan, Santiago Persico y Federico Polesel, desarrolladores y organizadores de comunidad en Madrid.",
    who2:
      "El equipo tiene experiencia creando y acompañando comunidades técnicas como BeerJS, BurgerJS, Refactor Devs y WebConf, una conferencia gratuita de tecnología.",
    readings: "Lecturas recomendadas",
    readings1:
      "Una selección de lecturas para llegar al evento con contexto sobre agentes, modelos abiertos, herramientas locales y flujos de trabajo open source.",
    readings2:
      "No es obligatorio leerlas antes de venir, pero pueden servir para traer ideas, elegir herramientas o encontrar un punto de partida para el proyecto.",
    readingSummaries: [
      "El estándar abierto de Agent Skills y cómo se escribe un SKILL.md",
      "Desplegar e integrar modelos abiertos grandes",
      "Setup local para modelos de menos de 10B",
      "Montar y orquestar flujos con harnesses open source",
    ],
    sponsor: "¿Querés ser sponsor?",
    sponsorBody:
      "Buscamos empresas y comunidades que quieran apoyar este Hack Day con espacio, catering, premios o difusión. Si te interesa sumar tu marca al evento, escribinos.",
    writeUs: "Escribinos",
    ctaHeadline: "¿Te sumas?",
    ctaSub: "Ven a pasar una tarde construyendo proyectos open source.",
    registerFree: "Registrarme gratis",
    footer: "Hack Day oficial de Hacktoberfest 2026 · Madrid",
    conduct: "Código de conducta",
    mlhEvent: "Evento en MLH",
  },
  en: {
    langGroup: "Language",
    marquee: "OCTOBER 10 ◆ MADRID ◆ OPEN SOURCE ◆ FREE ENTRY ◆ ",
    lead: "A free in-person Hack Day in Madrid to build open source projects with open AI.",
    intro1:
      "Over the afternoon, participants will form teams, try open tools and models, develop an idea, and present it at the end in a demo round.",
    intro2:
      "You don't need to arrive with a team or a finished idea: groups form during the event. It's open to students, professionals, and anyone interested in open source, AI, and software development.",
    saturday: "Saturday",
    saturdayValue: "October 10 · 15:00–20:00",
    place: "Venue",
    bring: "What to bring",
    bringValue: "Your laptop and charger.",
    register: "Register",
    badge: "Free · limited seats",
    startsIn: "Starts in",
    countdown: { days: "days", hours: "hours", minutes: "min", seconds: "sec" },
    agenda: "Agenda",
    program: [
      {
        name: "Teams",
        desc: "Presentation of the brief, of the participants and their interests, and team formation for the afternoon.",
      },
      {
        name: "Build",
        desc: "The main block of the afternoon: development, experimentation, and possible contributions to open repositories.",
      },
      {
        name: "Demos",
        desc: "Final round for each team to present what they built during the event.",
      },
    ],
    agendaNote: "The detailed schedule for each block will be confirmed closer to the date.",
    openBlurb:
      "Open to professionals and students. Free entry, with limited seats based on venue capacity.",
    whatIs: "What is Hacktoberfest?",
    whatIsBody:
      "Hacktoberfest is a global open source celebration that runs through October. This year it is organized by Major League Hacking (MLH) and DEV, in partnership with DigitalOcean.",
    faq: "See frequently asked questions",
    who: "Who organizes it",
    who1:
      "This is the Madrid venue for Hacktoberfest 2026. It's organized by Lara Díaz, Leonardo Apiwan, Santiago Persico, and Federico Polesel, developers and community organizers in Madrid.",
    who2:
      "The team has experience creating and supporting tech communities such as BeerJS, BurgerJS, Refactor Devs, and WebConf, a free technology conference.",
    readings: "Recommended reading",
    readings1:
      "A selection of readings to arrive with context on agents, open models, local tools, and open source workflows.",
    readings2:
      "They're not required before you come, but they can help you bring ideas, pick tools, or find a starting point for the project.",
    readingSummaries: [
      "The open Agent Skills standard and how to write a SKILL.md",
      "Deploying and integrating large open models",
      "Local setup for models under 10B",
      "Set up and orchestrate flows with open source harnesses",
    ],
    sponsor: "Want to sponsor?",
    sponsorBody:
      "We're looking for companies and communities that want to support this Hack Day with space, catering, prizes, or promotion. If you'd like to add your brand to the event, write to us.",
    writeUs: "Write to us",
    ctaHeadline: "You in?",
    ctaSub: "Come spend an afternoon building open source projects.",
    registerFree: "Register for free",
    footer: "Official Hacktoberfest 2026 Hack Day · Madrid",
    conduct: "Code of conduct",
    mlhEvent: "Event on MLH",
  },
};
