import React, { useState } from 'react';
import Button from '../Button';

interface DonationItem {
  amount: string;
  description: string;
}

interface DonationWeightProps {
  title: string;
  donations: DonationItem[];
  businessId: string;
  currencyCode?: string;
  itemName?: string;           
  className?: string;
}

const DonationWeight: React.FC<DonationWeightProps> = ({ 
  title, 
  donations, 
  businessId,
  currencyCode = 'USD',
  itemName    = 'Gym Donation', 
  className = '' 
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [customAmount, setCustomAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
const [customError, setCustomError] = useState('');



const handleDonate = () => {
  const numberAmount = customAmount || localStorage.getItem('donateAmount');
  if (!numberAmount) {
    setErrorMessage('Please select a donation amount.');
    return;
  }

  const parsedAmount = parseFloat(numberAmount);
  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    setErrorMessage('Invalid donation amount. Please enter a valid number.');
    return;
  }

  // clear any prior error now that we have a good amount
  setErrorMessage('');

  // build the URL using your businessId, currencyCode, and itemName props
  const paypalUrl =
    `https://www.paypal.com/donate` +
    `?business=${encodeURIComponent(businessId)}` +
    `&amount=${parsedAmount}` +
    `&currency_code=${encodeURIComponent(currencyCode)}` +
    `&item_name=${encodeURIComponent(itemName)}` +
    `&no_recurring=0`;

  window.open(paypalUrl, '_blank', 'noopener,noreferrer');
}; // <-- only one closing brace here



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
                  if (isLast) {
                    setSelectedIndex(index); 
                    setIsPopupVisible(true);
                  } else {
                    setSelectedIndex(index);
                    const numberAmount = donation.amount.replace(/^\$/, '');
                    localStorage.setItem('donateAmount', numberAmount);
                    console.log('Donation amount set to:', numberAmount);
                  }
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
                  className={`relative text-xl font-bold  mt-12 cursor-pointer ${
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

{isPopupVisible && (
  <div className="fixed inset-0 bg-black/20 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
      <h1 className="text-2xl font-bold text-black text-center mb-2">Custom Amount</h1>
      <h2 className="text-base text-gray-600 text-center mb-4">
        Enter Custom Donation Amounts
      </h2>

      <div className="relative mb-2">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg font-semibold">
          $
        </span>
        <input
          type="number"
          className="border border-gray-300 rounded-lg p-2 pl-8 w-full text-black bg-white placeholder-gray-500"
          placeholder="0.00"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
            setCustomError('');
          }}
          min="0"
        />
      </div>
      {customError && (
        <p className="text-red-600 text-sm mb-2">{customError}</p>
      )}

      <div className="flex justify-end space-x-4">
        <Button
          label="Cancel"
          variant="default"
          onClick={() => {
            setIsPopupVisible(false);
            setCustomAmount('');
            setCustomError('');
            setIsPopupVisible(false);
            setSelectedIndex(null);
            localStorage.removeItem('donateAmount');
          }}
        />
        <Button
          label="Donate"
          variant="default"
          onClick={() => {
            if (!customAmount || isNaN(Number(customAmount)) || Number(customAmount) <= 0) {
              setCustomError('Please enter a valid number greater than 0.');
              return;
            }
            localStorage.setItem('donateAmount', customAmount);
            handleDonate();
          }}
        />
      </div>
    </div>
  </div>
)}



      <div className="col-span-2 col-start-3 sm:col-start-4 lg:col-start-6 flex justify-center items-center pt-6">
        <Button label="Donate" variant="default" onClick={handleDonate} />
      </div>
      {errorMessage && (
  <p className="text-red-600 text-sm text-center mt-2 col-span-full pt-2">{errorMessage}</p>
)}

    </div>
  );
};

export default DonationWeight;