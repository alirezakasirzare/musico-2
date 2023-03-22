import Link from 'next/link';
import Image from 'next/image';
import tw from 'tailwind-styled-components';

import { LinkCardInterface } from '@/types/cards-type';

const CardLink = tw(Link)`
  flex justify-between items-center
  h-full
  transition-colors
  bg-gray-50 hover:bg-gray-200
  rounded-sm
  overflow-hidden
`;

const CardText = tw.span`
  px-4
  text-sm text-gray-500
`;

const CardImage = tw(Image)`
  h-full w-auto
`;

function HorizentalLinkCard(props: LinkCardInterface) {
  const { path, text, image } = props;

  return (
    <CardLink href={path}>
      <CardText>{text}</CardText>
      <CardImage src={image} alt={text} width={300} height={300} />
    </CardLink>
  );
}

export default HorizentalLinkCard;
