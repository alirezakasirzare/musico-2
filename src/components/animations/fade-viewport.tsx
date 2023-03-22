import { ReactNode } from 'react';

import { motion } from 'framer-motion';

interface FadeViewportProps {
  children: ReactNode;
}
function FadeViewport(props: FadeViewportProps) {
  const { children } = props;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export default FadeViewport;
