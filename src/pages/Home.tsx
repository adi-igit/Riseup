import AsSeenOn from "../components/home/AsSeenOn";
import CardImages from "../components/home/CardImages";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import Kyc from "../components/home/Kyc";
import Navbar from "../components/Navbar";
import NonKyc from "../components/home/NonKyc";
import { motion } from "framer-motion";

type Props = {};

const Home = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden">
      <Navbar />
      <Hero />
      <Kyc />
      <CardImages />
      <NonKyc />
      <AsSeenOn />
      <Footer />
    </motion.div>
  );
};

export default Home;
