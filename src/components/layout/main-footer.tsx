import Link from 'next/link';
import tw from 'tailwind-styled-components';

const Footer = tw.footer`
`;
const ListGrid = tw.div`
  grid grid-cols-1 sm:grid-cols-3 gap-8
  py-20 px-5
  bg-gray-100
`;

const List = tw.ul`
  flex flex-col justify-center sm:items-center gap-3
  list-inside list-[circle]
`;

const ListLink = tw(Link)`
  text-gray-500 
  hover:drop-shadow
`;

const PrivaceText = tw.div`
  p-3 
  border-t border-gray-100
  text-sm text-center text-gray-500
`;

interface listItemsInterface {
  text: string;
  path: string;
}

function MainFooter() {
  const artistItems: listItemsInterface[] = [
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

  const albumsItems: listItemsInterface[] = [
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

  const musicsItems: listItemsInterface[] = [
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

  const generateList = (listItems: listItemsInterface[]) => {
    const generatedListDom = listItems.map((item, i) => (
      <li key={i}>
        <ListLink href={item.path}>{item.text}</ListLink>
      </li>
    ));

    return generatedListDom;
  };

  return (
    <Footer>
      <ListGrid>
        <List>{generateList(artistItems)}</List>

        <List>{generateList(albumsItems)}</List>

        <List>{generateList(musicsItems)}</List>
      </ListGrid>
      <PrivaceText>
        <strong>موزیکو</strong> همراه لحظات زیبای شما | تمام حقوق محفوظ است
      </PrivaceText>
    </Footer>
  );
}

export default MainFooter;
