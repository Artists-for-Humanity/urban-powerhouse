import React, { useState } from 'react';
import Image from 'next/image';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQDropdownProps = {
  faqs: FAQItem[];
};

const FAQDropdown: React.FC<FAQDropdownProps> = ({ faqs }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // const toggleDropdown = (index: number) => {
  //   setOpenIndices((prevIndices) =>
  //     prevIndices.includes(index)
  //       ? prevIndices.filter((i) => i !== index)
  //       : [...prevIndices, index] 
  //   );
  // }

  const toggleDropdown = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="space-y-4 col-span-full grid grid-cols-subgrid">
      <h1 className="text-[32px] font-semibold col-span-full ">FAQ</h1>

      {faqs.map((faq, index) => (
        <div key={index} className=" pb-4 col-span-full lg:col-start-2 py-3">
          {/* Header with Chevron */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleDropdown(index)}
          >
            <h2 className="text-lg font-semibold">{faq.question}</h2>
            <Image
               src={
                openIndices.includes(index) || hoveredIndex === index
                  ? "/icons/orange-chevron.png"
                  : "/icons/blue-chevron.png"
              }
              alt="Chevron"
              width={30}
              height={30}
              className={`transition-transform duration-300 ${
                openIndices.includes(index) 
                ? '-rotate-90 text-white' 
                : 'text-[var(--urban-orange)]'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          </div>

          {openIndices.includes(index) && (
            <div className="mt-2 pl-6">
              <ul className="list-disc text-base font-light text-(--urban-white)">
                <li>{faq.answer}</li>
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQDropdown;