import React, { useState } from 'react';

interface PricingOption {
  label: 'DAY' | 'WEEK' | 'MONTH' | string;
  price: string;
  description: string;
}

interface PricingSelectorProps {
  options: PricingOption[];
  variant?: 'default' | 'custom';
}

const Pass: React.FC<PricingSelectorProps> = ({
  options,
  variant = 'default',
}) => {
  const [selected, setSelected] = useState<string>(options[0]?.label || '');

  if (variant === 'custom') {
    return (
    <div className="flex flex-col gap-4 items-center col-span-full lg:col-start-2 lg:col-span-10 mt-10 w-[100vw] min-w-[100vw]" style={{ width: '100vw' }}>
        {options.map((option) => {
          const isSelected = selected === option.label;
          const bgColor = isSelected ? 'bg-[var(--urban-blue)]' : 'bg-[var(--urban-grey)]';
          const borderColor = isSelected ? 'border-[var(--urban-blue)]' : 'border-none';
          const textColor = isSelected ? 'text-[var(--urban-white)]' : 'text-[var(--urban-disabled-grey)]';
          const hoverBorder = isSelected ? '' : 'hover:border-[var(--urban-orang)]';
          const dotColor = isSelected ? 'bg-[var(--urban-orange)] border-[var(--urban-white)]' : 'bg-[var(--urban-disabled-grey)]';

          return (
            <div
              key={option.label}
              onClick={() => setSelected(option.label)}
              className={`w-[100vw] p-8 cursor-pointer border-2  duration-200 sm:rounded-none ${bgColor} ${borderColor} ${textColor} ${hoverBorder} col-span-full my-4 min-h-[200px] flex flex-col justify-evenly align-center h-full`}
            >
              <div className="flex items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className={`w-5 h-5 rounded-4xl ${dotColor}`} />
                  <span className="text-xl font-semibold pl-2">{option.label}</span>
           
                </div>
                <span className="text-xl font-semibold pl-4">{option.price}</span>
              </div>
              <p className="text-sm/7 font-bold">{option.description}</p>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 items-center col-span-full lg:col-start-2 lg:col-span-10 mt-10">
      {options.map((option) => {
        const isSelected = selected === option.label;
        const bgColor = isSelected ? 'bg-[var(--urban-blue)]' : 'bg-[var(--urban-grey)]';
        const borderColor = isSelected ? 'border-[var(--urban-blue)]' : 'border-none';
        const textColor = isSelected ? 'text-[var(--urban-white)]' : 'text-[var(--urban-disabled-grey)]';
        const hoverBorder = isSelected ? '' : 'hover:border-[var(--urban-orang)]';
        const dotColor = isSelected ? 'bg-[var(--urban-orange)] border-[var(--urban-white)]' : 'bg-[var(--urban-disabled-grey)]';

        return (
          <div
            key={option.label}
            onClick={() => setSelected(option.label)}
            className={`w-[100%] p-6 cursor-pointer border-2 transition-all duration-200 rounded-lg sm:rounded-none ${bgColor} ${borderColor} ${textColor} ${hoverBorder} col-span-full my-4 min-h-[200px] flex flex-col justify-evenly align-center h-full`}
          >
            <div className="flex items-center mb-2">
              <div className="flex items-center gap-2">
                <span className={`w-5 h-5 rounded-4xl ${dotColor}`} />
                <span className="text-xl font-semibold pl-2">{option.label}</span>
              </div>
              <span className="text-xl font-semibold pl-4">{option.price}</span>
            </div>
            <p className="text-sm/7 font-bold">{option.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Pass;