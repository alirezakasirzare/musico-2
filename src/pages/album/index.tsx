import tw from 'tailwind-styled-components';

import AlbumContent from '@/components/content/album-content';
import FadeViewport from '@/components/animations/fade-viewport';
import { albumApi } from '@/api/req-api';
import { AlbumModel, MusicModel } from '@/types/models-type';

const Grid = tw.div`
  grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3
  p-3
`;

interface AlbumListPageProps {
  albums: AlbumModel[];
}

function AlbumListPage(props: AlbumListPageProps) {
  const { albums } = props;

  const musicItems: MusicModel[] = [
    {
      name: 'salam',
      image: '/salam',
      id: 1,
      src: '/afw',
    },
    {
      name: 'salam',
      image: '/salam',
      id: 2,
      src: '/afw',
    },
    {
      name: 'salam',
      image: '/salam',
      id: 3,
      src: '/afw',
    },
  ];

  return (
    <Grid>
      {albums.map((album) => (
        <FadeViewport key={album.id}>
          <AlbumContent album={album} musics={musicItems} />
        </FadeViewport>
      ))}
    </Grid>
  );
}

export async function getStaticProps() {
  const albums = await albumApi.getAll();
  return {
    props: {
      albums,
    },
  };
}

export default AlbumListPage;
