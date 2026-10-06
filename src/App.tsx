import { lazy, Suspense, useEffect, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Bot,
  Brain,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle,
  Cloud,
  Database,
  Facebook,
  FileText,
  Github,
  Globe2,
  GraduationCap,
  Headset,
  HeartPulse,
  Instagram,
  Landmark,
  Layers,
  Lock,
  Mail,
  Menu,
  MessageCircle,
  SearchCheck,
  Scale,
  Send,
  ShieldAlert,
  ShieldCheck,
  Table2,
  Truck,
  Workflow,
  X,
  type LucideIcon,
} from 'lucide-react';
import GradientText from './components/GradientText';
import BlurText from './components/BlurText';
import LanguageSwitcher from './components/LanguageSwitcher';
import RotatingText from './components/RotatingText';
import Stepper from './components/Stepper';
import { useI18n } from './i18n';
import type { IndustryId, ServiceId, TechGroupId, Translation } from './i18n/types';

const FloatingLines = lazy(() => import('./components/FloatingLines'));

const WHATSAPP_NUMBER = '5491137696056';
const CALENDAR_URL = 'https://cal.com/dusare/calendar';
const CONTACT_EMAIL = 'aduarte@dusare.com.ar';

function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const navItems: { key: keyof Translation['nav']; href: string }[] = [
  { key: 'services', href: '#servicios' },
  { key: 'choose', href: '#como-elegir' },
  { key: 'scope', href: '#detalle-servicios' },
  { key: 'method', href: '#metodo' },
  { key: 'contact', href: '#contacto' },
];

// Ordered by market demand (US, Canada, Europe), highest first.
const serviceMeta: { id: ServiceId; icon: LucideIcon }[] = [
  { id: 'agentes-ia', icon: Bot },
  { id: 'atencion-cliente', icon: Headset },
  { id: 'ia-privada', icon: Lock },
  { id: 'gobierno-ia', icon: ShieldCheck },
  { id: 'cumplimiento-ai-act', icon: Scale },
  { id: 'rag-local', icon: FileText },
  { id: 'analisis-datos', icon: BarChart3 },
  { id: 'seguridad-agentes', icon: ShieldAlert },
  { id: 'capacitacion-ia', icon: GraduationCap },
  { id: 'assessment-ia', icon: SearchCheck },
  { id: 'fine-tuning', icon: Brain },
  { id: 'cloud-training', icon: Cloud },
];

const industryMeta: { id: IndustryId; icon: LucideIcon }[] = [
  { id: 'smb', icon: Building2 },
  { id: 'finance', icon: Landmark },
  { id: 'contactCenter', icon: Headset },
  { id: 'health', icon: HeartPulse },
  { id: 'backoffice', icon: Table2 },
  { id: 'legacy', icon: Database },
  { id: 'professional', icon: Briefcase },
  { id: 'logistics', icon: Truck },
  { id: 'security', icon: Lock },
];

const technologyGroups: {
  id: TechGroupId;
  icon: LucideIcon;
  technologies: { name: string; mark: string; accent: string }[];
}[] = [
  {
    id: 'models',
    icon: Globe2,
    technologies: [
      { name: 'OpenAI', mark: 'AI', accent: '#10A37F' },
      { name: 'Anthropic Claude', mark: 'C', accent: '#D4A373' },
      { name: 'Google Gemini', mark: 'G', accent: '#8AB4F8' },
      { name: 'Meta Llama', mark: '∞', accent: '#5B8DEF' },
      { name: 'Mistral', mark: 'M', accent: '#FF7000' },
      { name: 'DeepSeek', mark: 'DS', accent: '#4F8BFF' },
      { name: 'Qwen', mark: 'Q', accent: '#7C3AED' },
      { name: 'Gemma', mark: 'Ge', accent: '#34A853' },
      { name: 'xAI Grok', mark: 'x', accent: '#E5E7EB' },
      { name: 'Azure AI Foundry', mark: 'Az', accent: '#0078D4' },
      { name: 'Amazon Bedrock', mark: 'AWS', accent: '#FF9900' },
      { name: 'Google Vertex AI', mark: 'V', accent: '#34A853' },
      { name: 'Together AI', mark: 'T', accent: '#FF4F8B' },
      { name: 'Fireworks AI', mark: 'Fw', accent: '#F97316' },
      { name: 'Hugging Face', mark: 'HF', accent: '#FFD21E' },
    ],
  },
  {
    id: 'rag',
    icon: FileText,
    technologies: [
      { name: 'Qdrant', mark: 'Qd', accent: '#DC244C' },
      { name: 'pgvector', mark: 'pg', accent: '#336791' },
      { name: 'Weaviate', mark: 'W', accent: '#00B5AD' },
      { name: 'Milvus', mark: 'M', accent: '#00A1EA' },
      { name: 'LangChain', mark: 'LC', accent: '#1C3C3C' },
      { name: 'LlamaIndex', mark: 'LI', accent: '#7C3AED' },
      { name: 'bge-m3', mark: 'BGE', accent: '#06B6D4' },
      { name: 'e5 embeddings', mark: 'e5', accent: '#A7F3D0' },
      { name: 'nomic embeddings', mark: 'N', accent: '#F472B6' },
      { name: 'PDF / DOCX / CSV', mark: 'Doc', accent: '#E2E8F0' },
    ],
  },
  {
    id: 'training',
    icon: Brain,
    technologies: [
      { name: 'LoRA', mark: 'Lo', accent: '#A855F7' },
      { name: 'QLoRA', mark: 'QL', accent: '#C084FC' },
      { name: 'PEFT', mark: 'P', accent: '#22D3EE' },
      { name: 'PyTorch', mark: 'PT', accent: '#EE4C2C' },
      { name: 'Transformers', mark: 'Tr', accent: '#FFD21E' },
      { name: 'Unsloth', mark: 'Us', accent: '#84CC16' },
      { name: 'Axolotl', mark: 'Ax', accent: '#38BDF8' },
      { name: 'AWS SageMaker', mark: 'SM', accent: '#FF9900' },
      { name: 'Azure ML', mark: 'ML', accent: '#0078D4' },
      { name: 'RunPod', mark: 'RP', accent: '#7C3AED' },
      { name: 'CoreWeave', mark: 'CW', accent: '#00D1FF' },
      { name: 'Lambda Cloud', mark: 'λ', accent: '#FF4F8B' },
    ],
  },
  {
    id: 'serving',
    icon: Cloud,
    technologies: [
      { name: 'vLLM', mark: 'v', accent: '#06B6D4' },
      { name: 'Docker', mark: 'D', accent: '#2496ED' },
      { name: 'Kubernetes', mark: 'K8s', accent: '#326CE5' },
      { name: 'Linux', mark: 'Tux', accent: '#FACC15' },
      { name: 'Cloud privada', mark: 'CP', accent: '#67E8F9' },
      { name: 'On-premise', mark: 'OP', accent: '#A7F3D0' },
      { name: 'OpenAI-compatible API', mark: 'API', accent: '#10A37F' },
      { name: 'REST', mark: 'R', accent: '#38BDF8' },
      { name: 'FastAPI', mark: 'Fa', accent: '#009688' },
    ],
  },
  {
    id: 'governance',
    icon: ShieldCheck,
    technologies: [
      { name: 'OAuth2', mark: 'OA', accent: '#22D3EE' },
      { name: 'Keycloak', mark: 'KC', accent: '#4D77FF' },
      { name: 'JWT', mark: 'JWT', accent: '#D946EF' },
      { name: 'RBAC', mark: 'RB', accent: '#A7F3D0' },
      { name: 'SSO', mark: 'SSO', accent: '#FBBF24' },
      { name: 'VPN', mark: 'VPN', accent: '#60A5FA' },
      { name: 'Guardrails', mark: 'GR', accent: '#FB7185' },
      { name: 'PII detection', mark: 'PII', accent: '#F97316' },
      { name: 'OpenTelemetry', mark: 'OTel', accent: '#F5A3FF' },
      { name: 'Prometheus', mark: 'Pr', accent: '#E6522C' },
      { name: 'Grafana', mark: 'Gr', accent: '#F46800' },
      { name: 'Langfuse', mark: 'Lf', accent: '#38BDF8' },
    ],
  },
  {
    id: 'integration',
    icon: Layers,
    technologies: [
      { name: 'MCP servers', mark: 'MCP', accent: '#67E8F9' },
      { name: 'LangGraph', mark: 'LG', accent: '#7C3AED' },
      { name: 'MuleSoft', mark: 'Mu', accent: '#00A2DF' },
      { name: 'Make', mark: 'Mk', accent: '#6D28D9' },
      { name: 'n8n', mark: 'n8n', accent: '#EA4B71' },
      { name: 'Node.js', mark: 'JS', accent: '#68A063' },
      { name: 'Python', mark: 'Py', accent: '#3776AB' },
      { name: 'Java', mark: 'J', accent: '#F89820' },
      { name: 'React', mark: '⚛', accent: '#61DAFB' },
      { name: 'Cloudflare', mark: 'CF', accent: '#F38020' },
      { name: 'PostgreSQL', mark: 'Pg', accent: '#336791' },
      { name: 'SQL Server', mark: 'SQL', accent: '#CC2927' },
      { name: 'MySQL', mark: 'My', accent: '#00758F' },
      { name: 'Oracle', mark: 'Or', accent: '#F80000' },
      { name: 'SAP', mark: 'SAP', accent: '#0FAAFF' },
      { name: 'Salesforce', mark: 'SF', accent: '#00A1E0' },
      { name: 'HubSpot', mark: 'HS', accent: '#FF7A59' },
      { name: 'Zendesk', mark: 'Zd', accent: '#03363D' },
      { name: 'WhatsApp Business', mark: 'WA', accent: '#25D366' },
      { name: 'Twilio', mark: 'Tw', accent: '#F22F46' },
      { name: 'Microsoft 365', mark: 'M365', accent: '#0078D4' },
      { name: 'CRM / ERP', mark: 'ERP', accent: '#A7F3D0' },
      { name: 'Kafka', mark: 'K', accent: '#E5E7EB' },
      { name: 'SQS', mark: 'SQS', accent: '#FF9900' },
      { name: 'REST / GraphQL / SOAP', mark: 'IO', accent: '#F472B6' },
    ],
  },
];

const logoDomainByTechnology: Record<string, string> = {
  'OpenAI': 'openai.com',
  'Anthropic Claude': 'anthropic.com',
  'Google Gemini': 'google.com',
  'Meta Llama': 'meta.com',
  'Mistral': 'mistral.ai',
  'DeepSeek': 'deepseek.com',
  'Qwen': 'qwen.ai',
  'Gemma': 'google.com',
  'xAI Grok': 'x.ai',
  'Azure AI Foundry': 'azure.microsoft.com',
  'Amazon Bedrock': 'aws.amazon.com',
  'Google Vertex AI': 'cloud.google.com',
  'Together AI': 'together.ai',
  'Fireworks AI': 'fireworks.ai',
  'Hugging Face': 'huggingface.co',
  'Qdrant': 'qdrant.tech',
  'pgvector': 'postgresql.org',
  'Weaviate': 'weaviate.io',
  'Milvus': 'milvus.io',
  'LangChain': 'langchain.com',
  'LlamaIndex': 'llamaindex.ai',
  'nomic embeddings': 'nomic.ai',
  'PyTorch': 'pytorch.org',
  'Transformers': 'huggingface.co',
  'Unsloth': 'unsloth.ai',
  'Axolotl': 'axolotl.ai',
  'AWS SageMaker': 'aws.amazon.com',
  'Azure ML': 'azure.microsoft.com',
  'RunPod': 'runpod.io',
  'CoreWeave': 'coreweave.com',
  'Lambda Cloud': 'lambdalabs.com',
  'vLLM': 'vllm.ai',
  'Docker': 'docker.com',
  'Kubernetes': 'kubernetes.io',
  'Linux': 'linux.org',
  'OpenAI-compatible API': 'openai.com',
  'REST': 'redhat.com',
  'FastAPI': 'fastapi.tiangolo.com',
  'OAuth2': 'oauth.net',
  'Keycloak': 'keycloak.org',
  'JWT': 'jwt.io',
  'SSO': 'okta.com',
  'Guardrails': 'guardrailsai.com',
  'OpenTelemetry': 'opentelemetry.io',
  'Prometheus': 'prometheus.io',
  'Grafana': 'grafana.com',
  'Langfuse': 'langfuse.com',
  'LangGraph': 'langchain.com',
  'MuleSoft': 'mulesoft.com',
  'Make': 'make.com',
  'n8n': 'n8n.io',
  'Node.js': 'nodejs.org',
  'Python': 'python.org',
  'Java': 'java.com',
  'React': 'react.dev',
  'Cloudflare': 'cloudflare.com',
  'PostgreSQL': 'postgresql.org',
  'SQL Server': 'microsoft.com',
  'MySQL': 'mysql.com',
  'Oracle': 'oracle.com',
  'SAP': 'sap.com',
  'Salesforce': 'salesforce.com',
  'HubSpot': 'hubspot.com',
  'Zendesk': 'zendesk.com',
  'WhatsApp Business': 'whatsapp.com',
  'Twilio': 'twilio.com',
  'Microsoft 365': 'microsoft.com',
  'Kafka': 'kafka.apache.org',
  'SQS': 'aws.amazon.com',
};

const floatingLinesGradient = ['#10B981', '#A855F7', '#7C3AED'];
const floatingLinesWaves = ['top', 'middle', 'bottom'] as const;
const floatingLinesCount = 4;
const floatingLinesDistance = 40.5;

function getBrandfetchLogoUrl(name: string) {
  const domain = logoDomainByTechnology[name];
  if (!domain) {
    return undefined;
  }

  const encodedDomain = encodeURIComponent(domain);

  return `https://cdn.brandfetch.io/domain/${encodedDomain}/w/96/h/96/theme/dark/fallback/lettermark`;
}

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

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-200">{title}</h4>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-6 text-slate-300">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechnologyLogo({
  name,
  label,
  mark,
  accent,
}: {
  name: string;
  label: string;
  mark: string;
  accent: string;
}) {
  const logoUrl = getBrandfetchLogoUrl(name);

  return (
    <li
      className="rb-tech-logo-card"
      style={{ '--tech-accent': accent } as React.CSSProperties}
    >
      <span className="rb-tech-logo-mark" aria-hidden="true">
        {logoUrl ? (
          <>
            <img
              src={logoUrl}
              alt=""
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
                event.currentTarget.nextElementSibling?.removeAttribute('hidden');
              }}
            />
            <span hidden>{mark}</span>
          </>
        ) : (
          mark
        )}
      </span>
      <span className="min-w-0 text-sm font-medium leading-5 text-slate-200">{label}</span>
    </li>
  );
}

function App() {
  const { lang, t } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldRenderFloatingLines, setShouldRenderFloatingLines] = useState(false);
  const [heroTitleIndex, setHeroTitleIndex] = useState(0);

  const closeMenu = () => setIsMenuOpen(false);

  const whatsappUrl = whatsappLink(t.whatsapp.diagnosis);
  const budgetUrl = whatsappLink(t.whatsapp.budget);
  const heroTitle = t.hero.titles[heroTitleIndex % t.hero.titles.length];
  const techLabel = (name: string) => t.technologies.names[name] ?? name;

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/dusare' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/dusare_ia/' },
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/share/17vjMMv57u/' },
    { name: 'x.com', icon: X, url: 'https://x.com/Dusare_ia' },
    { name: 'WhatsApp', icon: MessageCircle, url: whatsappUrl },
    { name: 'Telegram', icon: Send, url: 'https://t.me/dusare_ia' },
  ];

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setShouldRenderFloatingLines(true);
    }, 150);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setHeroTitleIndex((currentIndex) => currentIndex + 1);
    }, 8000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section'));
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

    if (prefersReducedMotion) {
      sections.forEach((section) => {
        section.classList.add('rb-scroll-fade-visible');
      });
      return undefined;
    }

    let animationFrame = 0;

    sections.forEach((section) => {
      section.classList.add('rb-scroll-fade');
    });

    const updateSectionFade = () => {
      const viewportHeight = window.innerHeight || 1;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const visiblePixels = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const visibleRatio = clamp(visiblePixels / Math.min(rect.height, viewportHeight), 0, 1);
        const entryProgress = clamp((viewportHeight - rect.top) / (viewportHeight * 0.55), 0, 1);
        const exitProgress = clamp(rect.bottom / (viewportHeight * 0.62), 0, 1);
        const progress = clamp(Math.min(visibleRatio * 1.18, entryProgress, exitProgress), 0, 1);
        const opacity = 0.18 + progress * 0.82;
        const offset = (1 - progress) * 38;
        const blur = (1 - progress) * 10;

        section.style.opacity = opacity.toFixed(3);
        section.style.transform = `translateY(${offset.toFixed(1)}px)`;
        section.style.filter = `blur(${blur.toFixed(1)}px)`;
        section.classList.toggle('rb-scroll-fade-visible', progress > 0.72);
      });
    };

    const requestFadeUpdate = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateSectionFade);
    };

    updateSectionFade();
    window.addEventListener('scroll', requestFadeUpdate, { passive: true });
    window.addEventListener('resize', requestFadeUpdate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', requestFadeUpdate);
      window.removeEventListener('resize', requestFadeUpdate);
    };
  }, []);

  return (
    <div className="reactbits-theme min-h-screen text-white">
      <div className="rb-page-floating-lines" aria-hidden="true">
        {shouldRenderFloatingLines ? (
          <Suspense fallback={null}>
            <FloatingLines
              linesGradient={floatingLinesGradient}
              enabledWaves={[...floatingLinesWaves]}
              lineCount={floatingLinesCount}
              lineDistance={floatingLinesDistance}
              topWavePosition={{ x: 1.2, y: 0.72, rotate: -0.55 }}
              middleWavePosition={{ x: -0.25, y: 0.02, rotate: 0.28 }}
              bottomWavePosition={{ x: -1.35, y: -0.72, rotate: -0.38 }}
              bendRadius={8}
              bendStrength={-2}
              animationSpeed={1}
              parallaxStrength={0.16}
              interactive={false}
              parallax
            />
          </Suspense>
        ) : null}
      </div>
      <header className="rb-header fixed left-0 right-0 top-0 z-50 border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="rb-brand-link flex items-center" aria-label="Dusare">
            <span className="rb-brand-lockup flex items-center leading-none">
              <GradientText
                colors={['#67E8F9', '#10B981', '#A855F7']}
                animationSpeed={3}
                showBorder={false}
                className="rb-brand-name"
              >
                Dusare
              </GradientText>
              <RotatingText
                key={lang}
                texts={t.brandKeywords}
                mainClassName="rb-brand-rotating"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-120%', opacity: 0 }}
                splitBy="words"
                staggerDuration={0}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={1800}
              />
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rb-nav-link whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:text-white"
              >
                {t.nav[item.key]}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher />
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rb-button rb-button-primary hidden items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-semibold lg:inline-flex"
            >
              <Calendar className="h-4 w-4" />
              {t.nav.requestDiagnosis}
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              className="rb-icon-button rounded-md border border-white/10 p-2 text-slate-200"
              onClick={() => setIsMenuOpen((value) => !value)}
              aria-label={t.nav.openMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
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
                  {t.nav[item.key]}
                </a>
              ))}
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rb-button rb-button-primary mt-2 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold"
              >
                <Calendar className="h-4 w-4" />
                {t.nav.requestDiagnosis}
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section className="rb-hero relative overflow-hidden pt-20">
          <div className="rb-hero-content relative z-10 isolate mx-auto flex max-w-7xl flex-col items-center px-4 pb-16 pt-2 text-center sm:px-6 sm:pb-20 sm:pt-3 lg:px-8 lg:pb-24 lg:pt-4">
            <div className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center">
              <h1 className="rb-title mx-auto max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <BlurText
                  key={`${lang}-${heroTitleIndex}`}
                  text={heroTitle}
                  delay={120}
                  animateBy="words"
                  direction="top"
                  stepDuration={0.55}
                  animationFrom={{ filter: 'blur(16px)', opacity: 0, y: -24 }}
                  animationTo={[
                    { filter: 'blur(8px)', opacity: 0.82, y: 3 },
                    { filter: 'blur(0px)', opacity: 1, y: 0 },
                  ]}
                  className="rb-hero-title-rotator"
                />
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
                {t.hero.lead}
              </p>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
                {t.hero.sub}
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rb-button rb-button-primary inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold"
                >
                  {t.hero.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#servicios"
                  className="rb-button rb-button-ghost inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white"
                >
                  {t.hero.secondaryCta}
                </a>
              </div>

              <div className="rb-hero-stepper-wrap mt-6 flex w-full justify-center">
                <Stepper steps={t.hero.steps} label={t.hero.stepsLabel} />
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="rb-section rb-section-muted px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro eyebrow={t.services.eyebrow} title={t.services.title}>
              <p>{t.services.intro}</p>
            </SectionIntro>

            <div className="grid gap-5 lg:grid-cols-3">
              {serviceMeta.map(({ id, icon: Icon }) => {
                const service = t.services.items[id];

                return (
                  <article key={id} className="rb-card rb-service-card flex flex-col rounded-lg p-5">
                    <div className="mb-5 flex items-start gap-4">
                      <span className="rb-icon-tile grid h-11 w-11 flex-none place-items-center rounded-lg text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{service.simple}</p>
                      </div>
                    </div>
                    <div className="mb-6 grid gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                          {t.services.whenLabel}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-300">{service.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                          {t.services.audienceLabel}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-300">{service.audience}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                          {t.services.resultLabel}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-200">{service.result}</p>
                      </div>
                    </div>
                    <a
                      href={`#${id}`}
                      className="rb-button rb-button-ghost mt-auto inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-cyan-200"
                    >
                      {t.services.viewDetail}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="como-elegir" className="rb-section px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  {t.choose.eyebrow}
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {t.choose.title}
                </h2>
                <p className="mt-5 text-base leading-7 text-slate-300">{t.choose.body}</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rb-button rb-button-primary mt-7 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold"
                >
                  {t.choose.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {t.choose.modes.map((mode) => (
                  <article key={mode.title} className="rb-card rounded-lg p-5">
                    <h3 className="text-lg font-semibold text-white">{mode.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{mode.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="detalle-servicios" className="rb-section rb-section-muted px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro eyebrow={t.scope.eyebrow} title={t.scope.title}>
              <p>{t.scope.intro}</p>
            </SectionIntro>

            <div className="space-y-6">
              {serviceMeta.map(({ id, icon: Icon }) => {
                const service = t.services.items[id];

                return (
                  <article id={id} key={id} className="rb-panel scroll-mt-24 rounded-lg p-5 sm:p-7">
                    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                      <div>
                        <span className="rb-icon-tile grid h-12 w-12 place-items-center rounded-lg text-cyan-300">
                          <Icon className="h-6 w-6" />
                        </span>
                        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                          {service.title}
                        </h3>
                        <p className="mt-4 text-base leading-7 text-slate-300">{service.summary}</p>
                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                              {t.scope.timeLabel}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-slate-200">{service.time}</p>
                          </div>
                          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                              {t.scope.expectedLabel}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-slate-200">{service.expected}</p>
                          </div>
                        </div>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rb-button rb-button-primary mt-6 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold"
                        >
                          {service.cta}
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <DetailList title={t.scope.problemsLabel} items={service.problems} />
                        <DetailList title={t.scope.deliverablesLabel} items={service.deliverables} />
                        <DetailList title={t.scope.technologiesLabel} items={service.technologies} />
                        <DetailList title={t.scope.methodologyLabel} items={service.methodology} />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="metodo" className="rb-section px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro eyebrow={t.method.eyebrow} title={t.method.title}>
              <p>{t.method.intro}</p>
            </SectionIntro>

            <div className="grid gap-4 md:grid-cols-4">
              {t.method.steps.map((step, index) => (
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
            <SectionIntro title={t.industries.title} />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {industryMeta.map(({ id, icon: Icon }) => {
                const industry = t.industries.items[id];

                return (
                  <article key={id} className="rb-card rounded-lg p-5">
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
                {t.founder.eyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {t.founder.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300">{t.founder.body}</p>
              <div className="rb-panel mt-6 rounded-lg p-5">
                <p className="font-semibold text-white">Ariel Sebastián Duarte</p>
                <p className="mt-1 text-sm text-cyan-200">{t.founder.role}</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {t.founder.points.map((point) => (
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
            <SectionIntro title={t.technologies.title}>
              <p>{t.technologies.intro}</p>
            </SectionIntro>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rb-card rounded-lg p-5">
                <div className="mb-4 flex items-center gap-3">
                  <Globe2 className="h-5 w-5 text-cyan-300" />
                  <h3 className="font-semibold text-white">{t.technologies.groups.models}</h3>
                </div>
                <ul className="rb-tech-logo-grid">
                  {technologyGroups[0].technologies.map((tech) => (
                    <TechnologyLogo
                      key={`modelos-${tech.name}`}
                      name={tech.name}
                      label={techLabel(tech.name)}
                      mark={tech.mark}
                      accent={tech.accent}
                    />
                  ))}
                </ul>
              </div>

              <div className="rb-card rounded-lg p-5">
                <div className="mb-4 flex items-center gap-3">
                  <Layers className="h-5 w-5 text-cyan-300" />
                  <h3 className="font-semibold text-white">{t.technologies.groups.integration}</h3>
                </div>
                <ul className="rb-tech-logo-grid">
                  {technologyGroups[5].technologies.map((tech) => (
                    <TechnologyLogo
                      key={`integracion-${tech.name}`}
                      name={tech.name}
                      label={techLabel(tech.name)}
                      mark={tech.mark}
                      accent={tech.accent}
                    />
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {technologyGroups.slice(1, 5).map((group) => {
                const Icon = group.icon;

                return (
                  <article key={group.id} className="rb-card rounded-lg p-5">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="rb-icon-tile grid h-10 w-10 flex-none place-items-center rounded-lg text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-semibold text-white">{t.technologies.groups[group.id]}</h3>
                    </div>
                    <ul className="rb-tech-logo-grid">
                      {group.technologies.map((tech) => (
                        <TechnologyLogo
                          key={`${group.id}-${tech.name}`}
                          name={tech.name}
                          label={techLabel(tech.name)}
                          mark={tech.mark}
                          accent={tech.accent}
                        />
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contacto" className="rb-section px-4 py-16 sm:px-6 lg:px-8">
          <div className="rb-final-cta mx-auto max-w-5xl rounded-lg p-6 text-center sm:p-10">
            <Workflow className="mx-auto h-8 w-8 text-cyan-300" />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-200">
              {t.contact.body}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rb-button rb-button-primary inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold"
              >
                {t.contact.diagnosis}
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={budgetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rb-button rb-button-ghost inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white"
              >
                {t.contact.budget}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rb-button rb-button-ghost inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white"
              >
                {t.contact.meeting}
                <Calendar className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="rb-button rb-button-ghost inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white"
              >
                {CONTACT_EMAIL}
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="rb-footer border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">Dusare</p>
            <p className="mt-1 text-sm text-slate-400">{t.footer.tagline}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-3 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white"
            >
              <Mail className="h-4 w-4" />
              {CONTACT_EMAIL}
            </a>
            <p className="mt-3 text-xs text-slate-500">© 2026 Dusare Consult. {t.footer.rights}</p>
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
