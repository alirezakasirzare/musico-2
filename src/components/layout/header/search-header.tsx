import tw from 'tailwind-styled-components';
import { useState } from 'react';

import Dropdown from '@/components/ui/dropdown/dropdown';
import DropdownContent from '@/components/ui/dropdown/dropdown-content';

const TextFeild = tw.input`
  border border-gray-200 rounded-sm outline-0 hover:border-gray-300 focus:border-gray-300
  bg-white
  py-1 px-2
  text-sm
  w-full
`;

function SearchHeader() {
  const [show, setShow] = useState(false);

  const openDropdown = () => setShow(true);
  const closeDropdown = () => setShow(false);

  return (
    <Dropdown>
      <TextFeild
        placeholder="جستجو ..."
        onFocus={openDropdown}
        onBlur={closeDropdown}
      />
      <DropdownContent show={show}>salam</DropdownContent>
    </Dropdown>
  );
}

export default SearchHeader;
