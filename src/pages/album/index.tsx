import tw from 'tailwind-styled-components';

import AlbumContent from '@/components/content/album-content';
import FadeViewport from '@/components/animations/fade-viewport';
import { albumApi } from '@/api/req-api';
import { InferGetStaticPropsType } from 'next';

const Grid = tw.div`
  grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3
  p-3
`;

function AlbumListPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { albums } = props;

  return (
    <Grid>
      {albums.data.map((album) => (
        <FadeViewport key={album.id}>
          <AlbumContent album={album} />
        </FadeViewport>
      ))}
    </Grid>
  );
}

export async function getStaticProps() {
  const albums = await albumApi.getAll(['image', 'musics']);

  return {
    props: {
      albums,
    },
  };
}

export default AlbumListPage;
