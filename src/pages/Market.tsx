import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MarketTable from "../components/market/MarketTable";
import TopCryptos from "../components/market/TopCryptos";
import { motion } from "framer-motion";

type Props = {};

const Market = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <div className="bg-[#F0F1F5] py-5 md:py-10 px-5 md:px-10">
        <h4 className="text-gray-600">Home {`>`} Market</h4>
        <TopCryptos />
        <MarketTable />
      </div>
      <Footer />
    </motion.div>
  );
};

export default Market;
