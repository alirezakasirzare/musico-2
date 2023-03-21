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

const ContentHeader = tw.div`
  flex gap-3 items-center
`;

const HeadTitle = tw.h1`
  font-bold
  text-gray-500
`;

function MainHeader() {
  return (
    <Header>
      <ContentHeader>
        <Link href="/">
          <HeadTitle>موزیکو</HeadTitle>
        </Link>

        <SearchHeader />
      </ContentHeader>

      <MenuHeader />
    </Header>
  );
}

export default MainHeader;
