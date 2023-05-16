import { useState } from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import Twitter from "../assets/social-media/twitter.png";
import Telegram from "../assets/social-media/telegram.png";
import Linkedin from "../assets/social-media/linkedin.png";
import Youtube from "../assets/social-media/youtube.png";
import Discord from "../assets/social-media/discord.png";

type Props = {};

const Navbar = ({}: Props) => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="h-[15vh] flex items-center justify-between px-10">
      <div className="flex items-center md:mr-4">
        <Link to="/" className="w-max h-max">
          <img src={Logo} alt="logo" className="w-14 h-14 object-contain" />
        </Link>
        <h1 className="ml-3 text-2xl font-bold">RiseUp</h1>
      </div>
      <ul className="hidden md:flex items-center">
        <Link to="/market">
          <li className="md:mr-5 lg:mr-7">Market</li>
        </Link>
        <Link to="/portfolio">
          <li className="md:mr-5 lg:mr-7">Portfolio</li>
        </Link>
        <Link to="/watchlist">
          <li className="md:mr-5 lg:mr-7">Watchlist</li>
        </Link>
        <Link to="/wallet">
          <li className="md:mr-5 lg:mr-7">Wallet</li>
        </Link>
        <Link to="/history">
          <li className="md:mr-5 lg:mr-7">History</li>
        </Link>
        <Link to="/register">
          <li className="md:mr-5 lg:mr-7 w-max h-max">
            <button className="px-7 py-2 bg-[#4D4DEC] rounded-[5px] text-white tracking-wider">
              Get Started
            </button>
          </li>
        </Link>
      </ul>
      {/* SHOW ON MOBILE */}
      <div className="md:hidden z-10">
        <AiOutlineMenu
          size={25}
          onClick={() => setMenu(true)}
          className="cursor-pointer"
        />
      </div>

      {menu && (
        <div className="bg-[#F1F1FC] h-screen fixed z-20 top-0 left-0 right-0">
          <div className="flex px-3">
            <div className="flex items-center">
              <img src={Logo} alt="logo" className="w-14 h-14 object-contain" />
              <h1 className="ml-3 text-2xl font-bold">RiseUp</h1>
            </div>
            <div className="w-max ml-auto py-5">
              <CgClose
                onClick={() => setMenu(false)}
                size={25}
                className="cursor-pointer"
              />
            </div>
          </div>
          <ul className="flex flex-col items-center mt-20">
            <Link to="/market">
              <li className="text-2xl border-b">Market</li>
            </Link>
            <Link to="/portfolio">
              <li className="mt-5 text-2xl border-b">Portfolio</li>
            </Link>
            <Link to="/watchlist">
              <li className="mt-5 text-2xl border-b">Watchlist</li>
            </Link>
            <Link to="/wallet">
              <li className="mt-5 text-2xl border-b">Wallet</li>
            </Link>
            <Link to="/history">
              <li className="mt-5 text-2xl border-b">History</li>
            </Link>
            <Link to="/register">
              <li className="mt-5 border-b w-max h-max">
                <button className="px-7 py-2 bg-[#4D4DEC] rounded-[5px] text-white tracking-wider">
                  Get Started
                </button>
              </li>
            </Link>
          </ul>
          <div className="mt-20 flex lg:flex-wrap lg:flex-row justify-center items-center">
            <img src={Twitter} alt="twitter" className="mx-2" />
            <img src={Linkedin} alt="linkedin" className="mx-2" />
            <img src={Telegram} alt="telegram" className="mx-2" />
            <img src={Youtube} alt="youtube" className="mx-2" />
            <img src={Discord} alt="discord" className="mx-2" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
