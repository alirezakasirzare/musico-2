import tw from 'tailwind-styled-components';

import TopCarousel from '@/components/ui/carousels/top-carousel';
import LinkCardLists from '@/components/ui/lists/link-card-list';
import ContentList from '@/components/content/content-list';
import {
  artistsApi,
  topSliderApi,
  categoryApi,
  musicApi,
  albumApi,
} from '@/api/req-api';
import {
  AlbumModel,
  ArtistModel,
  CategoryModel,
  MusicModel,
  TopSliderModel,
} from '@/types/models-type';
import { IMAGE_BASE_URL } from '@/config/setting-config';
import { FaMusic, FaImage } from 'react-icons/fa';
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
  categories: CategoryModel[];
  musics: MusicModel[];
  albums: AlbumModel[];
}

function HomePage(props: HomePageProps) {
  const { topCarousels, artists, categories, musics, albums } = props;

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

  // category items
  const categoryItems: LinkCardInterface[] = categories.map((category) => {
    const newCategory: LinkCardInterface = {
      image: `${IMAGE_BASE_URL}/${category.image}`,
      path: `/artist/${category.id}`,
      text: category.name,
    };

    return newCategory;
  });

  // musics
  const musicItems: LinkCardInterface[] = musics.map((music) => {
    const newCategory: LinkCardInterface = {
      image: `${IMAGE_BASE_URL}/${music.image}`,
      path: `/artist/${music.id}`,
      text: music.name,
    };

    return newCategory;
  });

  // albums
  const albumItems: LinkCardInterface[] = albums.map((album) => {
    const newCategory: LinkCardInterface = {
      image: `${IMAGE_BASE_URL}/${album.image}`,
      path: `/artist/${album.id}`,
      text: album.name,
    };

    return newCategory;
  });

  return (
    <>
      <TopCarousel items={carouselItems} />

      <LinkCardLists items={linkCardItems} />

      <LatestContentGrid>
        <ContentList items={musicItems} title="موزیک های اخیر" icon={FaMusic} />
        <ContentList items={albumItems} title="آلبوم های اخیر" icon={FaImage} />
      </LatestContentGrid>

      <LinkCardLists items={categoryItems} overlayCards bigger />
    </>
  );
}

export async function getStaticProps() {
  const topCarousels = await topSliderApi.getAll();

  const artists = await artistsApi.getSome(6);

  const musics = await musicApi.getAll();

  const albums = await albumApi.getAll();

  const categories = await categoryApi.getAll();

  return {
    props: {
      topCarousels,
      artists,
      categories,
      musics,
      albums,
    },
  };
}

export default HomePage;
