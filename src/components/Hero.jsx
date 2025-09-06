import React, { useState, useEffect } from "react";

function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://readdy.ai/api/search-image?query=Modern%20business%20consultancy%20office%20environment%20with%20professional%20team%20collaboration%2C%20bright%20natural%20lighting%2C%20contemporary%20workspace%20with%20glass%20walls%20and%20modern%20furniture%2C%20corporate%20success%20atmosphere%2C%20high-tech%20digital%20transformation%20setting%2C%20clean%20minimalist%20design%20with%20blue%20and%20white%20color%20scheme&width=1920&height=1080&seq=hero1&orientation=landscape')`,
          }}
        />

        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <h1
                  className={`font-['Pacifico'] text-3xl font-bold transition-colors duration-300 ${
                    scrolled ? "text-blue-600" : "text-white"
                  }`}
                >
                  Sales Nova
                </h1>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#home"
                  className={`hover:text-blue-400 transition-colors duration-300 font-medium ${
                    scrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className={`hover:text-blue-400 transition-colors duration-300 font-medium ${
                    scrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  About
                </a>
                <a
                  href="#services"
                  className={`hover:text-blue-400 transition-colors duration-300 font-medium ${
                    scrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  Services
                </a>
                <a
                  href="#team"
                  className={`hover:text-blue-400 transition-colors duration-300 font-medium ${
                    scrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  Team
                </a>
                <a
                  href="#contact"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium whitespace-nowrap cursor-pointer"
                >
                  Get Started
                </a>
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`w-6 h-6 flex items-center justify-center ${
                    scrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  <i className="ri-menu-line text-2xl"></i>
                </button>
              </div>
            </div>

            {isMenuOpen && (
              <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4">
                <a
                  href="#home"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Services
                </a>
                <a
                  href="#team"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Team
                </a>
                <a
                  href="#contact"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Contact
                </a>
              </div>
            )}
          </div>
        </nav>

        <div className="relative z-10 flex items-center min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
               Aapke Vyapar ka Saathi
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-fade-in-delay">
                Sales Nova is a results-driven consultancy firm focused on
                empowering businesses with the right strategies and tools to
                scale effectively.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
                <a
                  href="#contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 text-center whitespace-nowrap cursor-pointer"
                >
                  Start Your Journey
                </a>
                <a
                  href="#services"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 text-center whitespace-nowrap cursor-pointer"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
