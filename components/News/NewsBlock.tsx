import React from 'react';
import ArticlePreview from './ArticlePreview';
import Button from '../Button';

interface Article {
  title: string; 
  paragraphs: string[]; 
  link: string;
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
          className='col-span-full2'
        />
      ))}

<Button className=' text-[14px] col-span-2 sm:col-start-4 lg:col-start-6 text-center' label="Show More →" href="/news" variant="default" isActive={false} />
    </div>
  );
};

export default NewsBlock;