import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

interface ImageBlockProps {
  images: string[];
  className?: string; 
}

const ImageBlock: React.FC<ImageBlockProps> = ({ images, className = '' }) => {

  
  return (
    <div className={`grid grid-cols-subgrid col-span-full ${className}`}>
      {/* Mobile Layout */}
 
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
          className="w-[376px] md:w-[793px] md:h-[596px] h-[282px] object-cover mx-auto"
        />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

 

      {/* Desktop Layout */}
      
      <div className="hidden lg:grid col-span-full grid-cols-subgrid lg:grid-cols-3 lg:gap-2 mb-[32px] " style={{ gridAutoRows: '300px' }}>
        {images.map((src, index) => (
          <div 
          key={index}
          className={index === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'} 
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
    </div>
  );
};

export default ImageBlock;