import type { Translation } from './types';

const de: Translation = {
  meta: {
    title: 'Dusare | Private Intelligenz, verbunden mit Ihren Systemen',
    description:
      'Dusare implementiert private KI für Unternehmen: Assistenten für interne Dokumente, mit Systemen verbundene Agenten, spezialisierte Modelle und Sicherheitskontrollen.',
  },
  whatsapp: {
    diagnosis: 'Hallo Dusare, ich möchte eine KI-Analyse anfragen.',
    budget: 'Hallo Dusare, ich möchte ein Angebot anfragen.',
  },
  language: {
    label: 'Sprache ändern',
    names: { es: 'Español', en: 'English', fr: 'Français', de: 'Deutsch' },
  },
  nav: {
    services: 'Leistungen',
    choose: 'Auswahl',
    scope: 'Umfang',
    method: 'Methode',
    contact: 'Kontakt',
    openMenu: 'Menü öffnen',
    requestDiagnosis: 'Analyse anfragen',
  },
  brandKeywords: ['Prozesse', 'Private Daten', 'Agenten', 'Dokumente', 'Automatisierung', 'Kontrolle'],
  hero: {
    titles: [
      'Wollen Sie zusehen, wie andere KI einsetzen, oder sie jetzt in Ihr Unternehmen integrieren?',
      'Ihre Konkurrenz testet bereits KI. Setzt Ihr Unternehmen sie ein oder schaut es nur zu?',
      'Wie weit könnte Ihr Unternehmen kommen, wenn jeder Kernprozess integrierte Intelligenz hätte?',
      'Wie weit könnte Ihr Unternehmen kommen, wenn jeder Kernprozess integrierte KI hätte?',
      'KI zu haben reicht nicht. Sie muss für Ihr Unternehmen arbeiten.',
    ],
    lead: 'Wir implementieren Künstliche Intelligenz, verbunden mit Ihren Dokumenten, Daten und Systemen – sicher, nachvollziehbar und unter operativer Kontrolle.',
    sub: 'Wir helfen Ihnen, den richtigen Anwendungsfall zu finden, die passende Architektur zu wählen und die Lösung in Produktion zu bringen, ohne sensible Informationen preiszugeben.',
    primaryCta: 'Analyse anfragen',
    secondaryCta: 'Leistungen ansehen',
    steps: [
      'Prozessanalyse',
      'Verbundene Daten und Systeme',
      'KI für Ihren Betrieb',
      'Produktion mit Kontrolle',
    ],
    stepsLabel: 'Abgeschlossene Schritte',
  },
  services: {
    eyebrow: 'Kurzüberblick',
    title: 'Was wir umsetzen können',
    intro:
      'Ein einfacher Überblick darüber, was jede Leistung bewirkt, wann sie sinnvoll ist und welches Ergebnis Ihr Unternehmen erwarten kann.',
    whenLabel: 'Wann sinnvoll',
    audienceLabel: 'Für wen',
    resultLabel: 'Ergebnis',
    viewDetail: 'Details ansehen',
    items: {
      'ia-privada': {
        title: 'Private KI für Ihren Betrieb',
        simple:
          'Wir entwickeln interne Assistenten, die Unternehmenswissen nutzen, ohne sensible Daten preiszugeben.',
        problem:
          'Wenn Sie internes Wissen mit Berechtigungen, Nachvollziehbarkeit und Kontrolle abfragen müssen.',
        audience:
          'Organisationen mit sensiblen Daten, komplexen Prozessen oder Sicherheits- und Compliance-Anforderungen.',
        result: 'Schnellere, verlässlichere Antworten, ohne die Kontrolle über Informationen zu verlieren.',
        summary:
          'Wir konzipieren private Assistenten, die mit internem Wissen verbunden sind, damit Teams und operative Bereiche kritische Informationen sicher abfragen können.',
        problems: [
          'Informationen verstreut über Dokumente und Systeme.',
          'Risiko, sensible Daten in öffentliche Tools hochzuladen.',
          'Fehlende klare Berechtigungen und Nachvollziehbarkeit.',
        ],
        deliverables: [
          'Private oder On-Premise-Architektur.',
          'Assistent mit Anbindung an interne Quellen.',
          'Rollenbasierte Zugriffskontrolle.',
          'Logs, Metriken und Betriebsdokumentation.',
        ],
        technologies: [
          'Open-Weight-Modelle: Qwen, Mistral, Llama, Gemma.',
          'Enterprise-Serving: vLLM, private Endpoints und OpenAI-kompatible APIs.',
          'APIs: OpenAI-compatible API, REST, FastAPI, Node.js.',
          'Sicherheit: OAuth2, Keycloak, JWT, RBAC, VPN.',
          'Infrastruktur: Docker, Kubernetes, Linux, Private Cloud oder On-Premise.',
          'Observability: OpenTelemetry, Prometheus, Grafana, Langfuse.',
        ],
        methodology: [
          'Bewertung von Daten und Anwendungsfällen.',
          'Entwurf einer sicheren Architektur.',
          'Integration interner Quellen.',
          'Genauigkeits- und Sicherheitstests.',
          'Inbetriebnahme und Schulung.',
        ],
        time: '4 bis 12 Wochen je nach Umfang.',
        expected:
          'Eine private KI-Plattform, betriebsbereit mit internen Quellen, klaren Berechtigungen und Produktionsmonitoring.',
        cta: 'Analyse für private KI anfragen',
      },
      'rag-local': {
        title: 'Chat mit internen Dokumenten',
        simple:
          'Wir verwandeln PDFs, Handbücher, Richtlinien und Wissensdatenbanken in einen Chat mit überprüfbaren Quellen.',
        problem:
          'Wenn die Informationen vorhanden, aber verteilt sind und verlässliche Antworten schwer zu finden sind.',
        audience:
          'Support, Betrieb, Recht, Compliance, HR und Teams mit viel lebendiger Dokumentation.',
        result: 'Weniger manuelle Suche und konsistente Antworten auf Basis realer Dokumente.',
        summary:
          'Wir implementieren Dokumenten-Chats, die interne Quellen durchsuchen, relevanten Kontext abrufen und mit Quellenangaben antworten, damit jede Antwort überprüfbar ist.',
        problems: [
          'Schwer durchsuchbare Dokumentation.',
          'Uneinheitliche Antworten zwischen Abteilungen.',
          'Viel Zeitverlust bei der Informationssuche.',
          'Bedarf an Antworten mit überprüfbaren Quellen.',
        ],
        deliverables: [
          'Dokumenten-Pipeline für Import und Aktualisierung.',
          'Private Vektordatenbank.',
          'Chat mit Quellenangaben.',
          'Bewertung der Antwortqualität.',
        ],
        technologies: [
          'Vector DB: Qdrant, pgvector, Weaviate, Milvus.',
          'Embeddings: bge-m3, e5, nomic, Qwen embeddings.',
          'Dokumenten-Parsing: PDF, DOCX, TXT, HTML, CSV.',
          'Orchestrierung: LangChain, LlamaIndex oder eigene Implementierung.',
          'Modelle: Qwen, Mistral, Llama, Gemma.',
          'UI: React, Next.js oder eigene Oberfläche, abgestimmt auf Berechtigungen und interne Abläufe.',
        ],
        methodology: [
          'Dokumentenerhebung.',
          'Bereinigung und Normalisierung.',
          'Indexierung in der Vektordatenbank.',
          'Prompt- und Retrieval-Design.',
          'Bewertung der Antworten.',
          'Privates Deployment.',
        ],
        time: '2 bis 6 Wochen.',
        expected:
          'Ein Dokumenten-Chat, der mit Quellen antwortet, manuelle Suche reduziert und die Konsistenz der Antworten verbessert.',
        cta: 'Chat mit meinen Dokumenten erstellen',
      },
      'fine-tuning': {
        title: 'Spezialisierte Modelle',
        simple:
          'Wir passen Modelle an, damit sie Ihre geschäftlichen Formate, Regeln und Kriterien einhalten.',
        problem:
          'Wenn ein allgemeines Modell nicht die Genauigkeit oder Struktur liefert, die Ihr Betrieb braucht.',
        audience:
          'Teams mit wiederkehrenden Aufgaben in Klassifizierung, Extraktion, Support, Texterstellung oder Analyse.',
        result: 'Mehr Konsistenz bei Aufgaben, die sich häufig wiederholen und klare Kriterien erfordern.',
        summary:
          'Wir spezialisieren Modelle mit realen Ein- und Ausgabebeispielen, um die Leistung bei einer konkreten Geschäftsaufgabe zu verbessern.',
        problems: [
          'Das Modell hält das erwartete Format nicht ein.',
          'Inkonsistente Antworten bei wiederkehrenden Aufgaben.',
          'Bedarf, Informationen zu klassifizieren, zu extrahieren oder umzuwandeln.',
          'Prozesse, bei denen RAG nicht ausreicht.',
        ],
        deliverables: [
          'Konzipierter und dokumentierter Datensatz.',
          'Trainiertes Modell oder Adapter.',
          'Vorher-/Nachher-Bewertung.',
          'Deployment-fertiger Endpoint oder Artefakt.',
          'Wartungsempfehlungen.',
        ],
        technologies: [
          'Fine-Tuning: LoRA, QLoRA, PEFT.',
          'Frameworks: PyTorch, Hugging Face Transformers, Unsloth, Axolotl.',
          'Modelle: Qwen, Mistral, Llama, Gemma.',
          'Bewertung: Testdatensätze, Genauigkeitsmetriken, menschliche Validierung.',
          'Export: LoRA-Adapter, private Endpoints und dokumentierte Artefakte für das Deployment.',
        ],
        methodology: [
          'Definition der Aufgabe.',
          'Entwurf des Datensatzes.',
          'Bereinigung und Annotation.',
          'Auswahl des Basismodells.',
          'Training.',
          'Vorher-/Nachher-Bewertung.',
          'Deployment und Dokumentation.',
        ],
        time: '4 bis 8 Wochen.',
        expected:
          'Ein Modell, spezialisiert auf eine konkrete Aufgabe, an realen Beispielen gemessen und bereit zur Integration.',
        cta: 'Prüfen, ob ich ein spezialisiertes Modell brauche',
      },
      'cloud-training': {
        title: 'Modellvalidierung in der Cloud',
        simple:
          'Wir testen und adaptieren Modelle auf Cloud-GPUs, bevor Sie in eigene Infrastruktur investieren.',
        problem:
          'Wenn Sie eine Lösung validieren möchten, ohne vorab spezielle Hardware zu kaufen.',
        audience:
          'Teams, die schnell testen, gelegentlich trainieren oder Alternativen vergleichen müssen.',
        result:
          'Geringere Anfangsinvestition und eine klarere Entscheidung über Kosten, Qualität und Infrastruktur.',
        summary:
          'Wir nutzen Cloud-Infrastruktur mit GPUs, um Modelle zu validieren, Qualität zu messen und Kosten abzuschätzen, bevor die Zielumgebung festgelegt wird.',
        problems: [
          'Hohe Anfangskosten für Hardware.',
          'Keine interne GPU-Infrastruktur.',
          'Bedarf, einen Anwendungsfall schnell zu validieren.',
          'Projekte, die später lokal oder in eine Private Cloud migrieren können.',
        ],
        deliverables: [
          'Konfigurierte Cloud-Umgebung.',
          'Durchgeführtes Training oder Fine-Tuning.',
          'Messung von Qualität und Kosten.',
          'Empfehlung für die Zielarchitektur.',
          'Migrationsplan, falls erforderlich.',
        ],
        technologies: [
          'GPU Cloud: AWS SageMaker, Azure ML, Google Vertex AI, Lambda Cloud, RunPod, CoreWeave.',
          'Verwaltetes Fine-Tuning: OpenAI, Azure AI Foundry, Amazon Bedrock, Vertex AI, Together AI, Fireworks AI.',
          'Open-Source-Training: Hugging Face, Axolotl, Unsloth, PEFT.',
          'Späteres Deployment: private API, Cloud-Endpoint, lokaler Server oder On-Premise.',
        ],
        methodology: [
          'Bewertung von Datenschutz und Compliance.',
          'Auswahl des Cloud-Anbieters.',
          'Datenaufbereitung.',
          'Training oder Fine-Tuning.',
          'Qualitätsbewertung.',
          'Schätzung der Produktionskosten.',
          'Empfehlung für die Zielarchitektur.',
        ],
        time: '2 bis 8 Wochen je nach Komplexität.',
        expected:
          'Eine technische und wirtschaftliche Validierung des Modells ohne vorherigen Kauf spezieller Hardware.',
        cta: 'Modell ohne Hardwarekauf validieren',
      },
      'agentes-ia': {
        title: 'Mit Systemen verbundene Agenten',
        simple:
          'Wir entwickeln Agenten, die APIs, Datenbanken, CRM, ERP, Ticketsysteme und interne Tools abfragen.',
        problem: 'Wenn Konversation nicht reicht und in realen Systemen gehandelt werden muss.',
        audience: 'Betrieb, Support, Einkauf, Verwaltung, Reklamationen und Backoffice.',
        result: 'Kontrollierte Prozessautomatisierung mit Berechtigungen und Validierungen.',
        summary:
          'Wir entwickeln Agenten, die Informationen abfragen, autorisierte Schritte ausführen und Nutzer in kontrollierten Geschäftsabläufen unterstützen.',
        problems: [
          'Wiederkehrende manuelle Prozesse.',
          'Nicht verbundene Systeme.',
          'Nutzer, die mehrere Plattformen abfragen müssen.',
          'Verzögerungen in internen Abläufen.',
          'Fehlende intelligente Automatisierung.',
        ],
        deliverables: [
          'Prozesslandkarte und Geschäftsregeln.',
          'Werkzeuge und Konnektoren des Agenten.',
          'Berechtigungen, Validierungen und Audit.',
          'Abläufe mit menschlicher Freigabe, wo nötig.',
          'Schrittweises Deployment mit Monitoring.',
        ],
        technologies: [
          'REST-, GraphQL-, SOAP-APIs.',
          'Datenbanken: SQL Server, PostgreSQL, MySQL, Oracle.',
          'Integrationen: SAP, CRM, ERP, Ticketsysteme, E-Mail, Dokumente.',
          'Architektur: Microservices, Event-driven, Queues, Kafka, SQS.',
          'Agenten: Tool Calling, MCP-Server, LangGraph oder gleichwertige Frameworks.',
          'Sicherheit: rollenbasierte Berechtigungen, Audit, Validierungen, Human-in-the-Loop.',
        ],
        methodology: [
          'Prozessaufnahme.',
          'Identifikation von Systemen und Berechtigungen.',
          'Entwurf der Agenten-Werkzeuge.',
          'Implementierung der Konnektoren.',
          'Kontrolle erlaubter Aktionen.',
          'Audit und Nachvollziehbarkeit.',
          'Schrittweise Produktivsetzung.',
        ],
        time: '6 bis 12 Wochen.',
        expected:
          'Ein mit realen Systemen verbundener Agent mit kontrollierten Aktionen, Nachvollziehbarkeit und schrittweiser Einführung.',
        cta: 'Prozesse automatisieren',
      },
      'gobierno-ia': {
        title: 'KI-Kontrolle und -Sicherheit',
        simple:
          'Wir definieren Regeln, Berechtigungen, Audit und Monitoring für einen verantwortungsvollen KI-Einsatz.',
        problem:
          'Wenn die Organisation KI einführen muss, ohne operative, rechtliche oder technische Kontrolle zu verlieren.',
        audience: 'Regulierte Unternehmen, IT, Compliance, Sicherheit, Recht und Geschäftsleitung.',
        result:
          'Ein klarer Rahmen für sicheren, nachvollziehbaren Betrieb mit kontinuierlicher Verbesserung.',
        summary:
          'Wir entwerfen technische und organisatorische Kontrollen, damit jede Lösung Berechtigungen, Audit, Qualitätskriterien und klare Verantwortlichkeiten hat.',
        problems: [
          'Risiko von Datenabflüssen.',
          'Unkontrollierte Nutzung öffentlicher Tools.',
          'Fehlendes Audit der Antworten.',
          'Rechtliche oder Compliance-Unsicherheit.',
        ],
        deliverables: [
          'Risikolandkarte und Nutzungsrichtlinien.',
          'Zugriffskontrollen und Audit.',
          'Guardrails und Bewertung der Antworten.',
          'Technisches und fachliches Monitoring.',
          'Plan zur kontinuierlichen Verbesserung.',
        ],
        technologies: [
          'RBAC, OAuth2, SSO, Keycloak.',
          'Sicheres Logging und Nachvollziehbarkeit.',
          'PII-Erkennung.',
          'Guardrails.',
          'Prompt-Injection-Abwehr.',
          'Bewertung von Groundedness und Halluzinationsrate.',
          'Monitoring mit Langfuse, OpenTelemetry, Grafana, Prometheus.',
        ],
        methodology: [
          'Risikoprüfung.',
          'Datenklassifizierung.',
          'Festlegung von Nutzungsrichtlinien.',
          'Entwurf der Kontrollen.',
          'Einführung des Audits.',
          'Bewertung der Antworten.',
          'Kontinuierliche Verbesserung.',
        ],
        time: '2 bis 8 Wochen.',
        expected:
          'Ein operativer Rahmen für den KI-Einsatz mit Berechtigungen, Metriken, Audit und Kriterien zur kontinuierlichen Verbesserung.',
        cta: 'Kontrollen für mein Unternehmen entwerfen',
      },
      'atencion-cliente': {
        title: 'KI-Agenten für den Kundenservice',
        simple:
          'Wir entwickeln Chat- und Sprachagenten, die Anfragen beantworten, Leads qualifizieren und Termine rund um die Uhr vergeben.',
        problem:
          'Wenn das Anfragevolumen Ihr Team übersteigt oder Kunden zu lange auf eine Antwort warten.',
        audience:
          'Contact Center, Support, Vertrieb, Buchungen, Arzttermine und Unternehmen mit hohem Anfragevolumen.',
        result: 'Sofortige Antworten, weniger operative Last und Übergabe an einen Menschen, wenn es nötig ist.',
        summary:
          'Wir setzen Agenten ein, die über WhatsApp, Web, E-Mail oder Telefon antworten, Ihre Systeme abfragen und bei Bedarf mit vollem Kontext an einen Menschen übergeben.',
        problems: [
          'Wiederkehrende Anfragen, die das Team überlasten.',
          'Kunden ohne Antwort außerhalb der Geschäftszeiten.',
          'Leads, die verloren gehen, bevor sie den Vertrieb erreichen.',
          'Kundendaten verteilt auf mehrere Systeme.',
        ],
        deliverables: [
          'Chat- oder Sprachagent, angebunden an Ihre Kanäle.',
          'Integration mit CRM, Kalender, Ticketsystem oder Verwaltungssoftware.',
          'Übergaberegeln an Menschen mit vollständigem Kontext.',
          'Kennzahlen-Dashboard: Lösungsquote, Reaktionszeiten und Zufriedenheit.',
          'Laufende Optimierung anhand echter Gespräche.',
        ],
        technologies: [
          'Kanäle: WhatsApp Business, Web-Chat, E-Mail und Telefonie.',
          'Sprache: Spracherkennung und Sprachsynthese in Echtzeit, Twilio.',
          'CRM und Support: HubSpot, Salesforce, Zendesk.',
          'Agenten: Tool Calling, MCP-Server, LangGraph.',
          'Wissen: RAG über Handbücher, Richtlinien und FAQ.',
          'Monitoring: Langfuse, OpenTelemetry, Gesprächskennzahlen.',
        ],
        methodology: [
          'Analyse der Anfragen und Kontaktgründe.',
          'Gestaltung der Abläufe und Übergabekriterien.',
          'Integration von Kanälen und Systemen.',
          'Tests mit echten Gesprächen.',
          'Schrittweiser Start pro Kanal.',
          'Messung und kontinuierliche Verbesserung.',
        ],
        time: '3 bis 8 Wochen.',
        expected:
          'Ein Agent, der häufige Anfragen löst, Leads erfasst und nur dann an einen Menschen übergibt, wenn es Mehrwert bringt.',
        cta: 'Meinen Kundenservice automatisieren',
      },
      'cumplimiento-ai-act': {
        title: 'Compliance mit dem EU AI Act',
        simple:
          'Wir bereiten Ihr Unternehmen auf die europäische KI-Verordnung vor: Inventar, Risiken, Dokumentation und Aufsicht.',
        problem:
          'Wenn Sie KI in Europa nutzen oder verkaufen und die Konformität vor einem Audit oder auf Kundenwunsch nachweisen müssen.',
        audience:
          'Unternehmen, die in der Europäischen Union tätig sind oder an europäische Kunden verkaufen, Compliance, Recht und IT.',
        result: 'Dokumentierte Nachweise der Konformität und geringeres Sanktionsrisiko.',
        summary:
          'Wir erfassen die eingesetzten KI-Systeme, stufen sie nach Risiko ein und erstellen die Dokumentation, Protokolle und Kontrollen, die der AI Act verlangt.',
        problems: [
          'Unklarheit darüber, welche KI-Systeme im Unternehmen genutzt werden.',
          'Unsicherheit, welche Anwendungsfälle als Hochrisiko gelten.',
          'Transparenzpflichten seit August 2026 in Kraft.',
          'Frist Dezember 2027 für Hochrisiko-Systeme.',
        ],
        deliverables: [
          'Inventar der KI-Systeme.',
          'Risikoeinstufung nach dem AI Act.',
          'Technische Dokumentation und Aktivitätsprotokolle.',
          'Verfahren zur menschlichen Aufsicht.',
          'Umsetzungsplan mit Verantwortlichen und Fristen.',
        ],
        technologies: [
          'Rahmenwerke: EU AI Act, ISO/IEC 42001, NIST AI RMF.',
          'Abstimmung mit DSGVO, NIS2 und DORA.',
          'Sicheres Logging und Nachvollziehbarkeit von Entscheidungen.',
          'Bewertung von Bias, Genauigkeit und Robustheit.',
          'Monitoring mit Langfuse, OpenTelemetry und Grafana.',
        ],
        methodology: [
          'Erfassung von KI-Systemen und Anbietern.',
          'Risikoeinstufung.',
          'Gap-Analyse.',
          'Dokumentation und Protokolle.',
          'Gestaltung der menschlichen Aufsicht.',
          'Umsetzungsplan und Nachverfolgung.',
        ],
        time: '3 bis 10 Wochen je nach Anzahl der Systeme.',
        expected:
          'Eine auditfähige Compliance-Dokumentation und ein klarer Plan, um die Fristen der Verordnung einzuhalten.',
        cta: 'Meine AI-Act-Konformität prüfen',
      },
      'analisis-datos': {
        title: 'Datenanalyse und Reporting mit KI',
        simple:
          'Wir ermöglichen Datenbankabfragen in natürlicher Sprache und erstellen automatische Berichte für jeden Bereich.',
        problem:
          'Wenn die Daten vorhanden sind, aber jeder Bericht von einem Analysten oder manuell gepflegten Tabellen abhängt.',
        audience: 'Geschäftsführung, Finanzen, Betrieb, Vertrieb und Teams, die datenbasiert entscheiden.',
        result: 'Antworten in Minuten und Berichte, die sich selbst erstellen, mit überprüfbaren Zahlen.',
        summary:
          'Wir verbinden KI mit Ihren Datenbanken und BI-Tools, um Geschäftsfragen zu beantworten, Abweichungen zu erkennen und regelmäßige Berichte zu erstellen.',
        problems: [
          'Manuelle Berichte, die Tage dauern.',
          'Abhängigkeit von wenigen Personen für Datenabfragen.',
          'Informationen aus vielen Quellen ohne Gesamtsicht.',
          'Abweichungen, die zu spät erkannt werden.',
        ],
        deliverables: [
          'Abfrage-Assistent in natürlicher Sprache.',
          'Geplante automatische Berichte.',
          'Warnungen bei Abweichungen und Kennzahlen.',
          'Rollenbasierte Datenberechtigungen.',
          'Nachvollziehbarkeit jeder erzeugten Abfrage.',
        ],
        technologies: [
          'Datenbanken: PostgreSQL, SQL Server, MySQL, Oracle.',
          'Text-to-SQL mit Abfragevalidierung.',
          'BI: Power BI, Looker Studio, Metabase.',
          'Python, pandas und Notebooks für die Analyse.',
          'Modelle: OpenAI, Claude, Gemini, Qwen, Llama.',
        ],
        methodology: [
          'Erfassung der wichtigsten Fragen und Berichte.',
          'Kartierung der Datenquellen.',
          'Semantisches Modell und Berechtigungen.',
          'Genauigkeitstests mit echten Fällen.',
          'Automatisierung der Berichte.',
          'Inbetriebnahme und Schulung.',
        ],
        time: '3 bis 8 Wochen.',
        expected:
          'Ein zuverlässiger Datenassistent und automatische Berichte, die manuelle Analysearbeit reduzieren.',
        cta: 'Meine Daten mit KI abfragen',
      },
      'capacitacion-ia': {
        title: 'KI-Schulungen für Teams',
        simple:
          'Wir schulen jeden Bereich darin, KI produktiv und sicher zu nutzen, mit dokumentiertem Nachweis.',
        problem:
          'Wenn Teams KI ohne gemeinsame Regeln nutzen oder das Unternehmen KI-Schulungen nachweisen muss.',
        audience: 'Geschäftsführung, Führungskräfte, operative Teams, IT und Compliance.',
        result: 'Teams, die KI mit Urteilsvermögen einsetzen, weniger Risiken und Schulungsnachweise.',
        summary:
          'Wir gestalten praxisnahe, rollenbasierte Workshops mit echten Fällen aus Ihrem Unternehmen und Nutzungsrichtlinien und dokumentieren alles, um die KI-Kompetenzpflicht des AI Act zu erfüllen.',
        problems: [
          'Uneinheitliche KI-Nutzung zwischen den Bereichen.',
          'Sensible Daten in öffentlichen Tools.',
          'Geringe Nutzung bereits bezahlter Tools.',
          'KI-Kompetenzpflicht in der Europäischen Union.',
        ],
        deliverables: [
          'Praxisnahe, rollenbasierte Workshops.',
          'Leitfaden für den verantwortungsvollen KI-Einsatz.',
          'Bibliothek mit Prompts und Anwendungsfällen des Unternehmens.',
          'Dokumentierter Schulungsnachweis.',
          'Bewertung der Nutzung nach der Schulung.',
        ],
        technologies: [
          'Assistenten: ChatGPT, Claude, Gemini, Microsoft Copilot.',
          'Automatisierung: n8n, Make.',
          'Nutzungsrichtlinien und Datenklassifizierung.',
          'Artikel 4 des EU AI Act.',
        ],
        methodology: [
          'Analyse der aktuellen Nutzung.',
          'Rollenbasiertes Programmdesign.',
          'Workshops mit echten Fällen.',
          'Richtlinien und Leitfäden.',
          'Bewertung und Nachweis.',
        ],
        time: '1 bis 4 Wochen.',
        expected:
          'Geschulte Teams, klare Nutzungsregeln und die nötige Dokumentation als Schulungsnachweis.',
        cta: 'Mein Team schulen',
      },
      'seguridad-agentes': {
        title: 'Agentensicherheit und Red Teaming',
        simple:
          'Wir greifen Ihre KI-Lösungen kontrolliert an, um Schwachstellen zu finden, bevor es andere tun.',
        problem:
          'Wenn ein Agent auf echte Daten oder Systeme zugreift und Sie wissen müssen, was passiert, wenn jemand ihn manipulieren will.',
        audience: 'Sicherheits-, IT- und Produktteams sowie Unternehmen mit Agenten im Produktivbetrieb.',
        result: 'Schwachstellen, die gefunden und behoben werden, bevor sie den Betrieb treffen.',
        summary:
          'Wir testen Agenten und Assistenten auf Prompt Injection, Datenabfluss und unautorisierte Aktionen und hinterlassen Schutzmaßnahmen und automatische Tests für jede neue Version.',
        problems: [
          'Agenten mit Zugriff auf sensible Daten oder kritische Aktionen.',
          'Risiko von Prompt Injection über Dokumente oder E-Mails.',
          'Keine KI-spezifischen Sicherheitstests.',
          'Kundenanforderungen oder Sicherheitsaudits.',
        ],
        deliverables: [
          'Bedrohungslandkarte des KI-Systems.',
          'Dokumentierte Red-Teaming-Tests.',
          'Priorisierter Schwachstellenbericht.',
          'Umgesetzte Guardrails und Kontrollen.',
          'Automatische Tests für jede Version.',
        ],
        technologies: [
          'OWASP Top 10 für LLM-Anwendungen.',
          'Direkte und indirekte Prompt Injection.',
          'Erkennung personenbezogener Daten und Schutz vor Datenabfluss.',
          'Guardrails und Validierung von Aktionen.',
          'Minimale Rechte, Audit und Human-in-the-Loop.',
        ],
        methodology: [
          'Prüfung von Architektur und Berechtigungen.',
          'Bedrohungsmodellierung.',
          'Kontrollierte Angriffe.',
          'Priorisierung der Befunde.',
          'Umsetzung der Schutzmaßnahmen.',
          'Kontinuierliche Regressionstests.',
        ],
        time: '2 bis 6 Wochen.',
        expected:
          'Ein gegen reale Angriffe getesteter Agent mit aktiven Schutzmaßnahmen und Tests bei jeder Änderung.',
        cta: 'Sicherheit meiner KI prüfen',
      },
      'assessment-ia': {
        title: 'Analyse und Roadmap',
        simple:
          'Wir identifizieren reale Chancen, Risiken, benötigte Daten und nächste Schritte, bevor Sie investieren.',
        problem:
          'Wenn das Unternehmen vorankommen will, aber nicht weiß, wo es anfangen oder was es priorisieren soll.',
        audience:
          'Geschäftsleitung, IT, Betrieb und Fachbereiche, die vor der Umsetzung eine Roadmap brauchen.',
        result:
          'Ein konkreter Plan, um zu entscheiden, was zuerst umgesetzt wird, was zu vermeiden ist und welcher Aufwand nötig ist.',
        summary:
          'Wir helfen, Anwendungsfälle zu priorisieren, den Aufwand zu schätzen, die Architektur festzulegen und eine umsetzbare Roadmap zu erstellen.',
        problems: [
          'Nicht wissen, wo man anfangen soll.',
          'Isolierte Initiativen ohne Strategie.',
          'Risiko, in die falschen Tools zu investieren.',
          'Unklarheit zwischen RAG, Fine-Tuning, Agenten oder lokalen Modellen.',
        ],
        deliverables: [
          'Landkarte der KI-Chancen.',
          'Priorisierung nach Wirkung/Aufwand/Risiko.',
          'Architekturempfehlung.',
          'Umsetzbare Roadmap.',
          'Erste Schätzung von Zeitrahmen, Kosten und Abhängigkeiten.',
          'Business Case mit ROI-Kennzahlen für jede Initiative.',
        ],
        technologies: [
          'Proprietäre und Open-Weight-LLMs.',
          'RAG.',
          'Fine-Tuning.',
          'Vector DB.',
          'Cloud-GPU.',
          'Lokale Infrastruktur.',
          'APIs und Systemintegration.',
          'Sicherheit, Compliance und Observability.',
        ],
        methodology: [
          'Interviews mit Stakeholdern.',
          'Prozesserhebung.',
          'Analyse verfügbarer Daten.',
          'Identifikation von Anwendungsfällen.',
          'Priorisierung nach Wirkung/Aufwand/Risiko.',
          'Technologieempfehlung.',
          'Umsetzungs-Roadmap.',
          'Erste Schätzung von Zeitrahmen und Kosten.',
        ],
        time: '1 bis 2 Wochen.',
        expected:
          'Ein klarer Plan, um zu entscheiden, was zuerst umgesetzt wird, was zu vermeiden ist und wie man mit geringerem Risiko vorankommt.',
        cta: 'Analyse anfragen',
      },
    },
  },
  choose: {
    eyebrow: 'Technische Entscheidungen ohne Hype',
    title: 'Sie müssen kein Modell von Grund auf trainieren',
    body: 'In den meisten Fällen ist es nicht nötig, ein Modell von Grund auf zu entwickeln. Zuerst klären wir, ob es sinnvoller ist, in Dokumenten zu suchen, Systeme anzubinden, ein Modell anzupassen oder eine private Plattform aufzubauen.',
    cta: 'Passende Architektur besprechen',
    modes: [
      { title: 'RAG', description: 'Wenn die KI auf Basis interner Dokumente antworten muss.' },
      {
        title: 'Fine-Tuning',
        description: 'Wenn die KI ein bestimmtes Format, einen Stil oder spezifische Kriterien lernen soll.',
      },
      { title: 'KI-Agenten', description: 'Wenn die KI Systeme abfragen oder Prozesse ausführen muss.' },
      { title: 'Lokales LLM', description: 'Wenn Datenschutz und Datenkontrolle Priorität haben.' },
      { title: 'Cloud Training', description: 'Wenn schnell validiert werden soll, ohne Hardware zu kaufen.' },
    ],
  },
  scope: {
    eyebrow: 'Umfang',
    title: 'Was jede Implementierung umfasst',
    intro:
      'Für Teams, die Umfang, Ergebnisse, Technologien, Zeitrahmen und Arbeitsweise prüfen möchten, bevor sie weitergehen.',
    timeLabel: 'Geschätzte Dauer',
    expectedLabel: 'Erwartetes Ergebnis',
    problemsLabel: 'Typische Situationen',
    deliverablesLabel: 'Was wir liefern',
    technologiesLabel: 'Eingesetzte Technologien',
    methodologyLabel: 'Arbeitsmethodik',
  },
  method: {
    eyebrow: 'Methode',
    title: 'Wie wir eine Lösung in Produktion bringen',
    intro:
      'Wir gehen vom realen Prozess aus, wählen die passende Architektur und arbeiten ab dem ersten MVP mit Validierung, Sicherheit und Integration.',
    steps: [
      {
        title: 'Analyse',
        description:
          'Wir erheben Prozesse, Dokumente, Systeme, Risiken, Nutzer und Chancen mit echter Wirkung.',
      },
      {
        title: 'Architektur',
        description:
          'Wir legen fest, ob RAG, Fine-Tuning, Agenten, lokales LLM, Private Cloud oder eine Kombination am besten passt.',
      },
      {
        title: 'Kontrolliertes MVP',
        description:
          'Wir bauen eine erste funktionsfähige Version mit Metriken, grundlegender Sicherheit und Validierung durch Nutzer.',
      },
      {
        title: 'Produktion',
        description:
          'Wir ergänzen Berechtigungen, Audit, Monitoring, Integration, Dokumentation und schrittweisen Betrieb.',
      },
    ],
  },
  industries: {
    title: 'Branchen, in denen Dusare Ergebnisse beschleunigen kann',
    items: {
      logistics: {
        title: 'Logistik und Postdienste',
        description:
          'Reklamationen, intelligentes Tracking, Dokumentenprüfung, Integration mit WMS, SAP, APIs und operativen Systemen.',
      },
      health: {
        title: 'Gesundheit und Arbeitsmedizin',
        description:
          'Prüfung von Bescheinigungen, Dokumentenanalyse, Nachvollziehbarkeit, menschliche Prüfung und Regelkontrolle.',
      },
      backoffice: {
        title: 'Administratives Backoffice',
        description:
          'E-Mails, Formulare, Rechnungen, Lieferscheine, Personalakten, Freigaben und wiederkehrende Aufgaben.',
      },
      security: {
        title: 'Elektronische Sicherheit',
        description:
          'Ereignisanalyse, automatische Berichte, Videoanalyse und Integration mit Überwachungssystemen.',
      },
      legacy: {
        title: 'Unternehmen mit Legacy-Systemen',
        description:
          'Schrittweise Modernisierung über APIs, MCP, Events, Automatisierung und Integration, ohne das gesamte Ökosystem zu ersetzen.',
      },
      smb: {
        title: 'KMU auf dem Weg zur KI',
        description:
          'Priorisierung von Anwendungsfällen, MVPs, Schulung und Begleitung, um KI mit geringem Risiko einzuführen.',
      },
      finance: {
        title: 'Finanzen und Versicherungen',
        description:
          'Analyse von Policen und Schadensfällen, Kunden-Onboarding, Betrugsprävention, regulatorisches Reporting und Compliance.',
      },
      professional: {
        title: 'Kanzleien und Steuerberatung',
        description:
          'Vertragsprüfung, Aktenrecherche, Abstimmungen, Lohnabrechnung und quellenbasierte Antworten an Mandanten.',
      },
      contactCenter: {
        title: 'Contact Center und Kundenservice',
        description:
          'Chat- und Sprachagenten, Anfrage-Routing, Gesprächszusammenfassungen und Echtzeit-Unterstützung für Mitarbeitende.',
      },
    },
  },
  founder: {
    eyebrow: 'Founder-led',
    title: 'Technische Kompetenz mit Geschäftsfokus',
    body: 'Dusare ist eine founder-geführte Boutique-Beratung, vorangetrieben von Ariel Sebastián Duarte. Die Arbeit verbindet Softwarearchitektur, Automatisierung und Systemintegration, um konkrete Chancen in produktive Lösungen zu verwandeln.',
    role: 'Founder & AI Solutions Architect',
    points: [
      'Produktionsorientiertes Lösungsdesign.',
      'Integration mit internen Systemen und realen Prozessen.',
      'Sicherheit, Nachvollziehbarkeit und Datenkontrolle von Anfang an.',
      'Bewertung der Antworten und Qualitätsmonitoring.',
      'Skalierbare und wartbare Architektur.',
      'Begleitung von der Analyse bis zum Betrieb.',
      'Herstellerunabhängiger Ansatz: die passende Technologie für jeden Kontext.',
    ],
  },
  technologies: {
    title: 'Verfügbare Plattformen und Technologien',
    intro:
      'Dargestellt als Werkzeuge, die wir je nach Fall integrieren oder einsetzen können; sie stellen keine Kunden, Partner oder Zertifizierungen dar.',
    groups: {
      models: 'KI-Modelle und -Plattformen',
      rag: 'RAG, Suche und Dokumente',
      training: 'Fine-Tuning und Training',
      serving: 'Serving, Infrastruktur und Datenschutz',
      governance: 'Governance, Sicherheit und Observability',
      integration: 'Integration und Entwicklung',
    },
    names: {
      'Cloud privada': 'Private Cloud',
      'PII detection': 'PII-Erkennung',
    },
  },
  contact: {
    title: 'Möchten Sie einen realen Prozess mit privater KI automatisieren?',
    body: 'Wir beginnen mit einer Analyse, um Chancen, Risiken, die benötigte Architektur und die nächsten Umsetzungsschritte zu ermitteln.',
    diagnosis: 'Analyse anfragen',
    budget: 'Angebot anfragen',
    meeting: 'Termin vereinbaren',
  },
  footer: {
    tagline: 'Private KI, Automatisierung und Integration für die Produktion.',
    rights: 'Alle Rechte vorbehalten.',
  },
};

export default de;
