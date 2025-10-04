import React from 'react';

const About: React.FC = () => {
  const skills = ['Java', 'Spring Framework', 'GraphQL', 'kafka', 'Azure', 'Aws'];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gray-100 dark:bg-gray-900/50" id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;