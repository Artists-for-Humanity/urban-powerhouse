import React from 'react';
import Image from 'next/image';

interface QuestionProps{
      faq?: string
      answer?: string
      hidden?: string
      click?: any
}



  const Question: React.FC<QuestionProps> = ({faq, answer, hidden, click}) => {
   
      return (
        <div className="flex-column col-start-1 col-span-12 bg-c pt-[0.8rem] pb-[0.8rem] sm:pt-[1.2rem] sm:pb-[1.2rem] lg:pt-[1.5rem] lg:pb-[1.5rem]">
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
                  onClick={click}
                  />
               </div>
            </div>
            <div className="flex pl-[0.4rem] pr-[0.4rem] sm:pl-[0.6rem] sm:pr-[0.6rem] lg:pl-[1rem] lg:pr-[1rem] {hidden} box">
            {answer}
            </div>
         </div>

         

    );
};

export default Question;