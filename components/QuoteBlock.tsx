import React from 'react';
import Image from 'next/image';

interface QuoteBlockProps {
  quote: string; 
  author: string;
  authorImageSrc: string; 
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({  quote, author, authorImageSrc }) => {
  return (
    <div className="grid col-span-full grid-cols-subgrid gap-y-[32px] lg:py-[120px] my-10 my-16 lg:my-0">

      <Image src="./quote.svg" alt="Quote Symbol" width={140} height={110} className="col-span-3 lg:col-span-2 mx-[32px] lg:mx-0 lg:w-[203px] lg:h-[161px] lg:mt-6" />

      <div className='col-start-1 col-span-full lg:col-start-4 lg:col-span-6  mx-[32px] lg:mx-0 lg:p-y-10 lg:flex lg:flex-col lg:justify-center'>  
        <p className="text-left text-[20px] md:text-[24px] lg:text-[32px] text-(--urban-white) italic font-semibold leading-none [text-edge:cap] [leading-trim:both] mt-2 mb-[24px]">{quote}</p>
        <span className="text-[16px] lg:text-[20px] text-(--urban-white) italic font-semibold leading-none uppercase mt-2">{author}</span>
      </div>
    
        <Image
          src={authorImageSrc}
          alt={author}
          width={240}
          height={240}
          className=" rounded-full object-cover col-start-2 col-span-4 w-full sm:col-start-3 sm:col-span-4 lg:col-start-10 lg:col-span-3 "
        />
    </div>
  );
};

export default QuoteBlock;