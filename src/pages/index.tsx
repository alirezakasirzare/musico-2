import TopCarousel from '@/components/ui/carousels/top-carousel';
import LinkCardLists from '@/components/ui/lists/link-card-list';
import { artistsApi, topSliderApi } from '@/api/req-api';
import type { ArtistModel, TopSliderModel } from '@/types/models-type';
import { LinkCardInterface } from '@/types/cards-type';
import { IMAGE_BASE_URL } from '@/config/setting-config';

interface HomePageProps {
  carouselItems: TopSliderModel[];
  artists: ArtistModel[];
}

function HomePage(props: HomePageProps) {
  const { carouselItems, artists } = props;

  const linkCardItems: LinkCardInterface[] = artists.map((artist) => {
    const newArtist: LinkCardInterface = {
      image: `${IMAGE_BASE_URL}/${artist.image}`,
      path: `/artist/${artist.id}`,
      text: artist.name,
    };

    return newArtist;
  });

  return (
    <>
      <TopCarousel items={carouselItems} />

      <LinkCardLists items={linkCardItems} />
    </>
  );
}

export async function getStaticProps() {
  const carouselItems = await topSliderApi.getAll();

  const artists = await artistsApi.getSome(4);

  return {
    props: {
      carouselItems,
      artists,
    },
  };
}

export default HomePage;
