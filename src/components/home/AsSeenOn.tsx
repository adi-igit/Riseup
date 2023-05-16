import Companies from "../../assets/images/companies.png";
import Logo from "../../assets/images/logo.png";
import { motion } from "framer-motion";

type Props = {};

const AsSeenOn = ({}: Props) => {
  return (
    <div className="mt-[150px]">
      <h1 className="text-center text-2xl lg:text-4xl font-bold mb-20">As seen On</h1>
      <div className="px-5 lg:px-20 mb-32">
        <img src={Companies} alt="companies-img" />
      </div>
      <div id='get-the-card' className="bg-[#F5F3FE] mx-2 lg:mx-20 lg:p-20 p-5 rounded-[20px] flex flex-col lg:flex-row min-h-[200vh]">
        <form className="lg:w-[65%]">
          <h1 className="text-2xl lg:text-3xl lg:leading-[50px] font-bold max-w-[600px]">
            Looking for{" "}
            <span className="text-[#1111FF]">crypto liquidity solutions</span> ?{" "}
            <span className="text-[#A0A0CD]">Get in touch with us</span>
          </h1>
          <div className="mt-10">
            <input
              type="text"
              placeholder="First name*"
              className="w-[80%] py-3 px-10 rounded-[10px] border outline-none"
            />
            <input
              type="text"
              placeholder="Last name*"
              className="mt-5 w-[80%] py-3 px-10 rounded-[10px] border outline-none"
            />
          </div>
          <div className="mt-5">
            <input
              type="email"
              placeholder="Business email*"
              className="w-[80%] py-3 px-10 rounded-[10px] border outline-none"
            />
            <input
              type="text"
              placeholder="Business telephone"
              className="mt-5 w-[80%] py-3 px-10 rounded-[10px] border outline-none"
            />
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Company"
              className="w-[80%] py-3 px-10 rounded-[10px] border outline-none"
            />
            <select
              name="location"
              className="mt-5 w-[80%] py-3 px-10 rounded-[10px] border outline-none"
            >
              <option value="Unites States">Location</option>
              <option value="Unites States">United Kingdom</option>
              <option value="Unites States">China</option>
              <option value="Unites States">India</option>
              <option value="Unites States">Brazil</option>
              <option value="Unites States">Japan</option>
            </select>
          </div>
          <textarea
            className="mt-5 w-full h-[250px] lg:w-[95%] lg:h-[30%] p-3 rounded-[10px] outline-none"
            placeholder="How can we help?"
          ></textarea>
          <div className="mt-10 flex flex-col lg:flex-row items-center">
            <p className="text-[#8C8C9B] lg:max-w-[600px] mr-5">
              By submitting your email address, you agree to receive occasional
              marketing messages from Zoidpay, from which you can unsubscribe at
              any time. For more information please see our privacy policy.
            </p>
            <button className="my-10 lg:my-0 py-2 px-10 bg-[#3838DF] rounded-[5px] text-white">
              Submit
            </button>
          </div>
        </form>

        <div className="mt-10 lg:mt-0 lg:w-[35%] h-max bg-white p-10 rounded-[10px]">
          <div className="flex justify-center items-center pb-5 border-b">
            <img src={Logo} alt="logo-img" className="w-10" />
            <h1 className="ml-2 text-xl font-bold">RiseUp</h1>
          </div>
          <div>
            <div className="mt-5">
              <label htmlFor="select-crypto">Choose crypto to pay with:</label>
              <select
                id="select-crypto"
                className="mt-2 border w-full p-3 rounded-[10px]"
              >
                <option>Select Crypto</option>
                <option>Bitcoin</option>
              </select>
            </div>
            <div className="mt-5">
              <label htmlFor="currency">In what currency is the checkout</label>
              <select
                id="currency"
                className="mt-2 border w-full p-3 rounded-[10px]"
              >
                <option value="">USD</option>
                <option value="">EUR</option>
              </select>
            </div>
            <div className="mt-5">
              <label htmlFor="">What is the checkout total?</label>
              <input
                type="number"
                placeholder="0"
                className="mt-2 border w-full p-3 rounded-[10px]"
              />
            </div>
          </div>
          <button className="mt-10 w-full py-2 rounded-[5px] bg-[#4D4DED]">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AsSeenOn;
