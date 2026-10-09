import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Users,
  ClipboardList,
  TrendingUp,
  Handshake,
  Heart,
  ShieldCheck,
  Ear,
  Compass,
  Menu,
  X,
  Mail,
  Linkedin,
  ChevronDown,
} from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Teresa Nieto Ramírez · Senior Facility Manager | Liderazgo y gestión" },
      {
        name: "description",
        content:
          "Más de 20 años liderando operaciones, equipos y contratos complejos en Facility Services. Perfil ejecutivo, resultados y gestión de personas.",
      },
      { property: "og:title", content: "Teresa Nieto Ramírez · Senior Facility Manager | Liderazgo y gestión" },
      {
        property: "og:description",
        content:
          "Integro equipos para conseguir objetivos globales. Más de 20 años en operaciones multisite, gestión económica y relaciones laborales.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://pixel-perfect-render-3940.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-perfect-render-3940.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Teresa Nieto Ramírez",
          jobTitle: "Senior Facility Manager",
          description:
            "Más de 20 años liderando operaciones, equipos y contratos complejos en Facility Services.",
          url: "https://pixel-perfect-render-3940.lovable.app/",
          email: "mailto:terenira@hotmail.com",
          knowsAbout: ["Facility Management", "Gestión multisite", "Relaciones laborales", "Gestión de contratos"],
        }),
      },
    ],
  }),
  staticData: { sitemap: true },
  component: Landing,
});

const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contacto", href: "#contacto" },
];

const figures = [
  { value: "+20", label: "años de experiencia" },
  { value: "+300", label: "profesionales en estructuras gestionadas" },
  { value: "+7 M€", label: "cartera anual gestionada" },
  { value: "Multisite", label: "operaciones en entornos hospitalarios y organizaciones complejas" },
];

const skills = [
  {
    icon: Users,
    title: "Liderazgo de equipos",
    text: "Capacidad para generar confianza, cohesionar equipos y orientar a las personas hacia objetivos comunes.",
  },
  {
    icon: ClipboardList,
    title: "Gestión de proyectos y operaciones",
    text: "Experiencia coordinando simultáneamente personas, recursos, presupuesto, cliente y resultados.",
  },
  {
    icon: TrendingUp,
    title: "Gestión económica y orientación a negocio",
    text: "Experiencia en P&L, presupuestos, control de costes, productividad y cumplimiento de objetivos.",
  },
  {
    icon: Handshake,
    title: "Relaciones laborales y negociación",
    text: "Amplia experiencia en negociación colectiva, gestión sindical, resolución de conflictos y entornos laborales complejos.",
  },
  {
    icon: Heart,
    title: "Gestión de clientes",
    text: "Construcción de relaciones profesionales estables basadas en confianza, comunicación y cumplimiento.",
  },
  {
    icon: ShieldCheck,
    title: "Resiliencia",
    text: "«Crezco ante las adversidades.» Afronto situaciones complejas con serenidad, capacidad de análisis y orientación a soluciones.",
  },
  {
    icon: Ear,
    title: "Empatía y escucha",
    text: "Capacidad para comprender diferentes puntos de vista y generar entornos de confianza.",
  },
  {
    icon: Compass,
    title: "Toma de decisiones",
    text: "Capacidad para priorizar, decidir y actuar en situaciones de elevada exigencia operativa.",
  },
];

const pillars = [
  { title: "Personas", text: "Escucha, empatía y confianza." },
  { title: "Resultados", text: "Responsabilidad, eficiencia y orientación a objetivos." },
  { title: "Equipo", text: "Colaboración, comunicación y visión compartida." },
];


function Landing() {
  const [open, setOpen] = useState(false);
  const [verCifras, setVerCifras] = useState(false);
  const [habilidadAbierta, setHabilidadAbierta] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-6">
          <a href="#inicio" className="text-sm font-medium tracking-[0.18em] uppercase text-primary">
            Teresa Nieto
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Contactar
            </a>
          </nav>
          <button
            className="text-primary md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 border-t border-border bg-background px-5 py-4 md:hidden">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="pt-16">
        {/* HERO */}
        <section id="inicio" className="border-b border-border bg-sand">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-6 md:py-40">
            <p className="text-lg leading-tight font-medium uppercase tracking-[0.12em] text-accent sm:text-xl md:text-2xl">
              Senior Facility Manager
            </p>
            <h1 className="mt-3 max-w-4xl text-xl text-primary sm:text-2xl md:mt-4 md:text-4xl">
              Teresa Nieto Ramírez
            </h1>
            <p className="mt-8 max-w-3xl text-[1.6rem] font-light leading-snug text-ink sm:text-3xl md:mt-10 md:text-4xl">
              «Integro equipos para conseguir objetivos globales.»
            </p>
            <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
              Más de 20 años liderando operaciones, equipos y contratos complejos, combinando
              resultados, personas y visión de negocio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
              <a
                href="#sobre-mi"
                className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Conóceme
              </a>
              <a
                href="#contacto"
                className="rounded-full border border-primary/25 px-7 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
              >
                Contactar
              </a>
            </div>
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section id="sobre-mi" className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-24">
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
            <div>
              <p className="section-label">Perfil</p>
              <h2 className="mt-3 text-[1.75rem] leading-tight text-primary md:mt-4 md:text-5xl">
                Sobre mí
              </h2>
            </div>
            <div className="space-y-5 text-[0.95rem] leading-relaxed text-muted-foreground md:space-y-6 md:text-lg">
              <p>
                Soy una profesional tenaz, comprometida y con un alto grado de empatía. A lo largo
                de mi trayectoria he aprendido que los mejores resultados se consiguen cuando las
                personas entienden el objetivo, confían en quien lidera y sienten que forman parte
                del proyecto.
              </p>
              <p>
                Me caracterizo por afrontar los retos con determinación, mantener la calma en
                entornos complejos y buscar soluciones incluso en situaciones adversas.
              </p>
              <p>
                Mi forma de liderar combina exigencia, cercanía, escucha activa y orientación a
                resultados.
              </p>
              <blockquote className="border-l-2 border-accent pl-5 text-xl font-light leading-snug text-primary md:pl-6 md:text-3xl">
                «Creo en un liderazgo capaz de alinear personas, negocio y objetivos.»
              </blockquote>
            </div>
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section id="experiencia" className="border-y border-border bg-sand">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-32">
            <p className="section-label">Impacto</p>
            <h2 className="mt-3 max-w-2xl text-[1.75rem] leading-tight text-primary md:mt-4 md:text-5xl">
              Experiencia que se traduce en resultados
            </h2>

            <button
              type="button"
              onClick={() => setVerCifras((v) => !v)}
              aria-expanded={verCifras}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-primary shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-lg hover:shadow-primary/10 md:mt-10"
            >
              {verCifras ? "Ocultar cifras" : "Ver cifras de impacto"}
              <ChevronDown
                className={`size-4 transition-transform ${verCifras ? "rotate-180" : ""}`}
                strokeWidth={1.5}
              />
            </button>

            {verCifras && (
              <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4 md:mt-10">
                {figures.map((f) => (
                  <div key={f.label} className="bg-background p-6 md:p-8">
                    <p className="font-display text-3xl text-primary md:text-5xl">{f.value}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.label}</p>
                  </div>
                ))}
              </div>
            )}

            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground md:mt-10 md:text-base">
              Experiencia en la gestión integral de operaciones multisite, cuentas de explotación,
              equipos numerosos, relaciones laborales, clientes estratégicos, proveedores,
              renovaciones contractuales y procesos de oferta.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
              <a
                href="mailto:terenira@hotmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-primary shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-lg hover:shadow-primary/10"
              >
                <Mail className="size-4" strokeWidth={1.5} /> Enviar email
              </a>
            </div>
          </div>
        </section>

        {/* HABILIDADES */}
        <section id="habilidades" className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-32">
          <p className="section-label">Habilidades</p>
          <h2 className="mt-3 text-[1.75rem] leading-tight text-primary md:mt-4 md:text-5xl">
            Lo que aporto
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm md:mt-14">
            {skills.map((s, i) => {
              const abierta = habilidadAbierta === i;
              return (
                <div key={s.title} className={i === 0 ? "" : "border-t border-border"}>
                  <button
                    type="button"
                    aria-expanded={abierta}
                    aria-controls={`habilidad-${i}`}
                    onClick={() => setHabilidadAbierta(abierta ? -1 : i)}
                    className="group flex w-full items-center gap-4 px-5 py-5 text-left transition-colors md:px-8 md:py-6"
                  >
                    <s.icon
                      className="size-5 shrink-0 text-accent transition-colors group-hover:text-primary"
                      strokeWidth={1.5}
                    />
                    <span className="flex-1 text-base leading-snug text-primary transition-colors group-hover:text-accent md:text-lg">
                      {s.title}
                    </span>
                    <ChevronDown
                      className={`size-4 shrink-0 text-primary/45 transition-transform duration-300 ease-out ${
                        abierta ? "rotate-180" : ""
                      }`}
                      strokeWidth={1.5}
                    />
                  </button>
                  <div
                    id={`habilidad-${i}`}
                    aria-hidden={!abierta}
                    className={`grid transition-all duration-300 ease-out ${
                      abierta ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl px-5 pb-6 pl-14 text-sm leading-relaxed text-muted-foreground md:px-8 md:pb-8 md:pl-[4.25rem]">
                        {s.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* LIDERAZGO */}
        <section className="border-y border-border bg-sand">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-32">
            <p className="section-label font-semibold">
              Liderazgo
            </p>
            <h2 className="mt-3 text-[1.75rem] leading-tight text-primary md:mt-4 md:text-5xl">
              Mi forma de liderar
            </h2>
            <p className="mt-6 max-w-3xl text-lg font-light leading-snug text-primary/80 md:mt-8 md:text-2xl">
              Escuchar, generar confianza, asumir responsabilidades y conseguir que diferentes
              personas trabajen alineadas hacia un objetivo común.
            </p>
            <div className="mt-10 rounded-2xl bg-card p-6 shadow-sm md:mt-14 md:p-10">
              <div className="grid gap-8 sm:grid-cols-3 md:gap-10">
                {pillars.map((p) => (
                  <div key={p.title} className="border-t border-primary/20 pt-5 md:pt-6">
                    <h3 className="text-lg font-bold text-primary md:text-xl">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-primary/70">{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRAYECTORIA */}
        <section className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-32">
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
            <div>
              <p className="section-label">Trayectoria</p>
              <h2 className="mt-3 text-[1.75rem] leading-tight text-primary md:mt-4 md:text-5xl">
                Una trayectoria construida sobre la gestión
              </h2>
            </div>
            <div className="space-y-5 text-[0.95rem] leading-relaxed text-muted-foreground md:space-y-6 md:text-lg">
              <p>
                Más de dos décadas desarrollando mi carrera en Ferrovial Servicios / Serveo,
                gestionando contratos para grandes organizaciones públicas y privadas y asumiendo
                progresivamente mayores niveles de responsabilidad.
              </p>
              <p>
                Especializada en Facility Services, operaciones multisite, dirección de personas,
                gestión económica, relaciones laborales y clientes estratégicos.
              </p>
              <p>
                Mi experiencia se ha desarrollado especialmente en entornos hospitalarios y
                organizaciones complejas, donde calidad, eficiencia, personas y continuidad del
                servicio deben funcionar de manera coordinada.
              </p>
              <p className="border-t border-border pt-5 text-sm text-muted-foreground/80 md:pt-6">
                Formación en Relaciones Laborales — Universidad Complutense de Madrid
              </p>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="border-t border-border bg-sand">
          <div className="mx-auto max-w-6xl px-5 py-16 text-center md:px-6 md:py-32">
            <p className="section-label">Contacto</p>
            <h2 className="mt-3 text-2xl font-light text-primary/90 md:mt-4 md:text-4xl">
              Hablemos
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
              Encantada de intercambiar impresiones sobre proyectos y retos de gestión.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 text-[0.95rem] text-primary md:mt-10 md:text-base">
              <a
                href="mailto:terenira@hotmail.com"
                className="flex items-center gap-2 hover:text-accent"
              >
                <Mail className="size-4" strokeWidth={1.5} /> terenira@hotmail.com
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:mt-10">
              <a
                href="mailto:terenira@hotmail.com"
                className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Enviar email
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-primary/25 px-7 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
              >
                <Linkedin className="size-4" strokeWidth={1.5} /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <p className="px-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Teresa Nieto Ramírez · Senior Facility Manager
        </p>
      </footer>

      <a
        href="#contacto"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-opacity hover:opacity-90 md:hidden"
      >
        Contactar
      </a>
    </div>
  );
}
