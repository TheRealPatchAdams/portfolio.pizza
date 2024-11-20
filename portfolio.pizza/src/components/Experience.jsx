// components/Experience.jsx
export default function Experience() {
    const experiences = [
      {
        company: 'Company Name',
        position: 'Senior Developer',
        period: '2020 - Present',
        description: 'Led development of multiple web applications using React and Node.js.'
      },
      {
        company: 'Previous Company',
        position: 'Frontend Developer',
        period: '2018 - 2020',
        description: 'Developed responsive web interfaces and maintained existing applications.'
      },
      {
        company: 'First Company',
        position: 'Junior Developer',
        period: '2016 - 2018',
        description: 'Assisted in the development of various web projects and learned modern web technologies.'
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