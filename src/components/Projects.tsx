import React from 'react';

const Projects: React.FC = () => {
  const projectData = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce site with user authentication, product management, and payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
      link: '#'
    },
    {
      title: 'Personal Blog',
      description: 'A blog platform with a focus on web development topics, including articles, tutorials, and code snippets.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop',
      link: '#'
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projectData.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="w-full h-48 bg-cover bg-center" style={{backgroundImage: `url(${project.image})`}}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <a className="font-semibold text-blue-600 hover:underline" href={project.link}>View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;