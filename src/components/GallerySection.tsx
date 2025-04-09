
import React, { useState } from 'react';
import { Image, ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Weight Training Area",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Cardio Section",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Yoga Studio",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Boxing Area",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Locker Rooms",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1605296867424-92ff05e26dd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Functional Training Zone",
  },
];

const GallerySection = () => {
  const [currentImage, setCurrentImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setCurrentImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setCurrentImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (currentImage === null) return;
    
    if (direction === 'prev') {
      setCurrentImage(currentImage === 0 ? galleryImages.length - 1 : currentImage - 1);
    } else {
      setCurrentImage(currentImage === galleryImages.length - 1 ? 0 : currentImage + 1);
    }
  };

  return (
    <section id="gallery" className="bg-gym-dark section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">OUR <span className="text-gym-red">GALLERY</span></h2>
          <p className="max-w-3xl mx-auto text-gray-300">
            Take a virtual tour of our premium facilities and get inspired for your next workout.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="relative overflow-hidden rounded-lg h-64 cursor-pointer opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => openModal(index)}
            >
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white flex items-center">
                  <Image size={20} className="mr-2" />
                  <span className="font-oswald uppercase">{image.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {currentImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gym-red transition-colors"
              aria-label="Close"
            >
              <X size={32} />
            </button>
            
            <button 
              onClick={() => navigateImage('prev')}
              className="absolute left-4 text-white hover:text-gym-red transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={40} />
            </button>
            
            <img 
              src={galleryImages[currentImage].url} 
              alt={galleryImages[currentImage].alt}
              className="max-h-[80vh] max-w-[90vw] object-contain"
            />
            
            <button 
              onClick={() => navigateImage('next')}
              className="absolute right-4 text-white hover:text-gym-red transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={40} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
