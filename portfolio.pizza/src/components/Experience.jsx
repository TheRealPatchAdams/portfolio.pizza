// components/Experience.jsx
export default function Experience() {
  const experiences = [
    {
      company: 'Patch22 LLC',
      position: 'Founder & Developer',
      period: '2019 - Present',
      description: 'Designed and developed an e-commerce platform for custom morale patches, integrating tools like React, Firebase, and Stripe for seamless user experience.'
    },
 
    {
      company: 'US Air Force',
      position: 'Active Duty Service Member',
      period: '2017 - 2024',
      description: 'Served in logistics and operational roles, gained leadership experience, and applied technical skills to solve complex challenges in high-pressure environments.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Experience</h2>
          <p className="mt-4 text-xl text-gray-600">My professional journey</p>
        </div>

        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{exp.position}</h3>
                  <p className="text-indigo-600">{exp.company}</p>
                </div>
                <p className="text-gray-500 mt-1 md:mt-0">{exp.period}</p>
              </div>
              <p className="mt-4 text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
