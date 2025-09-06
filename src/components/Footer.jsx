import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="font-['Pacifico'] text-3xl font-bold text-blue-400 mb-6">Sales Nova</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Sales Nova is a results-driven consultancy firm focused on empowering businesses with the right strategies and tools to scale effectively. We don't just consult—we build, train, and transform businesses for long-term success.
            </p>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sales-nova-b08076383/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <i className="ri-linkedin-fill text-lg"></i>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917049006789"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
              >
                <i className="ri-whatsapp-fill text-lg"></i>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61580473226724"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-300"
              >
                <i className="ri-facebook-fill text-lg"></i>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/salesnova786/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
              >
                <i className="ri-instagram-fill text-lg"></i>
              </a>

              {/* Mail */}
              <a
                href="mailto:salesnova786@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-300"
              >
                <i className="ri-mail-fill text-lg"></i>
              </a>
              {/* YouTube */}
  <a
    href="https://www.youtube.com/@SalesNova-v6k"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
  >
    <i className="ri-youtube-fill text-lg"></i>
  </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Services</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Our Team</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">Team Building</span></li>
              <li><span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">Sales Growth</span></li>
              <li><span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">Network Development</span></li>
              <li><span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">Team Training</span></li>
              <li><span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">Website Development</span></li>
              <li><span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">Chatbot Solutions</span></li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="py-12 border-t border-gray-800">
          <h4 className="text-2xl font-bold mb-8 text-center">Find Us</h4>
          <div className="bg-gray-800 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29157.21359813736!2d77.3757533!3d23.2599333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c426ebcb7b2f7%3A0x50cbb1b6f7a0f19f!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1693212345678!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sales Nova Location"
            ></iframe>
          </div>
        </div>

       {/* Contact Info */}
<div className="py-8 border-t border-gray-800">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    
    {/* Email */}
    <div>
      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <i className="ri-mail-fill text-xl"></i>
      </div>
      <h5 className="font-semibold mb-2">Email</h5>
      <p>
        <a
          href="mailto:salesnova786@gmail.com"
          className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
        >
          salesnova786@gmail.com
        </a>
      </p>
    </div>

    {/* Phone */}
    <div>
      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <i className="ri-phone-fill text-xl"></i>
      </div>
      <h5 className="font-semibold mb-2">Phone</h5>
      <div className="flex flex-col space-y-1">
        <a
          href="tel:+917049006789"
          className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
        >
          +91 7049006789
        </a>
        <a
          href="tel:+918817651339"
          className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
        >
          +91 8817651339
        </a>
        <a
          href="tel:+917389407359"
          className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
        >
          +91 7389407359
        </a>
      </div>
    </div>

    {/* Address */}
    <div>
      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <i className="ri-map-pin-fill text-xl"></i>
      </div>
      <h5 className="font-semibold mb-2">Address</h5>
      <p className="text-gray-300">
        Business District, Bhopal<br />Madhya Pradesh, India
      </p>
    </div>
  </div>
</div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-300 text-center md:text-left">
              © 2025 Sales Nova. All rights reserved. Built with cutting-edge technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
