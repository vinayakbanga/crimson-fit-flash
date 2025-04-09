
import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    id: 1,
    name: "Basic",
    price: 29.99,
    duration: "monthly",
    features: [
      "Access to gym floor",
      "Basic equipment usage",
      "Locker room access",
      "Free water station",
      "Mobile app access"
    ],
    popular: false,
    delay: "150ms"
  },
  {
    id: 2,
    name: "Premium",
    price: 49.99,
    duration: "monthly",
    features: [
      "Everything in Basic",
      "Full equipment access",
      "Group classes included",
      "Fitness assessment",
      "Personal program",
      "Towel service"
    ],
    popular: true,
    delay: "300ms"
  },
  {
    id: 3,
    name: "Elite",
    price: 79.99,
    duration: "monthly",
    features: [
      "Everything in Premium",
      "Personal training (2x/month)",
      "Nutrition counseling",
      "Exclusive classes",
      "Recovery lounge access",
      "Guest passes (2/month)",
      "Premium towel service"
    ],
    popular: false,
    delay: "450ms"
  }
];

const PlansSection = () => {
  return (
    <section id="plans" className="bg-gym-black section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">MEMBERSHIP <span className="text-gym-red">PLANS</span></h2>
          <p className="max-w-3xl mx-auto text-gray-300">
            Choose the plan that fits your fitness goals and budget. All plans include 24/7 access and free WiFi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`bg-gym-dark rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fade-in ${
                plan.popular ? 'border-2 border-gym-red ring-2 ring-gym-red ring-opacity-50 transform scale-105 md:scale-110 z-10' : 'border border-gray-700'
              }`}
              style={{ animationDelay: plan.delay }}
            >
              {plan.popular && (
                <div className="bg-gym-red text-white text-center py-1 font-oswald">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-6">
                <h3 className="font-oswald text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-400">/{plan.duration}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={18} className="text-gym-red mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-md font-oswald font-bold text-lg transition-colors ${
                  plan.popular 
                    ? 'bg-gym-red hover:bg-gym-red-dark text-white'
                    : 'bg-transparent border border-gym-red text-gym-red hover:bg-gym-red hover:text-white'
                }`}>
                  CHOOSE PLAN
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-400">
            All plans come with a 7-day money-back guarantee. No contract commitment required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
