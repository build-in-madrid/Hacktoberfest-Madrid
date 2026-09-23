# Hacktoberfest Hack Day Madrid 2026

Landing page del **Hacktoberfest Hack Day Madrid 2026**, un evento presencial y gratuito dedicado al open source, la inteligencia artificial abierta y la construcción de proyectos en comunidad.

## Desarrollo

Sitio estático con Astro, plantillas HTML nativas y TypeScript en el navegador para el selector ES/EN y la cuenta regresiva. La migración desde Next.js conserva el diseño, los textos y los enlaces del evento, sin React ni hidratación.

Requisitos: Node.js de versión par >=22.12.0 y pnpm 10.15.1.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

El servidor local usa `http://localhost:3000`. También se puede iniciar con `bash dev.sh`.

```sh
pnpm check
pnpm build
pnpm start
```

`pnpm build` genera el sitio estático en `dist/`. `pnpm start` sirve ese resultado como vista previa local, no como servidor Node de producción. Las fuentes se sirven desde los assets del propio sitio.

En Vercel, usar el preset **Astro**, el comando de build `pnpm build` y el directorio de salida `dist`. Si el proyecto todavía está fijado a Next.js, actualizar esos ajustes antes de desplegar. `VERCEL_URL` define el origen de la imagen Open Graph durante el build; sin esa variable se mantiene `http://localhost:3000/banner.jpg`.

## Sobre el evento

**Hacktoberfest Hack Day Madrid** es una tarde de trabajo práctico donde los participantes se organizarán en equipos, probarán herramientas y modelos abiertos, desarrollarán una idea y la presentarán al final en una ronda de demos.

No hace falta venir con equipo ni con una idea cerrada. La idea es conocer gente, experimentar, aprender y construir algo juntos.

## Programa

- **Equipos:** presentación de asistentes, intereses y formación de grupos.
- **Herramientas:** exploración de modelos abiertos, frameworks de agentes y herramientas elegidas por cada equipo.
- **Construcción:** desarrollo de proyectos y experimentación.
- **Demos:** presentación final de lo construido durante la tarde.

## Para quién es

El evento está abierto a profesionales y estudiantes con interés en:

- Open source
- Inteligencia artificial abierta
- Desarrollo de software
- Herramientas para agentes
- Modelos open-weight
- Comunidad tech

## Organizadores

Organizado por Lara Díaz, Leo Apiwan, Santiago Persico y Federico Polesel, desarrolladores y organizadores de comunidad radicados en Madrid.

## Enlaces

- Web: https://hacktoberfest-madrid.vercel.app/
- Registro: https://events.mlh.com/events/14972-hacktoberfest-hack-day-madrid
- Código de conducta: https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md
- Community values: https://www.mlh.com/community-values
