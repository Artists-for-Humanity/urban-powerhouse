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
  variant?: 'default' | 'simple'; // NEWa
  buttonText?: string; // New
  onButtonClick?: () => void; // New
}

const ImageBlock: React.FC<ImageBlockProps> = ({
  images,
  header,
  className = '',
  variant = 'default', // NEW
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className={`grid grid-cols-subgrid col-span-full mb-10 ${className}`}>
      {header && (
        <h2 className="text-[28px] font-semibold col-span-full mb-[10px]">
          {header}
        </h2>
      )}

      {/* Mobile Swiper */}
      <div className="col-span-full lg:hidden">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
        >
          {images.slice(0, 10).map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={376}
                height={282}
                className="w-[376px] sm:w-[793px] sm:h-[596px] h-[282px] object-cover mx-auto"
              />
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
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Button for simple variant */}
      {variant === 'simple' && buttonText && (
        <div className="col-start-4 col-span-2 sm:col-start-7 sm:col-span-2 sm:mt-10 lg:col-start-11 lg:flex lg:justify-end lg:items-end">
          <Button
            label={buttonText}
            className="text-urban-blue"
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