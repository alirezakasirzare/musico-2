import Link from 'next/link';
import tw from 'tailwind-styled-components';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Menu = tw.nav<{ $vertical: boolean }>`
  ${({ $vertical }) => !$vertical && 'hidden sm:block'}
`;

const MenuList = tw.ul<{ $vertical: boolean }>`
  flex
  list-none
  ${({ $vertical }) => ($vertical ? 'flex-col' : 'flex-row')}
`;

const MenuListItem = tw.li<{ $vertical: boolean }>`
  px-1
  ${({ $vertical }) => $vertical && 'py-0.5'}
`;

const MenuListLink = tw(Link)`
  block
  relative
  text-gray-500 text-sm
  p-0.5
`;

const Line = motion(tw.div<{ $vertical: boolean }>`
    absolute left-0 -bottom-1
   bg-gray-300
  ${({ $vertical }) => ($vertical ? 'w-0.5 h-full' : 'w-full h-0.5')}
`);

interface MenuHeaderProps {
  vertical?: boolean;
}

function MenuHeader(props: MenuHeaderProps) {
  const { vertical } = props;

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
    <Menu $vertical={!!vertical}>
      <MenuList onMouseLeave={unHoveredMenu} $vertical={!!vertical}>
        {menuList.map((menuItem) => (
          <MenuListItem key={menuItem.id} $vertical={!!vertical}>
            <MenuListLink
              href={menuItem.id}
              onMouseEnter={() => hoverMenuItem(menuItem.id)}
            >
              {menuItem.text}
              {menuItem.hovered && (
                <Line layoutId="underline" $vertical={!!vertical} />
              )}
            </MenuListLink>
          </MenuListItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default MenuHeader;
