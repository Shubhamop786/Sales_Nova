import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById("contact");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // NOTE: Do NOT lowercase the name attribute — keep exact names from inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const resp = await emailjs.send(
        "service_ibpj5el",   // ✅ your Service ID
        "template_6bk455i", // ✅ your Template ID
        {
          to_name: "Sales Nova Team",        // matches {{to_name}} in template
          from_name: formData.name,         // matches {{from_name}}
          reply_to: formData.email,         // matches {{reply_to}}
          company: formData.company,        // matches {{company}}
          phone: formData.phone,            // matches {{phone}}
          service: formData.service,        // matches {{service}}
          message: formData.message,        // matches {{message}}
        },
        "DistF3GHN6YVeW2jq" // ✅ your Public Key
      );

      console.log("EmailJS success:", resp);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      // show error text if available
      const errText = error?.text || error?.statusText || "Failed to send message.";
      setSubmitStatus("error");
      // For debugging you can display error message in console (already logged)
      console.log("EmailJS error detail:", errText);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(""), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Transform Your
            <span className="block text-blue-600">Business Together</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to accelerate your business growth? Fill out the form and our
            team will reach out to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h3>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-mail-fill text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Email Us
                    </h4>
                    <a
                      href="mailto:salesnova786@gmail.com"
                      className="text-blue-600 hover:underline"
                    >
                      salesnova786@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-phone-fill text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Call Us
                    </h4>
                    <div className="flex flex-col space-y-1">
                      <a
                        href="tel:+919876543210"
                        className="text-blue-600 hover:underline"
                      >
                        +91 7049006789
                      </a>
                      <a
                        href="tel:+918965951566"
                        className="text-blue-600 hover:underline"
                      >
                        +91 8817651339
                      </a>
                      <a
                        href="tel:+918965951567"
                        className="text-blue-600 hover:underline"
                      >
                        +91 7389407359
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                    <i className="ri-whatsapp-fill text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      WhatsApp
                    </h4>
                    <a
                      href="https://wa.me/917049006789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <i className="ri-map-pin-fill text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Visit Us
                    </h4>
                    <p className="text-gray-600">
                      Business District, Bhopal <br /> Madhya Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100"
            >
              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder=" "
                    className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-2 text-sm text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all duration-200"
                  >
                    Full Name *
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder=" "
                    className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-2 text-sm text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all duration-200"
                  >
                    Email Address *
                  </label>
                </div>
              </div>

              {/* Company & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder=" "
                    className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <label
                    htmlFor="company"
                    className="absolute left-4 top-2 text-sm text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all duration-200"
                  >
                    Company Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder=" "
                    className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-4 top-2 text-sm text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all duration-200"
                  >
                    Phone Number
                  </label>
                </div>
              </div>

              {/* Service */}
              <div className="mb-6">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Service Interested In</option>
                  <option value="Team Building">Team Building</option>
                  <option value="Sales Growth">Sales Growth</option>
                  <option value="Network Development">Network Development</option>
                  <option value="Team Training">Team Training</option>
                  <option value="Product Grooming">Product Grooming</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Chatbot Solutions">Chatbot Solutions</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-6 relative">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  maxLength={500}
                  placeholder=" "
                  className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2 text-sm text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all duration-200"
                >
                  Message *
                </label>
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-semibold shadow-lg hover:from-blue-700 hover:to-blue-800 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-100 border border-green-200 rounded-lg text-green-800 text-sm">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mt-4 p-4 bg-red-100 border border-red-200 rounded-lg text-red-800 text-sm">
                  ✗ Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
