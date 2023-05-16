import { TbArrowsDownUp } from "react-icons/tb";

type Props = {};

const Converter = ({}: Props) => {
  return (
      <div className="mt-10 lg:mt-0 ml-10 bg-white rounded-[10px] p-5">
        <h2 className="text-2xl font-bold pb-5 border-b">Converter</h2>
        <div className="mt-5 flex">
          <div className="flex">
            <input type="checkbox" />
            <span className="ml-2">Coins</span>
          </div>
          <div className="flex ml-32">
            <input type="checkbox" />
            <span className="ml-2">Prize</span>
          </div>
        </div>
        <p className="mt-10 text-gray-400">From</p>
        <div className="mt-2 flex">
          <input type="text" className="w-[60%] p-3 border rounded-md" />
          <select className="ml-3 border p-3 rounded-md">
            <option>Tether</option>
            <option>Bitcoin</option>
            <option>Ethereum</option>
          </select>
        </div>
        <div className="my-5 flex justify-center">
          <TbArrowsDownUp size={20} />
        </div>
        <p className="text-gray-400">To</p>
        <div className="flex">
          <input type="text" className="w-[60%] p-3 border rounded-md" />
          <select className="ml-3 border p-3 rounded-md">
            <option>Tether</option>
            <option>Bitcoin</option>
            <option>Ethereum</option>
          </select>
        </div>
        <div className="mt-5 flex justify-between text-gray-400">
          <span>Price</span>
          <span>0</span>
        </div>
        <div className="mt-5 flex justify-between text-gray-400 pb-5 border-b">
          <span>Charges</span>
          <span>0</span>
        </div>
        <div className="mt-5 flex justify-between text-gray-400">
          <span className="text-lg">Total</span>
          <span>0</span>
        </div>
        <button className="mt-5 w-full p-3 text-white bg-blue-500 rounded-md">
          Convert Now
        </button>
      </div>
  );
};

export default Converter;
