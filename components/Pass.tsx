'use client';
import React, {  FormEvent, useEffect, useState } from 'react';

interface PricingOption {
  label: 'DAY' | 'WEEK' | 'MONTH' | 'Custom' | string;
  price: string;
  description: string;
}

interface PassProps {
  options: PricingOption[];
  variant?: 'default' | 'custom';
  onSelect?: (label: string) => void;
   selected?: string;

}

const Pass: React.FC<PassProps> = ({
  options,
  variant = 'default',
    onSelect, // destructure onSelect
     selected = '',
    

}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Remove all non-digits for validation
    const digitsOnly = phone.replace(/\D/g, '');
    // Check if it's a valid US phone number (10 digits)
    return digitsOnly.length === 10 || digitsOnly.length === 11;
  };

  const validateName = (name: string): boolean => {
    // Check if name contains only letters, spaces, hyphens, and apostrophes
    const nameRegex = /^[a-zA-Z\s\-']+$/;
    return nameRegex.test(name) && name.trim().length >= 2;
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.mindbodyonline.com/javascripts/healcode.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up on unmount
    };
  }, []);

   const handleClick = (label: string) => {
    onSelect?.(label === selected ? '' : label);
  };



  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const form = e.target as HTMLFormElement;
    const firstName = (form.elements.namedItem('firstName') as HTMLInputElement).value.trim();
    const lastName = (form.elements.namedItem('lastName') as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

    const newErrors: Record<string, string> = {};

    // Validate first name
    if (!firstName) {
      newErrors.firstName = 'First name is required';
    } else if (!validateName(firstName)) {
      newErrors.firstName = 'First name must contain only letters and be at least 2 characters';
    }

    // Validate last name
    if (!lastName) {
      newErrors.lastName = 'Last name is required';
    } else if (!validateName(lastName)) {
      newErrors.lastName = 'Last name must contain only letters and be at least 2 characters';
    }

    // Validate phone
    if (!phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    // Validate email
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // If there are errors, show them and stop submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // If validation passes, proceed with email
    const subject = encodeURIComponent(`Custom Pass Inquiry from ${firstName} ${lastName}`);
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message || 'No additional message'}`
    );

    window.location.href = `mailto:teamurbanpowerhouse@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitting(false);
  };


  const renderOption = (option: PricingOption) => {
    // const isSelected = selected === option.label;
    const isSelected = selected === option.label;
    const bgColor = isSelected ? 'bg-[var(--urban-blue)]' : 'bg-[var(--urban-grey)]';
    const borderColor = isSelected ? 'border-[var(--urban-blue)]' : 'border-none';
    const textColor = isSelected
      ? 'text-[var(--urban-white)]'
      : 'text-[var(--urban-disabled-grey)]';
    const hoverBorder = isSelected ? '' : 'hover:border-[var(--urban-orange)]';
    const dotColor = isSelected
      ? 'bg-[var(--urban-orange)] border-[var(--urban-white)]'
      : 'bg-[var(--urban-white)]';

    return (
      <div
        key={option.label}
        onClick={() => handleClick(option.label)}
        className={`
          ${variant === 'custom' ? 'w-[100vw] sm:w-[100%] rounded-none' : 'w-full rounded-lg'}
          p-6 cursor-pointer border-2 sm:rounded-none
          transition-all duration-200
          ${bgColor} ${borderColor} ${textColor} ${hoverBorder}
          my-4 min-h-[200px] flex flex-col justify-evenly
        `}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className={`w-5 h-5 rounded-full ${dotColor}`} />
            <span className="text-xl font-semibold">{option.label}</span>
          </div>
          <span className="text-xl font-semibold">{option.price}</span>
        </div>
        <p className="text-sm leading-7 font-bold">{option.description}</p>
      </div>
    );
  };

  return (
    <div
      className={`
        flex flex-col items-center
        gap-4 col-span-full
        ${variant === 'default' ? 'lg:col-start-2 lg:col-span-10 mt-10' : 'w-full mt-6 lg:col-start-2 lg:col-span-10 mt-10'}
      `}
    >
      {options.map(renderOption)}

      {/* === CUSTOM FORM === */}
     
{variant === 'custom' && selected === 'Custom' && (
  <form onSubmit={handleSubmit} className="w-full col-span-full bg-[var(--urban-black)] p-6 rounded-lg mt-6">
    <h3 className="text-lg font-semibold text-[var(--urban-white)] mb-4">Personal Information</h3>

    {/* Two-column grid for label+input alignment */}
    <div className="grid grid-cols-[150px_minmax(0,1fr)] gap-y-4 items-start">
      <label htmlFor="firstName" className="text-left pr-2 text-[var(--urban-disabled-grey)] pt-1">
        First Name <span className="text-red-500">*</span>
      </label>
      <div className="flex flex-col">
        <input
          id="firstName"
          name="firstName"
          required
          className={`bg-transparent border-b ${errors.firstName ? 'border-red-500' : 'border-[var(--urban-grey)]'} focus:border-[var(--urban-blue)] outline-none py-1 text-[var(--urban-white)]`}
        />
        {errors.firstName && <span className="text-red-500 text-sm mt-1">{errors.firstName}</span>}
      </div>

      <label htmlFor="lastName" className="text-left pr-2 text-[var(--urban-disabled-grey)] pt-1">
        Last Name <span className="text-red-500">*</span>
      </label>
      <div className="flex flex-col">
        <input
          id="lastName"
          name="lastName"
          required
          className={`bg-transparent border-b ${errors.lastName ? 'border-red-500' : 'border-[var(--urban-grey)]'} focus:border-[var(--urban-blue)] outline-none py-1 text-[var(--urban-white)]`}
        />
        {errors.lastName && <span className="text-red-500 text-sm mt-1">{errors.lastName}</span>}
      </div>

      <label htmlFor="phone" className="text-left pr-2 text-[var(--urban-disabled-grey)] pt-1">
        Mobile Phone <span className="text-red-500">*</span>
      </label>
      <div className="flex flex-col">
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="(123) 456-7890"
          className={`bg-transparent border-b ${errors.phone ? 'border-red-500' : 'border-[var(--urban-grey)]'} focus:border-[var(--urban-blue)] outline-none py-1 text-[var(--urban-white)]`}
        />
        {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone}</span>}
      </div>

      <label htmlFor="email" className="text-left pr-2 text-[var(--urban-disabled-grey)] pt-1">
        Email <span className="text-red-500">*</span>
      </label>
      <div className="flex flex-col">
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="example@email.com"
          className={`bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-[var(--urban-grey)]'} focus:border-[var(--urban-blue)] outline-none py-1 text-[var(--urban-white)]`}
        />
        {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
      </div>

      <div className='col-span-full'>
        <label htmlFor="message" className="text-left pr-2 text-[var(--urban-disabled-grey)] self-start my-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={8}
          placeholder="Optional - Tell us about your fitness goals or any specific requirements"
          className="bg-transparent border border-[var(--urban-grey)] focus:border-[var(--urban-blue)] outline-none p-2 text-[var(--urban-white)] w-full mt-2"
        />
      </div>
    </div>

    <button
      type="submit"
      disabled={isSubmitting}
      className="mt-6 w-full py-3 bg-[var(--urban-white)] text-[var(--urban-black)] font-semibold rounded disabled:opacity-50 disabled:cursor-not-allowed transition"
    >
      {isSubmitting ? 'Processing...' : 'Contact Us'}
    </button>
  </form>
)}
    </div>
  );
};

export default Pass;
