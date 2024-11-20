
// components/Portfolio.jsx
export default function Portfolio() {
    const projects = [
      {
        title: "Harold",
        description: `
          Harold is an automated snowblower robot service app that simplifies the snow removal process.
          Users can schedule snow removal services, track the robot's location in real-time, and receive 
          progress updates directly from the app. Built for efficiency and user convenience, Harold leverages 
          cutting-edge technology to enhance winter maintenance tasks.
        `,
        features: [
          {
            name: "Scheduling System",
            details: "Allows users to book snowblower services with flexible time slots based on availability."
          },
          {
            name: "Live GPS Tracking",
            details: "Integrated with Google Maps API to show the real-time location of Harold during operation."
          },
          {
            name: "Progress Updates",
            details: "Provides status notifications, including start, in-progress, and completion updates for every job."
          },
          {
            name: "User Authentication",
            details: "Secured login and registration system using Flask's built-in authentication tools."
          },
          {
            name: "Database Management",
            details: "Powered by SQLAlchemy, maintaining user profiles, service history, and scheduling data."
          },
          {
            name: "Robot Integration",
            details: "Supports API communication with the snowblower robot for task initiation and status reporting."
          },
          {
            name: "Responsive UI/UX",
            details: "Mobile-friendly design ensuring seamless interaction across devices."
          }
        ],
        techStack: [
          "Python",
          "Flask",
          "SQLAlchemy",
          "Google Maps API",
          "HTML/CSS",
          "JavaScript"
        ],
        futureEnhancements: [
          "Payment gateway integration for service fees.",
          "AI-based snow-clearing efficiency analysis.",
          "Smart notifications based on weather forecasts."
        ],
        image: " ",
        tags: ["Flask", "SQLAlchemy", "Google Maps API", "User Authentication", "Snow Removal", "Robotics"],
        link: "https://github.com/TheRealPatchAdams/Harold"
      }
      ,
      
      {
        title: 'Dropped Pizza',
        description: 'A brief description of your second project',
        image: '/api/placeholder/400/300',
        tags: ['Vue.js', 'Express', 'PostgreSQL'],
        link: '#'
      },
      {
        title: "Patch22",
        description: `
          Patch22 is a cutting-edge platform designed for creating, customizing, and selling morale patches.
          Focused on empowering creativity and enhancing user experience, the platform integrates advanced tools 
          for designing patches, placing orders, and managing customer needs, all in one intuitive system. 
          It's the ultimate solution for individuals, teams, and businesses looking to create custom designs 
          with ease and efficiency.
        `,
        features: [
          {
            name: "Patch Design Studio",
            details: "A user-friendly tool allowing customers to create and customize morale patches from templates or scratch."
          },
          {
            name: "E-Commerce Integration",
            details: "Complete online storefront with catalog browsing, shopping cart functionality, and one-page checkout."
          },
          {
            name: "Firebase Backend",
            details: "Real-time database and authentication to manage user profiles, design drafts, and order history securely."
          },
          {
            name: "Mobile Compatibility",
            details: "Built with React Native for seamless performance across iOS and Android platforms."
          },
          {
            name: "Order Tracking System",
            details: "Provides real-time updates on production progress, shipping, and delivery."
          },
          {
            name: "Community Focus",
            details: "Includes features like bulk-order options for military units and businesses, and charity tie-ins to give back to the community."
          },
          {
            name: "Support for Franchising",
            details: "A scalable business model allowing Patch22 to expand through SkillBridge partnerships and base-specific franchising."
          }
        ],
        techStack: [
          "React Native",
          "Firebase",
          "HTML/CSS",
          "JavaScript",
          "Cloud Functions"
        ],
        futureEnhancements: [
          "AI-powered design suggestions for patches.",
          "Integration with third-party embroidery services for automatic order fulfillment.",
          "Advanced analytics dashboard for users to track sales and engagement."
        ],
        image: "/assets/Screenshot 2024-11-19 at 9.07.04 AM.png",
        tags: ["React Native", "Custom Patches", "E-Commerce", "Community-Driven"],
        link: "www.patch22.net"
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
  