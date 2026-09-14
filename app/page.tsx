"use client";

import Image from "next/image";
import { Page, Section, ContentGrid, Heading, Text, Label, Badge } from "darkroom-ui";

const REGISTER_URL = "https://events.mlh.com/events/14972-hacktoberfest-hack-day-madrid";
const CALENDAR_URL =
  "https://www.google.com/calendar/render?action=TEMPLATE&dates=20261010T140000Z%2F20261010T190000Z&details=See+event%3A+https%3A%2F%2Fevents.mlh.com%2Fevents%2F14972-hacktoberfest-hack-day-madrid&text=Hacktoberfest+Hack+Day+Madrid";

const PROGRAM = [
  {
    name: "Equipos",
    desc: "Presentación de los asistentes, intereses de cada uno y formación de equipos.",
  },
  {
    name: "Herramientas",
    desc: "Exploración de modelos abiertos, frameworks de agentes y las herramientas que cada equipo elija.",
  },
  {
    name: "Construir",
    desc: "El bloque principal de la tarde: desarrollo, contribuciones a repositorios abiertos y experimentación.",
  },
  {
    name: "Demos",
    desc: "Ronda final en la que cada equipo presenta el proyecto que ha construido.",
  },
];

const HOSTS = [
  { name: "Lara Díaz", hash: "80eb12b7b89cc1e893a7e2ca291afd14" },
  { name: "Leo Apiwan", hash: "23fcd8c98117081a3e6610e4caae7a67" },
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

export default function HomePage() {
  return (
    <Page>
      <header className="topbar">
        <Label>Hacktoberfest · Hack Day · Madrid</Label>
        <span className="date">10.10.2026</span>
      </header>

      <Image
        src="/banner.png"
        alt="Hacktoberfest Madrid 2026 — Open Source AI Hack Day"
        width={1774}
        height={887}
        priority
        style={{ width: "100%", height: "auto", display: "block" }}
      />

      <Section spacing="lg" containerSize="lg" className="section-hairline-bottom">
        <ContentGrid columns={2}>
          <div style={{ maxWidth: "22em" }}>
            <p
              className="display-lead"
              style={{ fontSize: "clamp(30px,3.6vw,44px)", lineHeight: 1.2, marginBottom: 24 }}
            >
              Un Hack Day presencial y gratuito dedicado al open source y a la
              inteligencia artificial abierta, en Madrid.
            </p>
            <Text size="body" style={{ marginBottom: 16 }}>
              Durante la tarde los asistentes trabajan en equipos, exploran
              herramientas y modelos abiertos, desarrollan un proyecto y lo
              presentan en una ronda final de demos.
            </Text>
            <Text size="body">
              No es necesario llegar con equipo ni con una idea definida: la
              formación de grupos es parte del programa. Está abierto a
              profesionales y estudiantes con interés en open source, IA y
              desarrollo.
            </Text>
          </div>

          <div>
            <div className="fact-row">
              <Label>Sábado</Label>
              <span className="value value-lead">10 de octubre, 15:00–20:00</span>
            </div>
            <div className="fact-row">
              <Label>Lugar</Label>
              <span className="value">
                Centro de Negocios Melior
                <br />
                <Text as="span" size="caption">
                  Diego de León 47, Madrid
                </Text>
              </span>
            </div>
            <div className="fact-row">
              <Label>Qué llevar</Label>
              <span className="value">Tu portátil y el cargador</span>
            </div>

            <div className="cta-row">
              <a href={REGISTER_URL} target="_blank" rel="noopener" className="btn-primary accent-btn">
                Registrarme
              </a>
              <Badge variant="stamp" className="accent-badge">
                Gratis · plazas limitadas
              </Badge>
            </div>
            <a href={CALENDAR_URL} target="_blank" rel="noopener" className="link-muted">
              Añadir al calendario
            </a>
          </div>
        </ContentGrid>
      </Section>

      <Section spacing="md" containerSize="lg">
        <div style={{ display: "flex", alignItems: "baseline", gap: 20, marginBottom: 8 }}>
          <Heading level={3}>Agenda de la tarde</Heading>
          <span className="tag">Programa</span>
        </div>
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
          Abierto a profesionales y estudiantes. Entrada gratuita, plazas
          limitadas por el aforo del espacio.
        </p>
      </Section>

      <Section spacing="md" containerSize="lg" className="section-hairline-top">
        <ContentGrid columns={2}>
          <div style={{ maxWidth: "26em" }}>
            <Heading level={3} style={{ marginBottom: 20 }}>
              Quién lo organiza
            </Heading>
            <Text size="body" style={{ marginBottom: 14 }}>
              Lara Díaz, Leo Apiwan, Santiago Persico y Federico Polesel,
              desarrolladores y organizadores de comunidad radicados en Madrid.
            </Text>
            <Text size="body">
              Con experiencia previa construyendo comunidad técnica en
              Argentina: BeerJS, BurgerJS, Refactor Devs y WebConf, una
              conferencia de tecnología gratuita.
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
        <div style={{ display: "flex", alignItems: "baseline", gap: 20, marginBottom: 28 }}>
          <Heading level={3}>Lecturas recomendadas</Heading>
          <span className="tag">Material de referencia</span>
        </div>
        {READING_LIST.map((item, i) => (
          <a key={item.href} href={item.href} target="_blank" rel="noopener" className="reading-row">
            <span className="num">{String(i + 1).padStart(2, "0")}</span>
            <span className="title">{item.title}</span>
            <span className="summary">{item.summary}</span>
          </a>
        ))}
      </Section>

      <Section spacing="md" containerSize="lg">
        <div className="closing-row">
          <p className="display-lead" style={{ fontSize: "clamp(30px,4vw,52px)", lineHeight: 1.1 }}>
            Madrid, 10 de octubre de 2026
          </p>
          <a href={REGISTER_URL} target="_blank" rel="noopener" className="btn-primary accent-btn">
            Registrarme gratis
          </a>
        </div>
      </Section>

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
