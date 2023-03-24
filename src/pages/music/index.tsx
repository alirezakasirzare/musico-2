import LinkCardLists from '@/components/ui/lists/link-card-list';
import { musicApi } from '@/api/req-api';
import { MusicModel } from '@/types/models-type';
import { LinkCardInterface } from '@/types/cards-type';
import { IMAGE_BASE_URL } from '@/config/setting-config';

interface MusicListPageProps {
  musics: MusicModel[];
}

function MusicListPage(props: MusicListPageProps) {
  const { musics } = props;

  const musicsItems: LinkCardInterface[] = musics.map((music) => ({
    image: IMAGE_BASE_URL + music.image,
    path: `/music/${music.id}`,
    text: music.name,
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
