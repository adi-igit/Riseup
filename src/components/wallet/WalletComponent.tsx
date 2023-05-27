type Props = {};

const WalletComponent = ({}: Props) => {
  return (
    <div className="bg-white rounded-[10px] p-5 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">Wallet</h1>
        <p className="mt-5">Balance in Wallet</p>
        <span>$ 15,300.05</span>
      </div>
      <div className="w-[55%] lg:w-[40%]">
        <div className="flex">
          <h3 className="font-bold">Total Deposit</h3>
          <span className="ml-auto">$1252.93</span>
        </div>
        <div className="mt-2 flex">
          <h3>Total Withdrawals:</h3>
          <span className="ml-auto text-red-500">$152.9</span>
        </div>
      </div>
    </div>
  );
};

export default WalletComponent;
