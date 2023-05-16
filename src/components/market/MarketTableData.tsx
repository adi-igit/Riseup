import { FiArrowDownRight } from "react-icons/fi";

type Props = {
  rank: String;
  cryptoIcon: String;
  cryptoAlt: String;
  name: String;
  price: String;
  priceInBtc: String;
  within24h: String;
  within7d: String;
  chartIcon: String;
  chartAlt: String;
};

const MarketTableData = ({
  rank,
  cryptoIcon,
  cryptoAlt,
  name,
  price,
  priceInBtc,
  within24h,
  within7d,
  chartIcon,
  chartAlt,
}: Props) => {
  return (
    <tr className="h-14">
      <td className="font-bold">{rank}</td>
      <td className="h-14 flex items-center">
        <img
          src={`${cryptoIcon}`}
          alt={`${cryptoAlt}`}
          className="w-10 rounded-full"
        />
        <span className="ml-2 font-bold">{name}</span>
      </td>
      <td>{price}</td>
      <td className="font-bold">{priceInBtc}</td>
      <td>
        <div className="flex text-red-500">
          <FiArrowDownRight />
          <span>{within24h}</span>
        </div>
      </td>
      <td>
        <div className="flex text-red-500">
          <FiArrowDownRight />
          <span>{within7d}</span>
        </div>
      </td>
      <td>
        <img src={`${chartIcon}`} alt={`${chartAlt}`} className="h-10" />
      </td>
    </tr>
  );
};

export default MarketTableData;
