import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-5 left-0 right-0 z-[999]"
      >
        <div className="flex justify-center px-4">
          <motion.nav
            animate={{
              width: isScrolled ? "84%" : "90%",
              height: isScrolled ? 72 : 84,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 24,
            }}
            className={`
              relative

              w-full
              max-w-[1120px]

              rounded-full

              overflow-hidden

              border

              ${
                isScrolled
                  ? "bg-black/75 border-white/15"
                  : "bg-white/[0.04] border-white/10"
              }

              backdrop-blur-[30px]

              shadow-[0_20px_60px_rgba(0,0,0,.45)]
            `}
          >
            {/* Ambient Glow */}
            <div
              className="
                absolute
                inset-0

                bg-gradient-to-r
                from-transparent
                via-white/[0.03]
                to-transparent
              "
            />

            {/* Animated Reflection */}
            <motion.div
              animate={{
                x: ["-120%", "140%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                top-0
                bottom-0

                w-44

                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent

                skew-x-[-20deg]
              "
            />

            <div className="relative z-20 flex h-full items-center justify-between px-8">
              {/* Logo */}
              <div className="flex items-center">
                <Logo />
              </div>

              {/* Desktop Navigation */}
              <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
                <NavLinks />
              </div>

              {/* Mobile Button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="
                  group

                  flex
                  lg:hidden

                  items-center
                  justify-center

                  w-11
                  h-11

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
                <div className="space-y-1.5">
                  <span className="block h-[2px] w-5 rounded-full bg-white transition-all duration-300" />
                  <span className="block h-[2px] w-5 rounded-full bg-white transition-all duration-300" />
                </div>
              </button>
            </div>

            {/* Bottom Gradient */}
            <div
              className="
                absolute
                bottom-0
                left-0
                right-0

                h-px

                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
              "
            />
          </motion.nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;