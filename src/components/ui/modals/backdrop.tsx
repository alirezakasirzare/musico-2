import tw from 'tailwind-styled-components';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

const Curtain = motion(tw.div<{ $blur: boolean }>`
  fixed left-0 top-0 z-50
  w-full h-full
  bg-gray-500/50
  ${({ $blur }) => $blur && 'backdrop-blur'}
`);

interface BackdropProps {
  children: ReactNode;
  onClick?: () => void;
  blur?: boolean;
}

function Backdrop(props: BackdropProps) {
  const { children, onClick, blur } = props;

  return createPortal(
    <Curtain
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClick}
      $blur={!!blur}
    >
      {children}
    </Curtain>,
    document.getElementById('modal-container') as HTMLElement
  );
}

export default Backdrop;
