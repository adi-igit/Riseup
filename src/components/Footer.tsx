import Logo from "../assets/images/logo.png";
import Twitter from "../assets/social-media/twitter.png";
import Telegram from "../assets/social-media/telegram.png";
import Linkedin from "../assets/social-media/linkedin.png";
import Youtube from "../assets/social-media/youtube.png";
import Discord from "../assets/social-media/discord.png";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <footer className="mt-[100px] border-t">
      <div className="my-5 lg:my-10 flex flex-col lg:flex-row items-center lg:justify-between px-5 lg:px-10">
        <div className="w-full lg:mr-20">
          <div className="flex items-center">
            <img src={Logo} alt="logo-img" className="w-14" />
            <h1 className="ml-2 text-xl font-bold">RiseUp</h1>
          </div>
          <h3 className="mt-10 uppercase text-[#8C87A6]">
            Be part of our commynity
          </h3>
          <div className="mt-10 flex lg:flex-wrap lg:flex-row justify-center items-center">
            <img src={Twitter} alt="twitter" className="mr-3" />
            <img src={Linkedin} alt="linkedin" className="mr-3" />
            <img src={Telegram} alt="telegram" className="mr-3" />
            <img src={Youtube} alt="youtube" className="mr-3" />
            <img src={Discord} alt="discord" className="mr-3" />
          </div>
        </div>
        <div className="w-[70%] lg:w-full lg:h-[200px] py-5 lg:py-0 border-t border-b lg:border-none mt-10 lg:mt-0">
          <h2 className="font-bold text-[#8C87A6] mb-5">ECOSYSTEM</h2>
          <p className="mb-3 font-bold">Retail</p>
          <p className="mb-3 font-bold">DeFi Innovators</p>
          <p className="mb-3 font-bold">Blockchains, Wallets</p>
          <p className="font-bold">Exchanges</p>
        </div>
        <div className="mt-10 lg:mt-0 w-[70%] lg:w-full lg:h-[200px] py-5 lg:py-0 border-t border-b lg:border-none">
          <h2 className="font-bold text-[#8C87A6] mb-5">ZPAY TOKEN</h2>
          <p className="mb-3 font-bold">Tokenomics</p>
          <p className="mb-3 font-bold">Staking</p>
          <p className="font-bold">Shopping Pools</p>
        </div>
        <div className="mt-10 lg:mt-0 w-[70%] lg:w-full lg:h-[200px] py-5 lg:py-0 border-t border-b lg:border-none">
          <h2 className="font-bold text-[#8C87A6] mb-5">GET TO KNOW US</h2>
          <p className="mb-3 font-bold">Company</p>
          <p className="mb-3 font-bold">Team & Advisors</p>
          <p className="mb-3 font-bold">Blog</p>
          <p className="font-bold">Contact</p>
        </div>
        <div className="mt-10 lg:mt-0 w-[70%] lg:w-full lg:h-[200px] py-5 lg:py-0 border-t border-b lg:border-none">
          <h2 className="font-bold text-[#8C87A6] mb-5">ROADMAP</h2>
          <p className="mb-3 font-bold">Roadmap 2023</p>
          <p className="mb-3 font-bold">Ideas</p>
          <p className="mb-3 font-bold">Updates</p>
          <p className="font-bold">Feedback</p>
        </div>
      </div>
      <div className="py-10 lg:py-[50px] mx-20 lg:border-t">
        <h5 className="lg:mt-10">&copy; All Rights reserved to RiseUp</h5>
      </div>
    </footer>
  );
};

export default Footer;
