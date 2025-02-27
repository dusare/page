import React, { useState, useEffect, useCallback } from 'react';
import { Brain, Construction as Connection, Archive as Architecture, Users, Mail, Phone, Github, Linkedin, Workflow, Code2, Menu, X, BrainCircuit, Waypoints, DraftingCompass, Calendar, MessageCircle, Rocket } from 'lucide-react';
import ReactRotatingText from 'react-rotating-text';
import LogoSlider from 'react-infinite-logo-slider';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const headerImages = [
    "https://dusare-338284363.imgix.net/ia.webp?auto=format&fit=crop&q=80&w=2000",
    "https://dusare-338284363.imgix.net/api2.webp?auto=format&fit=crop&q=80&w=2000",
    "https://dusare-338284363.imgix.net/architect.webp?auto=format&fit=crop&q=80&w=2000"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === headerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const rotatingWords = ['Consultora', 'Integraciones', 'Soluciones', 'Innovación', 'Tecnología', 'Agentes IA'];

  const ias = [
    {
      name: "OpenAI",
      Image: "https://cdn.brandfetch.io/idR3duQxYl/theme/light/logo.svg?c=1bx1742504365898id64Mup7acJwp1kEwn&t=1718351879861"
    },
    {
      name: "Claude",
      Image: "https://cdn.brandfetch.io/idW5s392j1/theme/light/logo.svg?c=1bx1742506080449id64Mup7acberka77v&t=1738315809319"
    },
    {
      name: "Meta",
      Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/800px-Meta_Platforms_Inc._logo.svg.png"
    },
    {
      name: "Gemini",
      Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/344px-Google_Gemini_logo.svg.png"
    },
    {
      name: "DeepSeek",
      Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/DeepSeek_logo.svg/512px-DeepSeek_logo.svg.png"
    }
  ];

  const tools = [
    {
      name: "MuleSoft",
      image: "https://cdn.brandfetch.io/idA6cDxrkg/theme/dark/logo.svg"
    },
    {
      name: "Make.com",
      image: "https://cdn.brandfetch.io/idVHU5hl7_/theme/dark/logo.svg?c=1bx1741529786375id64Mup7acu2U5mqir&t=1690469454303"
    },
    {
      name: "n8n",
      image: "https://cdn.brandfetch.io/idO6_6uqJ9/idWtnk-fDo.svg?c=1bx1741530084702id64Mup7ac8XgYuRfh&t=1655217297979"
    },
    {
      name: "Node.js",
      image: "https://nodejs.org/static/images/logo.svg"
    },
    {
      name: "Python",
      image: "https://cdn.brandfetch.io/idbpOFBgcc/theme/dark/logo.svg?c=1bx1741529950238id64Mup7acl4IsW4ab&t=1732459780656"
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
      image: "https://cdn.brandfetch.io/idJ3Cg8ymG/idASSo3XVu.svg?c=1bx1741530166352id64Mup7acR4KNtmq-&t=1646237667530"
    }
  ];

  const team = [
    {
      name: "Juan Manuel Sirito",
      role: "Arquitecto de sistemas | Experto en integraciones",
      description: "Soy Ingeniero en Sistemas Informáticos (UAI) con Maestría en Dirección Estratégica Y Tecnología. Soy estratégico y poseo gran capacidad de análisis. Me considero una persona responsable, dinámica y creativa, con facilidad de adaptación, jugador de equipo, con iniciativa para resolutivos eficiente y orientada a objetivo. Deseo desarrollarme en una posición de liderazgo, en el área de sistemas o en la parte comercial de empresas de tecnología o consultoría. Poseo habilidades de dirección, estrategia, negociación, organización y gestión.",
      image: "https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png"
    },
    {
      name: "Ariel Sebastian Duarte",
      role: "Fundador | Arquitecto de Software | Expert Agent AI",
      description: "Arquitecto de Software, con más de 10 años de experiencia en multi plataformas. Desarrollando en diferentes tecnologías, brindando soporte en todas las etapas del desarrollo de las aplicaciones, tanto de ambientes, migración, integración continua. Teniendo sólidos conocimientos en múltiples plataformas.",
      image: "https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png"
    },
    {
      name: "Martin Ariel Duran",
      role: "Arquitecta de Software | Integraciones y Servicios",
      description: "con experiencia en el sector público y privado, siempre priorizando el objetivo de mi trabajo colaborar en brindar servicio mejor, desde la parte técnica con mis conocimientos o brindando ideas y realizando las investigaciones necesarias, así como acompañando y mejorando las gestiones necesarias internas y a veces un poquito entrometido ;)",
      image: "https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png"
    },
    {
      name: "Heydelberth Rodriguez",
      role: "Mulesoft Senior Developer | Senior Developer | Integrador | Developer | Mule",
      description: "Ingeniero de software con 8+ años de experiencia en desarrollo y despliegue de soluciones tecnológicas. Especialista en aplicaciones web, móviles y soluciones empresariales. Liderazgo en equipos multidisciplinarios y colaboración con stakeholders. Manejo de Java, PHP, .NET, JavaScript, Python, entre otros. Enfoque en excelencia técnica, innovación y entrega puntual. 🎓 Formación en desarrollo y diseño de aplicaciones, con compromiso continuo de aprendizaje.",
      image: "https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png"
    }
  ];

  const clients = [
    "https://static-00.iconduck.com/assets.00/amazon-icon-2048x1722-myhuicq8.png",
    "https://cdn.iconscout.com/icon/free/png-256/free-nvidia-282591.png?f=webp",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/1200px-Netflix_icon.svg.png"
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
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="relative bg-cover bg-center h-screen transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url("${headerImages[currentImageIndex]}")`,
        }}>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/70 to-gray-900/90"></div>
        
        <div className="relative h-full">
          <nav className="container mx-auto px-10 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3 z-50">
                <blockquote className="text-center text-4xl font-semibold text-gray-900 italic dark:text-white">
                  <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-cyan-500">
                    <span className="relative text-white dark:text-gray-950">Dusare</span>
                  </span>
                  &nbsp;
                  <span className="text-white">
                    <ReactRotatingText items={rotatingWords} />
                  </span>
                </blockquote>
              </div>

              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden z-50 text-white hover:text-cyan-400 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <div className={`
                fixed inset-0 bg-gray-900/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                md:hidden flex items-center justify-center
              `}>
                <div className="flex flex-col items-center space-y-8">
                  <a href="#quienes-somos" 
                     onClick={handleNavClick}
                     className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors">
                    Quienes Somos
                  </a>
                  <a href="#servicios" 
                     onClick={handleNavClick}
                     className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors">
                    Servicios
                  </a>
                  <a href="#como-empezar" 
                     onClick={handleNavClick}
                     className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors">
                    Cómo Empezar
                  </a>
                  <a href="#equipo" 
                     onClick={handleNavClick}
                     className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors">
                    Equipo
                  </a>
                </div>
              </div>

              <div className="hidden md:flex space-x-4">
                <a href="#quienes-somos" 
                   className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-500/10 text-white border border-transparent hover:border-cyan-400/30 transition-all duration-300 hover:from-cyan-400/20 hover:to-purple-500/20">
                  Quienes Somos
                </a>
                <a href="#servicios" 
                   className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-500/10 text-white border border-transparent hover:border-cyan-400/30 transition-all duration-300 hover:from-cyan-400/20 hover:to-purple-500/20">
                  Servicios
                </a>
                <a href="#como-empezar" 
                   className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-500/10 text-white border border-transparent hover:border-cyan-400/30 transition-all duration-300 hover:from-cyan-400/20 hover:to-purple-500/20">
                  Cómo Empezar
                </a>
                <a href="#equipo" 
                   className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:opacity-90 transition-opacity">
                  Equipo
                </a>
              </div>
            </div>
          </nav>
          
          <div className="container mx-auto px-6 flex items-center justify-center h-[calc(100vh-5rem)]">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 px-4">
                Soluciones Tecnológicas Innovadoras
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-white/90 px-4">
                Expertos en IA, Integraciones y Arquitectura de Software
              </p>
              
              <a 
                href="#como-empezar"
                className="inline-block bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300"
              >
                Comenzar Ahora
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="servicios" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Nuestros Servicios
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group min-h-[500px] h-full [perspective:1000px]">
                  <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front of the card */}
                    <div className="absolute inset-0">
                      <div className="h-full w-full rounded-xl bg-gray-800 p-6 sm:p-8 shadow-xl shadow-cyan-400/10 flex flex-col items-center">
                        <Icon className="w-12 sm:w-16 h-12 sm:h-16 text-cyan-400 mb-4" />
                        <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white text-center">{service.title}</h3>
                        <p className="text-gray-300 mb-4 text-center text-sm sm:text-base">{service.shortDesc}</p>
                        <img 
                          src={service.image}
                          alt={service.title}
                          className="rounded-lg mt-auto w-full h-36 sm:h-48 object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Back of the card */}
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-800 px-4 sm:px-8 py-4 sm:py-6 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto">
                      <div className="flex flex-col h-full">
                        <div className="flex-grow">
                          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            {service.title}
                          </h3>
                          <ul className="space-y-2 sm:space-y-3 text-gray-300 text-xs sm:text-sm">
                            {service.detailedDesc.map((desc, i) => (
                              <li key={i} className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 mr-2 flex-shrink-0"></span>
                                <span className="leading-relaxed">{desc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-4 sm:pt-6 mt-auto">
                          <a 
                            href="https://wa.me/541170601388?text=Te+damos+la+bienvenida+a+Dusare." 
                            className="block text-center w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-sm sm:text-base font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/20"
                          >
                            Consultar Ahora
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="como-empezar" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Cómo Empezar
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 rounded-xl p-8 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white pl-6">Hablanos por privado</h3>
                <p className="text-gray-300 mb-6">
                  Cuéntanos sobre tu proyecto o necesidad. Analizaremos si podemos ayudarte y cómo podemos agregar valor a tu negocio.
                </p>
                <a 
                  href="https://wa.me/541170601388?text=Realiza+tu+consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-purple-500 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Iniciar conversación</span>
                </a>
              </div>

              <div className="bg-gray-900 rounded-xl p-8 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white pl-6">Empecemos la Consultoría</h3>
                <p className="text-gray-300 mb-6">
                  Agendamos una llamada estratégica para analizar en profundidad los procesos de tu negocio y diseñar la mejor solución.
                </p>
                <a 
                  href="https://cal.com/dusare/calendar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-purple-500 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agendar llamada</span>
                </a>
              </div>
          
              <div className="bg-gray-900 rounded-xl p-8 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white pl-6">Back Office Inteligente</h3>
                <p className="text-gray-300 mb-6">
                Te prepararemos un entregable con todas las soluciones de IA aplicables a tu negocio y los beneficios que obtendrás.
                </p>
                <a 
                  href="https://cal.com/dusare/calendar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-purple-500 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agendar reunion</span>
                </a>
              </div>

              <div className="bg-gray-900 rounded-xl p-8 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white pl-6">IA a Medida</h3>
                <p className="text-gray-300 mb-6">
                Finalmente, acordaremos iniciar el desarrollo de soluciones de IA a medida y te brindaremos acceso a recursos exclusivos de software ya disponibles, garantizando que el entregable cumple plenamente con todos los requerimientos establecidos.
                </p>
                <a 
                  href="https://cal.com/dusare/calendar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-purple-500 transition-colors"
                >
                  <Rocket className="w-5 h-5" />
                  <span>Solicita tu proyecto</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Intelegencias Artificial utilizadas
          </h2>
          <div className="flex justify-center items-center space-x-12 flex-wrap">
            {ias.map((ia, index) => (
              <img 
                key={index}
                src={ia.Image}
                alt={`Cliente ${index + 1}`}
                className="w-40 h-40 h-16 object-contain grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="quienes-somos" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Sobre Nosotros
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-8">
              Somos un equipo de expertos apasionados por la tecnología y la innovación. 
              Nos especializamos en crear soluciones tecnológicas que impulsan la transformación 
              digital de nuestros clientes mediante la implementación de IA avanzada, 
              integraciones empresariales robustas y arquitecturas de software escalables.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/dusare" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="equipo" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Nuestro Equipo
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-gray-800 p-6 rounded-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-2 ring-cyan-400"
                />
                <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                <p className="text-cyan-400 mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/*
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Nuestros Clientes
          </h2>
          <div className="flex justify-center items-center space-x-12 flex-wrap">
            {clients.map((client, index) => (
              <img 
                key={index}
                src={client}
                alt={`Cliente ${index + 1}`}
                className="h-16 object-contain grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </div>
      </section>
*/}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Herramientas y Tecnologías Usadas
          </h2>
          <div className="w-full max-w-4xl mx-auto">
            <LogoSlider
              width="200px"
              duration={40}
              pauseOnHover={true}
              blurBorders={false}
             
            >
              {tools.map((tool, index) => (
                <LogoSlider.Slide
                  key={index}
                >
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="h-20 w-20 object-contain mb-4 filter brightness-100 hover:brightness-110"
                    />
                </LogoSlider.Slide>
              ))}
            </LogoSlider>
          </div>
        </div>
      </section>
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">&copy; 2025 Dusare Consult. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
