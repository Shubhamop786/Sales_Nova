import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <p className="font-['Pacifico'] text-3xl font-bold text-blue-400 mb-4">Sales Nova</p>
            <p className="text-gray-300 text-sm text-blue-300 mb-4 italic">Aapke Vyapar ka Saathi</p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Sales Nova is a results-driven sales and business consultancy based in Bhopal, Madhya Pradesh. We specialize in team building, sales growth, stockist network development, product grooming, team training, and digital solutions for FMCG, pharma, ayurvedic, and OTC businesses across India.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4" role="list" aria-label="Sales Nova social media profiles">
              <a
                href="https://www.linkedin.com/in/sales-nova-b08076383/"
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
                aria-label="Sales Nova on LinkedIn"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <i className="ri-linkedin-fill text-lg" aria-hidden="true"></i>
              </a>
              <a
                href="https://wa.me/917049006789"
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
                aria-label="Chat with Sales Nova on WhatsApp"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
              >
                <i className="ri-whatsapp-fill text-lg" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61580473226724"
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
                aria-label="Sales Nova on Facebook"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-300"
              >
                <i className="ri-facebook-fill text-lg" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.instagram.com/salesnova786/"
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
                aria-label="Sales Nova on Instagram"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
              >
                <i className="ri-instagram-fill text-lg" aria-hidden="true"></i>
              </a>
              <a
                href="mailto:salesnova786@gmail.com"
                role="listitem"
                aria-label="Email Sales Nova"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-300"
              >
                <i className="ri-mail-fill text-lg" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.youtube.com/@SalesNova-v6k"
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
                aria-label="Sales Nova on YouTube"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
              >
                <i className="ri-youtube-fill text-lg" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer quick links">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Services</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Our Team</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </nav>

          {/* Services — now proper anchor links */}
          <nav aria-label="Footer services links">
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#service-team-building" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Team Building</a></li>
              <li><a href="#service-sales-growth" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Sales Growth</a></li>
              <li><a href="#service-network-development" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Network Development</a></li>
              <li><a href="#service-team-training" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Team Training</a></li>
              <li><a href="#service-product-grooming" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Product Grooming</a></li>
              <li><a href="#service-website-development" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Website Development</a></li>
            </ul>
          </nav>
        </div>

        {/* Map Section */}
        <div className="py-12 border-t border-gray-800">
          <h3 className="text-2xl font-bold mb-8 text-center">Find Us in Bhopal, Madhya Pradesh</h3>
          <div className="bg-gray-800 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29157.21359813736!2d77.3757533!3d23.2599333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c426ebcb7b2f7%3A0x50cbb1b6f7a0f19f!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1693212345678!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sales Nova office location in Bhopal, Madhya Pradesh, India"
              aria-label="Google Maps showing Sales Nova location in Bhopal, Madhya Pradesh"
            ></iframe>
          </div>
        </div>

        {/* NAP Contact Info */}
        <div className="py-8 border-t border-gray-800">
          <address className="not-italic grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Email */}
            <div>
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <i className="ri-mail-fill text-xl"></i>
              </div>
              <h4 className="font-semibold mb-2">Email</h4>
              <p>
                <a
                  href="mailto:salesnova786@gmail.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  aria-label="Email Sales Nova"
                >
                  salesnova786@gmail.com
                </a>
              </p>
            </div>

            {/* Phone */}
            <div>
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <i className="ri-phone-fill text-xl"></i>
              </div>
              <h4 className="font-semibold mb-2">Phone</h4>
              <div className="flex flex-col space-y-1">
                <a href="tel:+917049006789" className="text-gray-300 hover:text-blue-400 transition-colors duration-300" aria-label="Call +91 7049006789">+91 7049006789</a>
                <a href="tel:+918817651339" className="text-gray-300 hover:text-blue-400 transition-colors duration-300" aria-label="Call +91 8817651339">+91 8817651339</a>
                <a href="tel:+917389407359" className="text-gray-300 hover:text-blue-400 transition-colors duration-300" aria-label="Call +91 7389407359">+91 7389407359</a>
              </div>
            </div>

            {/* Address */}
            <div>
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <i className="ri-map-pin-fill text-xl"></i>
              </div>
              <h4 className="font-semibold mb-2">Address</h4>
              <p className="text-gray-300">
                Business District, Bhopal<br />Madhya Pradesh, India
              </p>
            </div>
          </address>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {currentYear} Sales Nova. All rights reserved.
            </p>
            <p>
              Sales &amp; Business Consultancy — Bhopal, Madhya Pradesh, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
