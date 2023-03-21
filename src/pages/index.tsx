import tw from 'tailwind-styled-components';

const PageTitle = tw.div`
  bg-blue-500 text-white
  p-3 m-3
  rounded-md
  text-center 
  font-bold font-xl
`;

function HomePage() {
  return <PageTitle>صفحه خانه</PageTitle>;
}

export default HomePage;
