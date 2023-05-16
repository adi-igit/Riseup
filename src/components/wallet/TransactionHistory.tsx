import TrHistoryTd from "./TrHistoryTd";

type Props = {};

const TransactionHistory = ({}: Props) => {
  return (
    <div className="mt-10 bg-white rounded-[10px] p-5 scrollbar-thin scrollbar-thumb-cyan-400 overflow-x-scroll lg:overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between">
        <h2 className="text-2xl font-bold text-gray-600">
          Transactions History
        </h2>
        <div className="mt-2 lg:mt-0">
          <input type="checkbox" />
          <span className="ml-2">Hide Rejected Transactions</span>
        </div>
      </div>
      <table className="mt-10 w-[150vw] lg:w-full text-left">
        <tr className="h-16 border-b">
          <th>Amount</th>
          <th>Action</th>
          <th>Date & Time</th>
          <th>Method</th>
          <th>Status</th>
        </tr>
        <TrHistoryTd />
        <TrHistoryTd />
        <TrHistoryTd />
        <TrHistoryTd />
        <TrHistoryTd />
        <TrHistoryTd />
        <TrHistoryTd />
        <TrHistoryTd />
        <TrHistoryTd />
        <TrHistoryTd />
      </table>
    </div>
  );
};

export default TransactionHistory;
