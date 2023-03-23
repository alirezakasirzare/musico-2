import tw from 'tailwind-styled-components';

import PrivaceText from './privace-text';
import FooterList from './FooterList';
import { ListFooterItemsInterface } from '@/types/layout';

const ListGrid = tw.div`
  grid grid-cols-1 sm:grid-cols-3 gap-8
  py-20 px-5
  bg-gray-100
`;

function MainFooter() {
  const artistItems: ListFooterItemsInterface[] = [
    {
      text: 'salam',
      path: '/salam',
    },
    {
      text: 'salam',
      path: '/salam',
    },
    {
      text: 'salam',
      path: '/salam',
    },
  ];

  const albumsItems: ListFooterItemsInterface[] = [
    {
      text: 'salam',
      path: '/salam',
    },
    {
      text: 'salam',
      path: '/salam',
    },
    {
      text: 'salam',
      path: '/salam',
    },
  ];

  const musicsItems: ListFooterItemsInterface[] = [
    {
      text: 'salam',
      path: '/salam',
    },
    {
      text: 'salam',
      path: '/salam',
    },
    {
      text: 'salam',
      path: '/salam',
    },
  ];

  return (
    <footer>
      <ListGrid>
        <FooterList items={artistItems} />

        <FooterList items={albumsItems} />

        <FooterList items={musicsItems} />
      </ListGrid>
      <PrivaceText />
    </footer>
  );
}

export default MainFooter;
