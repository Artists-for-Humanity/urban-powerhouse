import React from 'react';
import { useState } from 'react';
// import Image from 'next/image';

interface DonationItem {
  amount: string;
  description: string;
}

interface DonationWeightProps {
  title: string;
  donations: DonationItem[];
  className?: string;
}

const DonationWeight: React.FC<DonationWeightProps> = ({ title, donations, className = '' }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <div className={`col-span-full ${className} grid grid-cols-subgrid`}>
      <h1 className="hidden lg:block col-start-3 col-span-8 text-2xl text-center font-bold mb-8">
        {title}
      </h1>

      <div className="col-span-full sm:col-start-2 sm:col-span-6 lg:col-span-full grid grid-cols-subgrid gap-6">
        {donations.map((donation, index) => {
          const isLastRowSingle = donations.length % 3 === 1 && index === donations.length - 1;
          const isLastRowEven = donations.length % 2 === 0 && index >= donations.length - 2;
          const isSecondToLast = index === donations.length - 2;
          const isLast = index === donations.length - 1;
          return (
            <div
              key={index}
              className={`flex flex-col col-start-2 col-span-4 sm:col-span-2 lg:col-span-3 items-center rounded-lg ${
                isLastRowSingle
                ? 'sm:col-start-3'
                : isLastRowEven
                ? isSecondToLast
                  ? 'sm:col-start-2'
                  : isLast
                  ? 'sm:col-start-4'
                  : ''
                : ''
            }`}
            >
     
            <div
              className={`relative w-full h-[150px] flex justify-center items-center group`}
              onClick={() => {
                setSelectedIndex(index);
                localStorage.setItem('donateAmount', donation.amount); 
              }}
            >
          <svg
            width="143"
            height="128"
            viewBox="0 0 143 128"
            xmlns="http://www.w3.org/2000/svg"
            className={`cursor-pointer absolute inset-0 w-full h-full object-contain rounded-lg filter drop-shadow-[11px_4px_0_rgba(255,94,0,1)] ${
              selectedIndex === index
                ? 'drop-shadow-none translate-x-[11px] translate-y-[4px]'
                : 'group-hover:drop-shadow-none group-hover:translate-x-[11px] group-hover:translate-y-[4px]'
            } transition-300 transition-all`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M47.6256 47C43.9533 42.0932 41.7783 36.0009 41.7783 29.4005C41.7783 13.1631 54.9414 0 71.1788 0C87.4163 0 100.579 13.1631 100.579 29.4005C100.579 36.0009 98.4044 42.0932 94.732 47H105.243C113.261 47 120.505 51.7895 123.645 59.1679L140.955 99.8401C146.569 113.032 136.889 127.672 122.552 127.672H20.4478C6.08718 127.672 -3.59342 112.987 2.06705 99.7888L19.5109 59.1167C22.6637 51.7656 29.8931 47 37.8917 47H47.6256ZM67.7478 47C59.4881 45.3992 53.2515 38.1283 53.2515 29.4008C53.2515 19.4999 61.2777 11.4736 71.1786 11.4736C81.0795 11.4736 89.1058 19.4999 89.1058 29.4008C89.1058 38.1283 82.8691 45.3992 74.6094 47H67.7478Z"
              className={`${
                selectedIndex === index
                  ? 'fill-[var(--urban-orange)]'
                  : 'fill-[var(--urban-blue)] group-hover:fill-[var(--urban-orange)]'
              } transition-colors duration-300`}
            />
          </svg>
          <span
            className={`relative text-xl font-bold z-10 mt-12 cursor-pointer ${
              selectedIndex === index
                ? 'translate-x-[11px] translate-y-[4px]'
                : 'group-hover:translate-x-[11px] group-hover:translate-y-[4px]'
            } transition-300 transition-all`}
          >
            {donation.amount}
          </span>
            </div>
              <p className="text-base font-semibold mt-4 text-center">
                {donation.description}
              </p>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default DonationWeight;