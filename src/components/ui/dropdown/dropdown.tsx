import tw from 'tailwind-styled-components';
import { ReactNode } from 'react';

const Container = tw.div`
  relative
`;

interface DropdownProps {
  children: ReactNode;
}

function Dropdown(props: DropdownProps) {
  const { children } = props;

  return <Container>{children}</Container>;
}

export default Dropdown;
