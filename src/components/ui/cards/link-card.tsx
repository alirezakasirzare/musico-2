import Image from 'next/image';
import Link from 'next/link';

import tw from 'tailwind-styled-components';
import type { LinkCardInterface } from '@/types/cards-type';

const CardLink = tw(Link)`
  block
  relative
  group
  rounded-sm
  overflow-hidden
`;

const CardImage = tw(Image)<{ $overlay: boolean }>`
  w-full
  transition-all
  rounded-sm
  group-hover:brightness-90
  ${({ $overlay }) => ($overlay ? '' : '')}
`;

const CardText = tw.h3<{ $overlay: boolean }>`
  text-sm text-center text-gray-400
  p-2
  ${({ $overlay }) =>
    $overlay &&
    `
      absolute left-0 bottom-0
      w-full
      p-4
      bg-black/30
      text-md lg:text-xl text-gray-100
      backdrop-blur
    `}
`;

interface LinkCardProps {
  card: LinkCardInterface;
  overlay?: boolean;
}

function LinkCard(props: LinkCardProps) {
  const { card, overlay } = props;

  return (
    <div>
      <CardLink href={card.path}>
        <CardImage
          src={card.image}
          alt={card.text}
          width={400}
          height={400}
          $overlay={!!overlay}
        />
        <CardText $overlay={!!overlay}>{card.text}</CardText>
      </CardLink>
    </div>
  );
}

export default LinkCard;
