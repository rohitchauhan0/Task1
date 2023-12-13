import React, { useState } from 'react'
import logo from "../../Assets/NavbarAssets/whole.png"
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { TiArrowSortedDown } from "react-icons/ti";
import { FaCircle, FaSquareFull } from "react-icons/fa";
import { IoTriangleSharp } from "react-icons/io5";
import Template from '../Core/Auth/Template';
import { useSelector } from 'react-redux';
import personImage from "../../Assets/CardAssets/Rectangle 3 (1).png"

const Navbar = () => {
    const [modal, setmodal] = useState(false)
    const {token}= useSelector((state)=> state.auth)
  return (
   <>
     <div className=' w-full h-[38px] lg:h-[72px] bg-white  '>
        <div className=' max-w-[1440px] h-full mx-auto p-3 lg:block hidden'>
            <div className='  flex items-center h-full justify-between'>
            <img src={logo} alt="" />
            <div className=' relative'>
                <input type="search" placeholder='Search for your favorite groups in ATG' className=' rounded-full bg-[#F2F2F2] text-[#7A7A7A] py-1 px-4 pl-10 w-[360px]' />
                <IoSearchSharp className=' absolute top-2 left-3 text-md  text-[#7A7A7A] bg-[#F2F2F2]' />
            </div>
           {
            token === null ? ( <div className=' flex flex-row gap-1 items-center font-semibold'>
                <p className=' text-[#2E2E2E] text-[16px]'>Create account. <span className=' text-[#2F6CE5] font-bold cursor-pointer'
                onClick={()=>{
                    setmodal(true)
                }}
                >It's free!</span></p>
                <TiArrowSortedDown className='text-[#2E2E2E] text-[16px]' />
            </div>) :(<div>
                <div className=" flex items-center gap-3">
          <img src={personImage} alt="" />
          <p className=" font-semibold text-[14px] lg:text-[18px]">Sarah West</p>
          <TiArrowSortedDown className='text-[#2E2E2E] text-[16px]' />

        </div>
            </div>)
           }
            </div>
        </div>
            <div className='  max-w-[1440px] mx-auto h-full p-2 px-3 lg:hidden block '>
               <div className=' flex items-center justify-between'>
                <p></p>
                <div className=' flex gap-2 items-center justify-center text-md text-[#868E96]'>
                <FaSquareFull />
                <FaCircle />
                <IoTriangleSharp className=' rotate-180' />
                </div>
               </div>
            </div>
    </div>
    {
        modal && <Template cancelHandler={()=> setmodal(null)} />
    }
   </>
  )
}

export default Navbar