import Link from 'next/link';
import tw from 'tailwind-styled-components';
import { IconType } from 'react-icons';

import HorizentalLinkCard from '../ui/cards/horizental-link-card';
import FadeViewport from '../animations/fade-viewport';
import { LinkCardInterface } from '@/types/cards-type';

const Header = tw.header`
  flex justify-between items-center
  pb-2 mb-2
`;

const HeaderContent = tw.div`
  text-sm 
  flex justify-center items-center gap-2
  text-gray-500
`;

const CardLink = tw(Link)`
  bg-gray-500 hover:bg-gray-600 text-white
  transition-colors  
  py-1 px-2 
  text-sm 
  rounded-sm
`;

const ListItem = tw.li`
  mb-2 last:mb-0 
  h-20
`;

interface MusicPlaylistProps {
  items: LinkCardInterface[];
  title: string;
  icon: IconType;
  path?: string;
}

function ContentList(props: MusicPlaylistProps) {
  const { items, title, icon: Icon, path } = props;

  return (
    <article>
      <Header>
        <HeaderContent>
          <Icon />
          <strong>{title}</strong>
        </HeaderContent>
        {path && <CardLink href={path}>نمایش همه</CardLink>}
      </Header>

      <ul>
        {items.map((item) => (
          <ListItem key={item.text}>
            <FadeViewport>
              <HorizentalLinkCard {...item} />
            </FadeViewport>
          </ListItem>
        ))}
      </ul>
    </article>
  );
}

export default ContentList;
