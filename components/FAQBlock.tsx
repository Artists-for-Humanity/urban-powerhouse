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

  const toggleDropdown = (index: number) => {
    setOpenIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index] 
    );
  }

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
                openIndices.includes(index)
                  ? "/icons/chevron.png"
                  : "/icons/orange-chevron.png"
              }
              alt="Chevron"
              width={30}
              height={30}
              className={`transition-transform duration-300 ${
                openIndices.includes(index) 
                ? ' text-white' 
                : ' text-[var(--urban-orange)]'
              }`}
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