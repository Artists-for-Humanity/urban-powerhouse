import React from 'react';
import Link from 'next/link';

interface ArticlePreviewProps {
  title: string; 
  paragraphs: string[]; 
  className?: string; 
  link: string;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ title, paragraphs, link, className }) => {
  return (
    <Link href={link} className={`grid grid-cols-subgrid article-container ${className} mb-14 col-span-full cursor-pointer group`}>
      <h1 className="text-[20px] sm:text-[28px] lg:text-[32px] font-bold mb-[24px] col-span-full lg:col-start-2 border-l-10 border-[var(--urban-blue)] group-hover:border-[var(--urban-orange)] transition-colors duration-300 pl-2">
        {title}
      </h1>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="col-span-full lg:col-start-2 mb-6 text-base font-normal leading-relaxed">
          {paragraph}
        </p>
      ))}
      <span className="pl-0  text-base lg:col-start-2 col-span-full group-hover:underline  font-semibold">
        Read More
      </span>
    </Link>
  );
};

export default ArticlePreview;