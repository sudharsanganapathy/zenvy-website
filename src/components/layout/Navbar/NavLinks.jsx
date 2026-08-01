import { useState } from "react";
import { motion } from "framer-motion";
import { navigation } from "../../../constants/navigation";

const NavLinks = () => {
  const [active, setActive] = useState("HOME");

  return (
    <ul className="flex items-center gap-12">
      {navigation.map((item) => {
        const isActive = active === item.title;

        return (
          <li key={item.id}>
            <motion.a
              href={item.href}
              onClick={() => setActive(item.title)}
              whileHover={{ y: -2 }}
              transition={{
                duration: 0.25,
              }}
              className="
                relative

                flex
                items-center
                justify-center

                py-2

                uppercase

                text-[12px]

                tracking-[0.28em]

                font-medium

                transition-colors
                duration-300

                select-none
              "
            >
              {/* Active Background */}

              {isActive && (
                <motion.span
                  layoutId="active-pill"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 35,
                  }}
                  className="
                    absolute

                    inset-0

                    rounded-full

                    bg-white/[0.06]

                    border

                    border-white/10
                  "
                />
              )}

              {/* Text */}

              <span
                className={`
                  relative
                  z-10

                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "text-white"
                      : "text-zinc-500 group-hover:text-white"
                  }
                `}
              >
                {item.title}
              </span>

              {/* Underline */}

              <motion.span
                initial={{
                  width: 0,
                }}
                whileHover={{
                  width: "100%",
                }}
                transition={{
                  duration: .3,
                }}
                className="
                  absolute

                  -bottom-1

                  h-[1px]

                  bg-white
                "
              />
            </motion.a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;