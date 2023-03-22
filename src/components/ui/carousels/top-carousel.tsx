import Image from 'next/image';
import Link from 'next/link';
import tw from 'tailwind-styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import NextSlide from './controls/next-slide';
import PrevSlide from './controls/prev-slide';
import type { TopCarouselInterface } from '@/types/sliders-type';

const SlideControls = tw.div`
  opacity-0 group-hover:opacity-100
  flex justify-center items-center gap-2
  absolute right-5 bottom-5 z-10
  transition-opacity
`;

interface TopCarouselProps {
  items: TopCarouselInterface[];
}

function TopCarousel(props: TopCarouselProps) {
  const { items } = props;
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ pauseOnMouseEnter: true }}
      loop
      className="group"
    >
      {items.map((item) => (
        <SwiperSlide key={item.text}>
          <Link href={item.path}>
            <Image
              src={item.image}
              alt={item.text}
              width={1500}
              height={300}
              className="w-full min-h-[200px]"
            />
          </Link>
        </SwiperSlide>
      ))}

      <SlideControls>
        <PrevSlide />
        <NextSlide />
      </SlideControls>
    </Swiper>
  );
}

export default TopCarousel;
