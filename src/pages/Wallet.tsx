import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddFund from "../components/wallet/AddFund";
import TransactionHistory from "../components/wallet/TransactionHistory";
import WalletComponent from "../components/wallet/WalletComponent";
import { motion } from "framer-motion";

type Props = {};

const Wallet = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <div className="bg-[#F0F1F5] py-10 px-2 lg:px-10">
        <span className="text-gray-600">Home</span> {`>`}{" "}
        <span className="text-gray-600">Wallet</span>
        <div className="mt-10 grid lg:grid-cols-3">
          <div className="col-span-2 scrollbar-thin scrollbar-thumb-cyan-400 overflow-hidden">
            <WalletComponent />
            <TransactionHistory />
          </div>
          <div className="col-span-1">
            <AddFund />
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Wallet;
