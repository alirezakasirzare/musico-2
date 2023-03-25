import LinkCardLists from '@/components/ui/lists/link-card-list';
import { musicApi } from '@/api/req-api';
import { LinkCardInterface } from '@/types/cards-type';
import { optionalImagePath } from '@/helpers/path-utils';
import { InferGetStaticPropsType } from 'next';

function MusicListPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { musics } = props;

  const musicsItems: LinkCardInterface[] = musics.data.map((music) => ({
    image: optionalImagePath(music.attributes.image?.data?.attributes.url),
    path: `/music/${music.id}`,
    text: music.attributes.name,
  }));

  return <LinkCardLists items={musicsItems} />;
}

export async function getStaticProps() {
  const musics = await musicApi.getAll();

  return {
    props: {
      musics,
    },
  };
}

export default MusicListPage;
