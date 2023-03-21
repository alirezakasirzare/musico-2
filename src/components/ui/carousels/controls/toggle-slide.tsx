import tw from 'tailwind-styled-components';
import { useSwiper } from 'swiper/react';

const toggleSlide = tw.button`
  flex justify-center items-center
  w-7 h-7
  transition-colors
  bg-white hover:bg-gray-100 text-gray-400
  border border-gray-400 rounded-full
`;

export default toggleSlide;
