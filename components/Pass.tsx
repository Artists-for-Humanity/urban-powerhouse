'use client';
import React, { useState, FormEvent, useEffect } from 'react';

interface PricingOption {
  label: 'DAY' | 'WEEK' | 'MONTH' | 'Custom' | string;
  price: string;
  description: string;
}

interface PassProps {
  options: PricingOption[];
  variant?: 'default' | 'custom';
  onSelect?: (label: string) => void;

}

const Pass: React.FC<PassProps> = ({
  options,
  variant = 'default',
    onSelect, // destructure onSelect

}) => {
  const [selected, setSelected] = useState<string>(
    variant === 'custom' ? '' : options[0]?.label || ''
  );

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
    setSelected(prev => (prev === label ? '' : label));
      onSelect?.(label); // trigger callback to parent

  };

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   // TODO: wire up your submit logic
  //   alert('Form submitted!');
  // };

  const handleSubmit = (e: FormEvent) => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const firstName = (form.elements.namedItem('firstName') as HTMLInputElement).value;
  const lastName = (form.elements.namedItem('lastName') as HTMLInputElement).value;
  const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
  const email = (form.elements.namedItem('email') as HTMLInputElement).value;
  const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

  const subject = encodeURIComponent(`Custom Pass Inquiry from ${firstName} ${lastName}`);
  const body = encodeURIComponent(
    `Name: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
  );

  window.location.href = `mailto:Contact@UrbanPowerHouse.com?subject=${subject}&body=${body}`;
};


  const renderOption = (option: PricingOption) => {
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
        <form
          onSubmit={handleSubmit}
          className="w-full col-span-full bg-[var(--urban-black)] p-6 rounded-lg mt-6"
        >
          <h3 className="text-lg font-semibold text-[var(--urban-white)] mb-4">
            Personal Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4">
            <div className="flex flex-row justify-between md:justify-start items-end">
              <label
                htmlFor="firstName"
                className="text-m font-semibold text-[var(--urban-disabled-grey)] sm:pr-6"
              >
                First Name*
              </label>
              <input
                id="firstName"
                name="firstName"
                required
                className="mt-1 bg-transparent border-b border-[var(--urban-grey)] focus:border-[var(--urban-blue)] outline-none py-1 text-[var(--urban-white)]"
              />
            </div>
            <div className="flex flex-row justify-between md:justify-start items-end">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-[var(--urban-disabled-grey)] sm:pr-6"
              >
                Last Name*
              </label>
              <input
                id="lastName"
                name="lastName"
                required
                className="mt-1 bg-transparent border-b border-[var(--urban-grey)] focus:border-[var(--urban-blue)] outline-none py-1 text-[var(--urban-white)]"
              />
            </div>
          </div>

          <div className="flex mt-4 flex-row justify-between md:justify-start items-end">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-[var(--urban-disabled-grey)] sm:pr-6"
            >
              Mobile Phone*
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="mt-1 bg-transparent border-b border-[var(--urban-grey)] focus:border-[var(--urban-blue)] outline-none py-1 text-[var(--urban-white)]"
            />
          </div>

          <div className="flex flex-row justify-between md:justify-start mt-4 items-end">
            <label
              htmlFor="email"
              className="text-sm font-medium text-[var(--urban-disabled-grey)] sm:pr-6"
            >
              Email*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 bg-transparent border-b border-[var(--urban-grey)] focus:border-[var(--urban-blue)] outline-none py-1 text-[var(--urban-white)]"
            />
          </div>

          <div className="flex flex-col mt-10">
            <label
              htmlFor="message"
              className="text-sm font-medium text-[var(--urban-disabled-grey)] sm:pr-6"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={8}
              placeholder="Optional"
              className="mt-1 bg-transparent border border-[var(--urban-grey)] focus:border-[var(--urban-blue)] outline-none p-2 text-[var(--urban-white)]"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full py-3 bg-[var(--urban-white)] text-[var(--urban-black)] font-semibold rounded disabled:opacity-50 transition"
          >
            Contact Us
          </button>
        </form>
      )}
    </div>
  );
};

export default Pass;
