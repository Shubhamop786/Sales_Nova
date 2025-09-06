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
      description: 'Build high-performing teams with our specialized team building programs designed to maximize collaboration and productivity.',
      features: ['Leadership Development', 'Communication Skills', 'Team Dynamics', 'Performance Optimization']
    },
    {
      icon: 'ri-line-chart-fill',
      title: 'Sales Growth',
      description: 'Accelerate your sales performance with proven strategies and methodologies that drive measurable revenue growth.',
      features: ['Sales Strategy', 'Pipeline Management', 'Revenue Optimization', 'Market Analysis']
    },
    {
      icon: 'ri-global-fill',
      title: 'Network Development',
      description: 'Expand your market reach through strategic stockist and network development programs tailored to your industry.',
      features: ['Stockist Recruitment', 'Network Expansion', 'Channel Management', 'Partnership Development']
    },
    {
      icon: 'ri-graduation-cap-fill',
      title: 'Team Training',
      description: 'Comprehensive training programs that enhance skills, boost performance, and drive organizational success.',
      features: ['Skills Development', 'Product Training', 'Sales Techniques', 'Performance Coaching']
    },
    {
      icon: 'ri-shopping-bag-fill',
      title: 'Product Grooming',
      description: 'Optimize your products and services for maximum market appeal and competitive advantage.',
      features: ['Product Strategy', 'Market Positioning', 'Brand Development', 'Competitive Analysis']
    },
    {
      icon: 'ri-code-fill',
      title: 'Website Development',
      description: 'Modern, responsive websites and chatbot solutions that enhance your digital presence and customer engagement.',
      features: ['Web Development', 'Chatbot Integration', 'Digital Marketing', 'E-commerce Solutions']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Expert
            <span className="block text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive solutions to transform your business and accelerate growth through proven methodologies and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } cursor-pointer group`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <i className={`${service.icon} text-2xl text-blue-600 group-hover:text-white transition-colors duration-300`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <i className="ri-check-line text-blue-600 mr-3"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our expert services can help you achieve unprecedented growth and success.
            </p>
          <a href='#contact'>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer" >
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