"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Page, Section, ContentGrid, Heading, Text, Label, Badge } from "darkroom-ui";

const REGISTER_URL = "https://events.mlh.com/events/14972-hacktoberfest-hack-day-madrid";
const EVENT_DATE = "2026-10-10T15:00:00+02:00";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Centro+de+Negocios+Melior%2C+Diego+de+Le%C3%B3n+47%2C+Madrid";

const PROGRAM = [
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
];

const HOSTS = [
  { name: "Lara Díaz", hash: "80eb12b7b89cc1e893a7e2ca291afd14" },
  { name: "Leonardo Apiwan", hash: "23fcd8c98117081a3e6610e4caae7a67" },
  { name: "Santiago Persico", hash: "0eea5a8e361b0452cc298a11734250ff" },
  {
    name: "Federico Polesel",
    hash: "3a7c2221033d1406bc0e0cb7b3de3f3ea8d34c587f6548a3b6ace420a11c35dc",
  },
];

const READING_LIST = [
  {
    href: "https://dev.to/loc_carrre_0d798813c662/agent-skills-explained-what-they-are-what-they-arent-and-how-to-use-them-bf9",
    title: "Agent Skills Explained",
    summary: "El estándar abierto de Agent Skills y cómo se escribe un SKILL.md",
  },
  {
    href: "https://dev.to/sbt112321321/beyond-the-black-box-a-developers-guide-to-open-weight-llm-api-integration-1ea6",
    title: "Integrar APIs de LLMs abiertos",
    summary: "Desplegar e integrar modelos abiertos grandes",
  },
  {
    href: "https://dev.to/purpledoubled/how-to-run-googles-gemma-4-locally-with-ollama-all-4-model-sizes-compared-2pbh",
    title: "Gemma 4 en local con Ollama",
    summary: "Setup local para modelos de menos de 10B",
  },
  {
    href: "https://dev.to/truongpx396/hermes-agent-the-self-improving-agent-framework-and-how-it-compares-to-openclaw-goclaw-22mc",
    title: "Hermes Agent: guía práctica",
    summary: "Montar y orquestar flujos con harnesses open source",
  },
];

function useCountdown(target: string) {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const targetMs = new Date(target).getTime();
    const tick = () => setRemaining(Math.max(0, targetMs - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  if (remaining === null) return null;
  const s = Math.floor(remaining / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

function Marquee() {
  const text = "10 DE OCTUBRE ◆ MADRID ◆ OPEN SOURCE ◆ ENTRADA GRATUITA ◆ ".repeat(4);
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  const countdown = useCountdown(EVENT_DATE);

  return (
    <Page>
      <header className="topbar">
        <Label>Hacktoberfest · Hack Day · Madrid</Label>
        <span className="date">10.10.2026</span>
      </header>

      <Image
        src="/banner.png"
        alt="Hacktoberfest Madrid 2026 — Open Source AI Hack Day"
        width={3840}
        height={1600}
        priority
        style={{ width: "100%", height: "auto", display: "block" }}
      />

      <Section spacing="lg" containerSize="lg" className="section-hairline-bottom">
        <ContentGrid columns={2}>
          <div>
            <p
              className="display-lead"
              style={{ fontSize: "clamp(30px,3.6vw,44px)", lineHeight: 1.2, marginBottom: 24 }}
            >
              Un Hack Day presencial y gratuito en Madrid para construir
              proyectos open source con inteligencia artificial abierta.
            </p>
            <Text size="body" style={{ marginBottom: 16 }}>
              Durante la tarde, los participantes se organizarán en equipos,
              probarán herramientas y modelos abiertos, desarrollarán una idea
              y la presentarán al final en una ronda de demos.
            </Text>
            <Text size="body">
              No hace falta venir con equipo ni con una idea cerrada: los
              grupos se forman durante el evento. Está abierto a estudiantes,
              profesionales y cualquier persona con interés en open source, IA
              y desarrollo de software.
            </Text>
          </div>

          <div>
            <div className="fact-row">
              <Label>Sábado</Label>
              <span className="value value-lead">10 de octubre · 15:00–20:00</span>
            </div>
            <div className="fact-row">
              <Label>Lugar</Label>
              <a href={MAPS_URL} target="_blank" rel="noopener" className="value map-link">
                Centro de Negocios Melior
                <br />
                <Text as="span" size="caption">
                  Diego de León 47, Madrid
                </Text>
              </a>
            </div>
            <div className="fact-row">
              <Label>Qué llevar</Label>
              <span className="value">Tu portátil y el cargador.</span>
            </div>

            <div className="cta-row">
              <a href={REGISTER_URL} target="_blank" rel="noopener" className="btn-primary accent-btn">
                Registrarme
              </a>
              <Badge variant="stamp" className="accent-badge">
                Gratis · plazas limitadas
              </Badge>
            </div>
            <div className="countdown-row">
              <Label>Empieza en</Label>
              <div className="countdown">
                {[
                  { label: "días", value: countdown?.days },
                  { label: "horas", value: countdown?.hours },
                  { label: "min", value: countdown?.minutes },
                  { label: "seg", value: countdown?.seconds },
                ].map((u) => (
                  <span className="countdown-unit" key={u.label}>
                    <span className="num">
                      {u.value !== undefined && u.value !== null ? String(u.value).padStart(2, "0") : "--"}
                    </span>
                    <span className="unit-label">{u.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ContentGrid>
      </Section>

      <Section spacing="md" containerSize="lg">
        <Heading level={3} style={{ marginBottom: 8 }}>Agenda</Heading>
        {PROGRAM.map((item) => (
          <div className="program-row" key={item.name}>
            <span className="name">{item.name}</span>
            <Text as="span" size="body" className="desc">
              {item.desc}
            </Text>
          </div>
        ))}
        <Text size="caption" style={{ marginTop: 18 }}>
          El horario detallado de cada bloque se confirmará más cerca de la
          fecha.
        </Text>
      </Section>

      <Section spacing="md" containerSize="lg">
        <p
          className="display-lead"
          style={{ fontSize: "clamp(28px,3.4vw,42px)", lineHeight: 1.25, maxWidth: "26em" }}
        >
          Evento abierto a profesionales y estudiantes. Entrada gratuita, con
          plazas limitadas por el aforo del espacio.
        </p>
      </Section>

      <Section spacing="md" containerSize="lg" className="section-hairline-top">
        <Heading level={3} style={{ marginBottom: 14 }}>
          ¿Qué es Hacktoberfest?
        </Heading>
        <Text size="body" style={{ marginBottom: 20, maxWidth: "42em" }}>
          Hacktoberfest es una celebración global del open source que se
          realiza durante todo octubre. Este año, Hacktoberfest está
          organizado por Major League Hacking (MLH) y DEV, en alianza con
          DigitalOcean.
        </Text>
        <a
          href="https://hacktoberfest.com/questions/"
          target="_blank"
          rel="noopener"
          className="btn-primary btn-outline"
        >
          Ver preguntas frecuentes
        </a>
      </Section>

      <Marquee />

      <Section spacing="md" containerSize="lg">
        <ContentGrid columns={2}>
          <div style={{ maxWidth: "26em" }}>
            <Heading level={3} style={{ marginBottom: 20 }}>
              Quién lo organiza
            </Heading>
            <Text size="body" style={{ marginBottom: 14 }}>
              Esta es la sede de Madrid de Hacktoberfest 2026. La organizamos
              Lara Díaz, Leonardo Apiwan, Santiago Persico y Federico
              Polesel, desarrolladores y organizadores de comunidad en
              Madrid.
            </Text>
            <Text size="body">
              El equipo tiene experiencia creando y acompañando comunidades
              técnicas como BeerJS, BurgerJS, Refactor Devs y WebConf, una
              conferencia gratuita de tecnología.
            </Text>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {HOSTS.map((host) => (
              <div className="host-row" key={host.name}>
                <img src={`https://gravatar.com/avatar/${host.hash}?d=retro&s=200`} alt={host.name} />
                <span>{host.name}</span>
              </div>
            ))}
          </div>
        </ContentGrid>
      </Section>

      <Section spacing="md" containerSize="lg" className="section-hairline-top">
        <Heading level={3} style={{ marginBottom: 28 }}>Lecturas recomendadas</Heading>
        <Text size="body" style={{ marginBottom: 14, maxWidth: "42em" }}>
          Una selección de lecturas para llegar al evento con contexto sobre
          agentes, modelos abiertos, herramientas locales y flujos de trabajo
          open source.
        </Text>
        <Text size="body" style={{ marginBottom: 28, maxWidth: "42em" }}>
          No es obligatorio leerlas antes de venir, pero pueden servir para
          traer ideas, elegir herramientas o encontrar un punto de partida
          para el proyecto.
        </Text>
        {READING_LIST.map((item, i) => (
          <a key={item.href} href={item.href} target="_blank" rel="noopener" className="reading-row">
            <span className="num">{String(i + 1).padStart(2, "0")}</span>
            <span className="title">{item.title}</span>
            <span className="summary">{item.summary}</span>
          </a>
        ))}
      </Section>

      <Section spacing="md" containerSize="lg" className="section-hairline-top">
        <Heading level={3} style={{ marginBottom: 14 }}>
          ¿Querés ser sponsor?
        </Heading>
        <Text size="body" style={{ marginBottom: 20, maxWidth: "42em" }}>
          Buscamos empresas y comunidades que quieran apoyar este Hack Day
          con espacio, catering, premios o difusión. Si te interesa sumar tu
          marca al evento, escribinos.
        </Text>
        <a
          href="mailto:hello@laradiaz.dev?subject=Sponsor%20Hacktoberfest%20Madrid%202026"
          className="btn-primary btn-outline"
        >
          Escribinos
        </a>
      </Section>

      <div className="cta-band">
        <div className="cta-band-inner">
          <p className="cta-headline">¿Te sumas?</p>
          <p className="cta-sub">
            Ven a pasar una tarde construyendo proyectos open source.
          </p>
          <div className="closing-row">
            <a href={REGISTER_URL} target="_blank" rel="noopener" className="btn-primary invert-btn">
              Registrarme gratis
            </a>
          </div>
        </div>
      </div>

      <footer className="section-hairline-top">
        <div className="footer-row" style={{ maxWidth: 1152, margin: "0 auto", padding: "20px 28px 48px" }}>
          <span>Hack Day oficial de Hacktoberfest 2026 · Madrid</span>
          <span className="footer-links">
            <a href="https://www.mlh.com/community-values" target="_blank" rel="noopener">
              Community values
            </a>
            <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener">
              Código de conducta
            </a>
            <a href="https://events.mlh.com/events/14972-hacktoberfest-hack-day-madrid" target="_blank" rel="noopener">
              Evento en MLH
            </a>
          </span>
        </div>
      </footer>
    </Page>
  );
}
