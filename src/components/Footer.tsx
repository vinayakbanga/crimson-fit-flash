
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gym-black border-t border-gray-800">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="text-2xl md:text-3xl font-oswald font-bold mb-4">
              <span className="text-white">IRON</span>
              <span className="text-gym-red">FIT</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your journey to a healthier, stronger you starts here. Join our community today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 bg-gym-dark hover:bg-gym-red transition-colors duration-300 rounded-full flex items-center justify-center">
                <Facebook size={18} />
              </a>
              <a href="#" className="h-10 w-10 bg-gym-dark hover:bg-gym-red transition-colors duration-300 rounded-full flex items-center justify-center">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-10 w-10 bg-gym-dark hover:bg-gym-red transition-colors duration-300 rounded-full flex items-center justify-center">
                <Twitter size={18} />
              </a>
              <a href="#" className="h-10 w-10 bg-gym-dark hover:bg-gym-red transition-colors duration-300 rounded-full flex items-center justify-center">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-oswald text-lg font-bold mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-gym-red transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-gym-red transition-colors">About Us</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-gym-red transition-colors">Gallery</a></li>
              <li><a href="#plans" className="text-gray-400 hover:text-gym-red transition-colors">Membership Plans</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-gym-red transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-gym-red transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-oswald text-lg font-bold mb-4 uppercase">Working Hours</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Monday - Friday: 6am - 10pm</li>
              <li className="text-gray-400">Saturday: 8am - 8pm</li>
              <li className="text-gray-400">Sunday: 8am - 6pm</li>
            </ul>
            
            <h3 className="font-oswald text-lg font-bold mt-6 mb-4 uppercase">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">(123) 456-7890</li>
              <li className="text-gray-400">info@ironfit.example</li>
              <li className="text-gray-400">123 Fitness Street, Muscle City</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-oswald text-lg font-bold mb-4 uppercase">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for tips, workout plans, and special offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gym-dark rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-gym-red"
              />
              <button className="bg-gym-red hover:bg-gym-red-dark px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} IRONFIT. All Rights Reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="bg-gym-red hover:bg-gym-red-dark p-3 rounded-full transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
