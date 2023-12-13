import React from "react";
import wallpaper from "../Assets/NavbarAssets/Rectangle 2.png";
import wallpaper1 from "../Assets/NavbarAssets/Rectangle 2 (1).png";
import { FaCalendarWeek } from "react-icons/fa";
import Section1 from "../Component/Core/HomePageResponsive.js/Section1";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdGroupAdd, MdModeEdit } from "react-icons/md";
import Card from "../Component/Core/HomePage/Card";
import cardImage from "../Assets/CardAssets/Rectangle 5.png";
import cardImage2 from "../Assets/CardAssets/Rectangle 5 (1).png";
import cardImage3 from "../Assets/CardAssets/Rectangle 5 (2).png";
import person1 from "../Assets/CardAssets/Rectangle 3.png";
import person2 from "../Assets/CardAssets/Rectangle 3 (1).png";
import person3 from "../Assets/CardAssets/Rectangle 3 (2).png";
import person4 from "../Assets/CardAssets/Rectangle 3 (3).png";
import { FaLocationDot } from "react-icons/fa6";
import { PiBagBold } from "react-icons/pi";
import { MdEdit } from "react-icons/md";
import { LiaExclamationCircleSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { IoIosLogOut } from "react-icons/io";
import { setToken } from "../Slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa6";
import { RECOMMENDED_USER } from "../Data/Recommended";
import "../App.css";

const filterData = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Article",
  },
  {
    id: 3,
    title: "Event",
  },
  {
    id: 4,
    title: "Education",
  },
  {
    id: 5,
    title: "Job",
  },
];

const Homepage = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className=" w-full h-full lg:bg-white bg-[#F1F3F5]">
        {/* section 1 */}

        <div className=" bg-black lg:block hidden">
          <div className=" relative">
            <img
              src={wallpaper}
              alt=""
              className=" w-full h-full object-cover opacity-50 "
            />
          </div>
          <div className=" absolute text-white z-[1000] left-[200px] top-[358px] ">
            <h2 className=" text-[36px] leading-[46.8px] font-bold">
              Computer Engineering
            </h2>
            <p className=" text-[18px] leading-[23.4px]">
              142,765 Computer Engineers follow this
            </p>
          </div>
        </div>

        <Section1 />

        {/* section 2 */}
        <div className=" lg:w-[1040px] mx-auto pb-6    lg:mt-8">
          <div className=" lg:block hidden">
            <div className=" flex items-center justify-between ">
              <div className=" flex items-center gap-3 text-[16px] text-[#8A8A8A]">
                <div className=" relative">
                  <p className=" text-black font-semibold">All Posts(32)</p>
                  <div className=" w-full h-[1.5px] bg-black absolute -bottom-[21px]"></div>
                </div>
                <p>Article </p>
                <p>Event</p>
                <p>Education</p>
                <p>Job</p>
              </div>
              <div className=" flex gap-2 items-center">
                <div className=" text-black font-semibold flex items-center gap-1 bg-[#EDEEF0] rounded-md p-2 ">
                  <p>Write a Post</p>
                  <TiArrowSortedDown />
                </div>
                {token === null ? (
                  <div className=" text-white font-semibold flex items-center gap-1 bg-[#2F6CE5] rounded-md p-2 ">
                    <MdGroupAdd className=" " />
                    <p>Join group</p>
                  </div>
                ) : (
                  <div
                    className=" text-[#989899] border font-semibold flex items-center gap-1  rounded-md p-2  cursor-pointer border-[#989899] "
                    onClick={() => {
                      dispatch(setToken(null));
                      localStorage.removeItem("dummyToken");
                      navigate("/");
                    }}
                  >
                    <IoIosLogOut />
                    <p>Leave group</p>
                  </div>
                )}
              </div>
            </div>
            <div className=" h-[2px] w-full bg-[#E0E0E0] mt-3"></div>
          </div>
          <div className=" lg:hidden block bg-white p-2">
            <div className=" w-full flex itce' justify-between px-3 ">
              <h2 className=" text-[#212529] font-bold text-lg">Posts(368)</h2>
              <select
                name=""
                id=""
                className=" w-[106px] h-[32px] text-black bg-[#F1F3F5] "
              >
                {filterData.map((data) => {
                  return (
                    <option value={data.title} key={data.id}>
                      {data.title}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className=" w-full  lg:mt-4">
            <div className=" flex items-start justify-between">
              <div className=" w-full lg:w-[692px]  flex flex-col gap-5">
                <Card
                  image={cardImage}
                  text1={"✍️ Article"}
                  text2={
                    "What if famous brands had regular fonts? Meet RegulaBrands!"
                  }
                  personImage={person1}
                  para={
                    "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                  }
                  name={"Sarthak Kamra"}
                />
                <Card
                  image={cardImage2}
                  text1={"🔬️ Education"}
                  para={
                    "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                  }
                  text2={
                    "Tax Benefits for Investment under National Pension Scheme launched by Government"
                  }
                  personImage={person2}
                  name={"Sarah West"}
                />
                <Card
                  image={cardImage3}
                  text1={"🗓️ Meetup"}
                  text2={"Finance & Investment Elite Social Mixer @Lujiazui"}
                  para={null}
                  personImage={person3}
                  name={"Ronal Jones"}
                  divText1={"Fri, 12 Oct, 2018"}
                  divText2={"Noida, India"}
                  btnText={"Visit Website"}
                  color={"#E56135"}
                  iconName1={<FaCalendarWeek />}
                  iconName2={<FaLocationDot />}
                />
                <Card
                  image={null}
                  text1={"💼️ Job"}
                  text2={"Software Developer"}
                  para={null}
                  personImage={person4}
                  name={"Joseph Gray"}
                  divText1={"Innovaccer Analytics Private Ltd."}
                  divText2={"Noida, India"}
                  btnText={"Apply on Timesjobs"}
                  color={"#02B875"}
                  iconName1={<PiBagBold />}
                  iconName2={<FaLocationDot />}
                />
              </div>

              <div className=" w-[243px] lg:block hidden">
                <div className="  flex flex-col gap-2">
                  <div className=" flex items-center justify-between mt-5">
                    <p className=" flex items-center gap-2">
                      <FaLocationDot /> Noida,India
                    </p>
                    <MdEdit />
                  </div>
                  <div className=" w-full h-[1px] bg-[#B8B8B8]"></div>
                  <p className=" w-[220px] text-[13px] flex text-[#B8B8B8]  mt-5">
                    <LiaExclamationCircleSolid className=" text-5xl w-fit h-fit" />
                    <span>
                      Your location will help us serve better and extend a
                      personalised experience.
                    </span>
                  </p>
                </div>
                {token !== null && (
                  <div className=" flex flex-col gap-5 mt-6">
                    <p className=" flex gap-2 items-center ">
                      <FaThumbsUp />
                      <span className=" uppercase tracking-wider">
                        REcommended Groups
                      </span>
                    </p>
                      <div className=" flex flex-col gap-8">
                        {RECOMMENDED_USER.map((data) => {
                          return (
                            <div className=" flex justify-between items-center">
                              <div className=" flex items-center gap-2">
                                <img src={data.image} alt="" />
                                <p>{data.name}</p>
                              </div>
                              <button className=" bg-[#EDEEF0] rounded-full text-black p-2 text-[12px]">
                                Follow
                              </button>
                            </div>
                          );
                        })}
                        <p className=" text-[14px] text-cyan-500 text-end mt-5">
                          See more...
                        </p>
                      </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
