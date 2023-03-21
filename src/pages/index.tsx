import TopCarousel from '@/components/ui/carousels/top-carousel';
import LinkCardLists from '@/components/ui/lists/link-card-list';
import { artistsApi, topSliderApi } from '@/helpers/api-utils';
import { ILinkCard } from '@/types/cards-types';
import { ITopCarousel } from '@/types/slider-types';

interface HomePageProps {
  carouselItems: ITopCarousel[];
  artists: ILinkCard[];
}

function HomePage(props: HomePageProps) {
  const { carouselItems, artists } = props;

  return (
    <>
      <TopCarousel items={carouselItems} />

      <LinkCardLists items={artists} />
    </>
  );
}

export async function getStaticProps() {
  const carouselItems = await topSliderApi.getAll();

  const artists = await artistsApi.getSome(4);
  const changedArtists: ILinkCard[] = artists.map((artist) => ({
    ...artist,
    text: artist.name,
  }));

  return {
    props: {
      carouselItems,
      artists: changedArtists,
    },
  };
}

export default HomePage;
