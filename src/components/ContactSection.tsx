
import React, { useState } from 'react';
import { MailIcon, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { submitContactForm, ContactFormData } from '../services/contactService';

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name as keyof ContactFormData]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Partial<Record<keyof ContactFormData, string>> = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      const success = await submitContactForm(formData);
      
      if (success) {
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gym-black">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">GET IN <span className="text-gym-red">TOUCH</span></h2>
          <p className="max-w-3xl mx-auto text-gray-300">
            Have questions about memberships or services? Contact us today and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 space-y-6 opacity-0 animate-slide-in" style={{ animationDelay: '150ms' }}>
            <div className="bg-gym-dark p-6 rounded-lg flex items-start space-x-4">
              <div className="bg-gym-red h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-oswald text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-300">(123) 456-7890</p>
                <p className="text-gray-300">Mon-Fri: 6am - 10pm</p>
                <p className="text-gray-300">Sat-Sun: 8am - 8pm</p>
              </div>
            </div>
            
            <div className="bg-gym-dark p-6 rounded-lg flex items-start space-x-4">
              <div className="bg-gym-red h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                <MailIcon size={20} />
              </div>
              <div>
                <h3 className="font-oswald text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-300">info@ironfit.example</p>
                <p className="text-gray-300">support@ironfit.example</p>
              </div>
            </div>
            
            <div className="bg-gym-dark p-6 rounded-lg flex items-start space-x-4">
              <div className="bg-gym-red h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-oswald text-xl font-bold mb-2">Visit Us</h3>
                <p className="text-gray-300">123 Fitness Street</p>
                <p className="text-gray-300">Muscle City, MC 12345</p>
              </div>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-2 opacity-0 animate-slide-in" style={{ animationDelay: '300ms' }}>
            <div className="bg-gym-dark p-6 rounded-lg">
              <h3 className="font-oswald text-2xl font-bold mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block mb-1">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-gym-gray p-3 rounded-md text-white ${formErrors.name ? 'border border-red-500' : 'border border-transparent'}`}
                      placeholder="John Doe"
                    />
                    {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-1">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-gym-gray p-3 rounded-md text-white ${formErrors.email ? 'border border-red-500' : 'border border-transparent'}`}
                      placeholder="johndoe@example.com"
                    />
                    {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gym-gray p-3 rounded-md text-white border border-transparent"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-1">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full bg-gym-gray p-3 rounded-md text-white ${formErrors.subject ? 'border border-red-500' : 'border border-transparent'}`}
                    >
                      <option value="">Select a subject</option>
                      <option value="Membership Inquiry">Membership Inquiry</option>
                      <option value="Personal Training">Personal Training</option>
                      <option value="Group Classes">Group Classes</option>
                      <option value="General Question">General Question</option>
                      <option value="Feedback">Feedback</option>
                    </select>
                    {formErrors.subject && <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-1">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full bg-gym-gray p-3 rounded-md text-white ${formErrors.message ? 'border border-red-500' : 'border border-transparent'}`}
                    placeholder="How can we help you?"
                  />
                  {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary flex items-center justify-center w-full md:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
