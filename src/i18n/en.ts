import type { Translation } from './types';

const en: Translation = {
  meta: {
    title: 'Dusare | Private intelligence connected to your systems',
    description:
      'Dusare delivers private AI for businesses: assistants over internal documents, agents connected to systems, specialized models and security controls.',
  },
  whatsapp: {
    diagnosis: 'Hi Dusare, I would like to request an AI assessment.',
    budget: 'Hi Dusare, I would like to ask for a quote.',
  },
  language: {
    label: 'Change language',
    names: { es: 'Español', en: 'English', fr: 'Français', de: 'Deutsch' },
  },
  nav: {
    services: 'Services',
    choose: 'How to choose',
    scope: 'Scope',
    method: 'Method',
    contact: 'Contact',
    openMenu: 'Open menu',
    requestDiagnosis: 'Request an assessment',
  },
  brandKeywords: ['Processes', 'Private data', 'Agents', 'Documents', 'Automation', 'Control'],
  hero: {
    titles: [
      'Do you want to watch how others use AI, or integrate it into your company today?',
      'Your competitors are already testing AI. Is your company adopting it or just watching?',
      'How far could your business go if every key process had built-in intelligence?',
      'How far could your business go if every key process had built-in AI?',
      'Having AI is not enough. You have to make it work for your company.',
    ],
    lead: 'We implement Artificial Intelligence connected to your documents, data and systems, with security, traceability and operational control.',
    sub: 'We help you identify the right use case, choose the right architecture and take the solution to production without exposing sensitive information.',
    primaryCta: 'Request an assessment',
    secondaryCta: 'View services',
    steps: [
      'Process assessment',
      'Connected data and systems',
      'AI tailored to operations',
      'Production with control',
    ],
    stepsLabel: 'Completed steps',
  },
  services: {
    eyebrow: 'Quick overview',
    title: 'What we can implement',
    intro:
      'A simple read to understand what each service does, when it makes sense and what results your company can expect.',
    whenLabel: 'When it fits',
    audienceLabel: 'Who it is for',
    resultLabel: 'Result',
    viewDetail: 'View details',
    items: {
      'ia-privada': {
        title: 'Private AI for your operations',
        simple:
          'We build internal assistants that use company information without exposing sensitive data.',
        problem: 'When you need to query internal knowledge with permissions, traceability and control.',
        audience:
          'Organizations with sensitive data, complex processes or security and compliance requirements.',
        result: 'Faster, more reliable answers without losing control over your information.',
        summary:
          'We design private assistants connected to internal knowledge so teams and operational areas can query critical information securely.',
        problems: [
          'Information scattered across documents and systems.',
          'Risk of uploading sensitive data to public tools.',
          'Lack of clear permissions and traceability.',
        ],
        deliverables: [
          'Private or on-premise architecture.',
          'Assistant connected to internal sources.',
          'Role-based access control.',
          'Logs, metrics and operational documentation.',
        ],
        technologies: [
          'Open-weight models: Qwen, Mistral, Llama, Gemma.',
          'Enterprise serving: vLLM, private endpoints and OpenAI-compatible APIs.',
          'APIs: OpenAI-compatible API, REST, FastAPI, Node.js.',
          'Security: OAuth2, Keycloak, JWT, RBAC, VPN.',
          'Infrastructure: Docker, Kubernetes, Linux, private cloud or on-premise.',
          'Observability: OpenTelemetry, Prometheus, Grafana, Langfuse.',
        ],
        methodology: [
          'Data and use case assessment.',
          'Secure architecture design.',
          'Integration with internal sources.',
          'Accuracy and security testing.',
          'Launch and training.',
        ],
        time: '4 to 12 weeks depending on scope.',
        expected:
          'A private AI platform ready to operate with internal sources, clear permissions and production monitoring.',
        cta: 'Request a private AI assessment',
      },
      'rag-local': {
        title: 'Chat with internal documents',
        simple:
          'We turn PDFs, manuals, regulations and knowledge bases into a chat with verifiable sources.',
        problem:
          'When the information exists but is scattered, and finding a reliable answer is hard.',
        audience:
          'Support, operations, legal, compliance, HR and teams with lots of living documentation.',
        result: 'Fewer manual searches and consistent answers based on real documents.',
        summary:
          'We implement document chats that search internal sources, retrieve relevant context and answer with citations so every response can be validated.',
        problems: [
          'Documentation that is hard to search.',
          'Inconsistent answers across departments.',
          'A lot of time wasted looking for information.',
          'Need to answer using verifiable sources.',
        ],
        deliverables: [
          'Document ingestion and update pipeline.',
          'Private vector database.',
          'Chat with source citations.',
          'Answer quality evaluation.',
        ],
        technologies: [
          'Vector DB: Qdrant, pgvector, Weaviate, Milvus.',
          'Embeddings: bge-m3, e5, nomic, Qwen embeddings.',
          'Document parsing: PDF, DOCX, TXT, HTML, CSV.',
          'Orchestration: LangChain, LlamaIndex or a custom implementation.',
          'Models: Qwen, Mistral, Llama, Gemma.',
          'UI: React, Next.js or a custom interface aligned with permissions and internal workflows.',
        ],
        methodology: [
          'Document survey.',
          'Cleaning and normalization.',
          'Vector database indexing.',
          'Prompt and retrieval design.',
          'Answer evaluation.',
          'Private deployment.',
        ],
        time: '2 to 6 weeks.',
        expected:
          'A document chat that answers with sources, reduces manual searches and improves answer consistency.',
        cta: 'Build a chat with my documents',
      },
      'fine-tuning': {
        title: 'Specialized models',
        simple: 'We adapt models to follow your business formats, rules and criteria.',
        problem:
          'When a general-purpose model does not answer with the accuracy or structure your operation needs.',
        audience:
          'Teams with repetitive classification, extraction, support, writing or analysis tasks.',
        result: 'Greater consistency in tasks that repeat often and require clear criteria.',
        summary:
          'We specialize models with real input and output examples to improve performance on a specific business task.',
        problems: [
          'The model does not follow the expected format.',
          'Inconsistent answers on repetitive tasks.',
          'Need to classify, extract or transform information.',
          'Processes where RAG is not enough.',
        ],
        deliverables: [
          'Designed and documented dataset.',
          'Trained model or adapter.',
          'Before/after evaluation.',
          'Endpoint or artifact ready for deployment.',
          'Maintenance recommendations.',
        ],
        technologies: [
          'Fine-tuning: LoRA, QLoRA, PEFT.',
          'Frameworks: PyTorch, Hugging Face Transformers, Unsloth, Axolotl.',
          'Models: Qwen, Mistral, Llama, Gemma.',
          'Evaluation: test datasets, accuracy metrics, human validation.',
          'Export: LoRA adapters, private endpoints and documented artifacts for deployment.',
        ],
        methodology: [
          'Task definition.',
          'Dataset design.',
          'Cleaning and labeling.',
          'Base model selection.',
          'Training.',
          'Before/after evaluation.',
          'Deployment and documentation.',
        ],
        time: '4 to 8 weeks.',
        expected:
          'A model specialized for a specific task, measured against real examples and ready to integrate.',
        cta: 'Find out if I need a specialized model',
      },
      'cloud-training': {
        title: 'Model validation in the cloud',
        simple:
          'We test and adapt models on cloud GPUs before you invest in your own infrastructure.',
        problem: 'When you want to validate a solution without buying specialized hardware upfront.',
        audience: 'Teams that need to test quickly, train occasionally or compare alternatives.',
        result:
          'Lower upfront investment and a clearer decision on costs, quality and infrastructure.',
        summary:
          'We use GPU cloud infrastructure to validate models, measure quality and estimate costs before defining the final environment.',
        problems: [
          'High upfront hardware cost.',
          'No internal GPU infrastructure.',
          'Need to validate a use case quickly.',
          'Projects that may later move to local or private cloud.',
        ],
        deliverables: [
          'Configured cloud environment.',
          'Training or fine-tuning completed.',
          'Quality and cost measurement.',
          'Final architecture recommendation.',
          'Migration plan if applicable.',
        ],
        technologies: [
          'GPU Cloud: AWS SageMaker, Azure ML, Google Vertex AI, Lambda Cloud, RunPod, CoreWeave.',
          'Managed fine-tuning: OpenAI, Azure AI Foundry, Amazon Bedrock, Vertex AI, Together AI, Fireworks AI.',
          'Open-source training: Hugging Face, Axolotl, Unsloth, PEFT.',
          'Subsequent deployment: private API, cloud endpoint, local server or on-premise.',
        ],
        methodology: [
          'Privacy and compliance assessment.',
          'Cloud provider selection.',
          'Data preparation.',
          'Training or fine-tuning.',
          'Quality evaluation.',
          'Production cost estimate.',
          'Final architecture recommendation.',
        ],
        time: '2 to 8 weeks depending on complexity.',
        expected:
          'A technical and economic validation of the model without an upfront purchase of specialized hardware.',
        cta: 'Validate a model without buying hardware',
      },
      'agentes-ia': {
        title: 'Agents connected to systems',
        simple:
          'We build agents that query APIs, databases, CRM, ERP, ticketing and internal tools.',
        problem: 'When conversation is not enough and you need to act on real systems.',
        audience: 'Operations, support, purchasing, administration, claims and back office.',
        result: 'Controlled process automation, with permissions and validations.',
        summary:
          'We build agents that query information, execute authorized steps and assist users within controlled business workflows.',
        problems: [
          'Repetitive manual processes.',
          'Disconnected systems.',
          'Users who need to check multiple platforms.',
          'Delays in internal operations.',
          'Lack of intelligent automation.',
        ],
        deliverables: [
          'Process map and business rules.',
          'Agent tools and connectors.',
          'Permissions, validations and auditing.',
          'Human-approval workflows where applicable.',
          'Gradual deployment with monitoring.',
        ],
        technologies: [
          'REST, GraphQL, SOAP APIs.',
          'Databases: SQL Server, PostgreSQL, MySQL, Oracle.',
          'Integrations: SAP, CRM, ERP, ticketing, email, documents.',
          'Architecture: microservices, event-driven, queues, Kafka, SQS.',
          'Agents: tool calling, MCP servers, LangGraph or equivalent frameworks.',
          'Security: role-based permissions, auditing, validations, human-in-the-loop.',
        ],
        methodology: [
          'Process mapping.',
          'Identification of systems and permissions.',
          'Agent tool design.',
          'Connector implementation.',
          'Control of allowed actions.',
          'Auditing and traceability.',
          'Gradual production rollout.',
        ],
        time: '6 to 12 weeks.',
        expected:
          'An agent connected to real systems, with controlled actions, traceability and gradual rollout.',
        cta: 'Automate processes',
      },
      'gobierno-ia': {
        title: 'AI governance and security',
        simple: 'We define rules, permissions, auditing and monitoring to use AI responsibly.',
        problem:
          'When the organization needs to adopt AI without losing operational, legal or technical control.',
        audience: 'Regulated companies, IT, compliance, security, legal and leadership.',
        result: 'A clear framework to operate with security, traceability and continuous improvement.',
        summary:
          'We design technical and operational controls so every solution has permissions, auditing, quality criteria and defined owners.',
        problems: [
          'Risk of data leaks.',
          'Uncontrolled use of public tools.',
          'No auditing of answers.',
          'Legal or compliance uncertainty.',
        ],
        deliverables: [
          'Risk map and usage policies.',
          'Access controls and auditing.',
          'Guardrails and answer evaluation.',
          'Technical and functional monitoring.',
          'Continuous improvement plan.',
        ],
        technologies: [
          'RBAC, OAuth2, SSO, Keycloak.',
          'Secure logging and traceability.',
          'PII detection.',
          'Guardrails.',
          'Prompt injection defense.',
          'Groundedness and hallucination rate evaluation.',
          'Monitoring with Langfuse, OpenTelemetry, Grafana, Prometheus.',
        ],
        methodology: [
          'Risk review.',
          'Data classification.',
          'Usage policy definition.',
          'Control design.',
          'Audit implementation.',
          'Answer evaluation.',
          'Continuous improvement.',
        ],
        time: '2 to 8 weeks.',
        expected:
          'An operational framework to use AI with permissions, metrics, auditing and continuous improvement criteria.',
        cta: 'Design controls for my company',
      },
      'atencion-cliente': {
        title: 'Customer service agents',
        simple:
          'We build chat and voice agents that answer inquiries, qualify leads and book appointments 24/7.',
        problem:
          'When inquiry volume outgrows your team or customers wait too long for an answer.',
        audience:
          'Contact centers, support, sales, bookings, medical scheduling and any business with high inquiry volume.',
        result: 'Instant responses, lighter workload and a handoff to a person when it matters.',
        summary:
          'We deploy agents that respond on WhatsApp, web, email or phone, look up your systems and hand off to a person with full context when the case requires it.',
        problems: [
          'Repetitive inquiries that overwhelm the team.',
          'Customers left unanswered after business hours.',
          'Leads lost before they reach sales.',
          'Customer data scattered across several systems.',
        ],
        deliverables: [
          'Chat or voice agent connected to your channels.',
          'Integration with CRM, calendar, ticketing or management system.',
          'Handoff rules to people with full context.',
          'Metrics dashboard: resolution, response times and satisfaction.',
          'Ongoing tuning with real conversations.',
        ],
        technologies: [
          'Channels: WhatsApp Business, web chat, email and telephony.',
          'Voice: real-time speech recognition and synthesis, Twilio.',
          'CRM and support: HubSpot, Salesforce, Zendesk.',
          'Agents: tool calling, MCP servers, LangGraph.',
          'Knowledge: RAG over manuals, policies and FAQs.',
          'Monitoring: Langfuse, OpenTelemetry, conversation metrics.',
        ],
        methodology: [
          'Analysis of inquiries and contact reasons.',
          'Flow and handoff criteria design.',
          'Channel and system integration.',
          'Testing with real conversations.',
          'Gradual rollout by channel.',
          'Measurement and continuous improvement.',
        ],
        time: '3 to 8 weeks.',
        expected:
          'An agent that resolves frequent inquiries, captures leads and hands off to a person only when it adds value.',
        cta: 'Automate my customer service',
      },
      'cumplimiento-ai-act': {
        title: 'EU AI Act compliance',
        simple:
          'We prepare your company to comply with the European AI regulation: inventory, risk, documentation and oversight.',
        problem:
          'When you use or sell AI in Europe and need to prove compliance before an audit or a customer asks for it.',
        audience:
          'Companies operating in the European Union or selling to European customers, compliance, legal and IT.',
        result: 'Documented evidence of compliance and lower exposure to penalties.',
        summary:
          'We survey the AI systems in use, classify them by risk level and build the documentation, logs and controls the AI Act requires.',
        problems: [
          'Not knowing which AI systems are used across the company.',
          'Uncertainty about which use cases are high-risk.',
          'Transparency obligations in force since August 2026.',
          'December 2027 deadline for high-risk systems.',
        ],
        deliverables: [
          'AI system inventory.',
          'Risk classification under the AI Act.',
          'Technical documentation and activity logs.',
          'Human oversight procedures.',
          'Remediation plan with owners and deadlines.',
        ],
        technologies: [
          'Frameworks: EU AI Act, ISO/IEC 42001, NIST AI RMF.',
          'Alignment with GDPR, NIS2 and DORA.',
          'Secure logging and decision traceability.',
          'Bias, accuracy and robustness evaluation.',
          'Monitoring with Langfuse, OpenTelemetry and Grafana.',
        ],
        methodology: [
          'Survey of AI systems and vendors.',
          'Risk classification.',
          'Gap analysis.',
          'Documentation and logs.',
          'Human oversight design.',
          'Remediation plan and follow-up.',
        ],
        time: '3 to 10 weeks depending on the number of systems.',
        expected:
          'An audit-ready compliance file and a clear plan to meet the regulation deadlines.',
        cta: 'Assess my AI Act compliance',
      },
      'analisis-datos': {
        title: 'AI data analysis and reporting',
        simple:
          'We let you query databases in plain language and generate automated reports for every team.',
        problem:
          'When the data exists, but every report depends on an analyst or hand-built spreadsheets.',
        audience: 'Leadership, finance, operations, sales and teams that make data-driven decisions.',
        result: 'Answers in minutes and reports that build themselves, with verifiable numbers.',
        summary:
          'We connect AI to your databases and BI tools to answer business questions, flag deviations and generate recurring reports.',
        problems: [
          'Manual reports that take days.',
          'Reliance on a few people to query data.',
          'Information spread across sources with no single view.',
          'Deviations detected too late.',
        ],
        deliverables: [
          'Natural-language query assistant.',
          'Scheduled automated reports.',
          'Alerts on deviations and key metrics.',
          'Role-based permissions over the data.',
          'Traceability of every generated query.',
        ],
        technologies: [
          'Databases: PostgreSQL, SQL Server, MySQL, Oracle.',
          'Text-to-SQL with query validation.',
          'BI: Power BI, Looker Studio, Metabase.',
          'Python, pandas and notebooks for analysis.',
          'Models: OpenAI, Claude, Gemini, Qwen, Llama.',
        ],
        methodology: [
          'Survey of key questions and reports.',
          'Data source mapping.',
          'Semantic model and permissions.',
          'Accuracy testing with real cases.',
          'Report automation.',
          'Launch and training.',
        ],
        time: '3 to 8 weeks.',
        expected:
          'A reliable data assistant and automated reports that cut manual analysis work.',
        cta: 'Query my data with AI',
      },
      'capacitacion-ia': {
        title: 'AI training for teams',
        simple: 'We train each team to use AI productively and safely, with documented records.',
        problem:
          'When teams use AI without shared criteria or the company needs to prove AI training.',
        audience: 'Leadership, middle management, operations, IT and compliance.',
        result: 'Teams that use AI with judgment, fewer risks and proof of training.',
        summary:
          'We design hands-on, role-based workshops with real company cases and usage policies, and keep documented records to meet the AI Act AI literacy obligation.',
        problems: [
          'Uneven AI usage across teams.',
          'Sensitive data pasted into public tools.',
          'Low adoption of tools already paid for.',
          'AI literacy obligation in the European Union.',
        ],
        deliverables: [
          'Hands-on, role-based workshops.',
          'Responsible AI usage guide.',
          'Library of prompts and company use cases.',
          'Documented training records.',
          'Follow-up adoption assessment.',
        ],
        technologies: [
          'Assistants: ChatGPT, Claude, Gemini, Microsoft Copilot.',
          'Automation: n8n, Make.',
          'Usage policies and data classification.',
          'Article 4 of the EU AI Act.',
        ],
        methodology: [
          'Assessment of current usage.',
          'Role-based program design.',
          'Workshops with real cases.',
          'Usage policies and guides.',
          'Evaluation and records.',
        ],
        time: '1 to 4 weeks.',
        expected:
          'Trained teams, clear usage policies and the documentation needed to prove the training.',
        cta: 'Train my team',
      },
      'seguridad-agentes': {
        title: 'Agent security and red teaming',
        simple:
          'We attack your AI solutions in a controlled way to find flaws before someone else does.',
        problem:
          'When an agent accesses real data or systems and you need to know what happens if someone tries to manipulate it.',
        audience: 'Security, IT and product teams, and companies with agents in production.',
        result: 'Vulnerabilities found and fixed before they impact operations.',
        summary:
          'We test agents and assistants against prompt injection, data leakage and unauthorized actions, and leave defenses and automated tests for every new release.',
        problems: [
          'Agents with access to sensitive data or critical actions.',
          'Prompt injection risk through documents or emails.',
          'No AI-specific security testing.',
          'Customer requirements or security audits.',
        ],
        deliverables: [
          'Threat map of the AI system.',
          'Documented red teaming tests.',
          'Prioritized vulnerability report.',
          'Guardrails and controls implemented.',
          'Automated tests for every release.',
        ],
        technologies: [
          'OWASP Top 10 for LLM applications.',
          'Direct and indirect prompt injection.',
          'PII detection and data leakage prevention.',
          'Guardrails and action validation.',
          'Least privilege, auditing and human-in-the-loop.',
        ],
        methodology: [
          'Architecture and permissions review.',
          'Threat modeling.',
          'Controlled attacks.',
          'Finding prioritization.',
          'Defense implementation.',
          'Continuous regression testing.',
        ],
        time: '2 to 6 weeks.',
        expected:
          'An agent tested against real attacks, with active defenses and tests that run on every change.',
        cta: 'Assess my AI security',
      },
      'assessment-ia': {
        title: 'Assessment and roadmap',
        simple:
          'We identify real opportunities, risks, required data and next steps before you invest.',
        problem:
          'When the company wants to move forward but does not know where to start or what to prioritize.',
        audience:
          'Leadership, IT, operations and business units that need a roadmap before implementing.',
        result:
          'A concrete plan to decide what to implement first, what to avoid and how much effort it takes.',
        summary:
          'We help prioritize use cases, estimate effort, define architecture and build an actionable roadmap.',
        problems: [
          'Not knowing where to start.',
          'Isolated initiatives without a strategy.',
          'Risk of investing in the wrong tools.',
          'Lack of clarity between RAG, fine-tuning, agents or local models.',
        ],
        deliverables: [
          'AI opportunity map.',
          'Impact/effort/risk prioritization.',
          'Architecture recommendation.',
          'Actionable roadmap.',
          'Initial estimate of timelines, costs and dependencies.',
          'Business case with ROI metrics for each initiative.',
        ],
        technologies: [
          'Proprietary and open-weight LLMs.',
          'RAG.',
          'Fine-tuning.',
          'Vector DB.',
          'Cloud GPU.',
          'Local infrastructure.',
          'APIs and system integration.',
          'Security, compliance and observability.',
        ],
        methodology: [
          'Stakeholder interviews.',
          'Process survey.',
          'Analysis of available data.',
          'Use case identification.',
          'Prioritization by impact/effort/risk.',
          'Technology recommendation.',
          'Implementation roadmap.',
          'Initial estimate of timelines and costs.',
        ],
        time: '1 to 2 weeks.',
        expected:
          'A clear plan to decide what to implement first, what to avoid and how to move forward with lower risk.',
        cta: 'Request an assessment',
      },
    },
  },
  choose: {
    eyebrow: 'Technical decisions, no hype',
    title: 'You do not need to train a model from scratch',
    body: 'In most cases there is no need to build a model from scratch. First we define whether it makes more sense to search documents, connect systems, adapt a model or set up a private platform.',
    cta: 'Ask about the right architecture',
    modes: [
      { title: 'RAG', description: 'When AI needs to answer using internal documents.' },
      {
        title: 'Fine-tuning',
        description: 'When AI must learn a specific format, style or criteria.',
      },
      { title: 'AI agents', description: 'When AI needs to query systems or run processes.' },
      { title: 'Local LLM', description: 'When privacy and data control are the priority.' },
      { title: 'Cloud training', description: 'When you want to validate quickly without buying hardware.' },
    ],
  },
  scope: {
    eyebrow: 'Scope',
    title: 'What each implementation includes',
    intro:
      'For teams that need to review scope, deliverables, technologies, timelines and working method before moving forward.',
    timeLabel: 'Estimated time',
    expectedLabel: 'Expected result',
    problemsLabel: 'Common situations',
    deliverablesLabel: 'What we deliver',
    technologiesLabel: 'Technologies used',
    methodologyLabel: 'Working methodology',
  },
  method: {
    eyebrow: 'Method',
    title: 'How we take a solution to production',
    intro:
      'We start from the real process, choose the right architecture and move forward with validation, security and integration from the first MVP.',
    steps: [
      {
        title: 'Assessment',
        description:
          'We survey processes, documents, systems, risks, users and opportunities with real impact.',
      },
      {
        title: 'Architecture',
        description:
          'We define whether RAG, fine-tuning, agents, a local LLM, private cloud or a combination fits best.',
      },
      {
        title: 'Controlled MVP',
        description:
          'We build a first working version with metrics, initial security and user validation.',
      },
      {
        title: 'Production',
        description:
          'We add permissions, auditing, monitoring, integration, documentation and gradual rollout.',
      },
    ],
  },
  industries: {
    title: 'Industries where Dusare can accelerate results',
    items: {
      logistics: {
        title: 'Logistics and postal services',
        description:
          'Claims, smart tracking, document validation, integration with WMS, SAP, APIs and operational systems.',
      },
      health: {
        title: 'Healthcare and occupational medicine',
        description:
          'Certificate validation, document analysis, traceability, human review and rule enforcement.',
      },
      backoffice: {
        title: 'Administrative back office',
        description:
          'Emails, forms, invoices, delivery notes, employee files, approvals and repetitive tasks.',
      },
      security: {
        title: 'Electronic security',
        description:
          'Event analysis, automated reports, video analytics and integration with monitoring systems.',
      },
      legacy: {
        title: 'Companies with legacy systems',
        description:
          'Gradual modernization through APIs, MCP, events, automation and integration without replacing the whole ecosystem.',
      },
      smb: {
        title: 'SMBs adopting AI',
        description:
          'Use case prioritization, MVPs, training and guidance to implement AI with low risk.',
      },
      finance: {
        title: 'Finance and insurance',
        description:
          'Policy and claims analysis, customer onboarding, fraud prevention, regulatory reporting and compliance.',
      },
      professional: {
        title: 'Law and accounting firms',
        description:
          'Contract review, case file search, reconciliations, payroll and client answers backed by sources.',
      },
      contactCenter: {
        title: 'Contact centers and customer service',
        description:
          'Chat and voice agents, inquiry routing, call summaries and real-time assistance for agents.',
      },
    },
  },
  founder: {
    eyebrow: 'Founder-led',
    title: 'Technical judgment, business focus',
    body: 'Dusare is a founder-led boutique consultancy, driven by Ariel Sebastián Duarte. The work combines software architecture, automation and systems integration to turn concrete opportunities into production-ready solutions.',
    role: 'Founder & AI Solutions Architect',
    points: [
      'Production-oriented solution design.',
      'Integration with internal systems and real processes.',
      'Security, traceability and data control from day one.',
      'Answer evaluation and quality monitoring.',
      'Scalable, maintainable architecture.',
      'Support from assessment through operation.',
      'Vendor-agnostic approach: the right technology for each context.',
    ],
  },
  technologies: {
    title: 'Available platforms and technologies',
    intro:
      'Shown as tools we can integrate or use depending on the case; they do not represent clients, partners or certifications.',
    groups: {
      models: 'AI models and platforms',
      rag: 'RAG, search and documents',
      training: 'Fine-tuning and training',
      serving: 'Serving, infrastructure and privacy',
      governance: 'Governance, security and observability',
      integration: 'Integration and development',
    },
    names: {
      'Cloud privada': 'Private cloud',
    },
  },
  contact: {
    title: 'Want to automate a real process with private AI?',
    body: 'We start with an assessment to identify opportunities, risks, the required architecture and next implementation steps.',
    diagnosis: 'Request an assessment',
    budget: 'Request a quote',
    meeting: 'Book a meeting',
  },
  footer: {
    tagline: 'Private AI, automation and integration for production.',
    rights: 'All rights reserved.',
  },
};

export default en;
