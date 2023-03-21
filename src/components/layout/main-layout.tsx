import { ReactNode } from 'react';
import tw from 'tailwind-styled-components';

import MainHeader from './header/main-header';
import { iranSansFont } from '@/helpers/font-utils';

const MainContent = tw.main`
  mt-[47px]
`;

interface IMainLayout {
  children: ReactNode;
}

function MainLayout(props: IMainLayout) {
  const { children } = props;

  return (
    <div className={iranSansFont.className}>
      <MainHeader />
      <MainContent>{children}</MainContent>
    </div>
  );
}

export default MainLayout;
