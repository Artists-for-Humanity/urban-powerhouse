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
    <div className={`col-span-full sm:col-start-2 sm:col-span-6 lg:col-start-2 lg:col-span-10 ${className} grid grid-cols-subgrid`}>
      <h1 className="hidden lg:block col-start-2 col-span-8 text-2xl text-center font-bold mb-8">
        {title}
      </h1>

      <div className="col-span-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {donations.map((donation, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg"
          >
            <div className="relative w-full h-[150px] flex justify-center items-center">
              <Image
              height={64}
              width={71}
                src="/weight.svg"
                alt="Weight Background"
                className="absolute inset-0 w-full h-full object-contain rounded-lg"
              />
              <span className="relative text-xl font-bold z-10 mt-12">
                {donation.amount}
              </span>
            </div>

            <p className="text-sm  mt-4 text-center">
              {donation.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationWeight;