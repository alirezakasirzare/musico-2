import { ReactNode } from 'react';

import MainHeader from './main-header';
import { iranSansFont } from '@/helpers/font-utils';

interface IMainLayout {
  children: ReactNode;
}

function MainLayout(props: IMainLayout) {
  const { children } = props;

  return (
    <div className={iranSansFont.className}>
      <MainHeader />
      {children}
    </div>
  );
}

export default MainLayout;
