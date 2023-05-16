import InvestedCoinsTd from "./investedCoinsTd";

type Props = {};

const InvestedCoins = ({}: Props) => {
  return (
    <div className="bg-white mt-10 rounded-[10px] p-5 overflow-x-scroll">
      <div className="mt-10 flex justify-between">
        <h2 className="text-2xl font-bold text-gray-500">Total Invested Coins</h2>
        <select className="border-[2px] w-max h-max border-blue-300 p-2 rounded-md outline-none">
          <option>Sort By</option>
          <option>Pair / Holdings</option>
          <option>In Order Qty</option>
          <option>Price / Avg But @</option>
          <option>Holding Assets</option>
          <option>Total Asset Value</option>
          <option>Profit / Loss</option>
        </select>
      </div>
      <table className="mt-10 lg:mt-0 w-[150vw] lg:w-full text-left">
        <tr className="h-16 border-b">
          <th>Pair / Holdings</th>
          <th>In Order Qty</th>
          <th>Price / Avg But @</th>
          <th>Holding Assets</th>
          <th>Total Asset Value</th>
          <th>Profit / Loss</th>
        </tr>
        <InvestedCoinsTd />
        <InvestedCoinsTd />
        <InvestedCoinsTd />
        <InvestedCoinsTd />
        <InvestedCoinsTd />
        <InvestedCoinsTd />
        <InvestedCoinsTd />
        <InvestedCoinsTd />
        <InvestedCoinsTd />
        <InvestedCoinsTd />
      </table>
    </div>
  );
};

export default InvestedCoins;
