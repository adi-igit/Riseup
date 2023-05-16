import { FiArrowDownRight } from "react-icons/fi";
import EthereumIcon from "../../assets/icons/ethereum-icon.png";

type Props = {};

const Trending = ({}: Props) => {
  return (
    <div className="mt-10 flex flex-col lg:flex-row justify-between">
      <div className="lg:w-[30%] border-[2px] lg:border-none border-blue-300 rounded-md p-5">
        <h1 className="text-2xl font-bold">Trending</h1>
        <div className="mt-5 flex items-center text-sm">
          <div className="flex items-center">
            <img src={EthereumIcon} alt="ethereum-icon" className="w-10 h-10" />
            <h3 className="ml-1 font-bold">Ethereum</h3>
            <span className="ml-1">$12,234.00</span>
            <FiArrowDownRight className='ml-1 text-red-500' />
            <span>-5.28%</span>
          </div>
        </div>
        <div className="mt-5 flex items-center text-sm">
          <div className="flex items-center">
            <img src={EthereumIcon} alt="ethereum-icon" className="w-10 h-10" />
            <h3 className="ml-1 font-bold">Ethereum</h3>
            <span className="ml-1">$12,234.00</span>
            <FiArrowDownRight className='ml-1 text-red-500' />
            <span>-5.28%</span>
          </div>
        </div>
        <div className="mt-5 flex items-center text-sm">
          <div className="flex items-center">
            <img src={EthereumIcon} alt="ethereum-icon" className="w-10 h-10" />
            <h3 className="ml-1 font-bold">Ethereum</h3>
            <span className="ml-1">$12,234.00</span>
            <FiArrowDownRight className='ml-1 text-red-500' />
            <span>-5.28%</span>
          </div>
        </div>
      </div>
      <div className="mt-5 lg:mt-0 lg:w-[30%] border-[2px] lg:border-none border-blue-300 rounded-md p-5">
        <h1 className="text-2xl font-bold">Top Gainers</h1>
        <div className="mt-5 flex items-center text-sm">
          <div className="flex items-center">
            <img src={EthereumIcon} alt="ethereum-icon" className="w-10 h-10" />
            <h3 className="ml-1 font-bold">Ethereum</h3>
            <span className="ml-1">$12,234.00</span>
            <FiArrowDownRight className='ml-1 text-red-500' />
            <span>-5.28%</span>
          </div>
        </div>
        <div className="mt-5 flex items-center text-sm">
          <div className="flex items-center">
            <img src={EthereumIcon} alt="ethereum-icon" className="w-10 h-10" />
            <h3 className="ml-1 font-bold">Ethereum</h3>
            <span className="ml-1">$12,234.00</span>
            <FiArrowDownRight className='ml-1 text-red-500' />
            <span>-5.28%</span>
          </div>
        </div>
        <div className="mt-5 flex items-center text-sm">
          <div className="flex items-center">
            <img src={EthereumIcon} alt="ethereum-icon" className="w-10 h-10" />
            <h3 className="ml-1 font-bold">Ethereum</h3>
            <span className="ml-1">$12,234.00</span>
            <FiArrowDownRight className='ml-1 text-red-500' />
            <span>-5.28%</span>
          </div>
        </div>
      </div>
      <div className="mt-5 lg:mt-0 lg:w-[30%] border-[2px] lg:border-none border-blue-300 rounded-md p-5">
        <h1 className="text-2xl font-bold">Top Losers</h1>
        <div className="mt-5 flex items-center text-sm">
          <div className="flex items-center">
            <img src={EthereumIcon} alt="ethereum-icon" className="w-10 h-10" />
            <h3 className="ml-1 font-bold">Ethereum</h3>
            <span className="ml-1">$12,234.00</span>
            <FiArrowDownRight className='ml-1 text-red-500' />
            <span>-5.28%</span>
          </div>
        </div>
        <div className="mt-5 flex items-center text-sm">
          <div className="flex items-center">
            <img src={EthereumIcon} alt="ethereum-icon" className="w-10 h-10" />
            <h3 className="ml-1 font-bold">Ethereum</h3>
            <span className="ml-1">$12,234.00</span>
            <FiArrowDownRight className='ml-1 text-red-500' />
            <span>-5.28%</span>
          </div>
        </div>
        <div className="mt-5 flex items-center text-sm">
          <div className="flex items-center">
            <img src={EthereumIcon} alt="ethereum-icon" className="w-10 h-10" />
            <h3 className="ml-1 font-bold">Ethereum</h3>
            <span className="ml-1">$12,234.00</span>
            <FiArrowDownRight className='ml-1 text-red-500' />
            <span>-5.28%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
