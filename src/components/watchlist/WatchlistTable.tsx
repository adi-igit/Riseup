import BitcoinIcon from "../../assets/icons/icons8-bitcoin-96.png";
import NanoIcon from "../../assets/icons/nano-icon.png";
import UmaIcon from "../../assets/icons/uma-icon.png";
import ChartRedIcon from "../../assets/icons/icons8-chart-96-red.png";
import FantomIcon from "../../assets/icons/fantom-icon.png";
import NeutrinoIcon from "../../assets/icons/neutrino-icon.png";
import EthereumIcon from "../../assets/icons/ethereum-icon.png";
import WatchlistTd from "./WatchlistTd";

type Props = {};

const WatchlistTable = ({}: Props) => {
  return (
    <div className="mt-10 bg-white rounded-[10px] p-5 scrollbar-thin scrollbar-thumb-cyan-400 overflow-x-scroll lg:overflow-hidden">
      <table className="w-[150vw] lg:w-full text-left">
        <tr className="h-16 border-b">
          <th>Rank</th>
          <th>Name</th>
          <th>Price</th>
          <th>Price In Btc</th>
          <th>24h</th>
          <th>7d</th>
          <th>Chart</th>
        </tr>
        <WatchlistTd
          rank="01"
          cryptoIcon={`${BitcoinIcon}`}
          cryptoAlt="bitcoin-icon"
          name="Bitcoin/BTC"
          price="$ 25,592.80"
          priceInBtc="₿ 1"
          within24h="-2.61%"
          within7d="-9.79%"
          chartIcon={`${ChartRedIcon}`}
          chartAlt="chart-icon"
        />
        <WatchlistTd
          rank="02"
          cryptoIcon={`${EthereumIcon}`}
          cryptoAlt="ethereum-icon"
          name="Ethereum/ETH"
          price="$ 1,755.90"
          priceInBtc="₿ 0.664"
          within24h="-4.12%"
          within7d="-7.12%"
          chartIcon={`${ChartRedIcon}`}
          chartAlt="chart-icon"
        />
        <WatchlistTd
          rank="03"
          cryptoIcon={`${FantomIcon}`}
          cryptoAlt="fantom-icon"
          name="Fantom/FTM"
          price="$ 0.3661"
          priceInBtc="₿ 0.22645"
          within24h="-1.67%"
          within7d="-14.91%"
          chartIcon={`${ChartRedIcon}`}
          chartAlt="chart-icon"
        />
        <WatchlistTd
          rank="04"
          cryptoIcon={`${NeutrinoIcon}`}
          cryptoAlt="neutrino-icon"
          name="Neutrino/NTI"
          price="$ 1.2018"
          priceInBtc="₿ 0.20546"
          within24h="-0.26%"
          within7d="-23.62%"
          chartIcon={`${ChartRedIcon}`}
          chartAlt="chart-icon"
        />
        <WatchlistTd
          rank="05"
          cryptoIcon={`${NanoIcon}`}
          cryptoAlt="nano-icon"
          name="Nano/NNO"
          price="$ 0.7203"
          priceInBtc="₿ 0.19356"
          within24h="-2.57%"
          within7d="-9.43%"
          chartIcon={`${ChartRedIcon}`}
          chartAlt="chart-icon"
        />
        <WatchlistTd
          rank="06"
          cryptoIcon={`${UmaIcon}`}
          cryptoAlt="umma-icon"
          name="Uma/UMA"
          price="$ 2.3937"
          priceInBtc="₿ 0.18123"
          within24h="-6.49%"
          within7d="+4.70%"
          chartIcon={`${ChartRedIcon}`}
          chartAlt="chart-icon"
        />
      </table>
    </div>
  );
};

export default WatchlistTable;
