import { useState } from "react";
import ShortlyLogo from "../../../../assets/logo_black.svg";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="flex w-full items-center justify-between relative">
      <img src={ShortlyLogo} alt="Shortly's logo" />
      <svg
        className="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        viewBox="0 0 448 512"
        onClick={handleOpen}
      >
        <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
      </svg>

      <ul
        className={`absolute flex-col bg-brand-dark text-white  gap-5 items-center justify-center w-full rounded-xl z-10 p-4 py-7 font-bold transition-all duration-150 ${
          isOpen ? "flex translate-y-48" : "translate-y-0 hidden"
        }`}
      >
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        <hr className="border border-text-secondary/20 w-full" />
        <li>Login</li>
        <li className="w-full">
          <button
            className="cursor-pointer bg-brand-cyan
              hover:bg-brand-cyan/80
              transition-all duration-300 ease-in-out py-2 text-white rounded-full text-[.98rem] w-full"
          >
            Sign Up
          </button>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
