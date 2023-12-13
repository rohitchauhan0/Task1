import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import Signup from "./Signup";
import Login from "./Login";
import authImage from "../../../Assets/AuthAssets/Group 3.png";
import facebook from "../../../Assets/AuthAssets/f_logo_RGB-Blue_1024.png";
import google from "../../../Assets/AuthAssets/search.png";

const Template = ({ cancelHandler }) => {
  const [formType, setformType] = useState("signin");
  return (
    <div className=" w-full h-full inset-0 fixed bg-black flex lg:items-center items-end justify-center bg-opacity-75 z-[10000] overflow-auto ">
      <div className=" w-[360px] lg:w-[750px] h-[540px] lg:h-[553px] bg-white relative rounded-lg">
        <div>
          <ImCancelCircle
            className=" text-xl  rounded-full bg-white cursor-pointer absolute right-[48%] lg:right-0 -top-8"
            onClick={cancelHandler}
          />
        </div>
        <div className=" lg:block hidden">
        <div className=" w-full h-[50px] bg-[#EFFFF4] rounded-lg flex items-center justify-center text-[#008A45] font-semibold leading-[16px] ">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </div>
        </div>
        <div className=" flex justify-between px-5 ">
          <div className=" flex flex-col gap-8 pt-10 w-[380px]  ">
            {formType === "signup" ? (
              <p className=" text-black text-[24px] font-bold px-5">
                Create Account
              </p>
            ) : (
              <p className=" text-black text-[24px] font-bold px-5">Sign In</p>
            )}

            {formType === "signup" ? <Signup setformType={setformType} /> : <Login setformType={setformType} cancelHandler={cancelHandler}  />}
            <div className=" flex flex-col gap-4 w-full items-center">
              <div className=" w-[90%] p-2 border-[0.6px] border-[#D9D9DB] flex items-center justify-center gap-2">
                <img src={facebook} alt="" />
                {formType === "signup" ? (
                  <p className=" text-[14px]">Sign up with Facebook</p>
                ) : (
                  <p className=" text-[14px]">Sign In with Facebook</p>
                )}
              </div>
              <div className=" w-[90%]  p-2 border-[0.6px] border-[#D9D9DB] flex items-center justify-center gap-2">
                <img src={google} alt="" />
                {formType === "signup" ? (
                  <p className=" text-[14px]">Sign up with Google</p>
                ) : (
                  <p className=" text-[14px]">Sign In with Google</p>
                )}
              </div>
             <div>
                 {formType === "signup" ? (
                <p className=" text-[#000000] text-[10px] lg:hidden block">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
                ) : (
                  <p className=" text-[14px]">Forgot password</p>
                )}
             </div>
            </div>
          </div>

        <div className=" lg:block hidden">
        <div className="w-[320px]  flex flex-col justify-between h-[445px] mt-6 items-center">
            {formType === "signup" ? (
              <p className=" text-[14px]">
                Already have an account?{" "}
                <span
                  className=" cursor-pointer text-[#2F6CE5] font-semibold"
                  onClick={() => setformType("signin")}
                >
                  Sign In
                </span>
              </p>
            ) : (
              <p className=" text-[14px]">
                Don't have an account yet?{" "}
                <span
                  className=" cursor-pointer text-[#2F6CE5] font-semibold"
                  onClick={() => setformType("signup")}
                >
                  create new for free!
                </span>
              </p>
            )}
            <img src={authImage} alt="" className=" w-[320px] h-[320px] lg:block hidden" />
            {formType === "signup" && (
              <p className=" text-[#000000] text-[10px]">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
