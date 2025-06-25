import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

interface ImageBlockProps {
  images: string[];
  className?: string;
  header?: string;
  variant?: 'default' | 'simple'; 
  buttonText?: string;
  onButtonClick?: () => void; 
}

const ImageBlock: React.FC<ImageBlockProps> = ({
  images,
  header,
  className = '',
  variant = 'default', 
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className={`grid grid-cols-subgrid col-span-full mb-10 ${className}`}>
      {header && (
        <h2 className="text-[28px] lg:mx-0 font-semibold col-start-1 col-span-6 lg:col-start-1 mb-[10px]">
          {header}
        </h2>
      )}

<div className="col-span-full sm:mx-[32px] lg:hidden">
  <Swiper
    modules={[Pagination]}
    pagination={{ clickable: true }}
    spaceBetween={10}
    slidesPerView={1}
  >
    {images.slice(0, 10).map((src, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full" style={{ aspectRatio: '1 / 1' }}>
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 376px"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

      {/* Desktop Grid */}
      <div
        className="hidden lg:grid col-span-full grid-cols-subgrid lg:grid-cols-3 lg:gap-2 mb-[32px]"
        style={{ gridAutoRows: '300px' }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className={
              variant === 'default' && index === 0
                ? 'col-span-2 row-span-2'
                : 'col-span-1 row-span-1'
            }
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Button for simple variant */}
      {variant === 'simple' && buttonText && (
        <div className="col-start-5 col-span-2 sm:col-start-6 sm:col-span-2 sm:mt-2 sm:mb-10 lg:col-start-11 lg:flex lg:justify-end lg:items-end">
          <Button
            label={buttonText}
            className="text-urban-blue mt-10 sm:mt-0"
            href="/FAQ"
            variant="default"
            isActive={false}
            onClick={onButtonClick}
          />
        </div>
      )}
    </div>
  );
};

export default ImageBlock;