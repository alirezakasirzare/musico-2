import tw from 'tailwind-styled-components';
import { useSwiper } from 'swiper/react';
import { FaAngleRight } from 'react-icons/fa';

import toggleSlide from './toggle-slide';

const NextSlideBtn = tw(toggleSlide)``;

function PrevSlide() {
  const swiper = useSwiper();

  return (
    <NextSlideBtn onClick={() => swiper.slidePrev()}>
      <FaAngleRight />
    </NextSlideBtn>
  );
}

export default PrevSlide;
