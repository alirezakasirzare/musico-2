import Link from 'next/link';
import tw from 'tailwind-styled-components';
import { useState } from 'react';

import MenuHeader from './menu-header';
import SearchHeader from './search-header';
import MobileMenu from './mobile-menu';
import { FaBars } from 'react-icons/fa';

const Header = tw.header`
  flex justify-between items-center
  border-b border-gray-100
  bg-gray-50
  fixed top-0 left-0
  w-full p-2
`;

const HeaderContent = tw.div`
  flex gap-3 justify-between sm:justify-start items-center
  w-full sm:w-1/2
`;

const HeaderTitle = tw.h1`
  flex items-center gap-1
  font-bold
  transition-colors
  text-gray-500 hover:text-gray-600 text-lg
`;

const MobileMenuButtuon = tw.button`
  sm:hidden
`;

function MainHeader() {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const openMobileMenu = () => setActiveMobileMenu(true);
  const closeMobileMenu = () => setActiveMobileMenu(false);

  return (
    <>
      <Header>
        <HeaderContent>
          <Link href="/">
            <HeaderTitle>
              <MobileMenuButtuon onClick={openMobileMenu}>
                <FaBars />
              </MobileMenuButtuon>
              موزیکو
            </HeaderTitle>
          </Link>

          <SearchHeader />
        </HeaderContent>

        <MenuHeader />
      </Header>

      <MobileMenu active={activeMobileMenu} onClose={closeMobileMenu} />
    </>
  );
}

export default MainHeader;
