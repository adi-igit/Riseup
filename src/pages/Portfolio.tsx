import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PortfolioComponent from "../components/portfolio/PortfolioComponent";
import InvestedCoins from "../components/portfolio/InvestedCoins";
import PortfolioWatchlist from "../components/portfolio/PortfolioWatchlist";
import { motion } from "framer-motion";

type Props = {};

const Portfolio = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <div className="bg-[#F0F1F5] py-10 px-2 md:px-10">
        <span className="text-gray-600">Home</span> {`>`} <span className="text-gray-600">Portfolio</span>
        <div className='mt-10 grid lg:grid-cols-3'>
          <div className="col-span-2 overflow-x-scroll">
            <PortfolioComponent />
            <InvestedCoins />
          </div>
          <div className="col-span-1">
            <PortfolioWatchlist />
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Portfolio;
