import { ReactNode } from 'react';
import tw from 'tailwind-styled-components';

import MainHeader from './header/main-header';
import MainFooter from './main-footer';
import { iranSansFont } from '@/helpers/font-utils';

const MainContent = tw.main`
  mt-[47px]
`;

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout(props: MainLayoutProps) {
  const { children } = props;

  return (
    <div className={iranSansFont.className}>
      <MainHeader />
      <MainContent>{children}</MainContent>
      <MainFooter />
    </div>
  );
}

export default MainLayout;
