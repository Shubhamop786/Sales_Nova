import React, { useEffect, useState } from "react";

function About() {
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

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose
              <span className="block text-blue-600">Sales Nova?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We specialize in team building, stockist & network development,
              product grooming, team training, and overall sales growth—helping
              companies maximize their market potential.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-check-line text-blue-600 text-lg"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Results-Driven Approach
                  </h3>
                  <p className="text-gray-600">
                    We focus on delivering measurable outcomes that directly
                    impact your bottom line and business growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-team-line text-blue-600 text-lg"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Expert Team Building
                  </h3>
                  <p className="text-gray-600">
                    Our specialized team building programs create
                    high-performing teams that drive exceptional results.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-global-line text-blue-600 text-lg"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Digital Innovation
                  </h3>
                  <p className="text-gray-600">
                    We provide website development and chatbot solutions to keep
                    your business ahead in the digital space.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20business%20consultancy%20team%20working%20together%20in%20modern%20office%20environment%2C%20diverse%20group%20of%20consultants%20analyzing%20data%20and%20strategies%2C%20collaborative%20workspace%20with%20charts%20and%20presentations%2C%20corporate%20success%20and%20growth%20mindset%2C%20bright%20professional%20lighting%20with%20blue%20accent%20colors&width=600&height=400&seq=about1&orientation=landscape"
                alt="Sales Nova Team"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
