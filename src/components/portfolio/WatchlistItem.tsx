import { FiArrowDownRight } from "react-icons/fi";
import EthereumIcon from "../../assets/icons/ethereum-icon.png";

type Props = {};

const WatchlistItem = ({}: Props) => {
  return (
    <div className="mt-10 flex justify-between">
      <div className="flex items-center">
        <img src={EthereumIcon} alt="ethereum-icon" className="w-10 h-10" />
        <div className="ml-2">
          <h5 className="font-bold">Ethereum</h5>
          <div className="mt-5 flex text-red-500">
            <FiArrowDownRight />
            <span>-5.28%</span>
            <span className="ml-2 w-max">$ 3,54,213.95</span>
          </div>
        </div>
      </div>
      <span className="font-bold">$2,54,321.43</span>
    </div>
  );
};

export default WatchlistItem;
