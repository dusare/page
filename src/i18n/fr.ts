import type { Translation } from './types';

const fr: Translation = {
  meta: {
    title: 'Dusare | Intelligence privée connectée à vos systèmes',
    description:
      "Dusare déploie une IA privée pour les entreprises : assistants sur documents internes, agents connectés aux systèmes, modèles spécialisés et contrôles de sécurité.",
  },
  whatsapp: {
    diagnosis: 'Bonjour Dusare, je souhaite demander un diagnostic IA.',
    budget: 'Bonjour Dusare, je souhaite demander un devis.',
  },
  language: {
    label: 'Changer de langue',
    names: { es: 'Español', en: 'English', fr: 'Français', de: 'Deutsch' },
  },
  nav: {
    services: 'Services',
    choose: 'Comment choisir',
    scope: 'Périmètre',
    method: 'Méthode',
    contact: 'Contact',
    openMenu: 'Ouvrir le menu',
    requestDiagnosis: 'Demander un diagnostic',
  },
  brandKeywords: ['Processus', 'Données privées', 'Agents', 'Documents', 'Automatisation', 'Contrôle'],
  hero: {
    titles: [
      "Voulez-vous observer comment d'autres utilisent l'IA, ou l'intégrer dès maintenant à votre entreprise ?",
      "Vos concurrents testent déjà l'IA. Votre entreprise l'adopte-t-elle ou se contente-t-elle d'observer ?",
      "Jusqu'où pourrait aller votre entreprise si chaque processus clé intégrait de l'intelligence ?",
      "Jusqu'où pourrait aller votre entreprise si chaque processus clé intégrait l'IA ?",
      "Avoir de l'IA ne suffit pas. Il faut la faire travailler pour votre entreprise.",
    ],
    lead: "Nous déployons de l'Intelligence Artificielle connectée à vos documents, données et systèmes, avec sécurité, traçabilité et contrôle opérationnel.",
    sub: "Nous vous aidons à identifier le bon cas d'usage, à choisir l'architecture adaptée et à mettre la solution en production sans exposer d'informations sensibles.",
    primaryCta: 'Demander un diagnostic',
    secondaryCta: 'Voir les services',
    steps: [
      'Diagnostic du processus',
      'Données et systèmes connectés',
      "IA adaptée à l'opération",
      'Production sous contrôle',
    ],
    stepsLabel: 'Étapes terminées',
  },
  services: {
    eyebrow: "Vue d'ensemble",
    title: 'Ce que nous pouvons mettre en place',
    intro:
      "Une lecture simple pour comprendre ce que fait chaque service, quand il est pertinent et quels résultats l'entreprise peut en attendre.",
    whenLabel: 'Quand y recourir',
    audienceLabel: 'Pour qui',
    resultLabel: 'Résultat',
    viewDetail: 'Voir le détail',
    items: {
      'ia-privada': {
        title: 'IA privée pour vos opérations',
        simple:
          "Nous créons des assistants internes qui exploitent les informations de l'entreprise sans exposer de données sensibles.",
        problem:
          'Lorsque vous devez interroger le savoir interne avec des permissions, de la traçabilité et du contrôle.',
        audience:
          'Organisations avec des données sensibles, des processus complexes ou des exigences de sécurité et de conformité.',
        result: "Des réponses plus rapides et plus fiables sans perdre le contrôle de l'information.",
        summary:
          'Nous concevons des assistants privés connectés au savoir interne pour que les équipes et les services opérationnels consultent les informations critiques en toute sécurité.',
        problems: [
          'Informations dispersées entre documents et systèmes.',
          'Risque de charger des données sensibles dans des outils publics.',
          'Absence de permissions claires et de traçabilité.',
        ],
        deliverables: [
          'Architecture privée ou on-premise.',
          'Assistant connecté aux sources internes.',
          "Contrôle d'accès par rôle.",
          'Logs, métriques et documentation opérationnelle.',
        ],
        technologies: [
          'Modèles open-weight : Qwen, Mistral, Llama, Gemma.',
          'Serving entreprise : vLLM, endpoints privés et API compatibles OpenAI.',
          'API : OpenAI-compatible API, REST, FastAPI, Node.js.',
          'Sécurité : OAuth2, Keycloak, JWT, RBAC, VPN.',
          'Infrastructure : Docker, Kubernetes, Linux, cloud privé ou on-premise.',
          'Observabilité : OpenTelemetry, Prometheus, Grafana, Langfuse.',
        ],
        methodology: [
          "Évaluation des données et des cas d'usage.",
          "Conception d'une architecture sécurisée.",
          'Intégration aux sources internes.',
          'Tests de précision et de sécurité.',
          'Mise en service et formation.',
        ],
        time: 'De 4 à 12 semaines selon le périmètre.',
        expected:
          "Une plateforme d'IA privée prête à fonctionner avec des sources internes, des permissions claires et une supervision en production.",
        cta: 'Demander un diagnostic IA privée',
      },
      'rag-local': {
        title: 'Chat avec vos documents internes',
        simple:
          'Nous transformons PDF, manuels, réglementations et bases de connaissances en un chat avec des sources vérifiables.',
        problem:
          "Lorsque l'information existe, mais qu'elle est dispersée et qu'il est difficile d'obtenir une réponse fiable.",
        audience:
          'Support, opérations, juridique, conformité, RH et équipes disposant de beaucoup de documentation vivante.',
        result: 'Moins de recherches manuelles et des réponses cohérentes fondées sur des documents réels.',
        summary:
          'Nous mettons en place des chats documentaires qui recherchent dans les sources internes, récupèrent le contexte pertinent et répondent avec des citations pour valider chaque réponse.',
        problems: [
          'Documentation difficile à consulter.',
          'Réponses incohérentes entre services.',
          'Beaucoup de temps perdu à chercher des informations.',
          "Besoin de répondre à l'aide de sources vérifiables.",
        ],
        deliverables: [
          "Pipeline documentaire d'ingestion et de mise à jour.",
          'Base vectorielle privée.',
          'Chat avec citations des sources.',
          'Évaluation de la qualité des réponses.',
        ],
        technologies: [
          'Vector DB : Qdrant, pgvector, Weaviate, Milvus.',
          'Embeddings : bge-m3, e5, nomic, Qwen embeddings.',
          'Parsing documentaire : PDF, DOCX, TXT, HTML, CSV.',
          'Orchestration : LangChain, LlamaIndex ou implémentation sur mesure.',
          'Modèles : Qwen, Mistral, Llama, Gemma.',
          'UI : React, Next.js ou interface sur mesure alignée sur les permissions et les flux internes.',
        ],
        methodology: [
          'Inventaire documentaire.',
          'Nettoyage et normalisation.',
          'Indexation dans une base vectorielle.',
          'Conception des prompts et de la récupération.',
          'Évaluation des réponses.',
          'Déploiement privé.',
        ],
        time: 'De 2 à 6 semaines.',
        expected:
          'Un chat documentaire qui répond avec des sources, réduit les recherches manuelles et améliore la cohérence des réponses.',
        cta: 'Créer un chat avec mes documents',
      },
      'fine-tuning': {
        title: 'Modèles spécialisés',
        simple:
          "Nous adaptons des modèles pour qu'ils respectent les formats, règles et critères propres à votre activité.",
        problem:
          "Lorsqu'un modèle généraliste ne répond pas avec la précision ou la structure dont l'opération a besoin.",
        audience:
          "Équipes ayant des tâches répétitives de classification, d'extraction, de support, de rédaction ou d'analyse.",
        result:
          'Plus de cohérence dans les tâches qui se répètent souvent et exigent des critères clairs.',
        summary:
          "Nous spécialisons des modèles avec des exemples réels d'entrées et de sorties pour améliorer leurs performances sur une tâche métier précise.",
        problems: [
          'Le modèle ne respecte pas le format attendu.',
          'Réponses peu cohérentes sur des tâches répétitives.',
          "Besoin de classer, d'extraire ou de transformer des informations.",
          'Processus où le RAG ne suffit pas.',
        ],
        deliverables: [
          'Dataset conçu et documenté.',
          'Modèle ou adaptateur entraîné.',
          'Évaluation avant/après.',
          'Endpoint ou artefact prêt à déployer.',
          'Recommandations de maintenance.',
        ],
        technologies: [
          'Fine-tuning : LoRA, QLoRA, PEFT.',
          'Frameworks : PyTorch, Hugging Face Transformers, Unsloth, Axolotl.',
          'Modèles : Qwen, Mistral, Llama, Gemma.',
          'Évaluation : datasets de test, métriques de précision, validation humaine.',
          'Export : adaptateurs LoRA, endpoints privés et artefacts documentés pour le déploiement.',
        ],
        methodology: [
          'Définition de la tâche.',
          'Conception du dataset.',
          'Nettoyage et annotation.',
          'Choix du modèle de base.',
          'Entraînement.',
          'Évaluation avant/après.',
          'Déploiement et documentation.',
        ],
        time: 'De 4 à 8 semaines.',
        expected:
          "Un modèle spécialisé pour une tâche précise, mesuré sur des exemples réels et prêt à être intégré.",
        cta: "Évaluer si j'ai besoin d'un modèle spécialisé",
      },
      'cloud-training': {
        title: 'Validation de modèles dans le cloud',
        simple:
          "Nous testons et adaptons des modèles sur des GPU dans le cloud avant d'investir dans votre propre infrastructure.",
        problem:
          'Lorsque vous voulez valider une solution sans acheter de matériel spécialisé dès le départ.',
        audience:
          'Équipes qui doivent tester rapidement, entraîner ponctuellement ou comparer des alternatives.',
        result:
          "Un investissement initial réduit et une décision plus claire sur les coûts, la qualité et l'infrastructure.",
        summary:
          "Nous utilisons une infrastructure cloud avec GPU pour valider des modèles, mesurer la qualité et estimer les coûts avant de définir l'environnement final.",
        problems: [
          'Coût initial élevé du matériel.',
          "Absence d'infrastructure GPU interne.",
          "Besoin de valider rapidement un cas d'usage.",
          'Projets pouvant ensuite migrer en local ou vers un cloud privé.',
        ],
        deliverables: [
          'Environnement cloud configuré.',
          'Entraînement ou fine-tuning réalisé.',
          'Mesure de la qualité et des coûts.',
          "Recommandation d'architecture finale.",
          'Plan de migration le cas échéant.',
        ],
        technologies: [
          'GPU Cloud : AWS SageMaker, Azure ML, Google Vertex AI, Lambda Cloud, RunPod, CoreWeave.',
          'Fine-tuning managé : OpenAI, Azure AI Foundry, Amazon Bedrock, Vertex AI, Together AI, Fireworks AI.',
          'Entraînement open source : Hugging Face, Axolotl, Unsloth, PEFT.',
          'Déploiement ultérieur : API privée, endpoint cloud, serveur local ou on-premise.',
        ],
        methodology: [
          'Évaluation de la confidentialité et de la conformité.',
          'Choix du fournisseur cloud.',
          'Préparation des données.',
          'Entraînement ou fine-tuning.',
          'Évaluation de la qualité.',
          'Estimation des coûts en production.',
          "Recommandation d'architecture finale.",
        ],
        time: 'De 2 à 8 semaines selon la complexité.',
        expected:
          'Une validation technique et économique du modèle sans achat initial de matériel spécialisé.',
        cta: 'Valider un modèle sans acheter de matériel',
      },
      'agentes-ia': {
        title: 'Agents connectés aux systèmes',
        simple:
          'Nous créons des agents qui interrogent des API, bases de données, CRM, ERP, tickets et outils internes.',
        problem:
          "Lorsque la conversation ne suffit plus et qu'il faut agir sur des systèmes réels.",
        audience: 'Opérations, support, achats, administration, réclamations et back-office.',
        result: 'Une automatisation contrôlée des processus, avec permissions et validations.',
        summary:
          "Nous construisons des agents qui consultent l'information, exécutent des étapes autorisées et assistent les utilisateurs au sein de flux d'entreprise maîtrisés.",
        problems: [
          'Processus manuels répétitifs.',
          'Systèmes déconnectés.',
          'Utilisateurs devant consulter plusieurs plateformes.',
          'Lenteur des opérations internes.',
          "Manque d'automatisation intelligente.",
        ],
        deliverables: [
          'Cartographie du processus et règles métier.',
          "Outils et connecteurs de l'agent.",
          'Permissions, validations et audit.',
          "Flux avec validation humaine lorsque c'est nécessaire.",
          'Déploiement progressif avec supervision.',
        ],
        technologies: [
          'API REST, GraphQL, SOAP.',
          'Bases de données : SQL Server, PostgreSQL, MySQL, Oracle.',
          'Intégrations : SAP, CRM, ERP, tickets, e-mail, documents.',
          'Architecture : microservices, event-driven, files de messages, Kafka, SQS.',
          'Agents : tool calling, MCP servers, LangGraph ou frameworks équivalents.',
          'Sécurité : permissions par rôle, audit, validations, human-in-the-loop.',
        ],
        methodology: [
          'Cartographie du processus.',
          'Identification des systèmes et des permissions.',
          "Conception des outils de l'agent.",
          'Implémentation des connecteurs.',
          'Contrôle des actions autorisées.',
          'Audit et traçabilité.',
          'Mise en production progressive.',
        ],
        time: 'De 6 à 12 semaines.',
        expected:
          'Un agent connecté à des systèmes réels, avec des actions contrôlées, de la traçabilité et une mise en service progressive.',
        cta: 'Automatiser des processus',
      },
      'gobierno-ia': {
        title: "Contrôle et sécurité de l'IA",
        simple:
          "Nous définissons règles, permissions, audit et supervision pour utiliser l'IA de manière responsable.",
        problem:
          "Lorsque l'organisation doit adopter l'IA sans perdre le contrôle opérationnel, juridique ou technique.",
        audience: 'Entreprises réglementées, DSI, conformité, sécurité, juridique et direction.',
        result:
          "Un cadre clair pour opérer avec sécurité, traçabilité et amélioration continue.",
        summary:
          'Nous concevons des contrôles techniques et opérationnels pour que chaque solution dispose de permissions, d’audit, de critères de qualité et de responsables définis.',
        problems: [
          'Risque de fuite de données.',
          "Utilisation non maîtrisée d'outils publics.",
          "Absence d'audit des réponses.",
          'Incertitude juridique ou de conformité.',
        ],
        deliverables: [
          "Cartographie des risques et politiques d'utilisation.",
          "Contrôles d'accès et audit.",
          'Guardrails et évaluation des réponses.',
          'Supervision technique et fonctionnelle.',
          "Plan d'amélioration continue.",
        ],
        technologies: [
          'RBAC, OAuth2, SSO, Keycloak.',
          'Journalisation sécurisée et traçabilité.',
          'Détection de PII.',
          'Guardrails.',
          'Prompt injection defense.',
          'Évaluation de la groundedness et du taux d’hallucination.',
          'Supervision avec Langfuse, OpenTelemetry, Grafana, Prometheus.',
        ],
        methodology: [
          'Revue des risques.',
          'Classification des données.',
          "Définition des politiques d'utilisation.",
          'Conception des contrôles.',
          "Mise en place de l'audit.",
          'Évaluation des réponses.',
          'Amélioration continue.',
        ],
        time: 'De 2 à 8 semaines.',
        expected:
          "Un cadre opérationnel pour utiliser l'IA avec permissions, métriques, audit et critères d'amélioration continue.",
        cta: 'Concevoir des contrôles pour mon entreprise',
      },
      'atencion-cliente': {
        title: 'Agents de service client',
        simple:
          'Nous créons des agents conversationnels et vocaux qui répondent aux demandes, qualifient les prospects et gèrent les rendez-vous 24 h/24.',
        problem:
          'Lorsque le volume de demandes dépasse votre équipe ou que vos clients attendent trop longtemps une réponse.',
        audience:
          'Centres de contact, support, ventes, réservations, prise de rendez-vous médicaux et entreprises à fort volume de demandes.',
        result: 'Une réponse immédiate, moins de charge opérationnelle et un transfert vers un humain quand il le faut.',
        summary:
          'Nous déployons des agents qui répondent sur WhatsApp, le web, par e-mail ou par téléphone, consultent vos systèmes et transfèrent à un humain avec tout le contexte lorsque le cas l’exige.',
        problems: [
          'Des demandes répétitives qui saturent l’équipe.',
          'Des clients sans réponse en dehors des heures ouvrées.',
          'Des prospects perdus avant d’arriver aux ventes.',
          'Des données client dispersées dans plusieurs systèmes.',
        ],
        deliverables: [
          'Agent conversationnel ou vocal connecté à vos canaux.',
          'Intégration au CRM, à l’agenda, au ticketing ou au système de gestion.',
          'Règles de transfert vers un humain avec contexte complet.',
          'Tableau de bord : résolution, délais et satisfaction.',
          'Ajustement continu à partir de conversations réelles.',
        ],
        technologies: [
          'Canaux : WhatsApp Business, chat web, e-mail et téléphonie.',
          'Voix : reconnaissance et synthèse vocale en temps réel, Twilio.',
          'CRM et support : HubSpot, Salesforce, Zendesk.',
          'Agents : tool calling, serveurs MCP, LangGraph.',
          'Connaissances : RAG sur manuels, politiques et FAQ.',
          'Supervision : Langfuse, OpenTelemetry, indicateurs de conversation.',
        ],
        methodology: [
          'Analyse des demandes et des motifs de contact.',
          'Conception des parcours et des critères de transfert.',
          'Intégration aux canaux et aux systèmes.',
          'Tests avec des conversations réelles.',
          'Lancement progressif par canal.',
          'Mesure et amélioration continue.',
        ],
        time: '3 à 8 semaines.',
        expected:
          'Un agent qui traite les demandes fréquentes, capte les prospects et ne transfère à un humain que lorsque cela apporte de la valeur.',
        cta: 'Automatiser mon service client',
      },
      'cumplimiento-ai-act': {
        title: 'Conformité à l’AI Act européen',
        simple:
          'Nous préparons votre entreprise au règlement européen sur l’IA : inventaire, risques, documentation et supervision.',
        problem:
          'Lorsque vous utilisez ou vendez de l’IA en Europe et devez prouver votre conformité avant un audit ou une demande client.',
        audience:
          'Entreprises opérant dans l’Union européenne ou vendant à des clients européens, conformité, juridique et IT.',
        result: 'Des preuves documentées de conformité et une exposition réduite aux sanctions.',
        summary:
          'Nous recensons les systèmes d’IA utilisés, les classons par niveau de risque et constituons la documentation, les journaux et les contrôles exigés par l’AI Act.',
        problems: [
          'Ne pas savoir quels systèmes d’IA sont utilisés dans l’entreprise.',
          'Incertitude sur les cas d’usage à haut risque.',
          'Obligations de transparence en vigueur depuis août 2026.',
          'Échéance de décembre 2027 pour les systèmes à haut risque.',
        ],
        deliverables: [
          'Inventaire des systèmes d’IA.',
          'Classification des risques selon l’AI Act.',
          'Documentation technique et journaux d’activité.',
          'Procédures de supervision humaine.',
          'Plan de mise en conformité avec responsables et échéances.',
        ],
        technologies: [
          'Référentiels : AI Act, ISO/IEC 42001, NIST AI RMF.',
          'Articulation avec le RGPD, NIS2 et DORA.',
          'Journalisation sécurisée et traçabilité des décisions.',
          'Évaluation des biais, de la précision et de la robustesse.',
          'Supervision avec Langfuse, OpenTelemetry et Grafana.',
        ],
        methodology: [
          'Recensement des systèmes et fournisseurs d’IA.',
          'Classification des risques.',
          'Analyse des écarts.',
          'Documentation et journaux.',
          'Conception de la supervision humaine.',
          'Plan de mise en conformité et suivi.',
        ],
        time: '3 à 10 semaines selon le nombre de systèmes.',
        expected:
          'Un dossier de conformité prêt pour l’audit et un plan clair pour respecter les échéances du règlement.',
        cta: 'Évaluer ma conformité à l’AI Act',
      },
      'analisis-datos': {
        title: 'Analyse de données et reporting par IA',
        simple:
          'Nous vous permettons d’interroger vos bases de données en langage naturel et générons des rapports automatiques pour chaque service.',
        problem:
          'Lorsque les données existent, mais que chaque rapport dépend d’un analyste ou de tableurs construits à la main.',
        audience: 'Direction, finance, opérations, commercial et équipes qui décident à partir des données.',
        result: 'Des réponses en quelques minutes et des rapports qui se génèrent seuls, avec des chiffres vérifiables.',
        summary:
          'Nous connectons l’IA à vos bases de données et outils de BI pour répondre aux questions métier, détecter les écarts et produire des rapports périodiques.',
        problems: [
          'Des rapports manuels qui prennent des jours.',
          'Une dépendance à quelques personnes pour interroger les données.',
          'Des informations réparties sans vue unique.',
          'Des écarts détectés trop tard.',
        ],
        deliverables: [
          'Assistant de requêtes en langage naturel.',
          'Rapports automatiques planifiés.',
          'Alertes sur les écarts et indicateurs clés.',
          'Droits d’accès aux données par rôle.',
          'Traçabilité de chaque requête générée.',
        ],
        technologies: [
          'Bases de données : PostgreSQL, SQL Server, MySQL, Oracle.',
          'Text-to-SQL avec validation des requêtes.',
          'BI : Power BI, Looker Studio, Metabase.',
          'Python, pandas et notebooks pour l’analyse.',
          'Modèles : OpenAI, Claude, Gemini, Qwen, Llama.',
        ],
        methodology: [
          'Recensement des questions et rapports clés.',
          'Cartographie des sources de données.',
          'Modèle sémantique et droits d’accès.',
          'Tests de précision sur des cas réels.',
          'Automatisation des rapports.',
          'Mise en service et formation.',
        ],
        time: '3 à 8 semaines.',
        expected:
          'Un assistant de données fiable et des rapports automatiques qui réduisent le travail d’analyse manuel.',
        cta: 'Interroger mes données avec l’IA',
      },
      'capacitacion-ia': {
        title: 'Formation à l’IA pour les équipes',
        simple:
          'Nous formons chaque service à utiliser l’IA de manière productive et sûre, avec un suivi documenté.',
        problem:
          'Lorsque les équipes utilisent l’IA sans règles communes ou que l’entreprise doit justifier d’une formation à l’IA.',
        audience: 'Direction, managers, équipes opérationnelles, IT et conformité.',
        result: 'Des équipes qui utilisent l’IA avec discernement, moins de risques et des preuves de formation.',
        summary:
          'Nous concevons des ateliers pratiques par rôle, avec des cas réels de l’entreprise et des politiques d’usage, et conservons un suivi documenté pour répondre à l’obligation de maîtrise de l’IA de l’AI Act.',
        problems: [
          'Un usage de l’IA inégal selon les services.',
          'Des données sensibles saisies dans des outils publics.',
          'Une faible adoption des outils déjà achetés.',
          'Obligation de maîtrise de l’IA dans l’Union européenne.',
        ],
        deliverables: [
          'Ateliers pratiques par rôle.',
          'Guide d’usage responsable de l’IA.',
          'Bibliothèque de prompts et de cas de l’entreprise.',
          'Registre documenté des formations.',
          'Évaluation de l’adoption après formation.',
        ],
        technologies: [
          'Assistants : ChatGPT, Claude, Gemini, Microsoft Copilot.',
          'Automatisation : n8n, Make.',
          'Politiques d’usage et classification des données.',
          'Article 4 de l’AI Act.',
        ],
        methodology: [
          'Diagnostic des usages actuels.',
          'Conception du programme par rôle.',
          'Ateliers sur des cas réels.',
          'Politiques et guides d’usage.',
          'Évaluation et registre.',
        ],
        time: '1 à 4 semaines.',
        expected:
          'Des équipes formées, des règles d’usage claires et la documentation nécessaire pour justifier la formation.',
        cta: 'Former mon équipe',
      },
      'seguridad-agentes': {
        title: 'Sécurité des agents et red teaming',
        simple:
          'Nous attaquons vos solutions d’IA de manière contrôlée pour trouver les failles avant quelqu’un d’autre.',
        problem:
          'Lorsqu’un agent accède à des données ou systèmes réels et que vous devez savoir ce qui se passe si quelqu’un tente de le manipuler.',
        audience: 'Équipes sécurité, IT et produit, et entreprises ayant des agents en production.',
        result: 'Des vulnérabilités détectées et corrigées avant d’affecter l’activité.',
        summary:
          'Nous testons agents et assistants contre l’injection de prompt, la fuite de données et les actions non autorisées, et laissons des défenses et des tests automatiques pour chaque nouvelle version.',
        problems: [
          'Des agents ayant accès à des données sensibles ou à des actions critiques.',
          'Risque d’injection de prompt via des documents ou des e-mails.',
          'Absence de tests de sécurité propres à l’IA.',
          'Exigences clients ou audits de sécurité.',
        ],
        deliverables: [
          'Cartographie des menaces du système d’IA.',
          'Tests de red teaming documentés.',
          'Rapport de vulnérabilités priorisées.',
          'Garde-fous et contrôles mis en place.',
          'Tests automatiques pour chaque version.',
        ],
        technologies: [
          'OWASP Top 10 pour les applications LLM.',
          'Injection de prompt directe et indirecte.',
          'Détection de données personnelles et prévention des fuites.',
          'Garde-fous et validation des actions.',
          'Moindre privilège, audit et human-in-the-loop.',
        ],
        methodology: [
          'Revue de l’architecture et des droits.',
          'Modélisation des menaces.',
          'Attaques contrôlées.',
          'Priorisation des constats.',
          'Mise en place des défenses.',
          'Tests de non-régression continus.',
        ],
        time: '2 à 6 semaines.',
        expected:
          'Un agent éprouvé face à des attaques réelles, avec des défenses actives et des tests rejoués à chaque changement.',
        cta: 'Évaluer la sécurité de mon IA',
      },
      'assessment-ia': {
        title: 'Diagnostic et feuille de route',
        simple:
          "Nous identifions les opportunités réelles, les risques, les données nécessaires et les prochaines étapes avant d'investir.",
        problem:
          "Lorsque l'entreprise veut avancer, mais ne sait pas par où commencer ni quoi prioriser.",
        audience:
          "Direction, DSI, opérations et métiers qui ont besoin d'une feuille de route avant de se lancer.",
        result:
          "Un plan concret pour décider quoi mettre en place en premier, quoi éviter et quel effort cela demande.",
        summary:
          "Nous aidons à prioriser les cas d'usage, estimer l'effort, définir l'architecture et construire une feuille de route réalisable.",
        problems: [
          'Ne pas savoir par où commencer.',
          'Initiatives isolées sans stratégie.',
          "Risque d'investir dans les mauvais outils.",
          'Manque de clarté entre RAG, fine-tuning, agents ou modèles locaux.',
        ],
        deliverables: [
          "Cartographie des opportunités d'IA.",
          'Priorisation impact/effort/risque.',
          "Recommandation d'architecture.",
          'Feuille de route réalisable.',
          'Estimation initiale des délais, coûts et dépendances.',
          'Business case avec indicateurs de ROI pour chaque initiative.',
        ],
        technologies: [
          'LLM propriétaires et open-weight.',
          'RAG.',
          'Fine-tuning.',
          'Vector DB.',
          'Cloud GPU.',
          'Infrastructure locale.',
          'API et intégration aux systèmes.',
          'Sécurité, conformité et observabilité.',
        ],
        methodology: [
          'Entretiens avec les parties prenantes.',
          'Inventaire des processus.',
          'Analyse des données disponibles.',
          "Identification des cas d'usage.",
          'Priorisation par impact/effort/risque.',
          'Recommandation technologique.',
          'Feuille de route de mise en œuvre.',
          'Estimation initiale des délais et des coûts.',
        ],
        time: 'De 1 à 2 semaines.',
        expected:
          'Un plan clair pour décider quoi mettre en place en premier, quoi éviter et comment avancer avec moins de risques.',
        cta: 'Demander un diagnostic',
      },
    },
  },
  choose: {
    eyebrow: 'Des choix techniques, sans effet de mode',
    title: "Pas besoin d'entraîner un modèle à partir de zéro",
    body: "Dans la plupart des cas, il n'est pas nécessaire de créer un modèle à partir de zéro. Nous définissons d'abord s'il vaut mieux rechercher dans des documents, connecter des systèmes, adapter un modèle ou monter une plateforme privée.",
    cta: "Discuter de l'architecture adaptée",
    modes: [
      { title: 'RAG', description: "Quand l'IA doit répondre à partir de documents internes." },
      {
        title: 'Fine-tuning',
        description: "Quand l'IA doit apprendre un format, un style ou des critères spécifiques.",
      },
      { title: 'Agents IA', description: "Quand l'IA doit interroger des systèmes ou exécuter des processus." },
      { title: 'LLM local', description: 'Quand la confidentialité et le contrôle des données sont prioritaires.' },
      { title: 'Cloud training', description: 'Quand on veut valider rapidement sans acheter de matériel.' },
    ],
  },
  scope: {
    eyebrow: 'Périmètre',
    title: 'Ce que comprend chaque mise en œuvre',
    intro:
      "Pour les équipes qui doivent examiner le périmètre, les livrables, les technologies, les délais et la méthode de travail avant d'avancer.",
    timeLabel: 'Délai estimé',
    expectedLabel: 'Résultat attendu',
    problemsLabel: 'Situations fréquentes',
    deliverablesLabel: 'Ce que nous livrons',
    technologiesLabel: 'Technologies utilisées',
    methodologyLabel: 'Méthodologie de travail',
  },
  method: {
    eyebrow: 'Méthode',
    title: 'Comment nous menons une solution en production',
    intro:
      "Nous partons du processus réel, choisissons l'architecture adaptée et avançons avec validation, sécurité et intégration dès le premier MVP.",
    steps: [
      {
        title: 'Diagnostic',
        description:
          'Nous analysons processus, documents, systèmes, risques, utilisateurs et opportunités à impact réel.',
      },
      {
        title: 'Architecture',
        description:
          'Nous déterminons si RAG, fine-tuning, agents, LLM local, cloud privé ou une combinaison est le plus adapté.',
      },
      {
        title: 'MVP maîtrisé',
        description:
          'Nous construisons une première version fonctionnelle avec métriques, sécurité initiale et validation par les utilisateurs.',
      },
      {
        title: 'Production',
        description:
          'Nous ajoutons permissions, audit, supervision, intégration, documentation et mise en service progressive.',
      },
    ],
  },
  industries: {
    title: 'Secteurs où Dusare peut accélérer les résultats',
    items: {
      logistics: {
        title: 'Logistique et services postaux',
        description:
          'Réclamations, suivi intelligent, validation documentaire, intégration avec WMS, SAP, API et systèmes opérationnels.',
      },
      health: {
        title: 'Santé et médecine du travail',
        description:
          'Validation de certificats, analyse documentaire, traçabilité, revue humaine et contrôle des règles.',
      },
      backoffice: {
        title: 'Back-office administratif',
        description:
          'E-mails, formulaires, factures, bons de livraison, dossiers du personnel, validations et tâches répétitives.',
      },
      security: {
        title: 'Sécurité électronique',
        description:
          "Analyse d'événements, rapports automatiques, vidéo-analyse et intégration aux systèmes de télésurveillance.",
      },
      legacy: {
        title: 'Entreprises avec des systèmes legacy',
        description:
          "Modernisation progressive via API, MCP, événements, automatisation et intégration sans remplacer tout l'écosystème.",
      },
      smb: {
        title: "PME en phase d'adoption de l'IA",
        description:
          "Priorisation des cas d'usage, MVP, formation et accompagnement pour déployer l'IA avec un risque faible.",
      },
      finance: {
        title: 'Finance et assurance',
        description:
          'Analyse des contrats et des sinistres, onboarding client, prévention de la fraude, reporting réglementaire et conformité.',
      },
      professional: {
        title: 'Cabinets d’avocats et d’expertise comptable',
        description:
          'Revue de contrats, recherche dans les dossiers, rapprochements, paie et réponses aux clients appuyées sur des sources.',
      },
      contactCenter: {
        title: 'Centres de contact et service client',
        description:
          'Agents conversationnels et vocaux, tri des demandes, résumés d’appels et assistance en temps réel aux conseillers.',
      },
    },
  },
  founder: {
    eyebrow: 'Founder-led',
    title: 'Expertise technique et vision métier',
    body: 'Dusare est un cabinet de conseil boutique founder-led, porté par Ariel Sebastián Duarte. Le travail combine architecture logicielle, automatisation et intégration de systèmes pour transformer des opportunités concrètes en solutions opérationnelles.',
    role: 'Founder & AI Solutions Architect',
    points: [
      'Conception de solutions orientées production.',
      'Intégration aux systèmes internes et aux processus réels.',
      'Sécurité, traçabilité et contrôle des données dès le départ.',
      'Évaluation des réponses et suivi de la qualité.',
      'Architecture évolutive et maintenable.',
      "Accompagnement du diagnostic jusqu'à l'exploitation.",
      'Approche agnostique : la technologie adaptée à chaque contexte.',
    ],
  },
  technologies: {
    title: 'Plateformes et technologies disponibles',
    intro:
      'Présentées comme des outils que nous pouvons intégrer ou utiliser selon le cas ; elles ne représentent ni clients, ni partenaires, ni certifications.',
    groups: {
      models: "Modèles et plateformes d'IA",
      rag: 'RAG, recherche et documents',
      training: 'Fine-tuning et entraînement',
      serving: 'Serving, infrastructure et confidentialité',
      governance: 'Gouvernance, sécurité et observabilité',
      integration: 'Intégration et développement',
    },
    names: {
      'Cloud privada': 'Cloud privé',
      'PII detection': 'Détection de PII',
    },
  },
  contact: {
    title: "Vous voulez automatiser un processus réel avec une IA privée ?",
    body: "Nous commençons par un diagnostic pour identifier les opportunités, les risques, l'architecture nécessaire et les prochaines étapes de mise en œuvre.",
    diagnosis: 'Demander un diagnostic',
    budget: 'Demander un devis',
    meeting: 'Planifier une réunion',
  },
  footer: {
    tagline: 'IA privée, automatisation et intégration pour la production.',
    rights: 'Tous droits réservés.',
  },
};

export default fr;
