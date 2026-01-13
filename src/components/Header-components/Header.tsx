import ShortlyLogo from "../../assets/logo_black.svg";
import HamburgerMenu from "./components/ui/HamburgerMenu.tsx";

const Header = () => {
  const isMobile = window.screen.width <= 768;
  return (
    <header className="flex p-10">
      <nav className="flex items-center justify-between w-full">
        {isMobile ? (
          <HamburgerMenu />
        ) : (
          <div className="flex items-center justify-between w-full">
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
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
