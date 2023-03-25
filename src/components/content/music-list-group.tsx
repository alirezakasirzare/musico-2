import Link from 'next/link';
import tw from 'tailwind-styled-components';

import { MusicModel } from '@/types/models-type';
import { ApiResult } from '@/types/axios-type';

const List = tw.ul`
  flex flex-col gap-1
  w-full
`;
const ListItem = tw.li`
  w-full
`;
const ListLink = tw(Link)<{ $dark?: boolean }>`
  border rounded-sm 
  p-1 w-full
  text-center
  block 
  transition-colors
  ${({ $dark }) =>
    $dark ? 'bg-gray-200 hover:bg-gray-300' : 'hover:bg-gray-200'}
`;

interface MusicListGroupProps {
  items: ApiResult<MusicModel>[] | undefined;
  albumId: number;
}
function MusicListGroup(props: MusicListGroupProps) {
  const { items, albumId } = props;

  return (
    <List>
      {items?.map((item) => (
        <ListItem key={item.id}>
          <ListLink href={`/music/${item.id}`}>{item.attributes.name}</ListLink>
        </ListItem>
      ))}
      <ListItem>
        <ListLink href={`/album/${albumId}`} $dark>
          نمایش آلبوم
        </ListLink>
      </ListItem>
    </List>
  );
}

export default MusicListGroup;
