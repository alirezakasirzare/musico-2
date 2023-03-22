import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';

const TextFeild = motion(tw.input`
  border border-gray-200 rounded-sm outline-0 hover:border-gray-300 focus:border-gray-300
  bg-white
  py-1 px-2
  text-sm
`);

function SearchHeader() {
  return <TextFeild placeholder="جستجو ..." whileFocus={{ width: '100%' }} />;
}

export default SearchHeader;
