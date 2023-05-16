import { CiSearch } from "react-icons/ci";
import { BiEditAlt } from "react-icons/bi";

type Props = {};

const WatchlistComponent = (props: Props) => {
  return (
    <div className="bg-white rounded-[10px] p-5 flex flex-col lg:flex-row items-center justify-between">
      <h1 className="text-2xl font-bold">Watchlist</h1>
      <div className="mt-5 lg:mt-0 flex items-center border p-2 rounded-md">
        <CiSearch size={25} className='mr-3' />
        <input type="text" placeholder="Search Coin Here..." className="outline-none" />
      </div>
      <div className="mt-5 lg:mt-0 flex">
        <div className="flex mr-10 border-[2px] border-blue-300 p-2 rounded-md">
          <span>Edit Watchlist</span>
          <BiEditAlt size={25} className='ml-2 text-blue-300' />
        </div>
        <select className="border-[2px] border-blue-300 p-2 rounded-md">
          <option>Sort By</option>
          <option>Rank</option>
          <option>Name</option>
          <option>Price</option>
          <option>Price in Btc</option>
          <option>24h</option>
          <option>7d</option>
          <option>Chart</option>
        </select>
      </div>
    </div>
  );
};

export default WatchlistComponent;
