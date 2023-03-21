import Image from 'next/image';
import Link from 'next/link';
import tw from 'tailwind-styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import NextSlide from './controls/next-slide';
import PrevSlide from './controls/prev-slide';
import { ITopCarousel } from '@/types/slider-types';

const SlideControls = tw.div`
  flex justify-center items-center gap-2
  absolute right-5 bottom-5 z-10
`;

interface ITopCarouselProps {
  items: ITopCarousel[];
}

function TopCarousel(props: ITopCarouselProps) {
  const { items } = props;
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ pauseOnMouseEnter: true }}
      loop
    >
      {items.map((item) => (
        <SwiperSlide key={item.path}>
          <Link href={item.path}>
            <Image
              src={process.env.NEXT_PUBLIC_BASE_IMAGE_SRC + item.image}
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
