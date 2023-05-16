import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import TetherIcon from "../../assets/icons/Tether-USDT-icon.png";
import VoyagerIcon from "../../assets/icons/voyager-icon.png";
import BitcoinIcon from "../../assets/icons/icons8-bitcoin-96.png";
import HusdIcon from "../../assets/icons/husd-icon.png";


type Props = {}

const TopCryptos = ({}: Props) => {
  return (
    <div className="mt-10 bg-white flex flex-wrap lg:justify-between p-5 rounded-[10px]">
    <div className="bg-[#FAFBFE] w-full lg:w-[280px] p-2 rounded-[10px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={BitcoinIcon} alt="bitcoin-icon" className="w-10" />
          <h3 className="ml-2 text-lg font-bold">Bitcoin/USD</h3>
        </div>
        <div className="flex items-center text-red-500">
          <span className="mr-2">
            <FiArrowDownRight />
          </span>
          <span>-2.61%</span>
        </div>
      </div>
      <h4 className="mt-5 text-gray-400">Price</h4>
      <div className="mt-5 flex justify-between">
        <span className="font-bold">$ 26,298.80</span>
        <span className="text-red-500">$ 25,592.80</span>
      </div>
    </div>
    <div className="mt-5 lg:mt-0 bg-[#FAFBFE] w-full lg:w-[280px] p-2 rounded-[10px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={HusdIcon}
            alt="husd-icon"
            className="w-10 h-10 p-[3px]  object-fit"
          />
          <h3 className="ml-2 text-lg font-bold">Husd/USD</h3>
        </div>
        <div className="flex items-center text-red-500">
          <span className="mr-2">
            <FiArrowDownRight />
          </span>
          <span>-2.50%</span>
        </div>
      </div>
      <h4 className="mt-5 text-gray-400">Price</h4>
      <div className="mt-5 flex justify-between">
        <span className="font-bold">$ 0.05258</span>
        <span className="text-red-500">$ 0.013145</span>
      </div>
    </div>
    <div className="mt-5 lg:mt-0 bg-[#FAFBFE] w-full lg:w-[280px] p-2 rounded-[10px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={TetherIcon}
            alt="tether-icon"
            className="w-10 h-10 p-[3px] object-cover"
          />
          <h3 className="ml-2 text-lg font-bold">Tether/USD</h3>
        </div>
        <div className="flex items-center text-green-500">
          <span className="mr-2">
            <FiArrowUpRight />
          </span>
          <span>+0.02%</span>
        </div>
      </div>
      <h4 className="mt-5 text-gray-400">Price</h4>
      <div className="mt-5 flex justify-between">
        <span className="font-bold">$ 0.02001</span>
        <span className="text-green-500">$ 1.0005</span>
      </div>
    </div>
    <div className="mt-5 xl:mt-0 bg-[#FAFBFE] w-full lg:w-[280px] p-2 rounded-[10px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={VoyagerIcon}
            alt="voyager-icon"
            className="w-14 h-14 p-[2px] object-cover"
          />
          <h3 className="text-lg font-bold">Voyager/USD</h3>
        </div>
        <div className="flex items-center text-red-500">
          <span className="mr-2">
            <FiArrowUpRight />
          </span>
          <span>-10.50%</span>
        </div>
      </div>
      <h4 className="mt-5 text-gray-400">Price</h4>
      <div className="mt-5 flex justify-between">
        <span className="font-bold">$ 0.0142275</span>
        <span className="text-red-500">$ 0.1355</span>
      </div>
    </div>
  </div>
  )
}

export default TopCryptos