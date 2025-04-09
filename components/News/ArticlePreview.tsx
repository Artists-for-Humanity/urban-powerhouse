import React from 'react';
import Button from '../Button';

interface ArticlePreviewProps {
  title: string; 
  paragraphs: string[]; 
  className?: string; 
  link: string;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ title, paragraphs, link }) => {
  return (
    <div className="article-container p-4 ${className} mb-[40px] ml-[40px] col-span-full">
      <h1 className="text-[32px] font-bold mb-4">{title}</h1>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="mb-4 text-base leading-relaxed">
          {paragraph}
        </p>
      ))}
      <Button className='pl-0 underline text-[14px]' label="Read More" href={link} variant="nav" isActive={false} />
    </div>
  );
};

export default ArticlePreview;