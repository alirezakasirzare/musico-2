import tw from 'tailwind-styled-components';

import LinkCard from '../cards/link-card';
import FadeViewport from '@/components/animations/fade-viewport';
import { LinkCardInterface } from '@/types/cards-type';

const List = tw.ul<{ $bigger: boolean }>`
  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5
  ${({ $bigger }) => ($bigger ? 'lg:grid-cols-4' : '')}
  p-3
`;

interface LinkCardListsProps {
  items: LinkCardInterface[];
  overlayCards?: boolean;
  bigger?: boolean;
}

function LinkCardLists(props: LinkCardListsProps) {
  const { items, overlayCards, bigger } = props;

  return (
    <List $bigger={!!bigger}>
      {items.map((item) => (
        <li key={item.text}>
          <FadeViewport>
            <LinkCard card={item} overlay={overlayCards} />
          </FadeViewport>
        </li>
      ))}
    </List>
  );
}

export default LinkCardLists;
