import Image from 'next/image';
import tw from 'tailwind-styled-components';

const Card = tw.div`
  flex flex-col-reverse sm:flex-row justify-between
  p-3
`;

const CardText = tw.h3`
  flex items-center justify-center
  p-3
  w-full
  font-bold
  text-xl text-gray-500
`;

const CardImage = tw(Image)`
  w-full sm:w-4/12
  h-auto
`;

interface HeadCardProps {
  text: string;
  image: string;
}

function HeadCard(props: HeadCardProps) {
  const { text, image } = props;

  return (
    <Card>
      <CardText>{text}</CardText>
      <CardImage src={image} alt={text} width={600} height={600} />
    </Card>
  );
}

export default HeadCard;
