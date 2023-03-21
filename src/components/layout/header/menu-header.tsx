import Link from 'next/link';
import tw from 'tailwind-styled-components';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Menu = tw.nav`
  hidden sm:block
`;

const MenuList = tw.ul`
  flex
  list-none
`;

const MenuListItem = tw.li`
  px-1
`;

const MenuListLink = tw(Link)`
  block
  relative
  text-gray-500 text-sm
  p-0.5
`;

const Line = motion(tw.div`
    absolute left-0 -bottom-1
    w-full
    h-0.5
   bg-gray-300
`);

function MenuHeader() {
  const [menuList, setMenuList] = useState<
    { text: string; id: string; hovered: boolean }[]
  >([
    {
      text: 'هنرمندان',
      id: '/salam1',
      hovered: false,
    },
    {
      text: 'آلبوم ها',
      id: '/salam2',
      hovered: false,
    },
    {
      text: 'پلی لیست ها',
      id: '/salam3',
      hovered: false,
    },
  ]);

  const hoverMenuItem = (id: string) => {
    setMenuList((prevData) =>
      prevData.map((item) => ({
        ...item,
        hovered: item.id === id,
      }))
    );
  };

  const unHoveredMenu = () => {
    setMenuList((prevData) =>
      prevData.map((item) => ({
        ...item,
        hovered: false,
      }))
    );
  };

  return (
    <Menu>
      <MenuList onMouseLeave={unHoveredMenu}>
        {menuList.map((menuItem) => (
          <MenuListItem key={menuItem.id}>
            <MenuListLink
              href={menuItem.id}
              onMouseEnter={() => hoverMenuItem(menuItem.id)}
            >
              {menuItem.text}
              {menuItem.hovered && <Line layoutId="underline" />}
            </MenuListLink>
          </MenuListItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default MenuHeader;
