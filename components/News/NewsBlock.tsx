import React from 'react';
import ArticlePreview from './ArticlePreview';
import Button from '../Button';

interface Article {
  title: string; 
  paragraphs: string[]; 
  link: string;
variant: 'pinned' | 'title-only'
}

interface NewsBlockProps {
  header: string;  
  articles: Article[];
}

const NewsBlock: React.FC<NewsBlockProps> = ({ header, articles }) => {
  return (
    <div className="grid grid-cols-subgrid col-span-full mb-20">
      <h1 className="text-[32px] font-semibold mb-[40px] col-span-full ">{header}</h1>
      {articles.map((article, index) => (
        <ArticlePreview
          key={index}
          title={article.title}
          paragraphs={article.paragraphs}
          link={article.link}
          variant={article.variant}
          className='col-span-full'
        />
      ))}

<Button className=' col-span-2 sm:col-start-4 lg:col-start-6 text-center' label="Show More →" href="/news" variant="default" isActive={false} />
    </div>
  );
};

export default NewsBlock;