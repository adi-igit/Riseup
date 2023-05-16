import PayTm from '../../assets/images/paytm.png'
import VisaMc from '../../assets/images/visa-mc.png'

type Props = {};

const AddFund = ({}: Props) => {
  return (
    <div className="mt-10 lg:mt-0 ml-10 bg-white rounded-[10px] p-5">
      <h2 className="text-2xl font-bold pb-5 border-b">Add Fund</h2>
      <div className="mt-5 flex justify-between">
        <div>
          <input type="checkbox" />
          <label className="ml-2">UPI</label>
        </div>
        <span className="underline">user@example</span>
      </div>
      <p className="mt-10">Enter Amount (USD)</p>
      <input type="text" className="w-full rounded-md mt-1 p-3 border outline-none" />
      <p className="mt-2">No minimum Amount Requirment</p>
      <button className="mt-10 w-full p-3 rounded-md bg-blue-500 text-white">
        Continue
      </button>
      <div className="mt-5 flex justify-between">
        <div>
          <input id="wallet" type="checkbox" />
          <label htmlFor="wallet" className="ml-2">
            Wallet
          </label>
        </div>
        <img src={PayTm} alt="paytm-img" className='w-16 object-contain' />
      </div>
      <div className="mt-5 flex justify-between">
        <div>
          <input id="debit" type="checkbox" />
          <label htmlFor="debit" className="ml-2">Debit or Credit Card</label>
        </div>
        <img src={VisaMc} alt="visa-img" className='w-16 object-contain' />
      </div>
    </div>
  );
};

export default AddFund;
