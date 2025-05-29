
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
    

    <details className="col-span-full">
      <summary className="cursor-pointer font-bold flex items-center justify-between gap-2" > 
      {question} <img src={"/icons/orange-Chevron.png"}/></summary>
        <ul className="list-disc"> 
        <li className="w-[300px]">{answer}</li>
        </ul>
        
    </details>

  );
};

export default Questions;