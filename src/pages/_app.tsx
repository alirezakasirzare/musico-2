import Head from 'next/head';
import { MotionConfig } from 'framer-motion';
import { IconContext } from 'react-icons';
import type { AppProps } from 'next/app';

import MainLayout from '@/components/layout/main-layout';

import '@/assets/styles/globals.css';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <MotionConfig transition={{ duration: 0.5, type: 'keyframes' }}>
      <IconContext.Provider value={{ className: 'text-sm' }}>
        <MainLayout>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
            <title>موزیکو</title>
          </Head>
          <Component {...pageProps} />
        </MainLayout>
      </IconContext.Provider>
    </MotionConfig>
  );
}
