import React, { useEffect, useState } from "react";
import ajayImg from "../assets/ajay_1.jpg";

function Team() {
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

    const element = document.getElementById("team");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const founder = {
    name: "Ajay Singh",
    position: "Founder & CEO",
    expertise: "Sales Strategy & Business Development",
    experience: "20+ years",
    image: ajayImg,
    description:
      "Visionary leader with 20+ years of experience in sales strategy and business development, specialising in scaling FMCG, pharma, and distribution businesses across India. Ajay founded Sales Nova to empower businesses with the right people, strategies, and tools for sustainable growth.",
    linkedin: "https://www.linkedin.com/in/ajay-singh-5a729120a/",
    email: "mailto:sajay9777@gmail.com",
  };

  return (
    <section id="team" aria-labelledby="team-heading" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 id="team-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Founder
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With a vision for innovation and growth, Ajay Singh brings 20+ years of expertise
            in business transformation, sales strategy, and leadership — guiding
            companies to reach their full market potential.
          </p>
        </div>

        {/* Founder Card */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Founder Image */}
          <div className="flex justify-center">
            <img
              src={founder.image}
              alt="Ajay Singh — Founder and CEO of Sales Nova, sales strategy and business development expert"
              width="320"
              height="400"
              loading="lazy"
              decoding="async"
              className="rounded-2xl shadow-lg w-80 h-auto object-cover"
            />
          </div>

          {/* Founder Details */}
          <div itemScope itemType="https://schema.org/Person">
            <h3 className="text-3xl font-bold text-yellow-600 mb-2" itemProp="name">
              {founder.name}
            </h3>
            <p className="text-blue-600 font-semibold text-lg mb-4" itemProp="jobTitle">
              {founder.position}
            </p>
            <p className="text-gray-600 text-lg mb-3" itemProp="knowsAbout">
              {founder.expertise}
            </p>
            <p className="text-gray-700 font-medium mb-3">
              Experience: <span itemProp="description">{founder.experience}</span>
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              {founder.description}
            </p>

            {/* Social Links */}
            <div className="flex space-x-3" aria-label="Ajay Singh's social profiles">
              {founder.linkedin && (
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ajay Singh on LinkedIn"
                  className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300 cursor-pointer"
                  itemProp="sameAs"
                >
                  <i className="ri-linkedin-fill text-lg" aria-hidden="true"></i>
                </a>
              )}
              {founder.email && (
                <a
                  href={founder.email}
                  aria-label="Email Ajay Singh"
                  className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="ri-mail-fill text-lg" aria-hidden="true"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
