import React from 'react';
import  Image  from 'next/image';

interface QuestionProps{
      title?: string
}



  const Question: React.FC<QuestionProps> = ({title}) => {   
     return (
        <div className="flex place-content-between col-start-1 col-span-12 font-semibold bg-c">
         <div>
         {title}
         </div>
         <div className='w-[40px] h-auto'>
               <Image
               src='/icons/chevron.png'
               width={1000}
               height={1000}
               alt="button"
               />
         </div>

         </div>

    );
};

export default Question;