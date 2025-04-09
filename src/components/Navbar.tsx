
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = isScrolled
    ? 'fixed w-full bg-gym-black shadow-md py-2 transition-all duration-300 z-50'
    : 'fixed w-full bg-transparent py-4 transition-all duration-300 z-50';

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl md:text-3xl font-oswald font-bold">
          <span className="text-white">IRON</span>
          <span className="text-gym-red">FIT</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#plans" className="nav-link">Plans</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gym-black w-full absolute top-16 left-0 py-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4 px-4">
            <a href="#home" className="nav-link py-2" onClick={toggleMobileMenu}>Home</a>
            <a href="#about" className="nav-link py-2" onClick={toggleMobileMenu}>About</a>
            <a href="#gallery" className="nav-link py-2" onClick={toggleMobileMenu}>Gallery</a>
            <a href="#plans" className="nav-link py-2" onClick={toggleMobileMenu}>Plans</a>
            <a href="#testimonials" className="nav-link py-2" onClick={toggleMobileMenu}>Testimonials</a>
            <a href="#contact" className="nav-link py-2" onClick={toggleMobileMenu}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
