import tw from 'tailwind-styled-components';

const TextFeild = tw.input`
  border border-gray-200 rounded outline-0 hover:border-gray-300 focus:border-gray-300
  bg-white
  py-1 px-2 focus:w-full
  text-sm
  transition-colors
`;

function SearchHeader() {
  return <TextFeild placeholder="جستجو ..." />;
}

export default SearchHeader;
