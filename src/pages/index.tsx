import TopCarousel from '@/components/carousel/top-carousel';
import { ITopCarousel } from '@/types/slider-types';

function HomePage() {
  const carouselItems: ITopCarousel[] = [
    {
      id: '/sldie1',
      image: 'http://localhost:8080/slide1.jpg',
      text: 'slide 1',
    },
    {
      id: '/sldie2',
      image: 'http://localhost:8080/slide2.jpg',
      text: 'slide 2',
    },
    {
      id: '/sldie3',
      image: 'http://localhost:8080/slide3.jpg',
      text: 'slide 3',
    },
    {
      id: '/sldie4',
      image: 'http://localhost:8080/slide4.jpg',
      text: 'slide 4',
    },
  ];

  return (
    <>
      <TopCarousel items={carouselItems} />
    </>
  );
}

export default HomePage;
