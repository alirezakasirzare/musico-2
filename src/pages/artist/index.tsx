import { InferGetStaticPropsType } from 'next';

import LinkCardLists from '@/components/ui/lists/link-card-list';
import { artistsApi } from '@/api/req-api';
import { LinkCardInterface } from '@/types/cards-type';
import { optionalImagePath } from '@/helpers/path-utils';

function ArtistListPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { artists } = props;

  const artistsItems: LinkCardInterface[] = artists.data.map((artist) => ({
    image: optionalImagePath(artist.attributes?.image?.data?.attributes.url),
    path: `/artist/${artist.id}`,
    text: artist.attributes.name,
  }));

  console.log('artistsItems', artistsItems);

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
