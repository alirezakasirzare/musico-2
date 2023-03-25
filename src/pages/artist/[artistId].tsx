import tw from 'tailwind-styled-components';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { FaImage, FaMusic } from 'react-icons/fa';
import { ParsedUrlQuery } from 'querystring';

import HeadCard from '@/components/ui/cards/head-card';
import ContentList from '@/components/content/content-list';
import { albumApi, artistsApi, musicApi } from '@/api/req-api';
import { IMAGE_BASE_URL } from '@/config/setting-config';
import { LinkCardInterface } from '@/types/cards-type';
import { optionalImagePath } from '@/helpers/path-utils';

const LatestContentGrid = tw.div`
  grid grid-cols-1 md:grid-cols-2 gap-8
  px-5 py-10
  bg-gray-100 
`;

function ArtistDetailPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { artist, musics, albums } = props;

  // musics
  const musicItems: LinkCardInterface[] =
    musics?.data.map((music) => {
      const newCategory: LinkCardInterface = {
        image: optionalImagePath(music.attributes.image?.data?.attributes.url),
        path: `/artist/${music.id}`,
        text: music.attributes.name,
      };

      return newCategory;
    }) || [];

  // albums
  const albumItems: LinkCardInterface[] =
    albums?.data.map((album) => {
      const newCategory: LinkCardInterface = {
        image: optionalImagePath(album.attributes.image?.data?.attributes.url),
        path: `/artist/${album.id}`,
        text: album.attributes.name,
      };

      return newCategory;
    }) || [];

  return (
    <>
      <HeadCard
        image={optionalImagePath(
          artist.data.attributes.image?.data?.attributes.url
        )}
        text={artist.data.attributes.name}
      />

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

  const artist = await artistsApi.getById(artistId, [
    'albums',
    'image',
    'musics',
  ]);

  const albums = artist.data.attributes.albums;

  const musics = artist.data.attributes.musics;

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

  const pathsArtists = artists.data.map((artist) => ({
    params: { artistId: artist.id.toString() },
  }));

  return {
    paths: pathsArtists,
    fallback: false,
  };
}

export default ArtistDetailPage;
