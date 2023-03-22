import tw from 'tailwind-styled-components';

import LinkCard from '../cards/link-card';
import { LinkCardInterface } from '@/types/cards-type';

const List = tw.ul`
  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5
  p-3
`;

interface LinkCardListsProps {
  items: LinkCardInterface[];
}

function LinkCardLists(props: LinkCardListsProps) {
  const { items } = props;

  return (
    <List>
      {items.map((item) => (
        <li key={item.text}>
          <LinkCard card={item} />
        </li>
      ))}
    </List>
  );
}

export default LinkCardLists;
