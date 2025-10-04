import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-br from-white overflow-hidden" id="home">
      <div className="particle-bg">
        <div className="particle" style={{width: '15px', height: '15px', top: '10%', left: '20%', animationDuration: '25s', animationDelay: '0s'}}></div>
        <div className="particle" style={{width: '20px', height: '20px', top: '30%', left: '70%', animationDuration: '20s', animationDelay: '2s'}}></div>
        <div className="particle" style={{width: '10px', height: '10px', top: '50%', left: '40%', animationDuration: '18s', animationDelay: '5s'}}></div>
        <div className="particle" style={{width: '25px', height: '25px', top: '70%', left: '10%', animationDuration: '22s', animationDelay: '7s'}}></div>
        <div className="particle" style={{width: '18px', height: '18px', top: '85%', left: '80%', animationDuration: '27s', animationDelay: '3s'}}></div>
        <div className="particle" style={{width: '12px', height: '12px', top: '25%', left: '55%', animationDuration: '23s', animationDelay: '6s'}}></div>
        <div className="particle" style={{width: '22px', height: '22px', top: '45%', left: '85%', animationDuration: '19s', animationDelay: '1s'}}></div>
        <div className="particle" style={{width: '16px', height: '16px', top: '60%', left: '30%', animationDuration: '21s', animationDelay: '4s'}}></div>
        <div className="particle" style={{width: '14px', height: '14px', top: '5%', left: '90%', animationDuration: '26s', animationDelay: '8s'}}></div>
        <div className="particle" style={{width: '19px', height: '19px', top: '75%', left: '45%', animationDuration: '24s', animationDelay: '9s'}}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center text-center min-h-[480px]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-green tracking-tighter mb-4 text-green drop-shadow-md">Hi, I'm Naveen, a Full-Stack Developer</h1>
        <p className="text-lg md:text-xl text-green-900 mb-10 max-w-3xl drop-shadow-sm">I craft seamless web experiences with a focus on performance and user engagement. Reach out to me for innovative digital solutions.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a className="inline-flex items-center justify-center bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg" href="#projects">
            <span className="material-symbols-outlined mr-2">code</span> View My Work
          </a>
          <button className="inline-flex items-center justify-center bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 shadow-lg dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">
            <span className="material-symbols-outlined mr-2">chat</span> Let's Chat
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;