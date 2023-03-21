import tw from 'tailwind-styled-components';

const TextFeild = tw.input`
  border border-gray-200 rounded outline-0 focus:border-gray-300
  bg-white
  py-1 px-2
  text-sm
`;
function SearchHeader() {
  return <TextFeild />;
}

export default SearchHeader;
