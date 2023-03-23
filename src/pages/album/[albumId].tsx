import tw from 'tailwind-styled-components';
import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

import HeadCard from '@/components/ui/cards/head-card';
import SimpleCard from '@/components/ui/cards/simple-card';
import { albumApi, musicApi } from '@/api/req-api';
import { IMAGE_BASE_URL } from '@/config/setting-config';
import { AlbumModel, MusicModel } from '@/types/models-type';

const Grid = tw.div`
  grid grid-cols-1 sm:grid-cols-3 gap-2
  p-3
`;

interface AlbumDetailPage {
  album: AlbumModel;
  musics: MusicModel[];
}

function AlbumDetailPage(props: AlbumDetailPage) {
  const { album, musics } = props;

  return (
    <>
      <HeadCard text={album.name} image={IMAGE_BASE_URL + album.image} />

      <Grid>
        {musics.map((music) => (
          <SimpleCard
            text={music.name}
            path={`/music/${music.id}`}
            key={music.id}
          ></SimpleCard>
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

  const musics = await musicApi.getAll();

  const album = await albumApi.getOne(albumId);
  return {
    props: {
      album,
      musics,
    },
  };
}

export async function getStaticPaths() {
  const albums = await albumApi.getAll();

  const pathsAlbums = albums.map((album) => ({
    params: { albumId: album.id.toString() },
  }));

  return {
    paths: pathsAlbums,
    fallback: false,
  };
}

export default AlbumDetailPage;
