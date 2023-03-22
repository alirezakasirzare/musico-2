import tw from 'tailwind-styled-components';
import { IconType } from 'react-icons';

import HorizentalLinkCard from '../ui/cards/horizental-link-card';
import FadeViewport from '../animations/fade-viewport';
import { LinkCardInterface } from '@/types/cards-type';

const Header = tw.header`
  flex justify-between items-center
  pb-2 mb-2
`;

interface MusicPlaylistProps {
  items: LinkCardInterface[];
  title: string;
  icon: IconType;
}

function ContentList(props: MusicPlaylistProps) {
  const { items, title, icon: Icon } = props;

  return (
    <article className="">
      <Header>
        <div className="text-sm flex justify-center items-center gap-2 text-gray-500">
          <Icon />
          <strong>{title}</strong>
        </div>
        <button className="bg-gray-500 hover:bg-gray-600 transition-colors text-white py-1 px-2 text-sm rounded-sm">
          نمایش همه
        </button>
      </Header>

      <ul>
        {items.map((item) => (
          <li key={item.text} className="mb-2 last:mb-0 h-20">
            <FadeViewport>
              <HorizentalLinkCard {...item} />
            </FadeViewport>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ContentList;
