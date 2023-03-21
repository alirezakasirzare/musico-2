import tw from 'tailwind-styled-components';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

const Curtain = motion(tw.div`
  absolute left-0 top-0
  w-full h-full
  bg-gray-500/50
`);

interface IBackdrop {
  children: ReactNode;
  onClick?: () => void;
}

function Backdrop(props: IBackdrop) {
  const { children, onClick } = props;

  return (
    <Curtain
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClick}
    >
      {children}
    </Curtain>
  );
}

export default Backdrop;
