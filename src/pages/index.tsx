import TopCarousel from '@/components/ui/carousels/top-carousel';
import LinkCardLists from '@/components/ui/lists/link-card-list';
import { artistsApi, topSliderApi } from '@/api/req-api';
import type { ArtistModel, TopSliderModel } from '@/types/models-type';
import { LinkCardInterface } from '@/types/cards-type';
import { IMAGE_BASE_URL } from '@/config/setting-config';
import { TopCarouselInterface } from '@/types/sliders-type';

interface HomePageProps {
  topCarousels: TopSliderModel[];
  artists: ArtistModel[];
}

function HomePage(props: HomePageProps) {
  const { topCarousels, artists } = props;

  // carousel items
  const carouselItems: TopCarouselInterface[] = topCarousels.map((carousel) => {
    const newCarousel: LinkCardInterface = {
      image: IMAGE_BASE_URL + carousel.image,
      path: carousel.path,
      text: carousel.text,
    };

    return newCarousel;
  });

  // lnik card items
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
  const topCarousels = await topSliderApi.getAll();

  const artists = await artistsApi.getSome(6);

  return {
    props: {
      topCarousels,
      artists,
    },
  };
}

export default HomePage;
