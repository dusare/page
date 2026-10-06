import type { Translation } from './types';

const es: Translation = {
  meta: {
    title: 'Dusare | Inteligencia privada conectada a tus sistemas',
    description:
      'Dusare implementa IA privada para empresas: asistentes con documentos internos, agentes conectados a sistemas, modelos especializados y controles de seguridad.',
  },
  whatsapp: {
    diagnosis: 'Hola Dusare, quiero solicitar un diagnóstico IA.',
    budget: 'Hola Dusare, quiero consultar un presupuesto.',
  },
  language: {
    label: 'Cambiar idioma',
    names: { es: 'Español', en: 'English', fr: 'Français', de: 'Deutsch' },
  },
  nav: {
    services: 'Servicios',
    choose: 'Cómo elegir',
    scope: 'Alcance',
    method: 'Método',
    contact: 'Contacto',
    openMenu: 'Abrir menú',
    requestDiagnosis: 'Solicitar diagnóstico',
  },
  brandKeywords: ['Procesos', 'Datos privados', 'Agentes', 'Documentos', 'Automatización', 'Control'],
  hero: {
    titles: [
      '¿Querés mirar cómo otros aplican IA o querés integrarla ya a tu empresa?',
      'Tu competencia ya está probando IA. ¿Tu empresa la está adaptando o solo la está mirando?',
      '¿Hasta dónde podría llegar tu negocio si cada proceso clave tuviera inteligencia integrada?',
      '¿Hasta dónde podría llegar tu negocio si cada proceso clave tuviera IA integrada?',
      'No alcanza con tener IA. Hay que hacer que trabaje para tu empresa.',
    ],
    lead: 'Implementamos Inteligencia Artificial conectados a tus documentos, datos y sistemas, con seguridad, trazabilidad y control operativo.',
    sub: 'Te ayudamos a detectar el caso correcto, elegir la arquitectura adecuada y llevar la solución a producción sin exponer información sensible.',
    primaryCta: 'Solicitar diagnóstico',
    secondaryCta: 'Ver servicios',
    steps: [
      'Diagnóstico del proceso',
      'Datos y sistemas conectados',
      'IA adaptada a la operación',
      'Producción con control',
    ],
    stepsLabel: 'Pasos completados',
  },
  services: {
    eyebrow: 'Vista rápida',
    title: 'Qué podemos implementar',
    intro:
      'Una lectura simple para entender qué hace cada servicio, cuándo conviene y qué resultado puede obtener la empresa.',
    whenLabel: 'Cuándo conviene',
    audienceLabel: 'Para quién sirve',
    resultLabel: 'Resultado',
    viewDetail: 'Ver detalle',
    items: {
      'ia-privada': {
        title: 'IA privada para tu operación',
        simple:
          'Creamos asistentes internos que usan información de la empresa sin exponer datos sensibles.',
        problem: 'Cuando necesitás consultar conocimiento interno con permisos, trazabilidad y control.',
        audience:
          'Organizaciones con datos sensibles, procesos complejos o requisitos de seguridad y compliance.',
        result: 'Respuestas más rápidas y confiables sin perder control sobre la información.',
        summary:
          'Diseñamos asistentes privados conectados al conocimiento interno para que equipos y áreas operativas consulten información crítica con seguridad.',
        problems: [
          'Información dispersa en documentos y sistemas.',
          'Riesgo de cargar datos sensibles en herramientas públicas.',
          'Falta de permisos claros y trazabilidad.',
        ],
        deliverables: [
          'Arquitectura privada u on-premise.',
          'Asistente conectado a fuentes internas.',
          'Control de accesos por rol.',
          'Logs, métricas y documentación operativa.',
        ],
        technologies: [
          'Modelos open-weight: Qwen, Mistral, Llama, Gemma.',
          'Serving enterprise: vLLM, endpoints privados y APIs compatibles con OpenAI.',
          'APIs: OpenAI-compatible API, REST, FastAPI, Node.js.',
          'Seguridad: OAuth2, Keycloak, JWT, RBAC, VPN.',
          'Infraestructura: Docker, Kubernetes, Linux, cloud privada u on-premise.',
          'Observabilidad: OpenTelemetry, Prometheus, Grafana, Langfuse.',
        ],
        methodology: [
          'Assessment de datos y casos de uso.',
          'Diseño de arquitectura segura.',
          'Integración con fuentes internas.',
          'Pruebas de precisión y seguridad.',
          'Puesta en marcha y capacitación.',
        ],
        time: '4 a 12 semanas según alcance.',
        expected:
          'Una plataforma privada de IA lista para operar con fuentes internas, permisos claros y monitoreo productivo.',
        cta: 'Solicitar diagnóstico de IA privada',
      },
      'rag-local': {
        title: 'Chat con documentos internos',
        simple:
          'Convertimos PDFs, manuales, normativas y bases de conocimiento en un chat con fuentes verificables.',
        problem:
          'Cuando la información existe, pero está distribuida y cuesta encontrar una respuesta confiable.',
        audience:
          'Soporte, operaciones, legales, compliance, RR. HH. y equipos con mucha documentación viva.',
        result: 'Menos búsquedas manuales y respuestas consistentes basadas en documentos reales.',
        summary:
          'Implementamos chats documentales que buscan en fuentes internas, recuperan contexto relevante y responden con citas para validar cada respuesta.',
        problems: [
          'Documentación difícil de consultar.',
          'Respuestas inconsistentes entre áreas.',
          'Mucho tiempo perdido buscando información.',
          'Necesidad de responder usando fuentes verificables.',
        ],
        deliverables: [
          'Pipeline documental de carga y actualización.',
          'Base vectorial privada.',
          'Chat con citas a fuentes.',
          'Evaluación de calidad de respuestas.',
        ],
        technologies: [
          'Vector DB: Qdrant, pgvector, Weaviate, Milvus.',
          'Embeddings: bge-m3, e5, nomic, Qwen embeddings.',
          'Parsing documental: PDF, DOCX, TXT, HTML, CSV.',
          'Orquestación: LangChain, LlamaIndex o implementación propia.',
          'Modelos: Qwen, Mistral, Llama, Gemma.',
          'UI: React, Next.js o interfaz propia alineada a permisos y flujos internos.',
        ],
        methodology: [
          'Relevamiento documental.',
          'Limpieza y normalización.',
          'Indexación en base vectorial.',
          'Diseño de prompts y recuperación.',
          'Evaluación de respuestas.',
          'Deploy privado.',
        ],
        time: '2 a 6 semanas.',
        expected:
          'Un chat documental que responde con fuentes, reduce búsquedas manuales y mejora la consistencia de respuestas.',
        cta: 'Crear un chat con mis documentos',
      },
      'fine-tuning': {
        title: 'Modelos especializados',
        simple: 'Adaptamos modelos para que sigan formatos, reglas y criterios propios del negocio.',
        problem:
          'Cuando un modelo general no responde con la precisión o estructura que la operación necesita.',
        audience:
          'Equipos con tareas repetitivas de clasificación, extracción, soporte, redacción o análisis.',
        result: 'Mayor consistencia en tareas que se repiten muchas veces y necesitan criterios claros.',
        summary:
          'Especializamos modelos con ejemplos reales de entrada y salida para mejorar el desempeño en una tarea concreta del negocio.',
        problems: [
          'El modelo no sigue el formato esperado.',
          'Respuestas poco consistentes en tareas repetitivas.',
          'Necesidad de clasificar, extraer o transformar información.',
          'Procesos donde RAG no alcanza.',
        ],
        deliverables: [
          'Dataset diseñado y documentado.',
          'Modelo o adaptador entrenado.',
          'Evaluación antes/después.',
          'Endpoint o artefacto listo para deploy.',
          'Recomendaciones de mantenimiento.',
        ],
        technologies: [
          'Fine-tuning: LoRA, QLoRA, PEFT.',
          'Frameworks: PyTorch, Hugging Face Transformers, Unsloth, Axolotl.',
          'Modelos: Qwen, Mistral, Llama, Gemma.',
          'Evaluación: datasets de prueba, métricas de precisión, validación humana.',
          'Exportación: adaptadores LoRA, endpoints privados y artefactos documentados para deploy.',
        ],
        methodology: [
          'Definición de tarea.',
          'Diseño del dataset.',
          'Limpieza y etiquetado.',
          'Selección del modelo base.',
          'Entrenamiento.',
          'Evaluación antes/después.',
          'Deploy y documentación.',
        ],
        time: '4 a 8 semanas.',
        expected:
          'Un modelo especializado para una tarea concreta, medido contra ejemplos reales y preparado para integrarse.',
        cta: 'Evaluar si necesito un modelo especializado',
      },
      'cloud-training': {
        title: 'Validación de modelos en cloud',
        simple:
          'Probamos y adaptamos modelos con GPU en la nube antes de invertir en infraestructura propia.',
        problem: 'Cuando querés validar una solución sin comprar hardware especializado al inicio.',
        audience:
          'Equipos que necesitan probar rápido, entrenar ocasionalmente o comparar alternativas.',
        result:
          'Menor inversión inicial y una decisión más clara sobre costos, calidad e infraestructura.',
        summary:
          'Usamos infraestructura cloud con GPU para validar modelos, medir calidad y estimar costos antes de definir el entorno final.',
        problems: [
          'Alto costo inicial de hardware.',
          'Falta de infraestructura GPU interna.',
          'Necesidad de validar rápido un caso de uso.',
          'Proyectos que luego pueden migrar a local o cloud privada.',
        ],
        deliverables: [
          'Ambiente cloud configurado.',
          'Entrenamiento o fine-tuning ejecutado.',
          'Medición de calidad y costos.',
          'Recomendación de arquitectura final.',
          'Plan de migración si corresponde.',
        ],
        technologies: [
          'GPU Cloud: AWS SageMaker, Azure ML, Google Vertex AI, Lambda Cloud, RunPod, CoreWeave.',
          'Fine-tuning administrado: OpenAI, Azure AI Foundry, Amazon Bedrock, Vertex AI, Together AI, Fireworks AI.',
          'Open-source training: Hugging Face, Axolotl, Unsloth, PEFT.',
          'Deploy posterior: API privada, endpoint cloud, servidor local u on-premise.',
        ],
        methodology: [
          'Evaluación de privacidad y compliance.',
          'Selección de proveedor cloud.',
          'Preparación de datos.',
          'Entrenamiento o fine-tuning.',
          'Evaluación de calidad.',
          'Estimación de costos productivos.',
          'Recomendación de arquitectura final.',
        ],
        time: '2 a 8 semanas según complejidad.',
        expected:
          'Una validación técnica y económica del modelo sin compra inicial de hardware especializado.',
        cta: 'Validar un modelo sin comprar hardware',
      },
      'agentes-ia': {
        title: 'Agentes conectados a sistemas',
        simple:
          'Creamos agentes que consultan APIs, bases de datos, CRM, ERP, tickets y herramientas internas.',
        problem: 'Cuando la conversación no alcanza y hace falta operar sobre sistemas reales.',
        audience: 'Operaciones, soporte, compras, administración, reclamos y backoffice.',
        result: 'Automatización controlada de procesos, con permisos y validaciones.',
        summary:
          'Construimos agentes que consultan información, ejecutan pasos autorizados y asisten a usuarios dentro de flujos empresariales controlados.',
        problems: [
          'Procesos manuales repetitivos.',
          'Sistemas desconectados.',
          'Usuarios que necesitan consultar múltiples plataformas.',
          'Demora en operaciones internas.',
          'Falta de automatización inteligente.',
        ],
        deliverables: [
          'Mapa del proceso y reglas de negocio.',
          'Herramientas y conectores del agente.',
          'Permisos, validaciones y auditoría.',
          'Flujos con aprobación humana cuando aplique.',
          'Deploy gradual con monitoreo.',
        ],
        technologies: [
          'APIs REST, GraphQL, SOAP.',
          'Bases de datos: SQL Server, PostgreSQL, MySQL, Oracle.',
          'Integraciones: SAP, CRM, ERP, tickets, correo, documentos.',
          'Arquitectura: microservicios, event-driven, colas, Kafka, SQS.',
          'Agentes: tool calling, MCP servers, LangGraph o frameworks equivalentes.',
          'Seguridad: permisos por rol, auditoría, validaciones, human-in-the-loop.',
        ],
        methodology: [
          'Mapeo del proceso.',
          'Identificación de sistemas y permisos.',
          'Diseño de herramientas del agente.',
          'Implementación de conectores.',
          'Control de acciones permitidas.',
          'Auditoría y trazabilidad.',
          'Puesta en producción gradual.',
        ],
        time: '6 a 12 semanas.',
        expected:
          'Un agente conectado a sistemas reales, con acciones controladas, trazabilidad y operación gradual.',
        cta: 'Automatizar procesos',
      },
      'gobierno-ia': {
        title: 'Control y seguridad de IA',
        simple: 'Definimos reglas, permisos, auditoría y monitoreo para usar IA de forma responsable.',
        problem:
          'Cuando la organización necesita adoptar IA sin perder control operativo, legal o técnico.',
        audience: 'Empresas reguladas, tecnología, compliance, seguridad, legales y dirección.',
        result: 'Un marco claro para operar con seguridad, trazabilidad y mejora continua.',
        summary:
          'Diseñamos controles técnicos y operativos para que cada solución tenga permisos, auditoría, criterios de calidad y responsables definidos.',
        problems: [
          'Riesgo de fuga de datos.',
          'Uso no controlado de herramientas públicas.',
          'Falta de auditoría sobre respuestas.',
          'Incertidumbre legal o de compliance.',
        ],
        deliverables: [
          'Mapa de riesgos y políticas de uso.',
          'Controles de acceso y auditoría.',
          'Guardrails y evaluación de respuestas.',
          'Monitoreo técnico y funcional.',
          'Plan de mejora continua.',
        ],
        technologies: [
          'RBAC, OAuth2, SSO, Keycloak.',
          'Logging seguro y trazabilidad.',
          'Detección de PII.',
          'Guardrails.',
          'Prompt injection defense.',
          'Evaluación de groundedness y hallucination rate.',
          'Monitoreo con Langfuse, OpenTelemetry, Grafana, Prometheus.',
        ],
        methodology: [
          'Revisión de riesgos.',
          'Clasificación de datos.',
          'Definición de políticas de uso.',
          'Diseño de controles.',
          'Implementación de auditoría.',
          'Evaluación de respuestas.',
          'Mejora continua.',
        ],
        time: '2 a 8 semanas.',
        expected:
          'Un marco operativo para usar IA con permisos, métricas, auditoría y criterios de mejora continua.',
        cta: 'Diseñar controles para mi empresa',
      },
      'atencion-cliente': {
        title: 'Agentes de atención al cliente',
        simple:
          'Creamos agentes de chat y voz que atienden consultas, califican contactos y gestionan turnos las 24 horas.',
        problem:
          'Cuando el volumen de consultas supera al equipo o los clientes esperan demasiado para recibir respuesta.',
        audience:
          'Contact centers, soporte, ventas, reservas, turnos médicos y empresas con alto volumen de consultas.',
        result: 'Atención inmediata, menos carga operativa y derivación a una persona cuando hace falta.',
        summary:
          'Implementamos agentes que responden por WhatsApp, web, correo o teléfono, consultan tus sistemas y derivan a una persona con todo el contexto cuando el caso lo requiere.',
        problems: [
          'Consultas repetitivas que saturan al equipo.',
          'Clientes sin respuesta fuera del horario laboral.',
          'Contactos que se pierden antes de llegar a ventas.',
          'Información del cliente dispersa en varios sistemas.',
        ],
        deliverables: [
          'Agente de chat o voz conectado a tus canales.',
          'Integración con CRM, agenda, tickets o sistema de gestión.',
          'Reglas de derivación a personas con contexto completo.',
          'Panel de métricas: resolución, tiempos y satisfacción.',
          'Ajuste continuo con conversaciones reales.',
        ],
        technologies: [
          'Canales: WhatsApp Business, web chat, correo y telefonía.',
          'Voz: reconocimiento y síntesis de voz en tiempo real, Twilio.',
          'CRM y soporte: HubSpot, Salesforce, Zendesk.',
          'Agentes: tool calling, MCP servers, LangGraph.',
          'Conocimiento: RAG sobre manuales, políticas y preguntas frecuentes.',
          'Monitoreo: Langfuse, OpenTelemetry, métricas de conversación.',
        ],
        methodology: [
          'Análisis de consultas y motivos de contacto.',
          'Diseño de flujos y criterios de derivación.',
          'Integración con canales y sistemas.',
          'Pruebas con conversaciones reales.',
          'Lanzamiento gradual por canal.',
          'Medición y mejora continua.',
        ],
        time: '3 a 8 semanas.',
        expected:
          'Un agente que resuelve las consultas frecuentes, captura contactos y deriva a una persona solo cuando aporta valor.',
        cta: 'Automatizar mi atención al cliente',
      },
      'cumplimiento-ai-act': {
        title: 'Cumplimiento del EU AI Act',
        simple:
          'Preparamos a tu empresa para cumplir el reglamento europeo de IA: inventario, riesgos, documentación y supervisión.',
        problem:
          'Cuando usás o vendés IA en Europa y necesitás demostrar que cumplís antes de una auditoría o un cliente lo exija.',
        audience:
          'Empresas que operan en la Unión Europea o le venden a clientes europeos, compliance, legales y tecnología.',
        result: 'Evidencia documentada de cumplimiento y menor exposición a sanciones.',
        summary:
          'Relevamos los sistemas de IA en uso, los clasificamos por nivel de riesgo y armamos la documentación, los registros y los controles que exige el AI Act.',
        problems: [
          'No saber qué sistemas de IA se usan en la empresa.',
          'Incertidumbre sobre qué casos son de alto riesgo.',
          'Obligaciones de transparencia ya vigentes desde agosto de 2026.',
          'Plazo de diciembre de 2027 para sistemas de alto riesgo.',
        ],
        deliverables: [
          'Inventario de sistemas de IA.',
          'Clasificación de riesgo según el AI Act.',
          'Documentación técnica y registros de actividad.',
          'Procedimientos de supervisión humana.',
          'Plan de adecuación con responsables y plazos.',
        ],
        technologies: [
          'Marcos: EU AI Act, ISO/IEC 42001, NIST AI RMF.',
          'Relación con GDPR, NIS2 y DORA.',
          'Logging seguro y trazabilidad de decisiones.',
          'Evaluación de sesgo, precisión y robustez.',
          'Monitoreo con Langfuse, OpenTelemetry y Grafana.',
        ],
        methodology: [
          'Relevamiento de sistemas y proveedores de IA.',
          'Clasificación de riesgo.',
          'Análisis de brechas.',
          'Documentación y registros.',
          'Diseño de supervisión humana.',
          'Plan de adecuación y seguimiento.',
        ],
        time: '3 a 10 semanas según cantidad de sistemas.',
        expected:
          'Un expediente de cumplimiento listo para auditoría y un plan claro para llegar a los plazos del reglamento.',
        cta: 'Evaluar mi cumplimiento del AI Act',
      },
      'analisis-datos': {
        title: 'Análisis de datos y reportes con IA',
        simple:
          'Permitimos consultar bases de datos en lenguaje natural y generamos reportes automáticos para cada área.',
        problem:
          'Cuando los datos existen, pero cada reporte depende de un analista o de planillas armadas a mano.',
        audience: 'Dirección, finanzas, operaciones, comercial y equipos que toman decisiones con datos.',
        result: 'Respuestas en minutos y reportes que se generan solos, con los números verificables.',
        summary:
          'Conectamos la IA a tus bases de datos y herramientas de BI para responder preguntas de negocio, detectar desvíos y generar reportes periódicos.',
        problems: [
          'Reportes manuales que llevan días.',
          'Dependencia de pocas personas para consultar datos.',
          'Información en varias fuentes sin una vista única.',
          'Desvíos que se detectan tarde.',
        ],
        deliverables: [
          'Asistente de consultas en lenguaje natural.',
          'Reportes automáticos programados.',
          'Alertas sobre desvíos e indicadores clave.',
          'Permisos por rol sobre los datos.',
          'Trazabilidad de cada consulta generada.',
        ],
        technologies: [
          'Bases de datos: PostgreSQL, SQL Server, MySQL, Oracle.',
          'Text-to-SQL con validación de consultas.',
          'BI: Power BI, Looker Studio, Metabase.',
          'Python, pandas y notebooks para análisis.',
          'Modelos: OpenAI, Claude, Gemini, Qwen, Llama.',
        ],
        methodology: [
          'Relevamiento de preguntas y reportes clave.',
          'Mapeo de fuentes de datos.',
          'Modelo semántico y permisos.',
          'Pruebas de precisión con casos reales.',
          'Automatización de reportes.',
          'Puesta en marcha y capacitación.',
        ],
        time: '3 a 8 semanas.',
        expected:
          'Un asistente de datos confiable y reportes automáticos que reducen el trabajo manual de análisis.',
        cta: 'Consultar mis datos con IA',
      },
      'capacitacion-ia': {
        title: 'Capacitación en IA para equipos',
        simple:
          'Capacitamos a cada área para usar IA de forma productiva y segura, con registro documentado.',
        problem:
          'Cuando los equipos usan IA sin criterios comunes o la empresa necesita acreditar formación en IA.',
        audience: 'Dirección, mandos medios, equipos operativos, tecnología y compliance.',
        result: 'Equipos que usan IA con criterio, menos riesgos y evidencia de capacitación.',
        summary:
          'Diseñamos talleres prácticos por rol, con casos reales de la empresa y políticas de uso, y dejamos registro documentado para cumplir la obligación de alfabetización en IA del AI Act.',
        problems: [
          'Uso de IA desigual entre áreas.',
          'Datos sensibles cargados en herramientas públicas.',
          'Poca adopción de las herramientas ya contratadas.',
          'Obligación de alfabetización en IA en la Unión Europea.',
        ],
        deliverables: [
          'Talleres prácticos por rol.',
          'Guía de uso responsable de IA.',
          'Biblioteca de prompts y casos de la empresa.',
          'Registro documentado de la capacitación.',
          'Evaluación de adopción posterior.',
        ],
        technologies: [
          'Asistentes: ChatGPT, Claude, Gemini, Microsoft Copilot.',
          'Automatización: n8n, Make.',
          'Políticas de uso y clasificación de datos.',
          'Artículo 4 del EU AI Act.',
        ],
        methodology: [
          'Diagnóstico de uso actual.',
          'Diseño del programa por rol.',
          'Talleres con casos reales.',
          'Políticas y guías de uso.',
          'Evaluación y registro.',
        ],
        time: '1 a 4 semanas.',
        expected:
          'Equipos capacitados, políticas claras de uso y la documentación necesaria para acreditar la formación.',
        cta: 'Capacitar a mi equipo',
      },
      'seguridad-agentes': {
        title: 'Seguridad de agentes y red teaming',
        simple:
          'Atacamos tus soluciones de IA de forma controlada para encontrar fallas antes de que lo haga otro.',
        problem:
          'Cuando un agente accede a datos o sistemas reales y necesitás saber qué pasa si alguien intenta manipularlo.',
        audience: 'Equipos de seguridad, tecnología, producto y empresas con agentes en producción.',
        result: 'Vulnerabilidades detectadas y corregidas antes de que impacten en la operación.',
        summary:
          'Evaluamos agentes y asistentes contra prompt injection, fuga de datos y acciones no autorizadas, y dejamos defensas y pruebas automáticas para cada nueva versión.',
        problems: [
          'Agentes con acceso a datos sensibles o acciones críticas.',
          'Riesgo de prompt injection a través de documentos o correos.',
          'Falta de pruebas de seguridad específicas para IA.',
          'Requisitos de clientes o auditorías de seguridad.',
        ],
        deliverables: [
          'Mapa de amenazas del sistema de IA.',
          'Pruebas de red teaming documentadas.',
          'Informe de vulnerabilidades priorizadas.',
          'Guardrails y controles implementados.',
          'Pruebas automáticas para cada versión.',
        ],
        technologies: [
          'OWASP Top 10 para aplicaciones LLM.',
          'Prompt injection directa e indirecta.',
          'Detección de PII y prevención de fuga de datos.',
          'Guardrails y validación de acciones.',
          'Permisos mínimos, auditoría y human-in-the-loop.',
        ],
        methodology: [
          'Relevamiento de arquitectura y permisos.',
          'Modelado de amenazas.',
          'Ataques controlados.',
          'Priorización de hallazgos.',
          'Implementación de defensas.',
          'Pruebas de regresión continuas.',
        ],
        time: '2 a 6 semanas.',
        expected:
          'Un agente probado contra ataques reales, con defensas activas y pruebas que se repiten en cada cambio.',
        cta: 'Evaluar la seguridad de mi IA',
      },
      'assessment-ia': {
        title: 'Diagnóstico y hoja de ruta',
        simple:
          'Identificamos oportunidades reales, riesgos, datos necesarios y próximos pasos antes de invertir.',
        problem:
          'Cuando la empresa quiere avanzar, pero no sabe por dónde empezar ni qué conviene priorizar.',
        audience:
          'Dirección, tecnología, operaciones y áreas de negocio que necesitan una hoja de ruta antes de implementar.',
        result:
          'Un plan concreto para decidir qué implementar primero, qué evitar y cuánto esfuerzo requiere.',
        summary:
          'Ayudamos a priorizar casos de uso, estimar esfuerzo, definir arquitectura y construir un roadmap implementable.',
        problems: [
          'No saber por dónde empezar.',
          'Iniciativas aisladas sin estrategia.',
          'Riesgo de invertir en herramientas incorrectas.',
          'Falta de claridad entre RAG, fine-tuning, agentes o modelos locales.',
        ],
        deliverables: [
          'Mapa de oportunidades de IA.',
          'Priorización impacto/esfuerzo/riesgo.',
          'Recomendación de arquitectura.',
          'Roadmap implementable.',
          'Estimación inicial de tiempos, costos y dependencias.',
          'Caso de negocio con métricas de ROI para cada iniciativa.',
        ],
        technologies: [
          'LLMs propietarios y open-weight.',
          'RAG.',
          'Fine-tuning.',
          'Vector DB.',
          'Cloud GPU.',
          'Infraestructura local.',
          'APIs e integración con sistemas.',
          'Seguridad, compliance y observabilidad.',
        ],
        methodology: [
          'Entrevistas con stakeholders.',
          'Relevamiento de procesos.',
          'Análisis de datos disponibles.',
          'Identificación de casos de uso.',
          'Priorización por impacto/esfuerzo/riesgo.',
          'Recomendación tecnológica.',
          'Roadmap de implementación.',
          'Estimación inicial de tiempos y costos.',
        ],
        time: '1 a 2 semanas.',
        expected:
          'Un plan claro para decidir qué implementar primero, qué evitar y cómo avanzar con menor riesgo.',
        cta: 'Solicitar diagnóstico',
      },
    },
  },
  choose: {
    eyebrow: 'Decisión técnica sin humo',
    title: 'No necesitás entrenar un modelo desde cero',
    body: 'En la mayoría de los casos no hace falta crear un modelo desde cero. Primero definimos si conviene buscar en documentos, conectar sistemas, adaptar un modelo o montar una plataforma privada.',
    cta: 'Consultar arquitectura adecuada',
    modes: [
      { title: 'RAG', description: 'Cuando la IA necesita responder usando documentos internos.' },
      {
        title: 'Fine-tuning',
        description: 'Cuando la IA debe aprender formato, estilo o criterios específicos.',
      },
      { title: 'Agentes IA', description: 'Cuando la IA necesita consultar sistemas o ejecutar procesos.' },
      { title: 'LLM local', description: 'Cuando la privacidad y el control de datos son prioridad.' },
      { title: 'Cloud training', description: 'Cuando se quiere validar rápido sin comprar hardware.' },
    ],
  },
  scope: {
    eyebrow: 'Alcance',
    title: 'Qué incluye cada implementación',
    intro:
      'Para equipos que necesitan revisar alcance, entregables, tecnologías, tiempos y método de trabajo antes de avanzar.',
    timeLabel: 'Tiempo estimado',
    expectedLabel: 'Resultado esperado',
    problemsLabel: 'Situaciones habituales',
    deliverablesLabel: 'Qué entregamos',
    technologiesLabel: 'Tecnologías utilizadas',
    methodologyLabel: 'Metodología de trabajo',
  },
  method: {
    eyebrow: 'Método',
    title: 'Cómo llevamos una solución a producción',
    intro:
      'Partimos del proceso real, elegimos la arquitectura adecuada y avanzamos con validación, seguridad e integración desde el primer MVP.',
    steps: [
      {
        title: 'Diagnóstico',
        description:
          'Relevamos procesos, documentos, sistemas, riesgos, usuarios y oportunidades con impacto real.',
      },
      {
        title: 'Arquitectura',
        description:
          'Definimos si conviene RAG, fine-tuning, agentes, LLM local, cloud privada o una combinación.',
      },
      {
        title: 'MVP controlado',
        description:
          'Construimos una primera versión funcional con métricas, seguridad inicial y validación con usuarios.',
      },
      {
        title: 'Producción',
        description:
          'Incorporamos permisos, auditoría, monitoreo, integración, documentación y operación gradual.',
      },
    ],
  },
  industries: {
    title: 'Industrias donde Dusare puede acelerar resultados',
    items: {
      logistics: {
        title: 'Logística y correo',
        description:
          'Reclamos, tracking inteligente, validación documental, integración con WMS, SAP, APIs y sistemas operativos.',
      },
      health: {
        title: 'Salud y medicina laboral',
        description:
          'Validación de certificados, análisis documental, trazabilidad, revisión humana y control de reglas.',
      },
      backoffice: {
        title: 'Backoffice administrativo',
        description:
          'Emails, formularios, facturas, remitos, legajos, aprobaciones y tareas repetitivas.',
      },
      security: {
        title: 'Seguridad electrónica',
        description:
          'Análisis de eventos, reportes automáticos, video analytics e integración con sistemas de monitoreo.',
      },
      legacy: {
        title: 'Empresas con sistemas legacy',
        description:
          'Modernización gradual mediante APIs, MCP, eventos, automatización e integración sin reemplazar todo el ecosistema.',
      },
      smb: {
        title: 'PyMEs en adopción de IA',
        description:
          'Priorización de casos de uso, MVPs, capacitación y acompañamiento para implementar IA con bajo riesgo.',
      },
      finance: {
        title: 'Finanzas y seguros',
        description:
          'Análisis de pólizas y siniestros, onboarding de clientes, prevención de fraude, reportes regulatorios y cumplimiento.',
      },
      professional: {
        title: 'Estudios jurídicos y contables',
        description:
          'Revisión de contratos, búsqueda en expedientes, conciliaciones, liquidaciones y respuestas a clientes con fuentes.',
      },
      contactCenter: {
        title: 'Contact centers y atención al cliente',
        description:
          'Agentes de chat y voz, clasificación de consultas, resúmenes de llamadas y asistencia en tiempo real a operadores.',
      },
    },
  },
  founder: {
    eyebrow: 'Founder-led',
    title: 'Criterio técnico y foco en negocio',
    body: 'Dusare es una consultora boutique founder-led, impulsada por Ariel Sebastián Duarte. El trabajo combina arquitectura de software, automatización e integración de sistemas para convertir oportunidades concretas en soluciones productivas.',
    role: 'Founder & AI Solutions Architect',
    points: [
      'Diseño de soluciones orientadas a producción.',
      'Integración con sistemas internos y procesos reales.',
      'Seguridad, trazabilidad y control de datos desde el inicio.',
      'Evaluación de respuestas y monitoreo de calidad.',
      'Arquitectura escalable y mantenible.',
      'Acompañamiento desde diagnóstico hasta operación.',
      'Enfoque agnóstico: se usa la tecnología adecuada para cada contexto.',
    ],
  },
  technologies: {
    title: 'Plataformas y tecnologías disponibles',
    intro:
      'Se muestran como herramientas que podemos integrar o utilizar según el caso; no representan clientes, partners ni certificaciones.',
    groups: {
      models: 'Modelos y plataformas IA',
      rag: 'RAG, búsqueda y documentos',
      training: 'Fine-tuning y entrenamiento',
      serving: 'Serving, infraestructura y privacidad',
      governance: 'Gobierno, seguridad y observabilidad',
      integration: 'Integración y desarrollo',
    },
    names: {},
  },
  contact: {
    title: '¿Querés automatizar un proceso real con IA privada?',
    body: 'Empezamos con un diagnóstico para identificar oportunidades, riesgos, arquitectura necesaria y próximos pasos de implementación.',
    diagnosis: 'Solicitar diagnóstico',
    budget: 'Consultar presupuesto',
    meeting: 'Agendar una reunión',
  },
  footer: {
    tagline: 'IA privada, automatización e integración para producción.',
    rights: 'Todos los derechos reservados.',
  },
};

export default es;
