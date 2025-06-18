import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface StatProps {
  number: number | string;
  description: string;
  suffix?: string;
}

const Stat: React.FC<StatProps> = ({ number, description, suffix }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView(); // Remove triggerOnce

  const target = typeof number === 'number' ? number : parseInt(number.replace(/,/g, ''), 10) || 0;

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1300; // ms
      const stepTime = Math.max(Math.floor(duration / target), 20);
      const step = () => {
        start += Math.ceil(target / (duration / stepTime));
        if (start >= target) {
          setCount(target);
        } else {
          setCount(start);
          setTimeout(step, stepTime);
        }
      };
      step();
    } else {
      setCount(0); // Reset when out of view
    }
  }, [inView, target]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="text-[32px] lg:text-[100px] font-bold">
        {count.toLocaleString()}
          {suffix && <span>{suffix}</span>}
        </span>
      <span className="text-base text-center">{description}</span>
    </div>
  );
};

export default Stat;