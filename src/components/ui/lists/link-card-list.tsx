import tw from 'tailwind-styled-components';

import LinkCard from '../cards/link-card';
import { ILinkCard } from '@/types/cards-types';

const List = tw.ul`
  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5
  p-3
`;

interface LinkCardListsProps {
  items: ILinkCard[];
}

function LinkCardLists(props: LinkCardListsProps) {
  const { items } = props;

  return (
    <List>
      {items.map((item) => (
        <li key={item.id}>
          <LinkCard card={item} />
        </li>
      ))}
    </List>
  );
}

export default LinkCardLists;
