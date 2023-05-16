import Card1 from "../../assets/images/card1.png";
import Card2 from "../../assets/images/card2.png";
import Aside from "../../assets/images/aside-info.png";
import Visa from "../../assets/images/visa.png";
import { motion } from "framer-motion";


type Props = {};

const CardImages = ({}: Props) => {
  return (
    <motion.div 
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1.5 }} 
      viewport={{ once: true }} 
      className="mt-32 lg:mt-10 flex flex-col lg:flex-row justify-center">
      <div>
        <img src={Card1} alt="physical-card" className="w-[300px] lg:w-[500px] mx-auto lg:mx-0" />
        <img src={Card2} alt="virtual-card"  className="w-[300px] lg:w-[500px] mx-auto lg:mx-0" />
      </div>
      <div className="w-[80%] lg:w-auto mx-auto lg:mx-0 mb-32 lg:mb-0">
        <img src={Aside} alt="aside-info" className="mt-24" />
        <img src={Visa} alt="aside-info" className="mt-24" />
      </div>
    </motion.div>
  );
};

export default CardImages;
