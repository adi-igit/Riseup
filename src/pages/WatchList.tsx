import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Converter from "../components/watchlist/Converter";
import Trending from "../components/watchlist/Trending";
import WatchlistComponent from "../components/watchlist/WatchlistComponent";
import WatchlistTable from "../components/watchlist/WatchlistTable";
import { motion } from "framer-motion";

type Props = {};

const WatchList = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <div className="bg-[#F0F1F5] py-10 px-2 md:px-10">
        <span className="text-gray-600">Home</span> {`>`}{" "}
        <span className="text-gray-600">Watchlist</span>
        <div className="mt-10 mb-20 grid lg:grid-cols-3">
          <div className="col-span-2 overflow-x-scroll lg:overflow-hidden">
            <WatchlistComponent />
            <WatchlistTable />
            <Trending />
          </div>
          <div className="col-span-1">
            <Converter />
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default WatchList;
