import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';

import HeadCard from '@/components/ui/cards/head-card';
import MusicPlayer from '@/components/content/music-player';
import { musicApi } from '@/api/req-api';
import { IMAGE_BASE_URL } from '@/config/setting-config';
import { optionalImagePath } from '@/helpers/path-utils';

function MusicDetailPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { music } = props;

  return (
    <>
      <HeadCard
        image={optionalImagePath(
          music.data.attributes.image?.data?.attributes.url
        )}
        text={music.data.attributes.name}
      />
      <MusicPlayer
        srcAudio={
          IMAGE_BASE_URL +
          (music.data.attributes.audio?.data?.attributes.url || '')
        }
      />
    </>
  );
}

interface Params extends ParsedUrlQuery {
  musicId: string;
}

export async function getStaticProps(context: GetStaticPropsContext<Params>) {
  const { params } = context;
  const musicId = params?.musicId || 0;

  const music = await musicApi.getById(musicId);

  return {
    props: {
      music,
    },
  };
}

export async function getStaticPaths() {
  const musics = await musicApi.getAll();

  const pathsMusics = musics.data.map((music) => ({
    params: { musicId: music.id.toString() },
  }));

  return {
    paths: pathsMusics,
    fallback: false,
  };
}
export default MusicDetailPage;
