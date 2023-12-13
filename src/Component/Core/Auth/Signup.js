import React, { useState } from "react";
import facebook from "../../../Assets/AuthAssets/f_logo_RGB-Blue_1024.png";
import google from "../../../Assets/AuthAssets/search.png";
import { GoEye, GoEyeClosed } from "react-icons/go";

const Signup = ({ setformType }) => {
    const [showPassword, setshowPassword] = useState(false)
    const [showConfirmaPassword, setshowConfirmaPassword] = useState(false)
  return (
    <div className="lg:w-[380px]  flex flex-col justify-between mt-6 lg:px-5 ">
      <form className=" flex flex-col gap-4">
        <div>
          <div className=" flex justify-between">
            <input
              type="text"
              placeholder="First name"
              className=" border-[1px] border-[#D9D9DB] text-[#8A8A8A] bg-[#F7F8FA] p-2 w-full font-semibold"
            />
            <input
              type="text"
              placeholder="Last name"
              className=" border-[1px] border-[#D9D9DB] text-[#8A8A8A] bg-[#F7F8FA] p-2 w-full font-semibold"
            />
          </div>
          <input
            type="Email"
            placeholder="Email"
            className=" border-[1px] border-[#D9D9DB] text-[#8A8A8A] bg-[#F7F8FA] p-2 w-full font-semibold"
          />
          <div className=" relative">
            <input
              type={`${showPassword? "text":"password"}`}
              placeholder="Password"
              className=" border-[1px] border-[#D9D9DB] text-[#8A8A8A] bg-[#F7F8FA] p-2 w-full font-semibold"
            />
            <button
  type="button"
  onClick={() => setshowPassword(!showPassword)}
  className=" absolute right-3 top-3 text-[#8A8A8A]"
>
  {showPassword ? <GoEyeClosed /> : <GoEye />}
</button>
          </div>
          <div className=" relative">

          <input
            type={`${showConfirmaPassword? "text":"password"}`}
            placeholder="Confirm Password"
            className=" border-[1px] border-[#D9D9DB] text-[#8A8A8A] bg-[#F7F8FA] p-2 w-full font-semibold"
          />
            <button
  type="button"
  onClick={() => setshowConfirmaPassword(!showConfirmaPassword)}
  className=" absolute right-3 top-3 text-[#8A8A8A]"
>
  {showConfirmaPassword ? <GoEyeClosed /> : <GoEye />}
</button>
          </div>
          
        </div>
        <button className=" w-full bg-[#2F6CE5] text-white font-semibold rounded-full p-2 lg:block hidden">
          Create Account
        </button>
        <div className=" lg:hidden block">
          <div className=" flex justify-between items-center">
            <button className=" w-fit bg-[#2F6CE5] text-white font-semibold rounded-full p-2 px-10">
              Create Account
            </button>
            <p
              className=" text-[#495057] underline cursor-pointer  text-[13px]"
              onClick={() => setformType("login")}
            >
              or, Sign In
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};



export default Signup;
