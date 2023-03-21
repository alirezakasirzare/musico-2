import Image from 'next/image';
import Link from 'next/link';

import { ILinkCard } from '@/types/cards-types';
import { IMAGE_BASE_URL } from '@/config/setting-config';

interface LinkCardProps {
  card: ILinkCard;
}

function LinkCard(props: LinkCardProps) {
  const { card } = props;

  return (
    <div>
      <Link href={`/artists/${card.id}`}>
        <Image
          src={IMAGE_BASE_URL + card.image}
          alt={card.text}
          width={200}
          height={200}
          className="rounded-full w-[200px] h-[200px] mx-auto block mb-3 border-4 border-blue-500"
        />
        <h3 className="text-center text-gray-500">{card.text}</h3>
      </Link>
    </div>
  );
}

export default LinkCard;
