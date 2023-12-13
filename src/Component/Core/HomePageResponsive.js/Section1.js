import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import wallpaper1 from "../../../Assets/NavbarAssets/Rectangle 2 (1).png";
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../../Slices/AuthSlice';
import { MdModeEdit } from 'react-icons/md';
import Template from '../Auth/Template';

const Section1 = () => {
  const {token} = useSelector((state)=> state.auth)
  const [modal, setmodal] = useState(false)

  const dispatch = useDispatch()
  return (
   <>
     <div className=" lg:hidden block bg-black">
    <div className=" relative">
      <img
        src={wallpaper1}
        alt=""
        className=" w-full h-full object-cover opacity-50 "
      />
    </div>
    
    <div className=" w-full flex items-center justify-between absolute top-12 text-white px-6 ">
      <FaArrowLeft className=" text-2xl font-bold" />
      {
        token === null ? (<button className=" p-2 border-2 rounded-lg border-white"
        onClick={()=>{
                    setmodal(true)
                }}
        >
        Join Group
      </button>) :(<button className=" p-2 border-2 rounded-lg border-white" onClick={()=>{
        dispatch(setToken(null))
        localStorage.removeItem("dummyToken")
      }}>
        Leave Group
      </button>)
      }
    </div>
    <div className=" absolute text-white z-[1000] left-[16.85px] top-[172.27px] ">
      <h2 className=" text-[25px] leading-[46.8px] font-bold">
        Computer Engineering
      </h2>
      <p className=" text-[13px] leading-[23.4px]">
        142,765 Computer Engineers follow this
      </p>
    </div>
  </div>
  {
        modal && <Template cancelHandler={()=> setmodal(null)} />
    }
   </>
  )
}

export default Section1