import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import QrCode from '../assets/images/qr-code.png'
import { motion } from "framer-motion";

type Props = {};

function Login({}: Props) {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [resendLink, setResendLink] = useState(false);
  const [qrCode, setQrCode] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {forgotPassword ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-screen bg-[#1A1A1A]"
        >
          {resendLink ? (
            <>
              <div className="w-max ml-auto p-5">
                <CgClose
                  size={25}
                  className=" text-gray-500 cursor-pointer"
                  onClick={() => setForgotPassword(false)}
                />
              </div>
              <div className="w-[90%] md:w-[50%] lg:w-[35%] mx-auto mt-[100px] bg-white p-5 rounded-[10px]">
                <h2 className="mt-[200px] text-2xl font-bold text-center">
                  Password Reset Link Sent On exam***@example.com
                </h2>
                <p className="mt-5 text-gray-600 text-sm text-center">
                  Please check Your Email to Continue
                </p>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="w-max ml-auto p-5">
                <CgClose
                  size={25}
                  className=" text-gray-500 cursor-pointer"
                  onClick={() => setForgotPassword(false)}
                />
              </div>
              <div className="w-[90%] md:w-[50%] lg:w-[35%] mx-auto mt-[100px] bg-white p-5 rounded-[10px]">
                <h1 className="text-2xl font-bold">
                  Forgot Your Password Don't Worry
                </h1>
                <p className="mt-5 text-sm text-gray-600">
                  Enter your email below, you will receive an email with
                  instructions on how to reset your password in a few minutes.
                </p>
                <input
                  type="email"
                  placeholder="Email or Phone"
                  className="mt-10 w-full p-3 border-b outline-none"
                />
                <button className="mt-10 w-full rounded-md p-3 bg-blue-500 text-white">
                  Forgot Password
                </button>
                <p
                  onClick={() => setResendLink(true)}
                  className="mt-5 text-center text-gray-600 cursor-pointer"
                >
                  Resend Link
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`${qrCode && "hidden"} bg-[#EEF7FF] min-h-[100vh] pb-10 lg:pb-0 lg:h-screen`}
        >
          <div className="w-max mx-auto flex items-center">
            <Link to="/">
              <img src={Logo} alt="logo" className="w-14" />
            </Link>
            <h2 className="ml-2 text-2xl font-bold text-blue-500">Rise Up</h2>
          </div>
          <form className="w-[90%] md:w-[50%] lg:w-[35%] bg-white p-10 rounded-[10px] shadow-md flex flex-col mx-auto mt-[50px]">
            <h1 className="text-2xl font-bold">Welcome To Log In</h1>
            <div className="mt-2">
              <span>Don't Have An Account?</span>
              <Link to="/register">
                <span className="ml-3 underline cursor-pointer">
                  Register Here
                </span>
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
            <span
              onClick={() => setForgotPassword(true)}
              className="mt-2 text-sm text-right cursor-pointer"
            >
              Forgot Password
            </span>
            <button className="mt-5 w-full p-3 rounded-md text-white bg-blue-500">
              Log In
            </button>
            <div className="my-5 flex justify-center items-center">
              <div className="w-full border" />
              <p className="text-center mx-3">or</p>
              <div className="w-full border" />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setQrCode(true);
              }}
              className="mt-5 w-full p-3 rounded-md text-blue-400 border-[2px] border-blue-300 hover:text-white hover:bg-blue-500"
            >
              Countinue Via QR Code
            </button>
          </form>
        </motion.div>
      )}

      {qrCode && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-screen bg-[#1A1A1A]"
        >
          <div className="w-max ml-auto p-5">
            <CgClose
              size={25}
              className=" text-gray-500 cursor-pointer"
              onClick={() => setQrCode(false)}
            />
          </div>
          <div className="w-[90%] md:w-[50%] lg:w-[35%] mx-auto mt-[100px] bg-white p-5 rounded-[10px]">
            <img src={QrCode} alt="qr-code-img" className="w-[200px] mx-auto" />
            <h2 className="mt-10 text-2xl font-bold text-center">
              Log In With Qr Code
            </h2>
            <p className="mt-5 text-gray-600 text-sm text-center">
              (Scan Code From dynamic Mobile App)
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Login;
