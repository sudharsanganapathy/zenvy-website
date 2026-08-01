import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import { navigation } from "../../../constants/navigation";

const backdrop = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.35,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};

const container = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const MobileMenu = ({ onClose }) => {
  return (
    <motion.div
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-[9999]"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-black/80 backdrop-blur-3xl" />

      {/* Ambient Lights */}

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[170px]" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-fuchsia-600/15 blur-[170px]" />

      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[180px]" />

      {/* Huge Watermark */}

      <motion.h1
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 0.04,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="
          pointer-events-none

          absolute

          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2

          select-none

          text-[120px]

          font-black

          tracking-[0.25em]

          text-white
        "
      >
        ZENVY
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative flex h-screen flex-col"
      >
        {/* Header */}

        <div className="flex items-center justify-between px-8 py-8">

          <motion.h2
            variants={item}
            className="
              text-2xl

              font-black

              tracking-[0.35em]
            "
          >
            Z E N V Y
          </motion.h2>

          <motion.button
            variants={item}
            whileHover={{
              rotate: 90,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={onClose}
            className="
              flex

              h-12
              w-12

              items-center
              justify-center

              rounded-full

              border

              border-white/10

              bg-white/5

              backdrop-blur-xl

              transition-all

              duration-300

              hover:bg-white/10
            "
          >
            <IoClose size={26} />
          </motion.button>

        </div>

        {/* Navigation */}

        <div className="flex flex-1 items-center px-8">

          <ul className="space-y-7">

            {navigation.map((link) => (

              <motion.li
                key={link.id}
                variants={item}
              >
                <a
                  href={link.href}
                  onClick={onClose}
                  className="
                    group

                    flex

                    items-center

                    gap-5
                  "
                >

                  <span
                    className="
                      text-xs

                      tracking-[0.25em]

                      text-zinc-600
                    "
                  >
                    0{link.id}
                  </span>

                  <span
                    className="
                      text-4xl

                      font-black

                      uppercase

                      tracking-[0.12em]

                      text-zinc-400

                      transition-all

                      duration-300

                      group-hover:text-white
                    "
                  >
                    {link.title}
                  </span>

                  <FiArrowUpRight
                    className="
                      opacity-0

                      -translate-x-3

                      transition-all

                      duration-300

                      group-hover:translate-x-0

                      group-hover:opacity-100
                    "
                    size={20}
                  />

                </a>

              </motion.li>

            ))}

          </ul>

        </div>

      </motion.div>

    </motion.div>
  );
};

export default MobileMenu;