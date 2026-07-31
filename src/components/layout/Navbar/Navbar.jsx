import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ActionButton from "./ActionButton";

const Navbar = () => {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full">
      <nav
        className="
          mx-auto
          w-[94%]
          max-w-[1320px]

          h-20

          grid
          grid-cols-[220px_1fr_220px]
          items-center

          rounded-full

          border
          border-white/10

          bg-white/5

          backdrop-blur-2xl

          px-8

          shadow-[0_10px_40px_rgba(0,0,0,0.45)]

          transition-all
          duration-500
        "
      >
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="flex justify-center">
          <NavLinks />
        </div>

        <div className="flex justify-end">
          <ActionButton />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;