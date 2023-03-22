import tw from 'tailwind-styled-components';

import TopCarousel from '@/components/ui/carousels/top-carousel';
import LinkCardLists from '@/components/ui/lists/link-card-list';
import ContentList from '@/components/content/content-list';
import { artistsApi, topSliderApi } from '@/api/req-api';
import { ArtistModel, TopSliderModel } from '@/types/models-type';
import { IMAGE_BASE_URL } from '@/config/setting-config';
import { FaMusic } from 'react-icons/fa';
import { LinkCardInterface } from '@/types/cards-type';
import { TopCarouselInterface } from '@/types/sliders-type';

const LatestContentGrid = tw.div`
  grid grid-cols-1 md:grid-cols-2 gap-8
  px-5 py-10
  bg-gray-100 
`;

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

      <LatestContentGrid>
        <ContentList
          items={linkCardItems}
          title="موزیک های اخیر"
          icon={FaMusic}
        />
        <ContentList
          items={linkCardItems}
          title="موزیک های اخیر"
          icon={FaMusic}
        />
      </LatestContentGrid>

      <LinkCardLists
        items={[...linkCardItems, ...linkCardItems, ...linkCardItems]}
        overlayCards
        bigger
      />
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
