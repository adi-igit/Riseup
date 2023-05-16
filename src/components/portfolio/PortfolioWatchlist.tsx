import WatchlistItem from "./WatchlistItem";

type Props = {};

const PortfolioWatchlist = ({}: Props) => {
  return (
    <div className="mt-10 lg:mt-0 ml-5 lg:ml-10 bg-white rounded-[10px] p-5">
      <h2 className="text-2xl font-bold pb-5 border-b">Watchlist</h2>
      <WatchlistItem />
      <WatchlistItem />
      <WatchlistItem />
      <WatchlistItem />
      <WatchlistItem />
    </div>
  );
};

export default PortfolioWatchlist;
