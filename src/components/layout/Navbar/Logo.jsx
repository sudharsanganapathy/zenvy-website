import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.a
      href="/"
      whileHover="hover"
      initial="initial"
      className="group relative flex items-center px-4 py-2"
    >
      {/* Glow */}
      <motion.span
        variants={{
          initial: { opacity: 0, scale: 0.8 },
          hover: { opacity: 1, scale: 1.2 },
        }}
        transition={{ duration: 0.4 }}
        className="
          absolute
          inset-0

          rounded-full

          bg-white/10

          blur-2xl
        "
      />

      {/* Logo */}

      <motion.h1
        variants={{
          initial: {
            letterSpacing: "0.18em",
            scale: 1,
          },
          hover: {
            letterSpacing: "0.22em",
            scale: 1.03,
          },
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10

          font-[Space_Grotesk]

          text-[28px]

          font-black

          uppercase

          tracking-[0.18em]

          text-white
        "
      >
        ZENVY
      </motion.h1>

      {/* Bottom Line */}

      <motion.span
        variants={{
          initial: {
            width: 0,
            opacity: 0,
          },
          hover: {
            width: "100%",
            opacity: 1,
          },
        }}
        transition={{
          duration: 0.35,
        }}
        className="
          absolute

          left-4
          right-4

          -bottom-1

          h-px

          origin-left

          bg-gradient-to-r
          from-transparent
          via-white
          to-transparent
        "
      />
    </motion.a>
  );
};

export default Logo;