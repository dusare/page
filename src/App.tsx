import React, { useState, useEffect } from 'react';
import { Brain, Zap, Code2, Users, Mail, Phone, Github, Linkedin, Menu, X, BrainCircuit, Waypoints, DraftingCompass, Calendar, MessageCircle, Rocket, Instagram, Facebook, Twitter, Send, ArrowRight, CheckCircle, Star, Play, Bot } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  
  const headerImages = [
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&q=80&w=2000"
  ];

  const rotatingWords = ['Consultora', 'Integraciones', 'Soluciones', 'Innovación', 'Tecnología', 'Agentes IA'];

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
        prevIndex === rotatingWords.length - 1 ? 0 : prevIndex + 1
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
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
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
      title: "Agentes IA",
      shortDesc: "Desarrollo de agentes inteligentes y soluciones de IA personalizadas",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400",
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
      icon: Waypoints,
      title: "Integraciones",
      shortDesc: "Soluciones de integración empresarial y APIs",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
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
      icon: DraftingCompass,
      title: "Arquitectura de Software",
      shortDesc: "Diseño y consultoría en arquitecturas modernas",
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&q=80&w=400",
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
      icon: Bot,
      title: "Automatizaciones y Soluciones con IA",
      shortDesc: "Automatización inteligente de procesos empresariales con IA",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400",
      detailedDesc: [
        "Automatización de procesos de negocio con IA (RPA + AI)",
        "Chatbots y asistentes virtuales inteligentes",
        "Análisis automático de documentos y datos",
        "Sistemas de clasificación y etiquetado automático",
        "Automatización de workflows complejos",
        "Integración de IA en procesos existentes"
      ]
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
    { number: "50+", label: "Proyectos Completados" },
    { number: "98%", label: "Satisfacción del Cliente" },
    { number: "24/7", label: "Soporte Técnico" },
    { number: "5+", label: "Años de Experiencia" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75"></div>
                <div className="relative bg-slate-950 px-4 py-2 rounded-lg border border-slate-700">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Dusare
                  </span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative h-8 flex items-center min-w-[140px]">
                  <span 
                    key={currentWordIndex}
                    className="text-lg font-medium bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-up"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(96, 165, 250, 0.3))'
                    }}
                  >
                    {rotatingWords[currentWordIndex]}
                  </span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-50 p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-700/50 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Mobile Menu */}
            <div className={`
              fixed inset-0 bg-slate-950/98 backdrop-blur-xl transform transition-all duration-500 ease-out
              ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
              md:hidden flex items-center justify-center
            `}>
              <div className="flex flex-col items-center space-y-8 text-center">
                {['Quienes Somos', 'Servicios', 'Cómo Empezar'].map((item, index) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-').replace('ó', 'o')}`}
                    onClick={handleNavClick}
                    className="text-2xl font-medium text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                { name: 'Quienes Somos', href: '#quienes-somos' },
                { name: 'Servicios', href: '#servicios' },
                { name: 'Cómo Empezar', href: '#como-empezar' }
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
                Comenzar
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto" data-aos="fade-up" data-aos-duration="1200">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 mb-8">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm text-slate-300">Soluciones Tecnológicas de Vanguardia</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span 
                className={`glitch-text ${isGlitching ? 'glitch-active' : ''}`}
                data-text="Transformamos tu negocio con"
              >
                Transformamos tu negocio con
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Inteligencia Artificial
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Creamos soluciones que impulsan la innovación y el crecimiento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#como-empezar"
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 font-semibold shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 flex items-center"
              >
                Comenzar Ahora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                href="#servicios"
                className="group px-8 py-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-700/50 transition-all duration-300 font-semibold flex items-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Servicios
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="400">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20" data-aos="fade-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 mb-6">
              <Zap className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-sm text-slate-300">Nuestros Servicios</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Soluciones que Impulsan el Futuro
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Transformamos ideas en realidad con tecnología de vanguardia y experiencia comprobada
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
                  <div className="relative h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-500 group-hover:transform group-hover:scale-105 flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-bold ml-3 text-white">{service.title}</h3>
                    </div>
                    
                    <p className="text-slate-300 mb-4 leading-relaxed text-sm">{service.shortDesc}</p>
                    
                    <div className="mb-4">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-32 object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-all duration-500"
                      />
                    </div>

                    <div className="space-y-2 mb-6 flex-grow">
                      {service.detailedDesc.slice(0, 3).map((desc, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-slate-300 text-xs leading-relaxed">{desc}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <a 
                        href="https://wa.me/541170601388?text=Te+damos+la+bienvenida+a+Dusare." 
                        className="group/btn w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 font-semibold text-center block shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 text-sm"
                      >
                        Consultar Ahora
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
      <section id="como-empezar" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20" data-aos="fade-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 mb-6">
              <Rocket className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm text-slate-300">Proceso Simple</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Cómo Empezar tu Transformación
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Un proceso simple y efectivo para llevar tu negocio al siguiente nivel
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  step: "01",
                  title: "Conversación Inicial",
                  description: "Cuéntanos sobre tu proyecto o necesidad. Analizaremos si podemos ayudarte y cómo podemos agregar valor a tu negocio.",
                  action: "Iniciar conversación",
                  link: "https://wa.me/541170601388?text=Realiza+tu+consulta.",
                  icon: MessageCircle,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  step: "02",
                  title: "Consultoría Estratégica",
                  description: "Agendamos una llamada estratégica para analizar en profundidad los procesos de tu negocio y diseñar la mejor solución.",
                  action: "Agendar llamada",
                  link: "https://cal.com/dusare/calendar",
                  icon: Calendar,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  step: "03",
                  title: "Back Office Inteligente",
                  description: "Te prepararemos un entregable con todas las soluciones de IA aplicables a tu negocio y los beneficios que obtendrás.",
                  action: "Agendar reunión",
                  link: "https://cal.com/dusare/calendar",
                  icon: Brain,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  step: "04",
                  title: "IA a Medida",
                  description: "Finalmente, acordaremos iniciar el desarrollo de soluciones de IA a medida y te brindaremos acceso a recursos exclusivos de software ya disponibles.",
                  action: "Solicita tu proyecto",
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
                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-500 group-hover:transform group-hover:scale-105">
                      <div className="flex items-start mb-6">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white font-bold text-lg mr-4`}>
                          {item.step}
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                          <Icon className={`w-6 h-6 bg-gradient-to-r ${item.color} text-transparent`} />
                        </div>
                      </div>
                      
                      <p className="text-slate-300 mb-6 leading-relaxed">{item.description}</p>
                      
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/btn inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r ${item.color} hover:opacity-90 transition-all duration-300 font-semibold text-white shadow-lg transform hover:scale-105`}
                      >
                        {item.action}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
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
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Inteligencia Artificial Utilizada
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Trabajamos con las mejores plataformas de IA del mercado
            </p>
          </div>
          
          <div className="flex justify-center items-center flex-wrap gap-12" data-aos="fade-up" data-aos-delay="200">
            {ias.map((ia, index) => (
              <div 
                key={index}
                className="group relative"
                data-aos="zoom-in"
                data-aos-delay={100 * (index + 1)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-slate-600/50 transition-all duration-500 group-hover:transform group-hover:scale-110">
                  <img 
                    src={ia.Image}
                    alt={ia.name}
                    className="w-24 h-24 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="quienes-somos" className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 mb-8">
              <Users className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm text-slate-300">Sobre Nosotros</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Expertos en Transformación Digital
            </h2>
            
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Somos un equipo de expertos apasionados por la tecnología y la innovación. 
              Nos especializamos en crear soluciones tecnológicas que impulsan la transformación 
              digital de nuestros clientes mediante la implementación de IA avanzada, 
              integraciones empresariales robustas y arquitecturas de software escalables.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12" data-aos="fade-up" data-aos-delay="300">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`group p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 ${social.color} transition-all duration-300 transform hover:scale-110`}
                    data-aos="zoom-in"
                    data-aos-delay={50 * (index + 1)}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Herramientas y Tecnologías
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Utilizamos las mejores herramientas del mercado para crear soluciones robustas
            </p>
          </div>
          
          <div className="w-full max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <div className="flex flex-wrap justify-center items-center gap-8">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="group relative"
                  data-aos="zoom-in"
                  data-aos-delay={100 * (index + 1)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-slate-600/50 transition-all duration-500 group-hover:transform group-hover:scale-110">
                    <img 
                      src={tool.image}
                      alt={tool.name}
                      className="h-16 w-16 object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/50 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75"></div>
                <div className="relative bg-slate-950 px-4 py-2 rounded-lg border border-slate-700">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Dusare
                  </span>
                </div>
              </div>
            </div>
            <p className="text-slate-400 mb-6">
              Transformando el futuro con tecnología inteligente
            </p>
            <p className="text-slate-500 text-sm">
              &copy; 2025 Dusare Consult. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;