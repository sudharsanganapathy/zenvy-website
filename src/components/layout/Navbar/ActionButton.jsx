const ActionButton = () => {
  return (
    <button
      className="
        hidden
        lg:flex

        items-center
        justify-center

        h-12
        px-7

        rounded-full

        border
        border-white/10

        bg-white

        text-black
        text-sm
        font-semibold

        transition-all
        duration-300

        hover:scale-105
        hover:-translate-y-1

        hover:shadow-[0_15px_40px_rgba(255,255,255,0.25)]

        active:scale-95
      "
    >
      Explore Drop
    </button>
  );
};

export default ActionButton;