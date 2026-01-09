import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { SendHorizonal, ChevronDown } from 'lucide-react';
import { companyInfo } from '../../data/dummyData';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    productInterest: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration - Hardcoded values
      const serviceId = 'service_p0mg8lc';
      const templateId = 'template_aje880d';
      const publicKey = 'R0DUBapO16bji4kmE';

      // Prepare email template parameters
      // Note: Variable names must match the EmailJS template variables
      const templateParams = {
        to_email: 'vinayakv949@gmail.com',
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        productInterest: formData.productInterest || 'Not specified',
        message: formData.message,
        reply_to: formData.email,
        to_date: new Date().toLocaleString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric', 
          hour: '2-digit', 
          minute: '2-digit' 
        }),
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        productInterest: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setIsSubmitting(false);
      alert('Failed to send message: ' + (error.text || error.message || 'Unknown error') + '\n\nPlease try again or contact us directly at ' + companyInfo.email);
    }
  };

  const inputStyles = "w-full bg-transparent border border-white/30 rounded-[4px] px-4 h-[50px] text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-white transition-all duration-300";

  if (isSubmitted) {
    return (
      <section
        id="form"
        className="relative text-white bg-cover bg-center bg-gray-900 bg-blend-overlay md:pt-[120px] md:pb-[120px]"
        style={{
          paddingTop: '60px',
          paddingBottom: '60px',
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/og20241022141711171194078_jpg-29.webp')`
        }}
      >
      <div className="container max-w-[1200px] mx-auto px-5 md:px-10 lg:px-15">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="text-gray-200 mb-6">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-accent text-white px-6 py-2 rounded-[4px] font-semibold hover:bg-orange-600 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="form"
      className="relative text-white bg-cover bg-center bg-gray-900 bg-blend-overlay md:pt-[120px] md:pb-[120px]"
      style={{
        paddingTop: '60px',
        paddingBottom: '60px',
        backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/og20241022141711171194078_jpg-29.webp')`
      }}
    >
      <div className="container max-w-[1200px] mx-auto px-5 md:px-10 lg:px-15">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-x-24">
          <div className="lg:w-2/5 mb-12 lg:mb-0">
            <p className="flex items-center text-base  text-white font-semibold tracking-wide uppercase mb-4">
              <span className="w-8 h-px bg-accent  mr-3"></span>
              CONTACT
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-white" style={{ lineHeight: 1.2 }}>
              HOW CAN WE HELP YOU?
            </h2>
          </div>

          <div className="lg:w-3/5">
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputStyles}
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputStyles}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone*"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputStyles}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail*"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputStyles}
                />
                <div className="md:col-span-2 relative">
                  <select
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    className={`${inputStyles} appearance-none pr-10`}
                  >
                    <option value="">Product Interest (Optional)</option>
                    <option value="radial-seals">Radial Seals</option>
                    <option value="axial-seals">Axial Seals</option>
                    <option value="hydraulic-seals">Hydraulic Seals</option>
                    <option value="rotary-seals">Rotary Seals</option>
                    <option value="o-rings">O-Rings</option>
                    <option value="gaskets">Gaskets</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
                <textarea
                  name="message"
                  placeholder="Message*"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputStyles} h-auto min-h-[140px] py-3`}
                ></textarea>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-gray-900 font-semibold uppercase flex items-center justify-center gap-2.5 px-8 py-[15px] rounded-[4px] hover:bg-gray-200 transition-colors duration-300 text-[16px] leading-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <SendHorizonal className="h-4 w-4" />
                  <span>{isSubmitting ? 'SENDING...' : 'SUBMIT'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

