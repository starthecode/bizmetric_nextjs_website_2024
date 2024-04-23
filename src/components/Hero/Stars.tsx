import { motion } from 'framer-motion';

export default function Stars() {
  return (

      <div className="wrapper">
        <motion.div
          className="stars_gradient"
          animate={{ scale: [1, 3] }}
          transition={{
            repeat: Infinity,
            originX: 1,
            originY: 0,
            duration: 10,
            repeatType: 'mirror',
          }}
        >
          {' '}
        </motion.div>
      </div>
   
  );
}
