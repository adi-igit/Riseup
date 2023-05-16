import { motion } from "framer-motion";

type Props = {};

const Kyc = ({}: Props) => {
  return (
    <motion.div 
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5 }}
      className="pt-[700px] text-center">
      <h3 className="text-[#A8A5CA] uppercase tracking-widest font-bold">
        Get a virtual debit card issued instantly
      </h3>
      <h1 className="text-3xl md:text-5xl my-10 font-bold">
        <span className="text-[#5454EE]">KYC</span> account card
      </h1>
      <p className="max-w-[500px] mx-auto leading-[30px] text-[#696871] px-5 lg:px-0">
        Cupcake ipsum dolor sit amet lollipop. Icing icing carrot cake candy
        jelly-o soufflé muffin macaroon. Marzipan lollipop bear claw chupa chups
        cake toffee. Brownie jelly-o cupcake icing pastry apple pie carrot cake
        chocolate bar cotton candy. Lemon drops jujubes pie chocolate muffin
        tart lemon drops apple pie gingerbread.
      </p>
      <button className="mt-10 text-white tracking-wider py-2 px-7 bg-[#4040E4] rounded-[5px]">
        Learn more
      </button>
    </motion.div>
  );
};

export default Kyc;
