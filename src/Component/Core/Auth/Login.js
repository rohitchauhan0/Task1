import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setToken } from '../../../Slices/AuthSlice'
import { useNavigate } from 'react-router-dom'
import { GoEye, GoEyeClosed } from "react-icons/go";


const Login = ({setformType, cancelHandler}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(setToken("login"))
        localStorage.setItem("dummyToken", JSON.stringify("token"))
        navigate("/")
        cancelHandler()
    }
    const [showPassword, setshowPassword] = useState(false)

  return (
    <div className=" lg:w-[380px]  flex flex-col justify-between mt-6 lg:px-5 ">
        <form className=" flex flex-col gap-4" onSubmit={handleSubmit}>
  <div className=' relative'>
  <input type="Email" placeholder="Email" className=" border-[1px] border-[#D9D9DB] text-[#8A8A8A] bg-[#F7F8FA] p-2 w-full font-semibold" />
        <input type={`${showPassword ? "text":"password"}`} placeholder="Password" className=" border-[1px] border-[#D9D9DB] text-[#8A8A8A] bg-[#F7F8FA] p-2 w-full font-semibold " />
        <button type='button' onClick={()=> setshowPassword(!showPassword)} className=' absolute right-3 top-14 text-[#8A8A8A]'>
        {
            showPassword ?  (<GoEyeClosed />):(<GoEye  />)
        }
        </button>
  </div>
  <button className=" w-full bg-[#2F6CE5] text-white font-semibold rounded-full p-2 lg:block hidden">Sign In</button>
  <div className=" lg:hidden block">
        <div className=" flex justify-between items-center">
        <button className=" w-fit bg-[#2F6CE5] text-white font-semibold rounded-full p-2 px-10">Sign In</button>
        <p className=" text-[#495057] underline cursor-pointer text-[13px]" onClick={()=> setformType("signup")}>or, Create Account</p>
        </div>
        </div>
        </form>
      
    </div>
  )
}

export default Login