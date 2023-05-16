import Card1 from "../../assets/images/card1.png";
import Card2 from "../../assets/images/card2.png";
import Aside2 from "../../assets/images/aside-info2.png";
import { motion } from "framer-motion";

type Props = {};

const NonKyc = ({}: Props) => {
  return (
    <div className="bg-[#4729DF] flex flex-col lg:flex-row items-center p-5 lg:p-20">
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-6xl font-bold text-white">Non-KYC Account</h1>
        <div className="mt-10 bg-[#20009D] p-10 rounded-[10px]">
          <img src={Aside2} alt="checkmark" />
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <img src={Card2} alt="virtual-card" className="lg:w-[500px] mt-20 lg:mt-0" />
        <img src={Card1} alt="physical-card" className="lg:w-[500px]" />
      </motion.div>
    </div>
  );
};

export default NonKyc;
