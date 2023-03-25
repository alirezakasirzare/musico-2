import tw from 'tailwind-styled-components';

import TopCarousel from '@/components/ui/carousels/top-carousel';
import LinkCardLists from '@/components/ui/lists/link-card-list';
import ContentList from '@/components/content/content-list';
import {
  artistsApi,
  categoryApi,
  musicApi,
  albumApi,
  SliderApi,
} from '@/api/req-api';

import { FaMusic, FaImage } from 'react-icons/fa';
import { LinkCardInterface } from '@/types/cards-type';
import { TopCarouselInterface } from '@/types/sliders-type';
import { InferGetStaticPropsType } from 'next';
import { optionalImagePath } from '@/helpers/path-utils';

const LatestContentGrid = tw.div`
  grid grid-cols-1 md:grid-cols-2 gap-8
  px-5 py-10
  bg-gray-100 
`;

function HomePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { slider, artists, musics, albums, categories } = props;

  // carousel items
  const carouselItems: TopCarouselInterface[] =
    slider?.data?.attributes?.musics?.data?.map((music) => {
      const newCarousel: LinkCardInterface = {
        image: optionalImagePath(
          music.attributes.slider_image?.data?.attributes?.url
        ),
        path: `/music/${music.id}`,
        text: music.attributes.name,
      };

      return newCarousel;
    }) || [];

  // artist items
  const artistItems: LinkCardInterface[] = artists.data.map((artist) => {
    const newArtist: LinkCardInterface = {
      image: optionalImagePath(artist.attributes.image?.data?.attributes.url),
      path: `/artist/${artist.id}`,
      text: artist.attributes.name,
    };

    return newArtist;
  });

  // category items
  const categoryItems: LinkCardInterface[] = categories.data.map((category) => {
    const newCategory: LinkCardInterface = {
      image: optionalImagePath(category.attributes.image?.data?.attributes.url),
      path: `/category/${category.id}`,
      text: category.attributes.name,
    };

    return newCategory;
  });

  // musics
  const musicItems: LinkCardInterface[] = musics.data.map((music) => {
    const newMusic: LinkCardInterface = {
      image: optionalImagePath(music.attributes.image?.data?.attributes.url),
      path: `/artist/${music.id}`,
      text: music.attributes.name,
    };

    return newMusic;
  });

  // albums
  const albumItems: LinkCardInterface[] = albums.data.map((album) => {
    const newAlbum: LinkCardInterface = {
      image: optionalImagePath(album.attributes.image?.data?.attributes.url),
      path: `/artist/${album.id}`,
      text: album.attributes.name,
    };

    return newAlbum;
  });

  return (
    <>
      <TopCarousel items={carouselItems} />

      <LinkCardLists items={artistItems} />

      <LatestContentGrid>
        <ContentList
          items={musicItems}
          title="موزیک های اخیر"
          icon={FaMusic}
          path="/music"
        />
        <ContentList
          items={albumItems}
          title="آلبوم های اخیر"
          icon={FaImage}
          path="/album"
        />
      </LatestContentGrid>

      <LinkCardLists items={categoryItems} overlayCards bigger />
    </>
  );
}

export async function getStaticProps() {
  const slider = await SliderApi.get();

  const artists = await artistsApi.getSome(6);

  const musics = await musicApi.getSome(10);

  const albums = await albumApi.getSome(10);

  const categories = await categoryApi.getAll();

  return {
    props: {
      slider,
      artists,
      categories,
      musics,
      albums,
    },
  };
}

export default HomePage;
