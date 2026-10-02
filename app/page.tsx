"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Page, Section, ContentGrid, Heading, Text, Label, Badge } from "darkroom-ui";
import { copy, type Lang } from "./copy";

const REGISTER_URL = "https://events.mlh.com/events/14972-hacktoberfest-hack-day-madrid";
const EVENT_DATE = "2026-10-10T15:00:00+02:00";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Centro+de+Negocios+Melior%2C+Diego+de+Le%C3%B3n+47%2C+Madrid";
const LANG_KEY = "hacktoberfest-lang";

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
  },
  {
    href: "https://dev.to/sbt112321321/beyond-the-black-box-a-developers-guide-to-open-weight-llm-api-integration-1ea6",
    title: "Integrar APIs de LLMs abiertos",
  },
  {
    href: "https://dev.to/purpledoubled/how-to-run-googles-gemma-4-locally-with-ollama-all-4-model-sizes-compared-2pbh",
    title: "Gemma 4 en local con Ollama",
  },
  {
    href: "https://dev.to/truongpx396/hermes-agent-the-self-improving-agent-framework-and-how-it-compares-to-openclaw-goclaw-22mc",
    title: "Hermes Agent: guía práctica",
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

function Marquee({ text }: { text: string }) {
  const loop = text.repeat(4);
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <span>{loop}</span>
        <span>{loop}</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  const countdown = useCountdown(EVENT_DATE);
  const [lang, setLang] = useState<Lang>("es");
  const t = copy[lang];

  useEffect(() => {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "es") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function setAndPersist(next: Lang) {
    setLang(next);
    localStorage.setItem(LANG_KEY, next);
  }

  return (
    <Page>
      <header className="topbar">
        <Label>Hacktoberfest · Hack Day · Madrid</Label>
        <div className="topbar-end">
          <span className="date">10.10.2026</span>
          <div className="lang-toggle" role="group" aria-label={t.langGroup}>
            <button
              type="button"
              aria-pressed={lang === "en"}
              onClick={() => setAndPersist("en")}
            >
              EN
            </button>
            <button
              type="button"
              aria-pressed={lang === "es"}
              onClick={() => setAndPersist("es")}
            >
              ES
            </button>
          </div>
        </div>
      </header>

      <div className="hero">
        <Image
          src="/banner.jpg"
          alt="Hacktoberfest Madrid 2026 — Open Source AI Hack Day"
          width={3840}
          height={1600}
          unoptimized
          priority
        />
      </div>

      <Section spacing="lg" containerSize="lg" className="section-hairline-bottom">
        <ContentGrid columns={2}>
          <div>
            <p
              className="display-lead"
              style={{ fontSize: "clamp(30px,3.6vw,44px)", lineHeight: 1.2, marginBottom: 24 }}
            >
              {t.lead}
            </p>
            <Text size="body" style={{ marginBottom: 16 }}>
              {t.intro1}
            </Text>
            <Text size="body">{t.intro2}</Text>
          </div>

          <div>
            <div className="fact-row">
              <Label>{t.saturday}</Label>
              <span className="value value-lead">{t.saturdayValue}</span>
            </div>
            <div className="fact-row">
              <Label>{t.place}</Label>
              <a href={MAPS_URL} target="_blank" rel="noopener" className="value map-link">
                Centro de Negocios Melior
                <br />
                <Text as="span" size="caption">
                  Diego de León 47, Madrid
                </Text>
              </a>
            </div>
            <div className="fact-row">
              <Label>{t.bring}</Label>
              <span className="value">{t.bringValue}</span>
            </div>

            <div className="cta-row">
              <a href={REGISTER_URL} target="_blank" rel="noopener" className="btn-primary accent-btn">
                {t.register}
              </a>
              <Badge variant="stamp" className="accent-badge">
                {t.badge}
              </Badge>
            </div>
            <div className="countdown-row">
              <Label>{t.startsIn}</Label>
              <div className="countdown">
                {[
                  { label: t.countdown.days, value: countdown?.days },
                  { label: t.countdown.hours, value: countdown?.hours },
                  { label: t.countdown.minutes, value: countdown?.minutes },
                  { label: t.countdown.seconds, value: countdown?.seconds },
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
        <Heading level={3} style={{ marginBottom: 8 }}>
          {t.agenda}
        </Heading>
        {t.program.map((item) => (
          <div className="program-row" key={item.name}>
            <span className="name">{item.name}</span>
            <Text as="span" size="body" className="desc">
              {item.desc}
            </Text>
          </div>
        ))}
        <Text size="caption" style={{ marginTop: 18 }}>
          {t.agendaNote}
        </Text>
      </Section>

      <Section spacing="md" containerSize="lg">
        <p
          className="display-lead"
          style={{ fontSize: "clamp(28px,3.4vw,42px)", lineHeight: 1.25, maxWidth: "26em" }}
        >
          {t.openBlurb}
        </p>
      </Section>

      <Section spacing="md" containerSize="lg" className="section-hairline-top">
        <Heading level={3} style={{ marginBottom: 14 }}>
          {t.whatIs}
        </Heading>
        <Text size="body" style={{ marginBottom: 20, maxWidth: "42em" }}>
          {t.whatIsBody}
        </Text>
        <a
          href="https://hacktoberfest.com/questions/"
          target="_blank"
          rel="noopener"
          className="btn-primary btn-outline"
        >
          {t.faq}
        </a>
      </Section>

      <Marquee text={t.marquee} />

      <Section spacing="md" containerSize="lg">
        <ContentGrid columns={2}>
          <div style={{ maxWidth: "26em" }}>
            <Heading level={3} style={{ marginBottom: 20 }}>
              {t.who}
            </Heading>
            <Text size="body" style={{ marginBottom: 14 }}>
              {t.who1}
            </Text>
            <Text size="body">{t.who2}</Text>
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
        <Heading level={3} style={{ marginBottom: 28 }}>
          {t.readings}
        </Heading>
        <Text size="body" style={{ marginBottom: 14, maxWidth: "42em" }}>
          {t.readings1}
        </Text>
        <Text size="body" style={{ marginBottom: 28, maxWidth: "42em" }}>
          {t.readings2}
        </Text>
        {READING_LIST.map((item, i) => (
          <a key={item.href} href={item.href} target="_blank" rel="noopener" className="reading-row">
            <span className="num">{String(i + 1).padStart(2, "0")}</span>
            <span className="title">{item.title}</span>
            <span className="summary">{t.readingSummaries[i]}</span>
          </a>
        ))}
      </Section>

      <Section spacing="md" containerSize="lg" className="section-hairline-top">
        <Heading level={3} style={{ marginBottom: 14 }}>
          {t.sponsor}
        </Heading>
        <Text size="body" style={{ marginBottom: 20, maxWidth: "42em" }}>
          {t.sponsorBody}
        </Text>
        <a
          href="mailto:hello@laradiaz.dev?subject=Sponsor%20Hacktoberfest%20Madrid%202026"
          className="btn-primary btn-outline"
        >
          {t.writeUs}
        </a>
      </Section>

      <div className="cta-band">
        <div className="cta-band-inner">
          <p className="cta-headline">{t.ctaHeadline}</p>
          <p className="cta-sub">{t.ctaSub}</p>
          <div className="closing-row">
            <a href={REGISTER_URL} target="_blank" rel="noopener" className="btn-primary invert-btn">
              {t.registerFree}
            </a>
          </div>
        </div>
      </div>

      <footer className="section-hairline-top">
        <div className="footer-row" style={{ maxWidth: 1152, margin: "0 auto", padding: "20px 28px 48px" }}>
          <span>{t.footer}</span>
          <span className="footer-links">
            <a href="https://www.mlh.com/community-values" target="_blank" rel="noopener">
              Community values
            </a>
            <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener">
              {t.conduct}
            </a>
            <a href="https://events.mlh.com/events/14972-hacktoberfest-hack-day-madrid" target="_blank" rel="noopener">
              {t.mlhEvent}
            </a>
          </span>
        </div>
      </footer>
    </Page>
  );
}
