import Link from 'next/link';
import tw from 'tailwind-styled-components';

import { ListFooterItemsInterface } from '@/types/layout';

const List = tw.ul`
  flex flex-col sm:items-center gap-3
  list-inside list-[circle]
`;

const ListLink = tw(Link)`
  w-full block
  transition-colors
  text-gray-500 bg-white hover:bg-gray-200
  py-1 px-2
  text-sm
  rounded-sm
`;

interface FooterListInterface {
  items: ListFooterItemsInterface[];
  title: string;
}

function FooterList(props: FooterListInterface) {
  const { items, title } = props;

  return (
    <List>
      <li className="w-full block text-sm text-gray-500 font-bold">{title}</li>
      {items.map((item, i) => (
        <li key={i} className="w-full block">
          <ListLink href={item.path}>{item.text}</ListLink>
        </li>
      ))}
    </List>
  );
}

export default FooterList;
