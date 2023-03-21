import Link from 'next/link';
import tw from 'tailwind-styled-components';
import { FaTimes } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

import Backdrop from '@/components/ui/modals/backdrop';
import MenuHeader from './menu-header';

const Container = motion(tw.div`
  absolute right-0 top-0
  w-[300px] max-w-full h-full
  shadow
  bg-white
  border-b-8 border-gray-300
`);

const Head = tw.div`
  flex justify-between items-center
  border-b border-gray-100
  p-2
`;

const Body = tw.div`
  py-2
`;

interface IMobileProps {
  active: boolean;
  onClose: () => void;
}

function MobileMenu(props: IMobileProps) {
  const { active, onClose } = props;

  return (
    <AnimatePresence>
      {active && (
        <Backdrop onClick={onClose}>
          <Container
            initial={{ x: '100%' }}
            exit={{ x: '100%' }}
            animate={{ x: 0 }}
          >
            <Head>
              <Link href="/">
                <strong>موزیکو</strong>
              </Link>
              <button onClick={onClose}>
                <FaTimes />
              </button>
            </Head>
            <Body>
              <MenuHeader vertical />
            </Body>
          </Container>
        </Backdrop>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
