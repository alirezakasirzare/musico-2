import tw from 'tailwind-styled-components';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';

import HeadCard from '@/components/ui/cards/head-card';
import SimpleCard from '@/components/ui/cards/simple-card';
import { albumApi, musicApi } from '@/api/req-api';
import { IMAGE_BASE_URL } from '@/config/setting-config';
import { AlbumModel, MusicModel } from '@/types/models-type';
import FadeViewport from '@/components/animations/fade-viewport';
import { optionalImagePath } from '@/helpers/path-utils';

const Grid = tw.div`
  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2
  p-3
`;

function AlbumDetailPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { album, musics } = props;

  return (
    <>
      <HeadCard
        text={album.data.attributes.name}
        image={optionalImagePath(
          album.data.attributes.image?.data?.attributes.url
        )}
      />

      <Grid>
        {musics?.data.map((music) => (
          <FadeViewport key={music.id}>
            <SimpleCard
              text={music.attributes.name}
              path={`/music/${music.id}`}
            ></SimpleCard>
          </FadeViewport>
        ))}
      </Grid>
    </>
  );
}

interface Params extends ParsedUrlQuery {
  albumId: string;
}

export async function getStaticProps(context: GetStaticPropsContext<Params>) {
  const { params } = context;

  const albumId = params?.albumId || 0;

  const album = await albumApi.getById(albumId, ['image', 'musics']);

  const musics = album.data.attributes.musics;

  return {
    props: {
      album,
      musics,
    },
  };
}

export async function getStaticPaths() {
  const albums = await albumApi.getAll([]);

  const pathsAlbums = albums.data.map((album) => ({
    params: { albumId: album.id.toString() },
  }));

  return {
    paths: pathsAlbums,
    fallback: false,
  };
}

export default AlbumDetailPage;
