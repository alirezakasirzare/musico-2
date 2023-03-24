import Link from 'next/link';
import tw from 'tailwind-styled-components';

const CardLink = tw(Link)`
  block
  bg-gray-100 text-gray-500 hover:bg-gray-200
  transition-colors
  rounded-sm
  text-center
  p-2 w-full
`;

interface SimpleCardProps {
  path: string;
  text: string;
}

function SimpleCard(props: SimpleCardProps) {
  const { path, text } = props;

  return <CardLink href={path}>{text}</CardLink>;
}

export default SimpleCard;
