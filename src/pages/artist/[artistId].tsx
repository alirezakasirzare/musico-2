import tw from 'tailwind-styled-components';
import { GetStaticPropsContext } from 'next';
import { FaImage, FaMusic } from 'react-icons/fa';
import { ParsedUrlQuery } from 'querystring';

import HeadCard from '@/components/ui/cards/head-card';
import ContentList from '@/components/content/content-list';
import { albumApi, artistsApi, musicApi } from '@/api/req-api';
import { IMAGE_BASE_URL } from '@/config/setting-config';
import { AlbumModel, ArtistModel, MusicModel } from '@/types/models-type';
import { LinkCardInterface } from '@/types/cards-type';

const LatestContentGrid = tw.div`
  grid grid-cols-1 md:grid-cols-2 gap-8
  px-5 py-10
  bg-gray-100 
`;

interface ArtistDetailPageProps {
  artist: ArtistModel;
  musics: MusicModel[];
  albums: AlbumModel[];
}

function ArtistDetailPage(props: ArtistDetailPageProps) {
  const { artist, musics, albums } = props;

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
      <HeadCard image={IMAGE_BASE_URL + artist.image} text={artist.name} />

      <LatestContentGrid>
        <ContentList items={musicItems} title="موزیک ها" icon={FaMusic} />
        <ContentList items={albumItems} title="آلبوم ها" icon={FaImage} />
      </LatestContentGrid>
    </>
  );
}

interface Params extends ParsedUrlQuery {
  artistId: string;
}

export async function getStaticProps(context: GetStaticPropsContext<Params>) {
  const { params } = context;
  const artistId = params?.artistId || 0;

  const artist = await artistsApi.getById(artistId);

  const musics = await musicApi.getAll();

  const albums = await albumApi.getAll();

  return {
    props: {
      artist,
      musics,
      albums,
    },
  };
}

export async function getStaticPaths() {
  const artists = await artistsApi.getAll();

  const pathsArtists = artists.map((artist) => ({
    params: { artistId: artist.id.toString() },
  }));

  return {
    paths: pathsArtists,
    fallback: false,
  };
}

export default ArtistDetailPage;
