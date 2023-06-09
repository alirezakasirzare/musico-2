import Link from 'next/link';
import Image from 'next/image';
import tw from 'tailwind-styled-components';
import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import Backdrop from '@/components/ui/modals/backdrop';
import MenuHeader from './menu-header';
import girlImage from '@/assets/images/menu/girl.jpg';

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
  flex flex-col justify-between
  py-2
  h-full
`;

interface MobileMenuProps {
  active: boolean;
  onClose: () => void;
}

function MobileMenu(props: MobileMenuProps) {
  const { active, onClose } = props;

  useEffect(() => {
    if (active) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }

    return () => enableBodyScroll(document.body);
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <Backdrop onClick={onClose} blur>
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

              <Image
                width={400}
                height={400}
                alt="girl-listten-to-music"
                src={girlImage}
                className="w-full"
              />
            </Body>
          </Container>
        </Backdrop>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
