import Link from 'next/link';
import tw from 'tailwind-styled-components';
import { useState, ChangeEvent, useEffect } from 'react';

import Dropdown from '@/components/ui/dropdown/dropdown';
import DropdownContent from '@/components/ui/dropdown/dropdown-content';
import { searchApi } from '@/api/req-api';
import { ArtistModel } from '@/types/models-type';

const TextFeild = tw.input`
  border border-gray-200 rounded-sm outline-0 hover:border-gray-300 focus:border-gray-300
  bg-white
  py-1 px-2
  text-sm
  w-full
`;

const List = tw.ul`  
  block
  w-full
`;
const ListItem = tw.li`
  mb-1
  last:mb-0
  block
  w-full
`;
const ListLink = tw(Link)`
  w-full
  block
  transition-colors
  bg-gray-100 text-gray-500 hover:bg-gray-200
  rounded-sm
  text-sm
  py-1 px-3
`;

const NotfoundText = tw.span`
  block
  text-sm
  text-gray-400
`;

function SearchHeader() {
  // search input
  const [text, setText] = useState('');
  const [typing, setTyping] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState<any>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
  };

  useEffect(() => {
    clearTimeout(typingTimeout);

    setTyping(true);

    const timeout = setTimeout(() => {
      setTyping(false);
    }, 1000);
    setTypingTimeout(timeout);

    return () => clearTimeout(typingTimeout);
  }, [text]);

  // result
  const [result, setResult] = useState<ArtistModel[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!typing && text) {
      setLoading(true);
      searchApi.searchByText(text).then((data) => {
        setResult(data);
        setLoading(false);
      });
    }
  }, [typing, text]);

  return (
    <Dropdown>
      <TextFeild
        placeholder="جستجو ..."
        value={text}
        onChange={handleChange}
        onBlur={() => setText('')}
      />
      <DropdownContent show={!!text}>
        {loading || typing ? (
          <NotfoundText>لطفا صبر کنید ...</NotfoundText>
        ) : (
          <>
            {result.length ? (
              <List>
                {result.map((item) => (
                  <ListItem key={item.id}>
                    <ListLink href={`/artist/${item.id}`}>{item.name}</ListLink>
                  </ListItem>
                ))}
              </List>
            ) : (
              <NotfoundText>نتیجه ای پیدا نشد </NotfoundText>
            )}
          </>
        )}
      </DropdownContent>
    </Dropdown>
  );
}

export default SearchHeader;
