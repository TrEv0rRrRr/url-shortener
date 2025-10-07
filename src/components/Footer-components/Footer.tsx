import ShortlyLogo from "../../assets/logo_white.svg";
import FooterLinks from "./components/FooterLinks";
import FacebookLogo from './components/ui/icons/FacebookLogo';
import InstagramLogo from "./components/ui/icons/InstagramLogo";
import PinterestLogo from "./components/ui/icons/PinterestLogo";
import TwitterLogo from "./components/ui/icons/TwitterLogo";

const Footer = () => {
  return <footer className="bg-bg-dark flex flex-col items-center justify-center p-14 gap-10">
    <img src={ShortlyLogo} alt="Shortly logo" aria-hidden />
    <FooterLinks />
    <div className="flex gap-7 justify-center items-center">
      <FacebookLogo />
      <TwitterLogo />
      <PinterestLogo />
      <InstagramLogo />
    </div>
  </footer>;
};

export default Footer;
