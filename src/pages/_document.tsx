import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head />
      <body className="bg-gray-50">
        <div id="modal-container"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
