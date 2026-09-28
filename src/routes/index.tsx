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
  Phone,
  Mail,
  Linkedin,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Teresa Nieto Ramírez — Senior Facility Manager" },
      {
        name: "description",
        content:
          "Más de 20 años liderando operaciones, equipos y contratos complejos en Facility Services. Perfil ejecutivo, resultados y gestión de personas.",
      },
      { property: "og:title", content: "Teresa Nieto Ramírez — Senior Facility Manager" },
      {
        property: "og:description",
        content:
          "Integro equipos para conseguir objetivos globales. Más de 20 años en operaciones multisite, gestión económica y relaciones laborales.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
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
  { value: "≈ 5 M€", label: "volumen anual gestionado" },
  { value: "+200", label: "profesionales" },
  { value: "4", label: "centros gestionados simultáneamente" },
  { value: "+300", label: "profesionales en estructuras gestionadas" },
  { value: "+7 M€", label: "cartera anual gestionada" },
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

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
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
          <nav className="flex flex-col gap-1 border-t border-border bg-background px-6 py-4 md:hidden">
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
          <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
            <p className="section-label">Senior Facility Manager</p>
            <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] text-primary md:text-7xl">
              Teresa Nieto Ramírez
            </h1>
            <p className="mt-8 max-w-3xl text-2xl italic leading-snug text-ink md:text-4xl font-display">
              «Integro equipos para conseguir objetivos globales.»
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Más de 20 años liderando operaciones, equipos y contratos complejos, combinando
              resultados, personas y visión de negocio.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
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
        <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="section-label">Perfil</p>
              <h2 className="mt-4 text-3xl text-primary md:text-5xl">Sobre mí</h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
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
              <blockquote className="border-l-2 border-accent pl-6 font-display text-2xl italic leading-snug text-primary md:text-3xl">
                «Creo en un liderazgo capaz de alinear personas, negocio y objetivos.»
              </blockquote>
            </div>
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section id="experiencia" className="border-y border-border bg-secondary">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <p className="section-label">Impacto</p>
            <h2 className="mt-4 max-w-2xl text-3xl text-primary md:text-5xl">
              Experiencia que se traduce en resultados
            </h2>
            <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {figures.map((f) => (
                <div key={f.label} className="bg-background p-8">
                  <p className="font-display text-4xl text-primary md:text-5xl">{f.value}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Experiencia en la gestión integral de operaciones multisite, cuentas de explotación,
              equipos numerosos, relaciones laborales, clientes estratégicos, proveedores,
              renovaciones contractuales y procesos de oferta.
            </p>
          </div>
        </section>

        {/* HABILIDADES */}
        <section id="habilidades" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="section-label">Habilidades</p>
          <h2 className="mt-4 text-3xl text-primary md:text-5xl">Lo que aporto</h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-border bg-card p-7 transition-colors hover:border-accent/50"
              >
                <s.icon className="size-5 text-accent" strokeWidth={1.5} />
                <h3 className="mt-5 text-lg leading-snug text-primary">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LIDERAZGO */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-primary-foreground/60">
              Liderazgo
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl">Mi forma de liderar</h2>
            <p className="mt-8 max-w-3xl font-display text-2xl leading-snug italic text-primary-foreground/90 md:text-3xl">
              «Para mí, liderar no consiste únicamente en dirigir. Significa escuchar, generar
              confianza, asumir responsabilidades y conseguir que diferentes personas trabajen
              alineadas hacia un objetivo común.»
            </p>
            <div className="mt-14 grid gap-10 sm:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.title} className="border-t border-primary-foreground/20 pt-6">
                  <h3 className="text-xl text-primary-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRAYECTORIA */}
        <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="section-label">Trayectoria</p>
              <h2 className="mt-4 text-3xl leading-tight text-primary md:text-5xl">
                Una trayectoria construida sobre la gestión
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
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
              <p className="border-t border-border pt-6 text-sm text-muted-foreground/80">
                Formación en Relaciones Laborales — Universidad Complutense de Madrid
              </p>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="border-t border-border bg-sand">
          <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
            <p className="section-label">Contacto</p>
            <h2 className="mt-4 text-4xl text-primary md:text-6xl">Hablemos</h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Abierta a conversar, compartir experiencias y conocer nuevos proyectos profesionales.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 text-base text-primary">
              <a href="tel:+34651300652" className="flex items-center gap-2 hover:text-accent">
                <Phone className="size-4" strokeWidth={1.5} /> 651 300 652
              </a>
              <a
                href="mailto:terenira@hotmail.com"
                className="flex items-center gap-2 hover:text-accent"
              >
                <Mail className="size-4" strokeWidth={1.5} /> terenira@hotmail.com
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:terenira@hotmail.com"
                className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Enviar email
              </a>
              <a
                href="tel:+34651300652"
                className="rounded-full border border-primary/25 px-7 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
              >
                Llamar
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
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Teresa Nieto Ramírez · Senior Facility Manager
        </p>
      </footer>

      <a
        href="#contacto"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-opacity hover:opacity-90 md:hidden"
      >
        Contactar
      </a>
    </div>
  );
}
