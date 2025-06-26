import React from 'react';
import Link from 'next/link';

interface ArticlePreviewProps {
  title: string; 
  paragraphs: string[]; 
  className?: string; 
  link: string;
  variant: 'pinned' | 'title-only';
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ title, paragraphs, link, className, variant }) => {

  if (variant === 'pinned') {
  return (
    <Link href={link} className={`grid grid-cols-subgrid article-container ${className} mb-14 col-span-full lg:col-span-11 cursor-pointer group`}>
      <h1 className="text-[20px] sm:text-[28px] lg:text-lg font-bold lg:font-semibold mb-[24px] col-span-full lg:col-start-2 border-l-10 border-[var(--urban-blue)] group-hover:border-[var(--urban-orange)] transition-colors duration-300 pl-2">
        {title}
      </h1>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="col-span-full lg:col-start-2 mb-6 text-base font-normal leading-relaxed">
          {paragraph}
        </p>
      ))}
      <span className="italic transition-colors duration-300 underline  text-[var(--urban-blue)] text-base lg:col-start-2 col-span-full font-semibold group-hover:text-[var(--urban-orange)]">
        Read More....
      </span>
    </Link>
  );
}
if (variant === 'title-only') {
  return (
    <Link href={link} className={`grid grid-cols-subgrid article-container ${className} mb-2 col-span-full lg:col-span-11 cursor-pointer group`}>
      <h1 className="text-[20px] sm:text-[28px] lg:text-lg font-bold lg:font-semibold mb-[24px] col-span-full lg:col-start-2 border-l-10 border-[var(--urban-blue)] group-hover:border-[var(--urban-orange)] transition-colors duration-300 pl-2">
        {title}
      </h1>
    </Link>
  );
}
};

export default ArticlePreview;