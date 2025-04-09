
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Michael Roberts",
    role: "Member for 2 years",
    content: "IRONFIT completely transformed my approach to fitness. The trainers create personalized plans that work for my busy schedule, and the results speak for themselves. I've lost 30lbs and gained confidence!",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Elite Member",
    content: "As someone who was intimidated by gyms, joining IRONFIT was the best decision. The community is supportive, the facilities are always clean, and I've surpassed fitness goals I never thought possible.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5
  },
  {
    id: 3,
    name: "David Chen",
    role: "Premium Member",
    content: "The 24/7 access fits perfectly with my night shift schedule. The equipment is top-notch and I never have to wait to use anything. Worth every penny of the membership fee.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4
  },
  {
    id: 4,
    name: "Jessica Williams",
    role: "Member for 1 year",
    content: "The variety of classes keeps my routine fresh and exciting. The instructors are knowledgeable and motivating. I've made great friends here who keep me accountable.",
    image: "https://images.unsplash.com/photo-1623330188314-8f4645626731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <section id="testimonials" className="bg-gym-dark section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">WHAT OUR <span className="text-gym-red">MEMBERS SAY</span></h2>
          <p className="max-w-3xl mx-auto text-gray-300">
            Real stories from real members who have transformed their lives with IRONFIT.
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full flex flex-col md:flex-row gap-6 p-4"
                >
                  <div className="md:w-1/3 flex justify-center">
                    <div className="h-48 w-48 rounded-full overflow-hidden border-4 border-gym-red">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 flex flex-col justify-center">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={20} 
                          className={i < testimonial.rating ? "text-gym-red fill-gym-red" : "text-gray-400"}
                        />
                      ))}
                    </div>
                    
                    <p className="text-lg italic mb-4">"{testimonial.content}"</p>
                    
                    <div>
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gym-black bg-opacity-50 hover:bg-gym-red p-2 rounded-full transform -translate-x-1/2 md:translate-x-0"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gym-black bg-opacity-50 hover:bg-gym-red p-2 rounded-full transform translate-x-1/2 md:translate-x-0"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-gym-red w-6' : 'bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
