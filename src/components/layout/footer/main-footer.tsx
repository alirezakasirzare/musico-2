import tw from 'tailwind-styled-components';

import PrivaceText from './privace-text';
import FooterList from './footer-list';
import { ListFooterItemsInterface } from '@/types/layout';
import { useEffect, useState } from 'react';
import { footerApi } from '@/api/req-api';
import { BaseFindOneResult } from '@/types/axios-type';
import { FooterModel } from '@/types/models-type';

const Footer = tw.footer`
  border-t border-gray-200
`;

const ListGrid = tw.div`
  grid grid-cols-1 sm:grid-cols-3 gap-8
  py-20 px-5
  bg-gray-100
`;

function MainFooter() {
  const [data, setData] = useState<BaseFindOneResult<FooterModel>>();

  useEffect(() => {
    footerApi.getAll().then((newData) => {
      setData(newData);
      console.log(newData);
    });
  }, []);

  const artistItems: ListFooterItemsInterface[] =
    data?.data?.attributes?.artists?.data.map((item) => ({
      path: `/artist/${item.id}`,
      text: item.attributes.name,
    })) || [];

  const albumItems: ListFooterItemsInterface[] =
    data?.data?.attributes?.albums?.data.map((item) => ({
      path: `/album/${item.id}`,
      text: item.attributes.name,
    })) || [];

  const musicItems: ListFooterItemsInterface[] =
    data?.data?.attributes?.musics?.data.map((item) => ({
      path: `/music/${item.id}`,
      text: item.attributes.name,
    })) || [];

  return (
    <Footer>
      <ListGrid>
        <FooterList items={artistItems} title="هنرمندان منتخب" />

        <FooterList items={albumItems} title="آلبوم های منتخب" />

        <FooterList items={musicItems} title="آهنگ های منتخب" />
      </ListGrid>
      <PrivaceText />
    </Footer>
  );
}

export default MainFooter;
