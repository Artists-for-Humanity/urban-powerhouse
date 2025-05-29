
'use client';
import React from 'react';




type QuestionsProps = {
  question: string;
  answer: string;

};

const Questions: React.FC<QuestionsProps> = ({
  question, answer,

}) => {
  

  return (
    

    <details className="col-span-full sm:col-start-2 sm:col-end-8 lg:col-start-3 lg:col-end-11" >
      <summary className="cursor-pointer font-bold flex items-center justify-between "> 
      {question} <img className="onClick:-translate-y-1 "src={"/icons/orange-chevron.png"}/></summary>
        <ul className="list-disc"> 
        <li className="w-[300px]">{answer}</li>
        </ul>
        
    </details>

  );
};

export default Questions;