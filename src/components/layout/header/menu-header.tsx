import Link from 'next/link';
import tw from 'tailwind-styled-components';

const MenuList = tw.ul`
  flex
  list-none
`;

const MenuListItem = tw.li`
  px-1
`;

const MenuListLink = tw(Link)`
  block
  text-gray-500 text-sm
  p-0.5
`;

function MenuHeader() {
  const menuList = [
    {
      text: 'salam 1',
      id: '/salam1',
    },
    {
      text: 'salam 2',
      id: '/salam2',
    },
    {
      text: 'salam 3',
      id: '/salam3',
    },
  ];

  return (
    <nav>
      <MenuList>
        {menuList.map((menuItem) => (
          <MenuListItem key={menuItem.id}>
            <MenuListLink href={menuItem.id}>{menuItem.text}</MenuListLink>
          </MenuListItem>
        ))}
      </MenuList>
    </nav>
  );
}

export default MenuHeader;
