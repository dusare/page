import React, { useState, useEffect } from 'react';
import { Brain, Construction as Connection, Archive as Architecture, Users, Mail, Phone, Github, Linkedin, Workflow, Code2, Menu, X, BrainCircuit, Waypoints, DraftingCompass } from 'lucide-react';
import ReactRotatingText from 'react-rotating-text';
import LogoSlider from 'react-infinite-logo-slider';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const headerImages = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000"
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

  const team = [
    {
      name: "Juan Manuel Sirito",
      role: "Arquitecto de sistemas | Experto en integraciones",
      description: "Soy Ingeniero en Sistemas Informáticos (UAI) con Maestría en Dirección Estratégica Y Tecnología. Soy estratégico y poseo gran capacidad de análisis. Me considero una persona responsable, dinámica y creativa, con facilidad de adaptación, jugador de equipo, con iniciativa para resolutivos eficiente y orientada a objetivo. Deseo desarrollarme en una posición de liderazgo, en el área de sistemas o en la parte comercial de empresas de tecnología o consultoría. Poseo habilidades de dirección, estrategia, negociación, organización y gestión.",
      image: "https://media.licdn.com/dms/image/v2/C4E03AQGqTrt0f4D_-Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1562197855848?e=1744243200&v=beta&t=lqzHfl-Jyk1NRqUDgf2mWEV1T6z4f4tpSCtCRv20C-E"
    },
    {
      name: "Ariel Sebastian Duarte",
      role: "Fundador | Arquitecto de Software | Expert Agent AI",
      description: "Arquitecto de Software, con más de 10 años de experiencia en multi plataformas. Desarrollando en diferentes tecnologías, brindando soporte en todas las etapas del desarrollo de las aplicaciones, tanto de ambientes, migración, integración continua. Teniendo sólidos conocimientos en múltiples plataformas.",
      image: "https://media.licdn.com/dms/image/v2/C5603AQG3iO7Gg6IELw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517450580592?e=1744243200&v=beta&t=CKfeK-65rTEFjBAQPZibacO6JVJCsfHm6i7DTM5kCsw"
    },
    {
      name: "Martin Ariel Duran",
      role: "Arquitecta de Software | Integraciones y Servicios",
      description: "con experiencia en el sector público y privado, siempre priorizando el objetivo de mi trabajo colaborar en brindar servicio mejor, desde la parte técnica con mis conocimientos o brindando ideas y realizando las investigaciones necesarias, así como acompañando y mejorando las gestiones necesarias internas y a veces un poquito entrometido ;)",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHP0ActbfJD4Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1672262170246?e=1744243200&v=beta&t=47GHwKQObm7mxO8_MuGMkx9rBfqz6iKpbS0N_iDHb7Y"
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
                  <a href="#servicios" 
                     onClick={handleNavClick}
                     className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors">
                    Servicios
                  </a>
                  <a href="#equipo" 
                     onClick={handleNavClick}
                     className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors">
                    Equipo
                  </a>
                  <a href="#contacto" 
                     onClick={handleNavClick}
                     className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    Contacto
                  </a>
                </div>
              </div>

              <div className="hidden md:flex space-x-4">
                <a href="#servicios" 
                   className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-500/10 text-white border border-transparent hover:border-cyan-400/30 transition-all duration-300 hover:from-cyan-400/20 hover:to-purple-500/20">
                  Servicios
                </a>
                <a href="#equipo" 
                   className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-500/10 text-white border border-transparent hover:border-cyan-400/30 transition-all duration-300 hover:from-cyan-400/20 hover:to-purple-500/20">
                  Equipo
                </a>
                <a href="#contacto" 
                   className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:opacity-90 transition-opacity">
                  Contacto
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
              <a href="#contacto" className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:opacity-90 transition-opacity text-base sm:text-lg inline-block">
                Contáctanos
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
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-6 rounded-lg bg-gray-800 hover:bg-gray-800/80 transition-colors">
              <BrainCircuit className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-2xl font-semibold mb-4 text-white">Agentes AI</h3>
              <p className="text-gray-300 mb-4">Desarrollo de agentes inteligentes y soluciones de IA personalizadas</p>
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400"
                alt="AI"
                className="rounded-lg mb-4"
              />
              <a href="#contacto" className="text-cyan-400 hover:text-purple-500 transition-colors">Saber más →</a>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gray-800 hover:bg-gray-800/80 transition-colors">
              <Waypoints className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-2xl font-semibold mb-4 text-white">Integraciones MuleSoft</h3>
              <p className="text-gray-300 mb-4">Soluciones de integración empresarial y APIs</p>
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400"
                alt="Integration"
                className="rounded-lg mb-4"
              />
              <a href="#contacto" className="text-cyan-400 hover:text-purple-500 transition-colors">Saber más →</a>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gray-800 hover:bg-gray-800/80 transition-colors">
              <DraftingCompass className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-2xl font-semibold mb-4 text-white">Arquitectura de Software</h3>
              <p className="text-gray-300 mb-4">Diseño y consultoría en arquitecturas modernas</p>
              <img 
                src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&q=80&w=400"
                alt="Architecture"
                className="rounded-lg mb-4"
              />
              <a href="#contacto" className="text-cyan-400 hover:text-purple-500 transition-colors">Saber más →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Quiénes Somos
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

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Herramientas y Tecnologías
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
                  className="flex items-center justify-center"
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

      <section id="contacto" className="py-20 bg-gradient-to-r from-cyan-400 to-purple-500">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Contacto</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-center space-x-4">
                <Mail className="w-8 h-8 text-white" />
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-white/90">contacto@dusareconsult.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-8 h-8 text-white" />
                <div>
                  <h3 className="font-semibold text-white">Teléfono</h3>
                  <p className="text-white/90">+34 900 123 456</p>
                </div>
              </div>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Nombre"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:border-white focus:outline-none"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:border-white focus:outline-none"
                />
              </div>
              <textarea 
                placeholder="Mensaje"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:border-white focus:outline-none"
              ></textarea>
              <button 
                type="submit"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-500/10 text-white border  hover:border-cyan-400/30 transition-all duration-300 hover:from-cyan-400/20 hover:to-purple-500/20"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">&copy; 2024 Dusare Consult. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;