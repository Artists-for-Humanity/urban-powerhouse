import React from 'react';
import Image from 'next/image';

interface QuestionProps{
      faq?: string
      answer?: string
}

  const Question: React.FC<QuestionProps> = ({faq, answer}) => { 
     return (
        <div className="flex-column col-start-1 col-span-12 bg-c">
            <div className="flex place-content-between col-start-1 col-span-12 font-semibold">
               <div className="text-[16px]">
               {faq}
               </div>
               <div className='w-[32px] h-auto'>
                  <Image
                  src='/icons/chevron.png'
                  width={1000}
                  height={1000}
                  alt="button"
                  />
               </div>
            </div>
            <div className="flex pl-[0.5rem] pr-[0.5rem]">
            {answer}
            </div>
         </div>

         

    );
};

export default Question;