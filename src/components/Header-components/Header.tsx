import ShortlyLogo from "../../assets/logo_black.svg";
// import Menu from "./components/ui/Menu.tsx";

const Header = () => {
  return (
    <header className="flex p-10">
      <nav className="flex items-center justify-between w-full">
        <div className="flex gap-8 items-center">
          <img src={ShortlyLogo} alt="Shortly's logo" />
          <ul className="flex gap-4">
            <li className="text-text-secondary">Features</li>
            <li className="text-text-secondary">Pricing</li>
            <li className="text-text-secondary">Resources</li>
          </ul>
        </div>
        <ul className="flex gap-4 items-center">
          <li>
            <button className="text-text-secondary cursor-pointer">
              Login
            </button>
          </li>
          <li>
            <button
              className="cursor-pointer bg-brand-cyan
              hover:bg-brand-cyan/80
              transition-all duration-300 ease-in-out px-4 py-1 text-white rounded-full text-[.98rem]"
            >
              Sign Up
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={25} viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
