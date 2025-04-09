
import React from 'react';
import { Dumbbell, Clock, Users, Trophy } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-gym-black section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">ABOUT <span className="text-gym-red">IRONFIT</span></h2>
          <p className="max-w-3xl mx-auto text-gray-300">
            At IRONFIT, we're more than just a gym. We're a community dedicated to helping you achieve your fitness goals in a motivating and supportive environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gym-dark p-6 rounded-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in" style={{ animationDelay: '150ms' }}>
            <div className="bg-gym-red h-16 w-16 rounded-full flex items-center justify-center mb-4">
              <Dumbbell size={28} />
            </div>
            <h3 className="font-oswald text-xl font-bold mb-2">Premium Equipment</h3>
            <p className="text-gray-300">
              State-of-the-art machines and free weights for every level of fitness enthusiast.
            </p>
          </div>

          <div className="bg-gym-dark p-6 rounded-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="bg-gym-red h-16 w-16 rounded-full flex items-center justify-center mb-4">
              <Clock size={28} />
            </div>
            <h3 className="font-oswald text-xl font-bold mb-2">24/7 Access</h3>
            <p className="text-gray-300">
              Train on your schedule with round-the-clock access to our facilities.
            </p>
          </div>

          <div className="bg-gym-dark p-6 rounded-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in" style={{ animationDelay: '450ms' }}>
            <div className="bg-gym-red h-16 w-16 rounded-full flex items-center justify-center mb-4">
              <Users size={28} />
            </div>
            <h3 className="font-oswald text-xl font-bold mb-2">Expert Trainers</h3>
            <p className="text-gray-300">
              Certified professionals to guide your workout and nutrition plans.
            </p>
          </div>

          <div className="bg-gym-dark p-6 rounded-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="bg-gym-red h-16 w-16 rounded-full flex items-center justify-center mb-4">
              <Trophy size={28} />
            </div>
            <h3 className="font-oswald text-xl font-bold mb-2">Proven Results</h3>
            <p className="text-gray-300">
              Join thousands who've transformed their bodies and lives with IRONFIT.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="opacity-0 animate-slide-in" style={{ animationDelay: '300ms' }}>
            <div className="relative h-80 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Gym Interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex flex-col justify-center opacity-0 animate-slide-in" style={{ animationDelay: '500ms' }}>
            <h3 className="section-subtitle">OUR MISSION</h3>
            <h2 className="font-oswald text-3xl font-bold mb-4">We Help You Reach Your Full Potential</h2>
            <p className="text-gray-300 mb-6">
              Founded in 2010, IRONFIT has been at the forefront of fitness innovation. 
              We believe that fitness is not just about physical transformation but also about building mental strength and confidence.
            </p>
            <ul className="space-y-3">
              {[
                "Personalized training programs",
                "Nutrition guidance and meal planning",
                "Group fitness classes for all levels",
                "Recovery and wellness facilities"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="h-2 w-2 bg-gym-red mr-3"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
