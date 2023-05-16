import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HistoryTd from "../components/history/HistoryTd";
import { motion } from "framer-motion";

type Props = {};

const History = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <div className="bg-[#F0F1F5] py-10 px-5 lg:px-10">
          <span className="text-gray-600">Home</span> {`>`} <span className="text-gray-600">History</span>
        <div className="mt-10 bg-white p-5 rounded-[10px] scrollbar-thin scrollbar-thumb-cyan-400 overflow-x-scroll lg:overflow-hidden">
          <div className="h-[20vh] flex justify-between items-center">
            <div className="flex">
              <h1 className="text-2xl text-gray-500 font-bold">Trade History</h1>
              <h1 className="ml-5 text-2xl text-gray-500 font-bold">Wallet History</h1>
            </div>
            <select className="ml-5 lg:ml-0 p-2 border-[2px] border-blue-300 text-blue-300 rounded-md outline-none">
              <option>Last Month</option>
              <option>Last Year</option>
              <option>Last 7 days</option>
              <option>Last 24 hours</option>
            </select>
          </div>
          <table className="w-[200vw] lg:w-full text-left ">
            <tr className="h-16 bg-[#FAFBFE]">
              <th>Date</th>
              <th>Name</th>
              <th>Status</th>
              <th>Type</th>
              <th>Price</th>
              <th>QTY.</th>
              <th>Amount</th>
              <th>Side</th>
            </tr>
            <HistoryTd />
            <HistoryTd />
            <HistoryTd />
            <HistoryTd />
            <HistoryTd />
            <HistoryTd />
            <HistoryTd />
            <HistoryTd />
            <HistoryTd />
            <HistoryTd />
          </table>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default History;
