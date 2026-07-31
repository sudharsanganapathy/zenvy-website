import { navigation } from "../../../constants/navigation";

const NavLinks = () => {
  return (
    <ul className="hidden lg:flex items-center gap-12">
      {navigation.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            className="
              relative

              text-[15px]
              font-medium
              tracking-wide

              text-zinc-300

              transition
              duration-300

              hover:text-white

              after:absolute
              after:left-0
              after:-bottom-2

              after:h-[2px]
              after:w-0

              after:bg-white

              after:transition-all
              after:duration-300

              hover:after:w-full
            "
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;