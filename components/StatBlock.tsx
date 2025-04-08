import React from 'react';
import Stat from './Stat';

interface StatBlockProps {
  header: string;
  stats: { number: number | string; description: string }[]; 
  className?: string;
}

const StatBlock: React.FC<StatBlockProps> = ({ header, stats, className = '' }) => {
  return (
    <div
      className={`flex flex-col col-start-2 col-span-4 md:col-start-2 md:col-span-6 lg:col-span-full ${className} ${
        stats.length > 1 ? 'items-start md:items-start lg:items-center' : ''
      }`}
    >
      {/* Header */}
      <h2
        className={`text-[32px] md:text-[28px] lg:text-[32px] font-bold text-(--urban-white) mb-6 ${
          stats.length > 1 ? 'text-left md:text-left lg:text-center' : 'text-center'
        }`}
      >
        {header}
      </h2>

      {/* Stats */}
      <div className="col-start-2 col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {stats.map((stat, index) => (
          <Stat
            key={index}
            number={stat.number}
            description={stat.description}
          />
        ))}
      </div>
    </div>
  );
};

export default StatBlock;