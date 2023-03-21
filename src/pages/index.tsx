import TopCarousel from '@/components/carousel/top-carousel';
import { topSliderApi } from '@/helpers/api-utils';
import { ITopCarousel } from '@/types/slider-types';

interface HomePageProps {
  carouselItems: ITopCarousel[];
}

function HomePage(props: HomePageProps) {
  const { carouselItems } = props;

  return (
    <>
      <TopCarousel items={carouselItems} />
    </>
  );
}

export async function getStaticProps() {
  const carouselItems = await topSliderApi.getAll();

  return {
    props: {
      carouselItems,
    },
  };
}

export default HomePage;
