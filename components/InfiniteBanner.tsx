'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay,  } from 'swiper/modules';
import Image from 'next/image';

export type InfiniteBannerProps = {
  speed?: number; // Speed of scrolling (lower is faster)
  logoCount?: number; // Number of logo instances to show
  className?: string; // Additional styling
  imagePath?: string; // Path to the image to display
  imageAlt?: string; // Alt text for the image
  imageWidth?: number; // Width of the image
  imageHeight?: number; // Height of the image
  reversed?: boolean; // Whether to reverse the scroll direction
};

const InfiniteBanner: React.FC<InfiniteBannerProps> = ({
  speed = 3000,
  logoCount = 8,
  className = "",
  imagePath = "/cat5-logo.svg",
  imageAlt = "Cat5 Logo",
  imageWidth = 100,
  imageHeight = 100,
  reversed = false
}) => {
  // Create an array with the specified number of logo instances
  const logos = Array.from({ length: logoCount }, (_, i) => i);

  return (
    <div className={`w-screen h-full ${className}`}>
      <Swiper
      slidesPerView={3}
      loop={true}
      speed={speed}
      spaceBetween={0}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: reversed
      }}
      modules={[Autoplay]}
      className="w-full mx-auto swiper-transition"
      allowTouchMove={false}
      breakpoints={{
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 6,
        },
      }}
      >
        {logos.map((_, index) => (
          <SwiperSlide key={`logo-${index}`}>
        <div className="w-full mx-auto">
          <Image
            src={imagePath}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className='mx-auto'
          />
        </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InfiniteBanner;
