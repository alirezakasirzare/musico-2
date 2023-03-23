import Link from 'next/link';
import tw from 'tailwind-styled-components';

import { ListFooterItemsInterface } from '@/types/layout';

const List = tw.ul`
  flex flex-col justify-center sm:items-center gap-3
  list-inside list-[circle]
`;

const ListLink = tw(Link)`
  text-gray-500 
  hover:drop-shadow
`;

interface FooterListInterface {
  items: ListFooterItemsInterface[];
}

function FooterList(props: FooterListInterface) {
  const { items } = props;

  return (
    <List>
      {items.map((item, i) => (
        <li key={i}>
          <ListLink href={item.path}>{item.text}</ListLink>
        </li>
      ))}
    </List>
  );
}

export default FooterList;
