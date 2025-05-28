import React from 'react';
import Image from 'next/image';
import Button from '../Button';

interface ArticleBlockProps {
  variant: 'title' | 'paragraph' | 'quote' | 'image-description' | 'center-image' | 'side-by-side-images' | 'bullet-points' | 'go-back';
  title?: string;
  paragraphs?: string[];
  quote?: string;
  cite?: string;
  imageSrc?: string;
  imageSrcs?: string[];
  description?: string;
  onBackClick?: () => void;
  href?: string;
  className?: string;
}
const ArticleBlock: React.FC<ArticleBlockProps> = ({
  variant,
  title,
  paragraphs = [],
  quote,
  cite,
  imageSrc,
  imageSrcs,
  description,
  className ='',

}) => {
  switch (variant) {
    case 'title':
      return (
        <h1 className="text-[20px] sm:text-[28px] lg:text-[32px] font-bold mb-[24px] col-span-full lg:col-start-2 border-l-10 border-[var(--urban-orange)] group-hover:border-[var(--urban-orange)] transition-colors duration-300 pl-2">
        {title}
      </h1>
      );

    case 'paragraph':
      return (
        <div className="space-y-4 col-span-full grid grid-cols-subgrid">
          {paragraphs.map((paragraph, index) => (
             <p key={index} className="col-span-full sm:col-start-2 sm:col-span-6 lg:col-start-2 lg:col-span-10 mb-6 text-base font-normal leading-relaxed">
             {paragraph}
           </p>
          ))}
        </div>
      );

    case 'quote':
      return (
        <div className="col-span-full flex flex-col items-start text-left sm:col-start-2 sm:col-span-6 lg:col-start-2 lg:col-span-10 lg:my-10">
          <Image src="/quote.svg" alt="Quote Symbol" width={63} height={50} />
          <p className="text-[24px] lg:text-[32px] text-(--urban-white) italic font-bold mt-4 mb-2">
            {quote}
          </p>
          <p className="text-[16px] lg:text-[16px] text-(--urban-white) italic font-bold mb-4">
            {cite}
          </p>
        </div>
      );

    case 'image-description':
      return (
        <div className="col-span-full grid grid-cols-subgrid items-center sm:col-start-2 sm:col-span-6  lg:col-start-2 lg:col-span-10">
          <p className="col-span-full sm:col-span-3 lg:col-start-1 lg:col-span-6 mb-6 text-base font-normal leading-relaxed">
             {description}
           </p>
          {imageSrc && (
            <Image
              src={imageSrc}
              alt="Image"
              width={400}
              height={300}
              className="w-full h-auto object-cover mb-4 col-span-full sm:col-start-4 sm:col-span-3 lg:col-start-7 lg:col-span-4"
            />
          )}
        </div>
      );

    case 'center-image':
      return (
        <div className="col-span-full flex flex-col items-center justify-center sm:grid sm:grid-cols-subgrid mb-10 lg:col-start-2 lg:col-span-10">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt="Centered Image"
              width={400}
              height={300}
              className="w-full h-auto object-cover sm:col-start-3 sm:col-span-4 lg:col-start-4"
            />
          )}
          {description && (
            <p className="mt-4 text-base font-normal w-3/4 leading-relaxed text-center sm:col-start-3 sm:col-span-4 lg:col-start-4 sm:w-full">
            {description}
            </p>
        )}
        </div>
      );
    case 'side-by-side-images':
      return (
        <div className="col-span-full grid grid-cols-subgrid gap-6 items-center sm:col-start-2 sm:col-span-6 lg:col-start-2 lg:col-span-10 mb-10">
          {imageSrcs && imageSrcs.length === 2 && (
            <>
              <div className="col-span-full sm:col-span-3 lg:col-span-5 flex justify-center">
                <Image
                  src={imageSrcs[0]}
                  alt="Left Image"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
              <div className="col-span-full sm:col-span-3 lg:col-span-5 flex justify-center">
                <Image
                  src={imageSrcs[1]}
                  alt="Right Image"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
            </>
          )}
        </div>
      );

      case 'bullet-points':
      return (
        <div className="col-span-full grid grid-cols-subgrid">
          <ul className="list-disc list-inside space-y-2 col-span-full sm:col-start-2 sm:col-span-6 lg:col-start-2 lg:col-span-10 mb-10">
            {paragraphs.map((point, index) => (
              <li
                key={index}
                className="text-base font-normal leading-relaxed pl-4"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      );


      case 'go-back':
        return (
          <div className="col-span-full flex justify-center">
              <Button label="Go Back" onClick={() => console.log('Donation clicked')} href='/News' variant="default" />
          </div>
        );


    default:
      return null;
  }
};

export default ArticleBlock;