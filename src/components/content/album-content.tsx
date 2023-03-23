import Link from 'next/link';
import Image from 'next/image';
import tw from 'tailwind-styled-components';

import { IMAGE_BASE_URL } from '@/config/setting-config';
import MusicListGroup from './music-list-group';
import { AlbumModel, MusicModel } from '@/types/models-type';

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
  album: AlbumModel;
  musics: MusicModel[];
}

function AlbumContent(props: ContentListItemCardProps) {
  const { album, musics } = props;

  return (
    <Card>
      <CardContent>
        <strong className="block text-center">{album.name}</strong>
        <MusicListGroup items={musics} albumId={album.id} />
      </CardContent>
      <CardImage
        src={IMAGE_BASE_URL + album.image}
        alt={album.name}
        width={500}
        height={500}
      />
    </Card>
  );
}

export default AlbumContent;
