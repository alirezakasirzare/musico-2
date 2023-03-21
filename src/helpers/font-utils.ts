import localFont from 'next/font/local';

export const iranSansFont = localFont({
  src: [
    {
      path: '../assets/fonts/ttf/IRANSansWeb_Bold.ttf',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ttf/IRANSansWeb_Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ttf/IRANSansWeb_Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ttf/IRANSansWeb_UltraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ttf/IRANSansWeb.ttf',
      weight: 'normal',
      style: 'normal',
    },
  ],
});
