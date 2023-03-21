import type { AppProps } from 'next/app';

import { iranSansFont } from '@/helpers/font-utils';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={iranSansFont.className}>
      <Component {...pageProps} />
    </div>
  );
}
