import React from 'react';
import ArticlePreview from './ArticlePreview';

interface Article {
  title: string; // Title of the article
  paragraphs: string[]; // Array of paragraphs for the article
  link: string; // Link to the full article
}

interface NewsBlockProps {
  header: string; // Header for the NewsBlock
  articles: Article[]; // Array of articles to be displayed
}

const NewsBlock: React.FC<NewsBlockProps> = ({ header, articles }) => {
  return (
    <div className="col-span-full">
      <h1 className="text-[32px] font-semibold mb-[40px]">{header}</h1>
      {articles.map((article, index) => (
        <ArticlePreview
          key={index}
          title={article.title}
          paragraphs={article.paragraphs}
          link={article.link}
        />
      ))}
    </div>
  );
};

export default NewsBlock;