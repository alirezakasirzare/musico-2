import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

import HeadCard from '@/components/ui/cards/head-card';
import MusicPlayer from '@/components/content/music-player';
import { musicApi } from '@/api/req-api';
import { IMAGE_BASE_URL } from '@/config/setting-config';
import { MusicModel } from '@/types/models-type';

interface MusicDetailPageProps {
  music: MusicModel;
}

function MusicDetailPage(props: MusicDetailPageProps) {
  const { music } = props;

  return (
    <>
      <HeadCard image={IMAGE_BASE_URL + music.image} text={music.name} />
      <MusicPlayer />
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

  const pathsMusics = musics.map((music) => ({
    params: { musicId: music.id.toString() },
  }));

  return {
    paths: pathsMusics,
    fallback: false,
  };
}
export default MusicDetailPage;
