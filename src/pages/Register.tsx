import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { motion } from "framer-motion";

type Props = {};

const Register = ({}: Props) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#EEF7FF] min-h-[100vh] pb-10 lg:pb-0 lg:h-screen">
      <div className="w-max mx-auto flex items-center">
        <Link to='/'>
          <img src={Logo} alt="logo" className="w-20" />
        </Link>
        <h2 className="ml-2 text-2xl font-bold text-blue-500">Rise Up</h2>
      </div>
      <form className="w-[90%] md:w-[50%] lg:w-[35%] bg-white p-10 rounded-[10px] shadow-md flex flex-col mx-auto mt-[50px]">
        <h1 className="text-2xl font-bold">Create Account</h1>
        <div className="mt-2">
          <span>Have An Account?</span>
          <Link to="/login">
            <span className="ml-3 underline cursor-pointer">Login Here</span>
          </Link>
        </div>
        <input
          type="email"
          placeholder="Email or Phone"
          className="mt-5 p-3 rounded-md border-b outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="mt-5 p-3 rounded-md border-b outline-none"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="mt-5 p-3 rounded-md border-b outline-none"
        />
        <div className="mt-10">
          <input type="checkbox" />
          <span className="text-sm ml-2">
            I have read and agree to Terms of Service
          </span>
        </div>
        <button className="mt-10 w-full p-3 rounded-md text-white bg-blue-500">
          Create Account
        </button>
      </form>
    </motion.div>
  );
};

export default Register;
