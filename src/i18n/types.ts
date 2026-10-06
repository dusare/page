export const LANGS = ['es', 'en', 'fr', 'de'] as const;
export type Lang = (typeof LANGS)[number];

export type ServiceId =
  | 'ia-privada'
  | 'rag-local'
  | 'fine-tuning'
  | 'cloud-training'
  | 'agentes-ia'
  | 'gobierno-ia'
  | 'assessment-ia'
  | 'atencion-cliente'
  | 'cumplimiento-ai-act'
  | 'analisis-datos'
  | 'capacitacion-ia'
  | 'seguridad-agentes';

export type IndustryId =
  | 'logistics'
  | 'health'
  | 'backoffice'
  | 'security'
  | 'legacy'
  | 'smb'
  | 'finance'
  | 'professional'
  | 'contactCenter';

export type TechGroupId = 'models' | 'rag' | 'training' | 'serving' | 'governance' | 'integration';

export interface ServiceText {
  title: string;
  simple: string;
  problem: string;
  audience: string;
  result: string;
  summary: string;
  problems: string[];
  deliverables: string[];
  technologies: string[];
  methodology: string[];
  time: string;
  expected: string;
  cta: string;
}

export interface TitledText {
  title: string;
  description: string;
}

export interface Translation {
  meta: {
    title: string;
    description: string;
  };
  whatsapp: {
    diagnosis: string;
    budget: string;
  };
  language: {
    label: string;
    names: Record<Lang, string>;
  };
  nav: {
    services: string;
    choose: string;
    scope: string;
    method: string;
    contact: string;
    openMenu: string;
    requestDiagnosis: string;
  };
  brandKeywords: string[];
  hero: {
    titles: string[];
    lead: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
    steps: string[];
    stepsLabel: string;
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    whenLabel: string;
    audienceLabel: string;
    resultLabel: string;
    viewDetail: string;
    items: Record<ServiceId, ServiceText>;
  };
  choose: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    modes: TitledText[];
  };
  scope: {
    eyebrow: string;
    title: string;
    intro: string;
    timeLabel: string;
    expectedLabel: string;
    problemsLabel: string;
    deliverablesLabel: string;
    technologiesLabel: string;
    methodologyLabel: string;
  };
  method: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: TitledText[];
  };
  industries: {
    title: string;
    items: Record<IndustryId, TitledText>;
  };
  founder: {
    eyebrow: string;
    title: string;
    body: string;
    role: string;
    points: string[];
  };
  technologies: {
    title: string;
    intro: string;
    groups: Record<TechGroupId, string>;
    names: Record<string, string>;
  };
  contact: {
    title: string;
    body: string;
    diagnosis: string;
    budget: string;
    meeting: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
}
