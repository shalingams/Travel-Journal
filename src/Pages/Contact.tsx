import React, { useState, FormEvent } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      // TODO: Implement actual form submission logic
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setErrors({});
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-sky-950 p-10 rounded-lg bg-opacity-70">
        <div>
          <label 
            htmlFor="name" 
            className="block text-lg uppercase font-medium text-pink-500 mb-2"
          >
            Name <span className='text-sm'>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`
              w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 
              ${errors.name 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
              }
            `}
          />
          {errors.name && (
            <p className="mt-1 text-lg text-red-300">{errors.name}</p>
          )}
        </div>

        <div>
          <label 
            htmlFor="email" 
            className="block text-lg uppercase font-medium text-pink-500 mb-2"
          >
            Email <span className='text-sm'>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`
              w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 
              ${errors.email 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
              }
            `}
          />
          {errors.email && (
            <p className="mt-1 text-lg text-red-300">{errors.email}</p>
          )}
        </div>

        <div>
          <label 
            htmlFor="message" 
            className="block text-lg uppercase font-medium text-pink-500 mb-2"
          >
            Message <span className='text-sm'>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`
              w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 
              ${errors.message 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
              }
            `}
          />
          {errors.message && (
            <p className="mt-1 text-lg text-red-300">{errors.message}</p>
          )}
        </div>

        <div>
          <button 
            type="submit" 
            className="
              w-full 
              mt-10 text-white uppercase bg-pink-500 bg-opacity-70 py-4 text-base font-light px-10 border border-white hover:bg-purple-500 hover:bg-opacity-70
              transition duration-300 ease-in-out
            "
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
