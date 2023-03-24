import LinkCardLists from '@/components/ui/lists/link-card-list';
import { artistsApi } from '@/api/req-api';
import { IMAGE_BASE_URL } from '@/config/setting-config';
import { LinkCardInterface } from '@/types/cards-type';
import { ArtistModel } from '@/types/models-type';

interface ArtistListPageProps {
  artists: ArtistModel[];
}

function ArtistListPage(props: ArtistListPageProps) {
  const { artists } = props;

  const artistsItems: LinkCardInterface[] = artists.map((artist) => ({
    image: IMAGE_BASE_URL + artist.image,
    path: `/artist/${artist.id}`,
    text: artist.name,
  }));

  return <LinkCardLists items={artistsItems} />;
}

export async function getStaticProps() {
  const artists = await artistsApi.getAll();

  return {
    props: {
      artists,
    },
  };
}

export default ArtistListPage;
