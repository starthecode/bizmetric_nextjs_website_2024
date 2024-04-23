import { motion } from 'framer-motion';
import { useState } from 'react';

const MenuItemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      staggerChildren: 0.05,
    },
  },
};

const MenuItem = ({ item, children, ...props }: any) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <motion.div
      className="px-5 relative cursor-pointer py-8"
      onHoverStart={() => setIsBeingHovered(true)}
      onHoverEnd={() => setIsBeingHovered(false)}
    >
      <span className="relative sm:text-sm md:text-md 2xl:text-lg text-ebonyclay-900 font-bold dark:text-white dark:hover:text-flamingo-400 hover:text-flamingo-400">
        {item.title}
      </span>
      {item?.children.length > 0 && isBeingHovered && (
        <div className="relative min-w-max top-5">
          <motion.div
            {...props}
            layoutId="menu"
            className="absolute shadow-lg bg-white dark:bg-woodsmoke-950/95 rounded-lg -left-2/4"
            variants={MenuItemVariants}
            style={{ minWidth: 400 }}
            initial="hidden"
            animate="visible"
          >
            {children}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default MenuItem;
