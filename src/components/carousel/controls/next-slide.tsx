import tw from 'tailwind-styled-components';
import { useSwiper } from 'swiper/react';
import { FaAngleLeft } from 'react-icons/fa';

import toggleSlide from './toggle-slide';

const NextSlideBtn = tw(toggleSlide)``;

function NextSlide() {
  const swiper = useSwiper();

  return (
    <NextSlideBtn onClick={() => swiper.slideNext()}>
      <FaAngleLeft />
    </NextSlideBtn>
  );
}

export default NextSlide;
