import { FiArrowDownRight } from "react-icons/fi";

type Props = {};

const PortfolioComponent = ({}: Props) => {
  return (
    <div className="bg-white rounded-[10px] p-5 flex flex-col md:flex-row justify-between">
      <div>
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <p className="mt-10 font-bold">Current Value</p>
        <span>$ 8,000.05</span>
      </div>
      <div className="md:w-[300px] h-max">
        <div className="mt-5 flex">
          <h3 className="font-bold">Total Investment</h3>
          <span className="ml-auto text-gray-400">$ 12,652.93</span>
        </div>
        <div className="flex mt-5">
          <h3 className="text-gray-400 font-bold">Total Return</h3>
          <span className="ml-auto text-red-500">$ 10,252.93</span>
        </div>
        <div className="flex mt-5">
          <h3 className="text-gray-400 font-bold">Profit / Loss</h3>
          <div className="ml-auto flex text-red-500">
            <FiArrowDownRight /> 
            <span>-5.28%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
