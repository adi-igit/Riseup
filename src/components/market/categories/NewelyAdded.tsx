import MarketTableData from "../MarketTableData";
import HusdIcon from "../../../assets/icons/husd-icon.png";
import EthereumIcon from "../../../assets/icons/ethereum-icon.png";
import FantomIcon from "../../../assets/icons/fantom-icon.png";
import NeutrinoIcon from "../../../assets/icons/neutrino-icon.png";
import NanoIcon from "../../../assets/icons/nano-icon.png";
import UmaIcon from "../../../assets/icons/uma-icon.png";
import SandboxIcon from "../../../assets/icons/sandbox-icon.png";
import IconIcon from "../../../assets/icons/icon-icon.png";
import V from "../../../assets/icons/V.png";
import ChartRedIcon from "../../../assets/icons/icons8-chart-96-red.png";
import BitcoinIcon from "../../../assets/icons/icons8-bitcoin-96.png";

type Props = {};

const NewelyAdded = ({}: Props) => {
  return (
    <>
      <MarketTableData
        rank="01"
        cryptoIcon={NeutrinoIcon}
        cryptoAlt="neutrino-icon"
        name="Neutrino/NTI"
        price="$ 1.2018"
        priceInBtc="₿ 0.20546"
        within24h="-0.26%"
        within7d="-23.62%"
        chartIcon={ChartRedIcon}
        chartAlt="chart-icon"
      />
      <MarketTableData
        rank="02"
        cryptoIcon={UmaIcon}
        cryptoAlt="uma-icon"
        name="Uma/UMA"
        price="$ 2.3937"
        priceInBtc="₿ 0.18123"
        within24h="-3.74%"
        within7d="-14.22%"
        chartIcon={ChartRedIcon}
        chartAlt="chart-icon"
      />
      <MarketTableData
        rank="03"
        cryptoIcon={EthereumIcon}
        cryptoAlt="ethereum-icon"
        name="Ethereum/ETH"
        price="$ 1,755.90"
        priceInBtc="₿ 0.664"
        within24h="-4.12%"
        within7d="-7.12%"
        chartIcon={ChartRedIcon}
        chartAlt="chart-icon"
      />
      <MarketTableData
        rank="04"
        cryptoIcon={BitcoinIcon}
        cryptoAlt="bitcoin-icon"
        name="Bitcoin/BTC"
        price="$ 25,592.80"
        priceInBtc="₿ 1"
        within24h="-2.61%"
        within7d="-9.79%"
        chartIcon={ChartRedIcon}
        chartAlt="chart-icon"
      />

      <MarketTableData
        rank="05"
        cryptoIcon={FantomIcon}
        cryptoAlt="fantom-icon"
        name="Fantom/FTM"
        price="$ 0.3661"
        priceInBtc="₿ 0.22645"
        within24h="-1.67%"
        within7d="-14.91%"
        chartIcon={ChartRedIcon}
        chartAlt="chart-icon"
      />
      <MarketTableData
        rank="06"
        cryptoIcon={NanoIcon}
        cryptoAlt="nano-icon"
        name="Nano/NNO"
        price="$ 0.7203"
        priceInBtc="₿ 0.19356"
        within24h="-2.57%"
        within7d="-9.43%"
        chartIcon={ChartRedIcon}
        chartAlt="chart-icon"
      />
      <MarketTableData
        rank="07"
        cryptoIcon={IconIcon}
        cryptoAlt="icon-icon"
        name="Icon/ICX"
        price="$ 0.2356"
        priceInBtc="₿ 0.17654"
        within24h="-3.74%"
        within7d="14.22%"
        chartIcon={ChartRedIcon}
        chartAlt="chart-icon"
      />
      <MarketTableData
        rank="08"
        cryptoIcon={SandboxIcon}
        cryptoAlt="sandbox-icon"
        name="Sandbox/SBX"
        price="$ 0.4841"
        priceInBtc="₿ 0.18123"
        within24h="-3.74%"
        within7d="-14.22%"
        chartIcon={ChartRedIcon}
        chartAlt="chart-icon"
      />
      <MarketTableData
        rank="09"
        cryptoIcon={V}
        cryptoAlt="voyager-icon"
        name="Voyager/VGR"
        price="$ 0.1352"
        priceInBtc="₿ 0.16987"
        within24h="-10.72%"
        within7d="-35.24%"
        chartIcon={ChartRedIcon}
        chartAlt="chart-icon"
      />
      <MarketTableData
        rank="10"
        cryptoIcon={HusdIcon}
        cryptoAlt="husd-icon"
        name="HusdIcon"
        price="$ 0.05253"
        priceInBtc="₿ 0.17234"
        within24h="-2.96%"
        within7d="-6.68%"
        chartIcon={ChartRedIcon}
        chartAlt="chart-icon"
      />
    </>
  );
};

export default NewelyAdded;
