// import React, { useEffect, useState } from "react";

// function Impact() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [counts, setCounts] = useState({
//     clients: 0,
//     projects: 0,
//     growth: 0,
//     satisfaction: 0,
//   });

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           startCountAnimation();
//         }
//       },
//       { threshold: 0.5 }
//     );

//     const element = document.getElementById("impact");
//     if (element) observer.observe(element);

//     return () => observer.disconnect();
//   }, []);

//   const startCountAnimation = () => {
//     const duration = 2000;
//     const targets = {
//       clients: 150,
//       projects: 320,
//       growth: 85,
//       satisfaction: 98,
//     };

//     const increment = {
//       clients: targets.clients / 100,
//       projects: targets.projects / 100,
//       growth: targets.growth / 100,
//       satisfaction: targets.satisfaction / 100,
//     };

//     let current = {
//       clients: 0,
//       projects: 0,
//       growth: 0,
//       satisfaction: 0,
//     };

//     const timer = setInterval(() => {
//       current.clients = Math.min(current.clients + increment.clients, targets.clients);
//       current.projects = Math.min(current.projects + increment.projects, targets.projects);
//       current.growth = Math.min(current.growth + increment.growth, targets.growth);
//       current.satisfaction = Math.min(current.satisfaction + increment.satisfaction, targets.satisfaction);

//       setCounts({
//         clients: Math.floor(current.clients),
//         projects: Math.floor(current.projects),
//         growth: Math.floor(current.growth),
//         satisfaction: Math.floor(current.satisfaction),
//       });

//       if (
//         current.clients >= targets.clients &&
//         current.projects >= targets.projects &&
//         current.growth >= targets.growth &&
//         current.satisfaction >= targets.satisfaction
//       ) {
//         clearInterval(timer);
//       }
//     }, 20);
//   };

//   return (
//     <>
//       <section id="impact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div
//             className={`text-center mb-16 transform transition-all duration-1000 ${
//               isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//             }`}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Our
//               <span className="block text-blue-600">Impact</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               We don't just consult—we build, train, and transform businesses for long-term
//               success. Here's the measurable impact we've created.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//             {/* Stat 1 */}
//             <div
//               className={`text-center transform transition-all duration-1000 delay-200 ${
//                 isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//               }`}
//             >
//               <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <i className="ri-user-3-fill text-2xl text-blue-600"></i>
//                 </div>
//                 <div className="text-4xl font-bold text-gray-900 mb-2">{counts.clients}+</div>
//                 <div className="text-gray-600 font-medium">Happy Clients</div>
//               </div>
//             </div>

//             {/* Stat 2 */}
//             <div
//               className={`text-center transform transition-all duration-1000 delay-300 ${
//                 isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//               }`}
//             >
//               <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <i className="ri-briefcase-fill text-2xl text-green-600"></i>
//                 </div>
//                 <div className="text-4xl font-bold text-gray-900 mb-2">{counts.projects}+</div>
//                 <div className="text-gray-600 font-medium">Projects Completed</div>
//               </div>
//             </div>

//             {/* Stat 3 */}
//             <div
//               className={`text-center transform transition-all duration-1000 delay-400 ${
//                 isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//               }`}
//             >
//               <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <i className="ri-line-chart-fill text-2xl text-purple-600"></i>
//                 </div>
//                 <div className="text-4xl font-bold text-gray-900 mb-2">{counts.growth}%</div>
//                 <div className="text-gray-600 font-medium">Average Growth</div>
//               </div>
//             </div>

//             {/* Stat 4 */}
//             <div
//               className={`text-center transform transition-all duration-1000 delay-500 ${
//                 isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//               }`}
//             >
//               <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <i className="ri-star-fill text-2xl text-orange-600"></i>
//                 </div>
//                 <div className="text-4xl font-bold text-gray-900 mb-2">{counts.satisfaction}%</div>
//                 <div className="text-gray-600 font-medium">Client Satisfaction</div>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Success Story 1 */}
//             <div
//               className={`transform transition-all duration-1000 delay-600 ${
//                 isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
//               }`}
//             >
//               <h3 className="text-3xl font-bold text-gray-900 mb-6">Success Stories</h3>
//               <div className="space-y-6">
//                 <div className="bg-white rounded-xl p-6 shadow-lg">
//                   <h4 className="text-xl font-semibold text-gray-900 mb-3">TechCorp Solutions</h4>
//                   <p className="text-gray-600 mb-4">
//                     "Sales Nova transformed our sales team's performance, resulting in a 150%
//                     increase in revenue within 8 months."
//                   </p>
//                   <div className="flex items-center">
//                     <img
//                       src="https://readdy.ai/api/search-image?query=Professional%20business%20executive%20headshot%2C%20confident%20business%20leader%20in%20corporate%20attire%2C%20modern%20office%20background%2C%20professional%20lighting%2C%20corporate%20success%20portrait&width=60&height=60&seq=client1&orientation=squarish"
//                       alt="Client"
//                       className="w-10 h-10 rounded-full mr-3 object-cover"
//                     />
//                     <div>
//                       <div className="font-semibold text-gray-900">Sarah Johnson</div>
//                       <div className="text-sm text-gray-600">CEO, TechCorp</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-white rounded-xl p-6 shadow-lg">
//                   <h4 className="text-xl font-semibold text-gray-900 mb-3">GrowthMax Industries</h4>
//                   <p className="text-gray-600 mb-4">
//                     "Their network development strategy helped us expand to 5 new markets and
//                     triple our distribution network."
//                   </p>
//                   <div className="flex items-center">
//                     <img
//                       src="https://readdy.ai/api/search-image?query=Professional%20business%20executive%20portrait%2C%20experienced%20business%20leader%20in%20suit%2C%20confident%20corporate%20professional%2C%20modern%20office%20setting%2C%20executive%20headshot&width=60&height=60&seq=client2&orientation=squarish"
//                       alt="Client"
//                       className="w-10 h-10 rounded-full mr-3 object-cover"
//                     />
//                     <div>
//                       <div className="font-semibold text-gray-900">Michael Chen</div>
//                       <div className="text-sm text-gray-600">Director, GrowthMax</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Success Image */}
//             <div
//               className={`transform transition-all duration-1000 delay-700 ${
//                 isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
//               }`}
//             >
//               <img
//                 src="https://readdy.ai/api/search-image?query=Business%20success%20celebration%20in%20modern%20office%2C%20professional%20team%20celebrating%20achievement%20with%20charts%20showing%20growth%2C%20corporate%20success%20story%20with%20upward%20trending%20graphs%2C%20collaborative%20business%20environment%20with%20positive%20atmosphere&width=600&height=400&seq=success1&orientation=landscape"
//                 alt="Success Story"
//                 className="w-full h-96 object-cover rounded-2xl shadow-2xl"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Impact;