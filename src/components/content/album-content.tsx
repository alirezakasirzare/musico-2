import Link from 'next/link';
import Image from 'next/image';
import tw from 'tailwind-styled-components';

import { IMAGE_BASE_URL } from '@/config/setting-config';
import MusicListGroup from './music-list-group';
import { AlbumModel, MusicModel } from '@/types/models-type';
import { optionalImagePath } from '@/helpers/path-utils';
import {
  ApiResult,
  BaseFindManyResults,
  BaseFindOneResult,
} from '@/types/axios-type';

const Card = tw.div`
  flex flex-col-reverse md:flex-row justify-between
  bg-gray-100
  rounded-sm overflow-hidden
`;

const CardContent = tw.div`
  flex flex-col justify-between gap-4
  p-3 w-full
  text-gray-500
`;

const CardImage = tw(Image)`
  h-56
  w-auto
`;

interface ContentListItemCardProps {
  album: ApiResult<AlbumModel>;
}

function AlbumContent(props: ContentListItemCardProps) {
  const { album } = props;

  return (
    <Card>
      <CardContent>
        <strong className="block text-center">{album.attributes.name}</strong>
        <MusicListGroup
          items={album.attributes.musics?.data}
          albumId={album.id}
        />
      </CardContent>
      <CardImage
        src={optionalImagePath(album.attributes.image?.data?.attributes.url)}
        alt={album.attributes.name}
        width={500}
        height={500}
      />
    </Card>
  );
}

export default AlbumContent;
