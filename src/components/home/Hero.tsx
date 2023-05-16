import Oval from "../../assets/images/bg-oval.png";
import Oval2 from "../../assets/images/bg-oval2.png";
import Card from "../../assets/images/bg-card.png";
import { motion } from "framer-motion";

type Props = {};

const Hero = ({}: Props) => {
  return (
    <div className="relative">
      <img src={Oval} alt="oval-bg" className="absolute z-[-10] top-[-150px] left-[-200px] lg:left-0" />
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute top-[350px] lg:top-[150px] left-[10%] right-[10%] lg:right-0 lg:left-[15%]"
      >
        <h1 className="text-3xl lg:text-6xl font-bold max-w-[500px]">
          The only <span className="text-[#3535DD]">Crypto</span>{" "}
          <span className="text-[#6D6DFC]">Card</span> you need
        </h1>
        <p className="mt-10 max-w-[500px] text-[#696871]">
          Cupcake ipsum dolor sit amet lollipop. Icing icing carrot cake candy
          jelly-o soufflé muffin macaroon.
        </p>
        <a href='#get-the-card'>
          <button className="mt-10 py-2 px-7 rounded-[5px] text-white bg-[#5252F0] tracking-wider">
            Get the Card
          </button>
        </a>
      </motion.div>
      <motion.div
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <img
          src={Card}
          alt="card"
          className="w-[300px] xl:w-[500px] absolute right-[50px]"
        />
      </motion.div>
      <img src={Oval2} alt="oval-bg" className="absolute h-[500px] lg:h-[1000px] top-0 right-[-30px] lg:right-0" />
    </div>
  );
};

export default Hero;
