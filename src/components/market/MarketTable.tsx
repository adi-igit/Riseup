import { useState } from "react";
import TopGainers from "./categories/TopGainers";
import All from "./categories/All";
import TopLosers from "./categories/TopLosers";
import NewelyAdded from "./categories/NewelyAdded";
import RecentlyAdded from "./categories/RecentlyAdded";
import Others from "./categories/Others";

type Props = {};

function MarketTable({}: Props) {
  const [categorie, setCategorie] = useState(0);
  return ( 
    <div className="mt-10 bg-white rounded-[10px] p-5 scrollbar-thin scrollbar-thumb-cyan-400 overflow-x-scroll">
      <div className="flex flex-col lg:flex-row justify-between">
        <h1 className="text-2xl font-bold text-gray-400">Market</h1>
        <ul className="mt-5 lg:mt-0 flex flex-wrap lg:flex-nowrap">
          <li
            onClick={() => setCategorie(0)}
            className="mt-2 lg:mt-0 mr-3 p-2 rounded-[5px] text-blue-400 font-bold border border-blue-300 hover:text-white hover:bg-blue-400 cursor-pointer"
          >
            All
          </li>
          <li
            onClick={() => setCategorie(1)}
            className="mt-2 lg:mt-0 mr-3 p-2 rounded-[5px] text-blue-400 font-bold border border-blue-300 hover:text-white hover:bg-blue-400 cursor-pointer"
          >
            Top Gainers
          </li>
          <li
            onClick={() => setCategorie(2)}
            className="mt-2 lg:mt-0 mr-3 p-2 rounded-[5px] text-blue-400 font-bold border border-blue-300 hover:text-white hover:bg-blue-400 cursor-pointer"
          >
            Top Losers
          </li>
          <li
            onClick={() => setCategorie(3)}
            className="mt-2 lg:mt-0 mr-3 p-2 rounded-[5px] text-blue-400 font-bold border border-blue-300 hover:text-white hover:bg-blue-400 cursor-pointer"
          >
            Newely Added
          </li>
          <li
            onClick={() => setCategorie(4)}
            className="mt-2 lg:mt-0 mr-3 p-2 rounded-[5px] text-blue-400 font-bold border border-blue-300 hover:text-white hover:bg-blue-400 cursor-pointer"
          >
            Recent Added
          </li>
          <li
            onClick={() => setCategorie(5)}
            className="mt-2 lg:mt-0 mr-3 p-2 rounded-[5px] text-blue-400 font-bold border border-blue-300 hover:text-white hover:bg-blue-400 cursor-pointer"
          >
            Others
          </li>
        </ul>
        <select className="mt-5 lg:mt-0 border border-blue-300 text-blue-400 font-bold p-2 rounded-[5px]">
          <option value="">Sort By</option>
          <option value="">Rank</option>
          <option value="">Name</option>
          <option value="">Price</option>
          <option value="">Price in BTC</option>
        </select>
      </div>
      <table className="mt-16 w-[150vw] lg:w-full ">
        <tr className="h-10 border-b text-left">
          <th>Rank</th>
          <th>Name</th>
          <th>Price</th>
          <th>Price in Btc</th>
          <th>24h</th>
          <th>7d</th>
          <th>Chart</th>
        </tr>

        {categorie === 0 && <All />}
        {categorie === 1 && <TopGainers />}
        {categorie === 2 && <TopLosers />}
        {categorie === 3 && <NewelyAdded />}
        {categorie === 4 && <RecentlyAdded />}
        {categorie === 5 && <Others />}
      </table>
    </div>
  );
}

export default MarketTable;
