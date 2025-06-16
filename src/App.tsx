import React, { useState, useEffect } from 'react';
import { Brain, Zap, Code2, Users, Mail, Phone, Github, Linkedin, Menu, X, BrainCircuit, Waypoints, DraftingCompass, Calendar, MessageCircle, Rocket, Instagram, Facebook, Twitter, Send, ArrowRight, CheckCircle, Star, Play, Bot, Globe } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Language content
const content = {
  es: {
    nav: {
      about: 'Quienes Somos',
      services: 'Servicios',
      howToStart: 'Cómo Empezar',
      start: 'Comenzar'
    },
    hero: {
      badge: 'Soluciones Tecnológicas de Vanguardia',
      title1: 'Transformamos tu negocio con',
      title2: 'Inteligencia Artificial',
      subtitle: 'Creamos soluciones que impulsan la innovación y el crecimiento.',
      startNow: 'Comenzar Ahora',
      viewServices: 'Ver Servicios',
      stats: {
        projects: 'Proyectos Completados',
        satisfaction: 'Satisfacción del Cliente',
        support: 'Soporte Técnico',
        experience: 'Años de Experiencia'
      }
    },
    services: {
      badge: 'Nuestros Servicios',
      title: 'Soluciones que Impulsan el Futuro',
      subtitle: 'Transformamos ideas en realidad con tecnología de vanguardia y experiencia comprobada',
      consultNow: 'Consultar Ahora',
      items: [
        {
          title: "Agentes IA",
          shortDesc: "Desarrollo de agentes inteligentes y soluciones de IA personalizadas",
          detailedDesc: [
            "Desarrollo de Agentes IA y asistentes virtuales personalizados",
            "Implementación de sistemas de procesamiento de lenguaje natural",
            "Automatización de procesos con IA",
            "Análisis predictivo y machine learning",
            "Sistemas de recomendación inteligentes",
            "Integración de modelos de IA con aplicaciones existentes"
          ]
        },
        {
          title: "Integraciones",
          shortDesc: "Soluciones de integración empresarial y APIs",
          detailedDesc: [
            "Desarrollo de APIs RESTful, GraphQL, AsyncAPI, etc.",
            "Integración de sistemas legacy con tecnologías modernas",
            "Implementación de middleware y ESB",
            "Automatización de flujos de trabajo empresariales",
            "Integración con servicios en la nube AWS, Azure, Google Cloud, etc",
            "Desarrollo de microservicios"
          ]
        },
        {
          title: "Arquitectura de Software",
          shortDesc: "Diseño y consultoría en arquitecturas modernas",
          detailedDesc: [
            "Diseño de arquitecturas escalables y resilientes",
            "Modernización de aplicaciones legacy",
            "Implementación de patrones de diseño",
            "Optimización de rendimiento y seguridad",
            "Arquitecturas cloud-native y serverless",
            "Consultoría en mejores prácticas de desarrollo"
          ]
        },
        {
          title: "Automatizaciones y Soluciones con IA",
          shortDesc: "Automatización inteligente de procesos empresariales con IA",
          detailedDesc: [
            "Automatización de procesos de negocio con IA (RPA + AI)",
            "Chatbots y asistentes virtuales inteligentes",
            "Análisis automático de documentos y datos",
            "Sistemas de clasificación y etiquetado automático",
            "Automatización de workflows complejos",
            "Integración de IA en procesos existentes"
          ]
        }
      ]
    },
    howToStart: {
      badge: 'Proceso Simple',
      title: 'Cómo Empezar tu Transformación',
      subtitle: 'Un proceso simple y efectivo para llevar tu negocio al siguiente nivel',
      steps: [
        {
          title: "Conversación Inicial",
          description: "Cuéntanos sobre tu proyecto o necesidad. Analizaremos si podemos ayudarte y cómo podemos agregar valor a tu negocio.",
          action: "Iniciar conversación"
        },
        {
          title: "Consultoría Estratégica",
          description: "Agendamos una llamada estratégica para analizar en profundidad los procesos de tu negocio y diseñar la mejor solución.",
          action: "Agendar llamada"
        },
        {
          title: "Back Office Inteligente",
          description: "Te prepararemos un entregable con todas las soluciones de IA aplicables a tu negocio y los beneficios que obtendrás.",
          action: "Agendar reunión"
        },
        {
          title: "IA a Medida",
          description: "Finalmente, acordaremos iniciar el desarrollo de soluciones de IA a medida y te brindaremos acceso a recursos exclusivos de software ya disponibles.",
          action: "Solicita tu proyecto"
        }
      ]
    },
    ai: {
      title: 'Inteligencia Artificial Utilizada',
      subtitle: 'Trabajamos con las mejores plataformas de IA del mercado'
    },
    about: {
      badge: 'Sobre Nosotros',
      title: 'Expertos en Transformación Digital',
      description: 'Somos un equipo de expertos apasionados por la tecnología y la innovación. Nos especializamos en crear soluciones tecnológicas que impulsan la transformación digital de nuestros clientes mediante la implementación de IA avanzada, integraciones empresariales robustas y arquitecturas de software escalables.'
    },
    tools: {
      title: 'Herramientas y Tecnologías',
      subtitle: 'Utilizamos las mejores herramientas del mercado para crear soluciones robustas'
    },
    footer: {
      tagline: 'Transformando el futuro con tecnología inteligente',
      copyright: 'Todos los derechos reservados.'
    },
    rotatingWords: ['Consultora', 'Integraciones', 'Soluciones', 'Innovación', 'Tecnología', 'Agentes IA']
  },
  en: {
    nav: {
      about: 'About Us',
      services: 'Services',
      howToStart: 'How to Start',
      start: 'Get Started'
    },
    hero: {
      badge: 'Cutting-Edge Technology Solutions',
      title1: 'Transform your business with',
      title2: 'Artificial Intelligence',
      subtitle: 'We create solutions that drive innovation and growth.',
      startNow: 'Start Now',
      viewServices: 'View Services',
      stats: {
        projects: 'Completed Projects',
        satisfaction: 'Client Satisfaction',
        support: 'Technical Support',
        experience: 'Years of Experience'
      }
    },
    services: {
      badge: 'Our Services',
      title: 'Solutions that Drive the Future',
      subtitle: 'We transform ideas into reality with cutting-edge technology and proven experience',
      consultNow: 'Consult Now',
      items: [
        {
          title: "AI Agents",
          shortDesc: "Development of intelligent agents and personalized AI solutions",
          detailedDesc: [
            "Development of AI Agents and personalized virtual assistants",
            "Implementation of natural language processing systems",
            "Process automation with AI",
            "Predictive analysis and machine learning",
            "Intelligent recommendation systems",
            "Integration of AI models with existing applications"
          ]
        },
        {
          title: "Integrations",
          shortDesc: "Enterprise integration solutions and APIs",
          detailedDesc: [
            "Development of RESTful APIs, GraphQL, AsyncAPI, etc.",
            "Integration of legacy systems with modern technologies",
            "Implementation of middleware and ESB",
            "Automation of enterprise workflows",
            "Integration with cloud services AWS, Azure, Google Cloud, etc",
            "Microservices development"
          ]
        },
        {
          title: "Software Architecture",
          shortDesc: "Design and consulting in modern architectures",
          detailedDesc: [
            "Design of scalable and resilient architectures",
            "Legacy application modernization",
            "Implementation of design patterns",
            "Performance and security optimization",
            "Cloud-native and serverless architectures",
            "Consulting on development best practices"
          ]
        },
        {
          title: "Automation and AI Solutions",
          shortDesc: "Intelligent automation of business processes with AI",
          detailedDesc: [
            "Business process automation with AI (RPA + AI)",
            "Intelligent chatbots and virtual assistants",
            "Automatic document and data analysis",
            "Automatic classification and labeling systems",
            "Complex workflow automation",
            "AI integration into existing processes"
          ]
        }
      ]
    },
    howToStart: {
      badge: 'Simple Process',
      title: 'How to Start Your Transformation',
      subtitle: 'A simple and effective process to take your business to the next level',
      steps: [
        {
          title: "Initial Conversation",
          description: "Tell us about your project or need. We'll analyze if we can help you and how we can add value to your business.",
          action: "Start conversation"
        },
        {
          title: "Strategic Consulting",
          description: "We schedule a strategic call to analyze your business processes in depth and design the best solution.",
          action: "Schedule call"
        },
        {
          title: "Intelligent Back Office",
          description: "We'll prepare a deliverable with all AI solutions applicable to your business and the benefits you'll obtain.",
          action: "Schedule meeting"
        },
        {
          title: "Custom AI",
          description: "Finally, we'll agree to start developing custom AI solutions and provide you access to exclusive software resources already available.",
          action: "Request your project"
        }
      ]
    },
    ai: {
      title: 'Artificial Intelligence Used',
      subtitle: 'We work with the best AI platforms in the market'
    },
    about: {
      badge: 'About Us',
      title: 'Digital Transformation Experts',
      description: 'We are a team of experts passionate about technology and innovation. We specialize in creating technological solutions that drive our clients\' digital transformation through the implementation of advanced AI, robust enterprise integrations, and scalable software architectures.'
    },
    tools: {
      title: 'Tools and Technologies',
      subtitle: 'We use the best tools in the market to create robust solutions'
    },
    footer: {
      tagline: 'Transforming the future with intelligent technology',
      copyright: 'All rights reserved.'
    },
    rotatingWords: ['Consulting', 'Integrations', 'Solutions', 'Innovation', 'Technology', 'AI Agents']
  }
};

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [language, setLanguage] = useState('es');
  
  const t = content[language as keyof typeof content];
  
  const headerImages = [
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&q=80&w=2000"
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 50,
      easing: 'ease-out-cubic'
    });

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === headerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    // Rotating text timer
    const textTimer = setInterval(() => {
      setCurrentWordIndex((prevIndex) => 
        prevIndex === t.rotatingWords.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    // Glitch effect timer
    const glitchTimer = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 4000);

    return () => {
      clearInterval(imageTimer);
      clearInterval(textTimer);
      clearInterval(glitchTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [t.rotatingWords.length]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const ias = [
    {
      name: "OpenAI",
      Image: "https://cdn.brandfetch.io/idR3duQxYl/theme/light/logo.svg"
    },
    {
      name: "Claude",
      Image: "https://cdn.brandfetch.io/idW5s392j1/theme/light/logo.svg"
    },
    {
      name: "Meta",
      Image: "https://cdn.brandfetch.io/idWvz5T3V7/theme/light/logo.svg"
    },
    {
      name: "Gemini",
      Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/344px-Google_Gemini_logo.svg.png"
    },
    {
      name: "DeepSeek",
      Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/DeepSeek_logo.svg/512px-DeepSeek_logo.svg.png"
    },
    {
      name: "Anthropic",
      Image: "https://cdn.brandfetch.io/idmJWF3N06/theme/light/logo.svg"
    },
    {
      name: "xAI Grok",
      Image: "https://cdn.brandfetch.io/iddjpnb3_W/theme/light/logo.svg"
    },
    {
      name: "Mistral AI",
      Image: "https://cdn.brandfetch.io/idtiX4Hc7r/theme/dark/logo.svg"
    },
    {
      name: "Qwen AI",
      Image: "https://cdn.brandfetch.io/id81l88pD2/w/410/h/123/theme/dark/logo.png"
    }
  ];

  const tools = [
    {
      name: "MuleSoft",
      image: "https://cdn.brandfetch.io/idA6cDxrkg/theme/dark/logo.svg"
    },
    {
      name: "Make.com",
      image: "https://cdn.brandfetch.io/idVHU5hl7_/theme/light/logo.svg"
    },
    {
      name: "n8n",
      image: "https://cdn.brandfetch.io/idO6_6uqJ9/idWtnk-fDo.svg"
    },
    {
      name: "Node.js",
      image: "https://nodejs.org/static/images/logo.svg"
    },
    {
      name: "Python",
      image: "https://cdn.brandfetch.io/idbpOFBgcc/theme/dark/logo.svg"
    },
    {
      name: "Java",
      image: "https://www.svgrepo.com/show/184143/java.svg"
    },
    {
      name: "React",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    },
    {
      name: "CloudFlare",
      image: "https://cdn.brandfetch.io/idJ3Cg8ymG/idASSo3XVu.svg"
    }
  ];

  const services = [
    {
      icon: BrainCircuit,
      title: t.services.items[0].title,
      shortDesc: t.services.items[0].shortDesc,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400",
      detailedDesc: t.services.items[0].detailedDesc
    },
    {
      icon: Waypoints,
      title: t.services.items[1].title,
      shortDesc: t.services.items[1].shortDesc,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
      detailedDesc: t.services.items[1].detailedDesc
    },
    {
      icon: DraftingCompass,
      title: t.services.items[2].title,
      shortDesc: t.services.items[2].shortDesc,
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&q=80&w=400",
      detailedDesc: t.services.items[2].detailedDesc
    },
    {
      icon: Bot,
      title: t.services.items[3].title,
      shortDesc: t.services.items[3].shortDesc,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400",
      detailedDesc: t.services.items[3].detailedDesc
    }
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/dusare", color: "hover:text-gray-300" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/dusare_ia/", color: "hover:text-pink-500" },
    { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/share/17vjMMv57u/", color: "hover:text-blue-600" },
    { name: "x.com", icon: X, url: "https://x.com/Dusare_ia", color: "hover:text-blue-400" },
    { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/541170601388?text=Hola+Dusare", color: "hover:text-green-500" },
    { name: "Telegram", icon: Send, url: "https://t.me/dusare_ia", color: "hover:text-blue-300" }
  ];

  const stats = [
    { number: "50+", label: t.hero.stats.projects },
    { number: "98%", label: t.hero.stats.satisfaction },
    { number: "24/7", label: t.hero.stats.support },
    { number: "5+", label: t.hero.stats.experience }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75"></div>
                <div className="relative bg-slate-950 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-slate-700">
                  <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Dusare
                  </span>
                </div>
              </div>
              {/* Rotating text - Now visible on mobile */}
              <div className="block">
                <div className="relative h-6 sm:h-8 flex items-center min-w-[100px] sm:min-w-[140px]">
                  <span 
                    key={currentWordIndex}
                    className="text-sm sm:text-base md:text-lg font-medium bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-up whitespace-nowrap"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(96, 165, 250, 0.3))'
                    }}
                  >
                    {t.rotatingWords[currentWordIndex]}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-700/50 transition-all duration-300"
              >
                <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium">{language.toUpperCase()}</span>
              </button>

              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden relative z-50 p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-700/50 transition-all duration-300"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu */}
            <div className={`
              fixed inset-0 bg-slate-950/98 backdrop-blur-xl transform transition-all duration-500 ease-out
              ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
              md:hidden flex items-center justify-center
            `}>
              <div className="flex flex-col items-center space-y-8 text-center">
                {[
                  { name: t.nav.about, href: '#quienes-somos' },
                  { name: t.nav.services, href: '#servicios' },
                  { name: t.nav.howToStart, href: '#como-empezar' }
                ].map((item, index) => (
                  <a 
                    key={item.name}
                    href={item.href}
                    onClick={handleNavClick}
                    className="text-2xl font-medium text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                { name: t.nav.about, href: '#quienes-somos' },
                { name: t.nav.services, href: '#servicios' },
                { name: t.nav.howToStart, href: '#como-empezar' }
              ].map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300 relative group"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
              <a 
                href="#como-empezar"
                className="ml-4 px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
              >
                {t.nav.start}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
          <img 
            src={headerImages[currentImageIndex]}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-slate-950/90"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-5xl mx-auto" data-aos="fade-up" data-aos-duration="1200">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 mb-6 sm:mb-8">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-2" />
              <span className="text-xs sm:text-sm text-slate-300">{t.hero.badge}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
              <span 
                className={`glitch-text ${isGlitching ? 'glitch-active' : ''}`}
                data-text={t.hero.title1}
              >
                {t.hero.title1}
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t.hero.title2}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <a 
                href="#como-empezar"
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 font-semibold shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 flex items-center justify-center"
              >
                {t.hero.startNow}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                href="#servicios"
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-700/50 transition-all duration-300 font-semibold flex items-center justify-center"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                {t.hero.viewServices}
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-20 max-w-4xl mx-auto px-4" data-aos="fade-up" data-aos-delay="400">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-xs sm:text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-slate-400 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20" data-aos="fade-up">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 mb-4 sm:mb-6">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mr-2" />
              <span className="text-xs sm:text-sm text-slate-300">{t.services.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {t.services.title}
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto px-4">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  className="group relative h-full"
                  data-aos="fade-up" 
                  data-aos-delay={index * 150}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 sm:p-6 hover:border-slate-600/50 transition-all duration-500 group-hover:transform group-hover:scale-105 flex flex-col">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold ml-2 sm:ml-3 text-white">{service.title}</h3>
                    </div>
                    
                    <p className="text-slate-300 mb-3 sm:mb-4 leading-relaxed text-sm">{service.shortDesc}</p>
                    
                    <div className="mb-3 sm:mb-4">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-24 sm:h-32 object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-all duration-500"
                      />
                    </div>

                    <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 flex-grow">
                      {service.detailedDesc.slice(0, 3).map((desc, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-slate-300 text-xs leading-relaxed">{desc}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <a 
                        href="https://wa.me/541170601388?text=Te+damos+la+bienvenida+a+Dusare." 
                        className="group/btn w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 font-semibold text-center block shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 text-xs sm:text-sm"
                      >
                        {t.services.consultNow}
                        <ArrowRight className="w-3 h-3 inline ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Start Section */}
      <section id="como-empezar" className="py-16 sm:py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20" data-aos="fade-up">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 mb-4 sm:mb-6">
              <Rocket className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 mr-2" />
              <span className="text-xs sm:text-sm text-slate-300">{t.howToStart.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {t.howToStart.title}
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto px-4">
              {t.howToStart.subtitle}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  step: "01",
                  title: t.howToStart.steps[0].title,
                  description: t.howToStart.steps[0].description,
                  action: t.howToStart.steps[0].action,
                  link: "https://wa.me/541170601388?text=Realiza+tu+consulta.",
                  icon: MessageCircle,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  step: "02",
                  title: t.howToStart.steps[1].title,
                  description: t.howToStart.steps[1].description,
                  action: t.howToStart.steps[1].action,
                  link: "https://cal.com/dusare/calendar",
                  icon: Calendar,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  step: "03",
                  title: t.howToStart.steps[2].title,
                  description: t.howToStart.steps[2].description,
                  action: t.howToStart.steps[2].action,
                  link: "https://cal.com/dusare/calendar",
                  icon: Brain,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  step: "04",
                  title: t.howToStart.steps[3].title,
                  description: t.howToStart.steps[3].description,
                  action: t.howToStart.steps[3].action,
                  link: "https://cal.com/dusare/calendar",
                  icon: Rocket,
                  color: "from-orange-500 to-red-500"
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index} 
                    className="group relative"
                    data-aos="fade-up" 
                    data-aos-delay={index * 150}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-500`}></div>
                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 hover:border-slate-600/50 transition-all duration-500 group-hover:transform group-hover:scale-105">
                      <div className="flex items-start mb-4 sm:mb-6">
                        <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white font-bold text-base sm:text-lg mr-3 sm:mr-4`}>
                          {item.step}
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{item.title}</h3>
                          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r ${item.color} text-transparent`} />
                        </div>
                      </div>
                      
                      <p className="text-slate-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{item.description}</p>
                      
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/btn inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r ${item.color} hover:opacity-90 transition-all duration-300 font-semibold text-white shadow-lg transform hover:scale-105 text-sm sm:text-base`}
                      >
                        {item.action}
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* AI Partners Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {t.ai.title}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto px-4">
              {t.ai.subtitle}
            </p>
          </div>
          
          <div className="flex justify-center items-center flex-wrap gap-6 sm:gap-12" data-aos="fade-up" data-aos-delay="200">
            {ias.map((ia, index) => (
              <div 
                key={index}
                className="group relative"
                data-aos="zoom-in"
                data-aos-delay={100 * (index + 1)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative p-4 sm:p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-slate-600/50 transition-all duration-500 group-hover:transform group-hover:scale-110">
                  <img 
                    src={ia.Image}
                    alt={ia.name}
                    className="w-16 h-16 sm:w-24 sm:h-24 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="quienes-somos" className="py-16 sm:py-24 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 mb-6 sm:mb-8">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2" />
              <span className="text-xs sm:text-sm text-slate-300">{t.about.badge}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {t.about.title}
            </h2>
            
            <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 leading-relaxed px-4">
              {t.about.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12" data-aos="fade-up" data-aos-delay="300">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`group p-3 sm:p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 ${social.color} transition-all duration-300 transform hover:scale-110`}
                    data-aos="zoom-in"
                    data-aos-delay={50 * (index + 1)}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {t.tools.title}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto px-4">
              {t.tools.subtitle}
            </p>
          </div>
          
          <div className="w-full max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="group relative"
                  data-aos="zoom-in"
                  data-aos-delay={100 * (index + 1)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative p-4 sm:p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-slate-600/50 transition-all duration-500 group-hover:transform group-hover:scale-110">
                    <img 
                      src={tool.image}
                      alt={tool.name}
                      className="h-12 w-12 sm:h-16 sm:w-16 object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/50 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4 sm:mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75"></div>
                <div className="relative bg-slate-950 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-slate-700">
                  <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Dusare
                  </span>
                </div>
              </div>
            </div>
            <p className="text-slate-400 mb-4 sm:mb-6 text-sm sm:text-base">
              {t.footer.tagline}
            </p>
            <p className="text-slate-500 text-xs sm:text-sm">
              &copy; 2025 Dusare Consult. {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;