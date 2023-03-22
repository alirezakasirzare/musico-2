import Image from 'next/image';
import Link from 'next/link';

import tw from 'tailwind-styled-components';
import type { LinkCardInterface } from '@/types/cards-type';

const CardLink = tw(Link)`
  hover:brightness-95 
  transition-all
`;

const CardImage = tw(Image)`
  rounded-md
  w-full
`;

const CardText = tw.h3`
  text-sm text-center text-gray-400
  p-2
`;

interface LinkCardProps {
  card: LinkCardInterface;
}

function LinkCard(props: LinkCardProps) {
  const { card } = props;

  return (
    <div>
      <CardLink href={card.path}>
        <CardImage src={card.image} alt={card.text} width={400} height={400} />
        <CardText>{card.text}</CardText>
      </CardLink>
    </div>
  );
}

export default LinkCard;
