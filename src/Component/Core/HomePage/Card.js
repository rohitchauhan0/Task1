import React, { useState } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import { IoEyeOutline, IoShareSocialSharp } from 'react-icons/io5'

const Card = ({image, text1, text2, personImage, name, para, color, btnText, divText1, divText2, iconName1, iconName2}) => {

  const [showShare, setshowShare] = useState(false)

  return (
    <div className=" w-full  rounded-md border border-[#E0E0E0] bg-white flex flex-col justify-between gap-4 z-[100]  ">
    {image!==null ? (<img src={image} alt="" />):("")}
    <div className=" px-1 lg:px-6 py-2 text-black flex flex-col gap-3 relative">
      <p className="  font-semibold text-[18px]">{text1}</p>
      <div className=" flex justify-between items-center ">
        <h2 className=" w-[600px] font-bold text-[17px] lg:text-[22px]">
          {text2}
        </h2>
        <HiDotsHorizontal className=" font-bold text-[22px]" />
      </div>
     <div className=' '>
     {
        para !== null ? ( <p className=" text-[14px] lg:text-[17px] text-[#5C5C5C]">
        {para}
      </p>):(<div className=' flex flex-col gap-3'>
        <div className=' flex gap-7 text-[15px] font-semibold'>
            <p className=' flex gap-1 items-center'>{iconName1}{divText1}</p>
            <p className=' flex gap-1 items-center'>{iconName2}{divText2}</p>
        </div>
        <div className={` text-[${color}] w-full p-2 flex items-center justify-center border border-[#A9AEB8] rounded-lg`}>
                {btnText}
        </div>
      </div>)
     }
     </div>
     <div className={`${showShare? "block":" hidden"} w-[160px] h-[102px]  shadows rounded-md px-2 absolute right-7 bg-white bottom-20 z-[10000]`}>
      <div className=' flex flex-col gap-2'>
      <p>Edit</p>
      <p>Report</p>
      <p>Option 3</p>
      </div>
     </div>
    
     <div className=' lg:block hidden'>
     <div className=" w-full flex items-center justify-between">
        <div className=" flex items-center gap-3">
          <img src={personImage} alt="" />
          <p className=" font-bold text-[14px] lg:text-[18px]">{name}</p>
        </div>
        <div className=" flex gap-4">
          <div className=" text-[#525252] text-[14px] font-semibold flex items-center gap-1">
            <IoEyeOutline />
            <p>1.4k views</p>
          </div>
          <button className=" bg-[#EDEEF0] p-2 text-[#525252] text-[20px]" onClick={()=> setshowShare(!showShare)}>
            <IoShareSocialSharp />
          </button>
        </div>
      </div>
     </div>
     <div className=' lg:hidden block'>
     <div className=" w-full flex items-center justify-between">
        <div className=" flex items-center gap-3">
          <img src={personImage} alt="" />
         <div className=' flex flex-col'>
         <p className=" font-bold text-[14px] lg:text-[18px]">{name}</p>
         <p>1.4k views</p>

         </div>
        </div>
        <div className=" flex gap-4">
          <button className=" bg-[#EDEEF0] p-1 text-[#212529] text-[20px] flex gap-2 items-center" onClick={()=> setshowShare(!showShare)}>
            <IoShareSocialSharp /> share
          </button>
        </div>
      </div>

     </div>
    </div>
    
  </div>
  )
}

export default Card