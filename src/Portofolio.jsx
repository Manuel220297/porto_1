import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, ExternalLink, Github, Linkedin } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'works', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const works = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'Logo Design',
      image: 'https://placehold.co/400x300/6366f1/ffffff?text=Logo+Design',
      description: 'Complete brand identity package for tech startup',
    },
    {
      id: 2,
      title: 'Product Advertisement',
      category: 'Static Ads',
      image: 'https://placehold.co/400x300/8b5cf6/ffffff?text=Advertisement',
      description: 'Eye-catching product advertisement for social media',
    },
    {
      id: 3,
      title: '3D Product Visualization',
      category: '3D Modeling',
      image: 'https://placehold.co/400x300/06b6d4/ffffff?text=3D+Model',
      description: 'Photorealistic 3D product rendering',
    },
    {
      id: 4,
      title: 'Corporate Logo Suite',
      category: 'Logo Design',
      image: 'https://placehold.co/400x300/10b981/ffffff?text=Corporate+Logo',
      description: 'Professional logo design with variations',
    },
    {
      id: 5,
      title: 'Digital Campaign',
      category: 'Static Ads',
      image: 'https://placehold.co/400x300/f59e0b/ffffff?text=Campaign+Ad',
      description: 'Multi-format digital advertising campaign',
    },
    {
      id: 6,
      title: 'Architectural Visualization',
      category: '3D Modeling',
      image: 'https://placehold.co/400x300/ef4444/ffffff?text=3D+Architecture',
      description: 'Detailed 3D architectural rendering',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Navigation */}
      <nav className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex-shrink-0'>
              <h1 className='text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                DesignStudio
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-8'>
                {['Home', 'My Works', 'About', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      activeSection === item.toLowerCase().replace(' ', '')
                        ? 'text-indigo-600 border-b-2 border-indigo-600'
                        : 'text-gray-700 hover:text-indigo-600'
                    }`}>
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className='md:hidden'>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='p-2 text-gray-700 hover:text-indigo-600'>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden bg-white border-t'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {['Home', 'My Works', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
                  className='block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50'>
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id='home' className='pt-16 min-h-screen flex items-center'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
                Creative
                <span className='block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                  Graphics Designer
                </span>
              </h1>
              <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
                Specializing in static advertisements, logo design, and 3D modeling. I bring your brand vision to life
                with creative and impactful designs.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <button
                  onClick={() => scrollToSection('works')}
                  className='bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium'>
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className='border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-medium'>
                  Get In Touch
                </button>
              </div>
            </div>
            <div className='relative'>
              <div className='relative z-10'>
                <img
                  src='https://placehold.co/500x600/6366f1/ffffff?text=Designer+Portrait'
                  alt='Designer Portrait'
                  className='rounded-2xl shadow-2xl'
                />
              </div>
              <div className='absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-indigo-400 to-purple-400 rounded-2xl -z-10'></div>
            </div>
          </div>
        </div>
      </section>

      {/* My Works Section */}
      <section id='works' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>My Works</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              A showcase of my recent projects spanning logo design, static advertisements, and 3D modeling
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {works.map((work) => (
              <div
                key={work.id}
                className='group bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300'>
                <div className='relative overflow-hidden'>
                  <img
                    src={work.image}
                    alt={work.title}
                    className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                    <ExternalLink className='text-white' size={32} />
                  </div>
                </div>
                <div className='p-6'>
                  <div className='text-sm text-indigo-600 font-medium mb-2'>{work.category}</div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>{work.title}</h3>
                  <p className='text-gray-600'>{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <img
                src='https://placehold.co/600x500/8b5cf6/ffffff?text=Creative+Process'
                alt='Creative Process'
                className='rounded-2xl shadow-lg'
              />
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>About Me</h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                I'm a passionate graphics designer with over 5 years of experience creating visual solutions that make
                brands stand out. My expertise spans across multiple design disciplines, allowing me to offer
                comprehensive creative services.
              </p>
              <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
                From crafting memorable logos to designing compelling advertisements and creating stunning 3D
                visualizations, I believe in the power of good design to communicate, inspire, and drive results.
              </p>

              <div className='space-y-4'>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>Specializations</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-2 h-2 bg-indigo-600 rounded-full'></div>
                    <span className='text-gray-700'>Logo Design & Branding</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-2 h-2 bg-purple-600 rounded-full'></div>
                    <span className='text-gray-700'>Static Advertisements</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-2 h-2 bg-cyan-600 rounded-full'></div>
                    <span className='text-gray-700'>3D Modeling & Rendering</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-2 h-2 bg-green-600 rounded-full'></div>
                    <span className='text-gray-700'>Visual Identity Systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Get In Touch</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Ready to bring your vision to life? Let's discuss your next project
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Info */}
            <div className='space-y-8'>
              <div className='flex items-start space-x-4'>
                <div className='bg-indigo-100 p-3 rounded-lg'>
                  <Mail className='text-indigo-600' size={24} />
                </div>
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-1'>Email</h3>
                  <p className='text-gray-600'>hello@designstudio.com</p>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='bg-purple-100 p-3 rounded-lg'>
                  <Phone className='text-purple-600' size={24} />
                </div>
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-1'>Phone</h3>
                  <p className='text-gray-600'>+1 (555) 123-4567</p>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='bg-cyan-100 p-3 rounded-lg'>
                  <MapPin className='text-cyan-600' size={24} />
                </div>
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-1'>Location</h3>
                  <p className='text-gray-600'>New York, NY</p>
                </div>
              </div>

              <div className='pt-8'>
                <h3 className='text-lg font-bold text-gray-900 mb-4'>Follow Me</h3>
                <div className='flex space-x-4'>
                  <a href='#' className='bg-gray-100 p-3 rounded-lg hover:bg-indigo-100 transition-colors'>
                    <Linkedin className='text-gray-600 hover:text-indigo-600' size={20} />
                  </a>
                  <a href='#' className='bg-gray-100 p-3 rounded-lg hover:bg-indigo-100 transition-colors'>
                    <Github className='text-gray-600 hover:text-indigo-600' size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='bg-gray-50 p-8 rounded-xl'>
              <div className='space-y-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div>
                    <div className='block text-sm font-medium text-gray-700 mb-2'>First Name</div>
                    <input
                      type='text'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors'
                      placeholder='John'
                    />
                  </div>
                  <div>
                    <div className='block text-sm font-medium text-gray-700 mb-2'>Last Name</div>
                    <input
                      type='text'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors'
                      placeholder='Doe'
                    />
                  </div>
                </div>

                <div>
                  <div className='block text-sm font-medium text-gray-700 mb-2'>Email</div>
                  <input
                    type='email'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors'
                    placeholder='john@example.com'
                  />
                </div>

                <div>
                  <div className='block text-sm font-medium text-gray-700 mb-2'>Project Type</div>
                  <select className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors'>
                    <option>Select a service</option>
                    <option>Logo Design</option>
                    <option>Static Advertisement</option>
                    <option>3D Modeling</option>
                    <option>Complete Brand Identity</option>
                  </select>
                </div>

                <div>
                  <div className='block text-sm font-medium text-gray-700 mb-2'>Message</div>
                  <textarea
                    rows={4}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors resize-none'
                    placeholder='Tell me about your project...'></textarea>
                </div>

                <button
                  onClick={() => alert("Thank you for your message! I'll get back to you soon.")}
                  className='w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium'>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h3 className='text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>
              DesignStudio
            </h3>
            <p className='text-gray-400 mb-4'>Creating visual experiences that inspire and engage</p>
            <p className='text-gray-500 text-sm'>© 2025 DesignStudio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
