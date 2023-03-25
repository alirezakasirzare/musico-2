import tw from 'tailwind-styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

const Card = tw(motion.div)`
  absolute top-[110%] left-0
  w-full h-auto p-3
  border bottom-gray-100 rounded-sm
  bg-white text-gray-500
`;

interface DropdownContentProps {
  children: ReactNode;
  show: boolean;
}

function DropdownContent(props: DropdownContentProps) {
  const { children, show } = props;

  return (
    <AnimatePresence>
      {show && (
        <Card
          initial={{ opacity: 0, scale: 0.8 }}
          exit={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {children}
        </Card>
      )}
      ;
    </AnimatePresence>
  );
}

export default DropdownContent;
