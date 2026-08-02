import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      className="
      relative
      min-h-screen
      bg-[#050505]
      overflow-hidden
      "
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-white/5 blur-[180px]" />

        <div className="absolute right-[-250px] top-40 h-[700px] w-[700px] rounded-full bg-zinc-500/10 blur-[220px]" />

      </div>

      {/* Hero */}

      <div
        className="
        relative
        z-10

        mx-auto
        max-w-7xl

        px-8
        md:px-14
        lg:px-20

        pt-44
        pb-20
        "
      >
        <div className="max-w-3xl">

          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="
            inline-flex
            items-center
            gap-3

            rounded-full

            border
            border-white/10

            bg-white/5

            px-5
            py-2
            "
          >
            <span className="h-2 w-2 rounded-full bg-white" />

            <span className="text-xs tracking-[0.3em] uppercase text-zinc-300">
              NEW DROP 2026
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="
            mt-10

            font-black

            uppercase

            text-white

            leading-[0.9]

            tracking-[-0.06em]

            text-6xl
            md:text-8xl
            lg:text-[120px]
            "
          >
            WEAR
            <br />
            YOUR
            <br />
            IDENTITY.
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
            className="
            mt-10

            max-w-xl

            text-lg

            leading-8

            text-zinc-400
            "
          >
            Luxury streetwear crafted for creators,
            dreamers and visionaries. Designed with
            premium fabrics and timeless minimalism.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .6 }}
            className="
            mt-12

            flex
            gap-5
            flex-wrap
            "
          >
            <button
              className="
              flex
              items-center
              gap-3

              rounded-full

              bg-white

              px-8
              py-4

              font-semibold

              text-black

              hover:scale-105

              transition
              "
            >
              Explore Collection

              <FiArrowRight />
            </button>

            <button
              className="
              rounded-full

              border

              border-white/10

              px-8
              py-4

              text-white

              hover:bg-white/10

              transition
              "
            >
              View Manifesto
            </button>
          </motion.div>
        </div>

        {/* Hero Image */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .8 }}
          className="
          mt-24

          flex

          justify-center
          "
        >
          <div
            className="
            h-[600px]
            w-full
            max-w-md

            rounded-[40px]

            border

            border-white/10

            bg-gradient-to-br

            from-zinc-900

            via-zinc-800

            to-black
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;