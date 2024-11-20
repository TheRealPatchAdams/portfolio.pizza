
// components/Portfolio.jsx
export default function Portfolio() {
    const projects = [
      {
        title: 'Harold',
        description: 'A brief description of your first project',
        image: '/api/placeholder/400/300',
        tags: ['React', 'Node.js', 'MongoDB'],
        link: '#'
      },
      {
        title: 'Dropped Pizza',
        description: 'A brief description of your second project',
        image: '/api/placeholder/400/300',
        tags: ['Vue.js', 'Express', 'PostgreSQL'],
        link: '#'
      },
      {
        title: 'PATCH22',
        description: 'A brief description of your third project',
        image: '/api/placeholder/400/300',
        tags: ['React Native', 'Firebase'],
        link: '#'
      }
    ];
  
    return (
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Portfolio</h2>
            <p className="mt-4 text-xl text-gray-600">Check out some of my recent work</p>
          </div>
  
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  