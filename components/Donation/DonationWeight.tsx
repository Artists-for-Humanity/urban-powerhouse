import React from 'react';
import Image from 'next/image';

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
              <div className="relative w-full h-[150px] flex justify-center items-center">
                <Image
                  height={64}
                  width={71}
                  src="/weight.svg"
                  alt="Weight Background"
                  className="absolute inset-0 w-full h-full object-contain rounded-lg"
                />
                <span className="relative text-xl font-bold z-10 mt-12 mr-4">
                  {donation.amount}
                </span>
              </div>

              <p className="text-sm mt-4 text-center">
                {donation.description}
              </p>
            </div>
          );
        })}
      </div>
      {/* <Button label="Donate" href="/" variant="default" /> */}
      
    </div>
  );
};

export default DonationWeight;