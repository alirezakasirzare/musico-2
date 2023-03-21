import Link from 'next/link';
import tw from 'tailwind-styled-components';

import MenuHeader from './menu-header';
import SearchHeader from './search-header';

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
  font-bold
  transition-colors
  text-gray-500 hover:text-gray-600 text-lg
`;

function MainHeader() {
  return (
    <Header>
      <HeaderContent>
        <Link href="/">
          <HeaderTitle>موزیکو</HeaderTitle>
        </Link>

        <SearchHeader />
      </HeaderContent>

      <MenuHeader />
    </Header>
  );
}

export default MainHeader;
