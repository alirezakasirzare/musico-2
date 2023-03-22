import Image from 'next/image';
import Link from 'next/link';

import tw from 'tailwind-styled-components';
import type { LinkCardInterface } from '@/types/cards-type';

const CardLink = tw(Link)`
  relative
  group
`;

const CardImage = tw(Image)<{ $overlay: boolean }>`
  rounded-sm
  w-full
  transition-all
  ${({ $overlay }) =>
    $overlay
      ? 'brightness-50 group-hover:brightness-75'
      : 'group-hover:brightness-75'}
`;

const CardText = tw.h3<{ $overlay: boolean }>`
  text-sm text-center text-gray-400
  p-2
  ${({ $overlay }) =>
    $overlay &&
    `
      flex items-end
      absolute left-0 top-0
      w-full h-full
      p-4
      text-md lg:text-xl text-white font-bold
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
