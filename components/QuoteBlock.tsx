import React from 'react';
import Image from 'next/image';

interface QuoteBlockProps {
  quote: string; 
  author: string;
  authorImageSrc: string; 
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({  quote, author, authorImageSrc }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-4 pt-20 md:pt-10 pb-10 px-4">
      {/* Quote Symbol */}
      <Image src="./quote.svg" alt="Quote Symbol" width={140} height={110} className="" />
<div>  <p className="text-left text-[20px] text-white italic font-semibold leading-none [text-edge:cap] [leading-trim:both] mt-2">{quote}</p>
<span className="text-[16px] text-white italic font-semibold leading-none uppercase mt-2">{author}</span></div>
    
      <div className="flex items-center justify-center gap-4 w-full">
        <Image
          src={authorImageSrc}
          alt={author}
          width={240}
          height={240}
          className=" rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default QuoteBlock;