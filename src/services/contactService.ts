
import { toast } from 'sonner';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // This would normally be the endpoint where you would submit your form data
    // For demonstration purposes, we're simulating a successful API call
    
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Log the data that would be sent to the backend
    console.log('Contact form data to be sent to backend:', formData);
    
    // Show a success notification
    toast.success('Thank you for your message! We will get back to you soon.', {
      position: 'top-right',
      duration: 5000,
    });
    
    return true;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    
    // Show an error notification
    toast.error('There was an error sending your message. Please try again.', {
      position: 'top-right',
      duration: 5000,
    });
    
    return false;
  }
};
