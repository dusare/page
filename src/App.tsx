import { useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Brain,
  Building2,
  Calendar,
  CheckCircle,
  Database,
  Facebook,
  FileText,
  Github,
  Globe2,
  HeartPulse,
  Instagram,
  Layers,
  LineChart,
  Lock,
  Menu,
  MessageCircle,
  Network,
  Send,
  ShieldCheck,
  Sparkles,
  Table2,
  Truck,
  Workflow,
  X,
} from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/541170601388?text=Hola%20Dusare%2C%20quiero%20solicitar%20un%20diagn%C3%B3stico%20IA.';
const BUDGET_URL =
  'https://wa.me/541170601388?text=Hola%20Dusare%2C%20quiero%20consultar%20un%20presupuesto.';
const CALENDAR_URL = 'https://cal.com/dusare/calendar';

const navItems = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Método', href: '#metodo' },
  { label: 'Industrias', href: '#industrias' },
  { label: 'Contacto', href: '#contacto' },
];

const differentiators = [
  'Arquitectura productiva',
  'Integración real',
  'Seguridad desde el diseño',
  'Foco en negocio',
];

const problems = [
  'Procesos manuales, repetitivos y difíciles de escalar.',
  'Información dispersa en PDFs, emails, carpetas, planillas y sistemas internos.',
  'Sistemas legacy, SAP, WMS, CRM o bases de datos que no se comunican fácilmente.',
  'Uso informal de herramientas IA sin gobierno, auditoría ni control de datos.',
  'Pilotos de IA que no llegan a producción.',
  'Tickets, reclamos, certificados, facturas, remitos o formularios que requieren revisión manual.',
  'Falta de métricas para medir ahorro, productividad, calidad y reducción de errores.',
  'Equipos internos sin arquitectura clara para implementar IA de forma segura.',
];

const services = [
  {
    title: 'AI Knowledge / RAG Corporativo',
    icon: Brain,
    description:
      'Convertimos documentos, manuales, políticas, contratos y conocimiento interno en asistentes IA capaces de responder con fuentes citadas, control de permisos y trazabilidad.',
    cases: [
      'Asistente documental corporativo.',
      'Base de conocimiento interna.',
      'Soporte a equipos de operaciones.',
      'Consultas de RR. HH., legales, compliance o atención interna.',
      'Búsqueda semántica sobre documentación empresarial.',
    ],
    cta: 'Consultar solución RAG',
    href: WHATSAPP_URL,
  },
  {
    title: 'AI Integration Layer / MCP',
    icon: Network,
    description:
      'Diseñamos servidores MCP, conectores y capas de integración para que los agentes IA puedan consultar y operar sistemas internos de forma segura.',
    cases: [
      'MCP server para APIs internas.',
      'Integración con SAP, ERP, WMS, CRM y bases de datos.',
      'Conexión segura entre agentes IA y sistemas legacy.',
      'Acciones controladas con permisos, logs y auditoría.',
      'Integración de herramientas corporativas con modelos de IA.',
    ],
    cta: 'Consultar integración IA',
    href: WHATSAPP_URL,
  },
  {
    title: 'Agentic AI / Automatización Inteligente',
    icon: Bot,
    description:
      'Implementamos agentes IA capaces de usar herramientas, ejecutar workflows, consultar APIs, tomar decisiones controladas y derivar a humanos cuando corresponde.',
    cases: [
      'Agente de reclamos.',
      'Agente de soporte interno.',
      'Agente de compras.',
      'Agente de backoffice.',
      'Automatización de procesos con aprobación humana.',
      'Agentes conectados a sistemas y reglas de negocio.',
    ],
    cta: 'Consultar agentes IA',
    href: WHATSAPP_URL,
  },
  {
    title: 'Document Intelligence',
    icon: FileText,
    description:
      'Automatizamos lectura, clasificación y validación de documentos con IA, reglas de negocio, scoring, trazabilidad y revisión humana.',
    cases: [
      'Certificados médicos.',
      'Facturas y remitos.',
      'Contratos y legajos.',
      'Formularios operativos.',
      'Detección de inconsistencias.',
      'Extracción estructurada de datos.',
    ],
    cta: 'Consultar Document Intelligence',
    href: WHATSAPP_URL,
  },
  {
    title: 'ML / Predictive AI',
    icon: LineChart,
    description:
      'Creamos modelos predictivos para anticipar demanda, clasificar casos, detectar anomalías, optimizar stock y mejorar decisiones operativas.',
    cases: [
      'Forecast de demanda.',
      'Scoring de riesgo.',
      'Detección de fraude.',
      'Clasificación de tickets.',
      'Predicción de reclamos.',
      'ETA logistica.',
      'Detección de anomalías.',
    ],
    cta: 'Consultar ML aplicado',
    href: WHATSAPP_URL,
  },
  {
    title: 'AI Governance / LLMOps / MLOps',
    icon: ShieldCheck,
    description:
      'Ayudamos a operar IA en producción con métricas, evaluación, control de costos, seguridad, guardrails, auditoría y mejora continua.',
    cases: [
      'Evaluación de respuestas.',
      'Monitoreo de alucinaciones.',
      'Control de prompts y versiónes.',
      'Protección de datos sensibles.',
      'Observabilidad de agentes IA.',
      'Gobierno de modelos y automatizaciones.',
    ],
    cta: 'Consultar gobierno IA',
    href: WHATSAPP_URL,
  },
];

const comparisonRows = [
  {
    criterion: 'Inicio rapido',
    platform: 'Excelente para demos, pruebas y casos estándar.',
    dusare: 'MVPs disenados con criterio de producción desde el inicio.',
  },
  {
    criterion: 'Integración con sistemas internos',
    platform: 'Depende de conectores disponibles y configuración.',
    dusare: 'Integración con APIs, SAP, legacy, bases de datos, workflows y reglas propias.',
  },
  {
    criterion: 'Seguridad y trazabilidad',
    platform: 'Depende del plan, permisos y configuración.',
    dusare: 'Permisos, logs, auditoría y control incorporados desde la arquitectura.',
  },
  {
    criterion: 'Adaptación al proceso',
    platform: 'Funciona bien cuando el proceso se adapta a la herramienta.',
    dusare: 'La solución se disena alrededor del proceso real del negocio.',
  },
  {
    criterion: 'Dependencia tecnológica',
    platform: 'Puede generar lock-in con un ecosistema específico.',
    dusare: 'Arquitectura integrable, agnostica y evolutiva.',
  },
  {
    criterion: 'Operación productiva',
    platform: 'Requiere equipo interno para mantener, medir y mejorar.',
    dusare: 'Implementacion con foco en monitoreo, mejora continua y evolucion.',
  },
];

const maturitySolutions = [
  {
    title: 'Diagnóstico IA',
    description:
      'Assessment de procesos, datos, sistemas y oportunidades de automatización. Incluye matriz de impacto/esfuerzo, riesgos, arquitectura inicial y roadmap de implementación.',
    ideal:
      'Empresas que quieren empezar con IA pero necesitan priorizar casos de uso y evitar pilotos aislados.',
    cta: 'Solicitar diagnóstico',
  },
  {
    title: 'RAG MVP',
    description:
      'Asistente documental funcional con carga de conocimiento, busqueda semántica, respuestas con fuentes y validación inicial con usuarios.',
    ideal:
      'Empresas con documentación dispersa, manuales, políticas, contratos o conocimiento interno difícil de consultar.',
    cta: 'Consultar RAG MVP',
  },
  {
    title: 'MCP Server / Integration Layer',
    description:
      'Servidor MCP o capa de integración segura para conectar agentes IA con APIs, bases de datos, sistemas internos o herramientas corporativas.',
    ideal:
      'Empresas que necesitan que la IA interactue con sistemas reales sin comprometer seguridad ni control.',
    cta: 'Consultar integración',
  },
  {
    title: 'Agentic AI MVP',
    description:
      'Agente IA con herramientas, workflows, reglas de negocio y aprobación humana para automatizar procesos concretos.',
    ideal: 'Áreas de operaciones, soporte, compras, administración, reclamos o backoffice.',
    cta: 'Consultar agente IA',
  },
  {
    title: 'Document Intelligence MVP',
    description:
      'Clasificación, extraccion y validación de documentos con scoring, trazabilidad y revisión humana.',
    ideal:
      'Empresas que procesan certificados, facturas, remitos, contratos, legajos, formularios o reclamos.',
    cta: 'Consultar solución documental',
  },
  {
    title: 'AI Governance Assessment',
    description:
      'Evaluación de riesgos, uso actual de IA, proteccion de datos, guardrails, auditoría, métricas y plan de gobierno.',
    ideal: 'Empresas que ya usan IA y necesitan control, seguridad, cumplimiento y trazabilidad.',
    cta: 'Consultar gobierno IA',
  },
];

const processSteps = [
  {
    title: 'Diagnóstico',
    description:
      'Identificamos procesos, datos, sistemas, riesgos y oportunidades de automatización con impacto real.',
  },
  {
    title: 'MVP',
    description:
      'Construimos una primera versión funcional para validar valor, usuarios, datos y arquitectura.',
  },
  {
    title: 'Producción',
    description:
      'Incorporamos seguridad, permisos, monitoreo, trazabilidad, integración y operación.',
  },
  {
    title: 'Mejora continua',
    description:
      'Medimos uso, calidad, ahorro, costos, errores y nuevas oportunidades de evolucion.',
  },
];

const industries = [
  {
    title: 'Logistica y correo',
    icon: Truck,
    description:
      'Automatización de reclamos, tracking inteligente, validación documental, integración con WMS, SAP, APIs y sistemas operativos.',
  },
  {
    title: 'Salud y medicina laboral',
    icon: HeartPulse,
    description:
      'Validación de certificados, analisis documental, trazabilidad, revisión humana y control de reglas.',
  },
  {
    title: 'Backoffice administrativo',
    icon: Table2,
    description:
      'Automatización de emails, formularios, facturas, remitos, legajos, aprobaciones y tareas repetitivas.',
  },
  {
    title: 'Seguridad electrónica',
    icon: Lock,
    description:
      'Análisis de eventos, reportes automáticos, video analytics, reducción de falsas alarmas e integración con sistemas de monitoreo.',
  },
  {
    title: 'Empresas con sistemas legacy',
    icon: Database,
    description:
      'Modernización gradual mediante APIs, MCP, eventos, automatización e integración sin reemplazar todo el ecosistema existente.',
  },
  {
    title: 'PyMEs en adopción de IA',
    icon: Building2,
    description:
      'Diagnóstico, priorización de casos de uso, capacitación, MVPs y acompañamiento para implementar IA con bajo riesgo.',
  },
];

const founderPoints = [
  'Diseño de soluciones orientadas a producción.',
  'Integración con sistemas internos y procesos reales.',
  'Seguridad, trazabilidad y control de datos desde el inicio.',
  'Evaluación de respuestas y monitoreo de calidad.',
  'Arquitectura escalable y mantenible.',
  'Acompañamiento desde diagnóstico hasta operación.',
  'Enfoque agnóstico: se usa la tecnología adecuada para cada contexto.',
];

const aiTechnologies = [
  'OpenAI',
  'Anthropic / Claude',
  'Gemini',
  'Meta',
  'Mistral',
  'DeepSeek',
  'Qwen',
  'xAI Grok',
];

const integrationTechnologies = [
  'MuleSoft',
  'Make',
  'n8n',
  'Node.js',
  'Python',
  'Java',
  'React',
  'Cloudflare',
];

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/dusare' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/dusare_ia/' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/share/17vjMMv57u/' },
  { name: 'x.com', icon: X, url: 'https://x.com/Dusare_ia' },
  { name: 'WhatsApp', icon: MessageCircle, url: WHATSAPP_URL },
  { name: 'Telegram', icon: Send, url: 'https://t.me/dusare_ia' },
];

function SectionIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {children ? <div className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{children}</div> : null}
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="reactbits-theme min-h-screen text-white">
      <div className="site-noise" aria-hidden="true" />
      <header className="rb-header fixed left-0 right-0 top-0 z-50 border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="Dusare">
            <span className="rb-logo grid h-10 w-10 place-items-center rounded-lg border border-cyan-300/30 bg-cyan-300/10">
              <Sparkles className="h-5 w-5 text-cyan-300" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-semibold tracking-tight">Dusare</span>
              <span className="text-xs text-slate-400">AI applied consulting</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rb-nav-link rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rb-button rb-button-primary inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold"
            >
              <Calendar className="h-4 w-4" />
              Solicitar diagnóstico
            </a>
          </div>

          <button
            type="button"
            className="rb-icon-button rounded-md border border-white/10 p-2 text-slate-200 md:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {isMenuOpen ? (
          <div className="rb-mobile-menu border-t border-white/10 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rb-nav-link rounded-md px-3 py-2 text-sm font-medium text-slate-200"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rb-button rb-button-primary mt-2 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold"
              >
                <Calendar className="h-4 w-4" />
                Solicitar diagnóstico
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section className="rb-hero relative overflow-hidden pt-28">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=2000"
              alt="Arquitectura tecnológica y codigo en pantalla"
              className="h-full w-full object-cover opacity-[0.08]"
            />
            <div className="rb-grid-plane" aria-hidden="true" />
            <div className="rb-orb rb-orb-one" aria-hidden="true" />
            <div className="rb-orb rb-orb-two" aria-hidden="true" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-24 lg:pt-16">
            <div className="flex flex-col justify-center">
              <p className="rb-chip mb-5 inline-flex w-fit items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-cyan-200">
                <BadgeCheck className="h-4 w-4" />
                Consultora boutique founder-led de IA aplicada
              </p>
              <h1 className="rb-title max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                IA aplicada a procesos reales, no demos aisladas
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
                Diseñamos e implementamos agentes IA, RAG, MCP, automatización inteligente e
                integración con sistemas internos para empresas que necesitan pasar de pilotos a
                soluciones productivas.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                Conectamos inteligencia artificial con documentos, APIs, sistemas legacy, SAP,
                bases de datos y workflows empresariales, incorporando seguridad, trazabilidad y
                control desde el diseño.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rb-button rb-button-primary inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold"
                >
                  Solicitar diagnóstico IA
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#servicios"
                  className="rb-button rb-button-ghost inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white"
                >
                  Consultar servicios
                </a>
              </div>
            </div>

            <div className="grid content-end gap-4">
              <div className="rb-panel rb-terminal-card rounded-lg p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Enfoque
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {differentiators.map((item) => (
                    <div key={item} className="rb-card rounded-lg p-4">
                      <CheckCircle className="mb-3 h-5 w-5 text-emerald-300" />
                      <p className="text-sm font-semibold text-white">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="problemas" className="rb-section border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro eyebrow="Problemas" title="Problemas que resolvemos">
              <p>
                Muchas empresas ya probaron herramientas de IA, pero todavía no logran integrarlas
                a sus procesos reales. Dusare ayuda a convertir esas iniciativas en soluciones
                productivas, medibles y seguras.
              </p>
            </SectionIntro>

            <div className="grid gap-3 md:grid-cols-2">
              {problems.map((problem) => (
                <div key={problem} className="rb-card flex gap-3 rounded-lg p-4">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-none text-cyan-300" />
                  <p className="text-sm leading-6 text-slate-200">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="servicios" className="rb-section rb-section-muted px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro eyebrow="Servicios" title="Servicios de IA para empresas">
              <p>
                Soluciones modulares que pueden comenzar como diagnóstico, MVP o implementación
                productiva, según la madurez y necesidad de cada organizacion.
              </p>
            </SectionIntro>

            <div className="grid gap-5 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article key={service.title} className="rb-card rb-service-card flex flex-col rounded-lg p-5">
                    <div className="mb-5 flex items-start gap-4">
                      <span className="rb-icon-tile grid h-11 w-11 flex-none place-items-center rounded-lg text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{service.description}</p>
                      </div>
                    </div>
                    <ul className="mb-6 space-y-2">
                      {service.cases.map((item) => (
                        <li key={item} className="flex gap-2 text-sm leading-6 text-slate-300">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rb-button rb-button-ghost mt-auto inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-cyan-200"
                    >
                      {service.cta}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="rb-section px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro title="Dusare integra las plataformas con la realidad de tu empresa">
              <p>
                OpenAI, Microsoft, AWS, Google, Salesforce, UiPath, Dify, Botpress, n8n y otras
                plataformas ofrecen herramientas muy potentes. El desafio aparece cuando hay que
                integrarlas con sistemas internos, datos sensibles, permisos, procesos reales y
                operación diaria. Dusare trabaja sobre esa brecha: convierte herramientas de IA en
                soluciones productivas.
              </p>
            </SectionIntro>

            <div className="rb-panel overflow-hidden rounded-lg">
              <div className="overflow-x-auto">
                <table className="min-w-[760px] divide-y divide-white/10 text-left">
                  <thead className="rb-table-head">
                    <tr>
                      <th className="px-4 py-4 text-sm font-semibold text-white">Criterio</th>
                      <th className="px-4 py-4 text-sm font-semibold text-white">Plataforma / SaaS</th>
                      <th className="px-4 py-4 text-sm font-semibold text-white">Dusare</th>
                    </tr>
                  </thead>
                  <tbody className="rb-table-body divide-y divide-white/10">
                    {comparisonRows.map((row) => (
                      <tr key={row.criterion}>
                        <td className="px-4 py-4 align-top text-sm font-semibold text-cyan-200">
                          {row.criterion}
                        </td>
                        <td className="px-4 py-4 align-top text-sm leading-6 text-slate-300">
                          {row.platform}
                        </td>
                        <td className="px-4 py-4 align-top text-sm leading-6 text-slate-200">
                          {row.dusare}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mx-auto mt-6 max-w-3xl text-center text-base font-medium leading-7 text-cyan-100">
              Dusare no compite contra las plataformas de IA. Las integra, adapta y lleva a
              producción dentro de procesos empresariales reales.
            </p>
          </div>
        </section>

        <section id="soluciones" className="rb-section rb-section-muted px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro title="Soluciones según la madurez de tu empresa" />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {maturitySolutions.map((solution) => (
                <article key={solution.title} className="rb-card rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-white">{solution.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{solution.description}</p>
                  <p className="mt-4 text-sm font-semibold text-cyan-200">Ideal para:</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{solution.ideal}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 hover:text-emerald-100"
                  >
                    {solution.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>

            <p className="rb-panel mt-6 rounded-lg p-5 text-sm leading-6 text-slate-300">
              Cada solución se dimensiona según alcance, sistemas a integrar, volumen de uso,
              criticidad operativa, seguridad requerida y nivel de acompañamiento.
            </p>
          </div>
        </section>

        <section id="metodo" className="rb-section px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro eyebrow="Método" title="Cómo llevamos IA a producción" />

            <div className="grid gap-4 md:grid-cols-4">
              {processSteps.map((step, index) => (
                <article key={step.title} className="rb-card rb-step-card rounded-lg p-5">
                  <span className="text-sm font-semibold text-cyan-300">0{index + 1}</span>
                  <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="industrias" className="rb-section rb-section-muted px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro title="Industrias donde Dusare puede acelerar resultados" />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => {
                const Icon = industry.icon;

                return (
                  <article key={industry.title} className="rb-card rounded-lg p-5">
                    <Icon className="h-6 w-6 text-cyan-300" />
                    <h3 className="mt-4 text-lg font-semibold text-white">{industry.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{industry.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="rb-section px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Founder-led
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Arquitectura, seguridad y negocio en una misma solución
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300">
                Dusare es una consultora boutique founder-led, impulsada por Ariel Sebastián
                Duarte, con foco en arquitectura de software, inteligencia artificial aplicada e
                integración de sistemas complejos. El enfoque combina criterio técnico senior,
                visión de negocio y ejecución pragmática para llevar soluciones desde el diagnóstico
                hasta producción.
              </p>
              <div className="rb-panel mt-6 rounded-lg p-5">
                <p className="font-semibold text-white">Ariel Sebastián Duarte</p>
                <p className="mt-1 text-sm text-cyan-200">Founder & AI Solutions Architect</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {founderPoints.map((point) => (
                <div key={point} className="rb-card flex gap-3 rounded-lg p-4">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-none text-emerald-300" />
                  <p className="text-sm leading-6 text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rb-section rb-section-muted px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro title="Plataformas y tecnologías que podemos integrar o utilizar según el caso">
              <p>
                Se presentan como herramientas técnicas disponibles, no como clientes, partners ni
                certificaciones.
              </p>
            </SectionIntro>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rb-card rounded-lg p-5">
                <div className="mb-4 flex items-center gap-3">
                  <Globe2 className="h-5 w-5 text-cyan-300" />
                  <h3 className="font-semibold text-white">Modelos y plataformas IA</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {aiTechnologies.map((tech) => (
                    <span key={tech} className="rb-tech-pill rounded-md px-3 py-2 text-sm text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rb-card rounded-lg p-5">
                <div className="mb-4 flex items-center gap-3">
                  <Layers className="h-5 w-5 text-cyan-300" />
                  <h3 className="font-semibold text-white">Integración y desarrollo</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {integrationTechnologies.map((tech) => (
                    <span key={tech} className="rb-tech-pill rounded-md px-3 py-2 text-sm text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="rb-section px-4 py-16 sm:px-6 lg:px-8">
          <div className="rb-final-cta mx-auto max-w-5xl rounded-lg p-6 text-center sm:p-10">
            <Workflow className="mx-auto h-8 w-8 text-cyan-300" />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              ¿Querés aplicar IA en procesos reales de tu empresa?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-200">
              Empezamos con un diagnóstico para identificar oportunidades, riesgos, arquitectura
              necesaria y un roadmap claro de implementación.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rb-button rb-button-primary inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold"
              >
                Solicitar diagnóstico IA
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={BUDGET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rb-button rb-button-ghost inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white"
              >
                Consultar presupuesto
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rb-button rb-button-ghost inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white"
              >
                Agendar una reunion
                <Calendar className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="rb-footer border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">Dusare</p>
            <p className="mt-1 text-sm text-slate-400">
              IA aplicada, integración tecnológica y arquitectura para producción.
            </p>
            <p className="mt-3 text-xs text-slate-500">© 2026 Dusare Consult. Todos los derechos reservados.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rb-icon-button grid h-10 w-10 place-items-center rounded-md border border-white/10 text-slate-300 hover:text-white"
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
