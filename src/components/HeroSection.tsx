
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative bg-gym-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-40"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gym-black/50 to-gym-black"></div>
      
      <div className="relative container mx-auto flex flex-col justify-center min-h-screen px-4 sm:px-8">
        <div className="pt-20 md:w-2/3 lg:w-1/2 space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <h1 className="font-oswald text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            TRANSFORM <span className="text-gym-red">YOUR BODY</span> TRANSFORM YOUR LIFE
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-xl">
            Join IRONFIT today and start your fitness journey with state-of-the-art equipment and expert trainers.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <a href="#plans" className="btn-primary text-center">
              VIEW PLANS
            </a>
            <a href="#about" className="border border-white hover:border-gym-red hover:text-gym-red text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 text-center">
              LEARN MORE
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white hover:text-gym-red transition-colors">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
