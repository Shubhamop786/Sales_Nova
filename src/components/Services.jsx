import React, { useEffect, useState } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: 'ri-team-fill',
      title: 'Team Building',
      slug: 'team-building',
      description: 'Build high-performing sales teams with our specialized team building programs designed to maximize collaboration, leadership, and productivity for FMCG and pharma businesses.',
      features: ['Leadership Development', 'Communication Skills', 'Team Dynamics', 'Performance Optimization']
    },
    {
      icon: 'ri-line-chart-fill',
      title: 'Sales Growth Consulting',
      slug: 'sales-growth',
      description: 'Accelerate your sales performance with proven strategies and methodologies that drive measurable revenue growth across distribution channels and markets.',
      features: ['Sales Strategy', 'Pipeline Management', 'Revenue Optimization', 'Market Analysis']
    },
    {
      icon: 'ri-global-fill',
      title: 'Stockist & Network Development',
      slug: 'network-development',
      description: 'Expand your market reach through strategic stockist recruitment and distribution network development programs tailored for FMCG, pharma, and ayurvedic businesses.',
      features: ['Stockist Recruitment', 'Network Expansion', 'Channel Management', 'Partnership Development']
    },
    {
      icon: 'ri-graduation-cap-fill',
      title: 'Sales Team Training',
      slug: 'team-training',
      description: 'Comprehensive sales training programs that enhance product knowledge, field skills, and sales techniques — driving consistent performance across your entire team.',
      features: ['Skills Development', 'Product Training', 'Sales Techniques', 'Performance Coaching']
    },
    {
      icon: 'ri-shopping-bag-fill',
      title: 'Product Grooming',
      slug: 'product-grooming',
      description: 'Optimize your products and services for maximum market appeal, competitive positioning, and effective brand communication to win in competitive categories.',
      features: ['Product Strategy', 'Market Positioning', 'Brand Development', 'Competitive Analysis']
    },
    {
      icon: 'ri-code-fill',
      title: 'Website & Chatbot Development',
      slug: 'website-development',
      description: 'Modern, responsive business websites and AI-powered chatbot solutions that enhance your digital presence, automate customer engagement, and generate leads.',
      features: ['Web Development', 'Chatbot Integration', 'Digital Marketing', 'E-commerce Solutions']
    }
  ];

  return (
    <section id="services" aria-labelledby="services-heading" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Expert Sales &amp; Business{" "}
            <span className="block text-blue-600">Consulting Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive sales consultancy and business development solutions to help FMCG, pharma, ayurvedic, and OTC companies build strong teams, grow distribution networks, and accelerate revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={`service-${service.slug}`}
              aria-labelledby={`service-title-${service.slug}`}
              className={`bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } cursor-pointer group`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300" aria-hidden="true">
                <i className={`${service.icon} text-2xl text-blue-600 group-hover:text-white transition-colors duration-300`}></i>
              </div>
              <h3 id={`service-title-${service.slug}`} className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2" aria-label={`${service.title} features`}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <i className="ri-check-line text-blue-600 mr-3" aria-hidden="true"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* FAQ Section — enables FAQPage schema matching */}
        <div className={`mt-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <details className="bg-gray-50 rounded-2xl p-6 group" open>
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                What services does Sales Nova offer?
                <i className="ri-arrow-down-s-line text-blue-600 text-xl transition-transform group-open:rotate-180" aria-hidden="true"></i>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sales Nova offers team building, sales growth consulting, stockist and network development, sales team training, product grooming, website development, and chatbot solutions for businesses across India — with a focus on FMCG, pharma, ayurvedic, OTC, and cosmetic sectors.
              </p>
            </details>
            <details className="bg-gray-50 rounded-2xl p-6 group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                Where is Sales Nova located?
                <i className="ri-arrow-down-s-line text-blue-600 text-xl transition-transform group-open:rotate-180" aria-hidden="true"></i>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sales Nova is headquartered in Bhopal, Madhya Pradesh, India. We serve clients across India, providing on-ground consultancy, remote training, and digital support to businesses of all sizes.
              </p>
            </details>
            <details className="bg-gray-50 rounded-2xl p-6 group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                How can I get a free consultation from Sales Nova?
                <i className="ri-arrow-down-s-line text-blue-600 text-xl transition-transform group-open:rotate-180" aria-hidden="true"></i>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                You can request a free consultation by filling out the <a href="#contact" className="text-blue-600 hover:underline font-medium">contact form on this page</a>, calling <a href="tel:+917049006789" className="text-blue-600 hover:underline">+91 7049006789</a>, or emailing us at <a href="mailto:salesnova786@gmail.com" className="text-blue-600 hover:underline">salesnova786@gmail.com</a>. Our team responds promptly.
              </p>
            </details>
            <details className="bg-gray-50 rounded-2xl p-6 group">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                Does Sales Nova provide FMCG and pharma consulting?
                <i className="ri-arrow-down-s-line text-blue-600 text-xl transition-transform group-open:rotate-180" aria-hidden="true"></i>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Yes, Sales Nova provides specialized consulting for FMCG, pharma, ayurvedic, OTC, and cosmetic product businesses — including distribution network development, stockist recruitment, and sales team training tailored for these industries.
              </p>
            </details>
          </div>
        </div>

        <div className={`text-center mt-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our expert sales consultancy services can help you achieve unprecedented growth and market success.
            </p>
            <a href="#contact">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
                Get Free Consultation
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;