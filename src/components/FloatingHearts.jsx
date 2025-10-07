import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const random = (min, max) => Math.random() * (max - min) + min;

const HeartComponent = () => {
  const duration = random(5, 12);
  const delay = 0;
  const x = random(-50, 50);

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${random(5, 95)}%`,
        bottom: 0,
      }}
      animate={{
        y: "-100vh",
        x: `${x}px`,
        opacity: [1, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    >
      <Heart
        size={random(15, 30)}
        className="text-pink-500"
        fill="currentColor"
      />
    </motion.div>
  );
};

const FloatingHearts = () => {
  return (
    <>
      {Array.from({ length: 15 }).map((_, i) => (
        <HeartComponent key={i} />
      ))}
    </>
  );
};

export default FloatingHearts;
