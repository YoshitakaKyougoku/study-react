"use client"

import { useCallback, useState } from "react"
import { Main } from "../copornents/Main"

export default function Page (){
  const [count, setCount] =  useState(1)
  const [isShow, setIsShow] = useState(true);

  
  const handleClick = useCallback(() => {
    if (count < 9){
      setCount((prevCount) => prevCount + 1);
    } else {
      setCount((prevCount) => prevCount * 0)
    }
  },[count]);

  const handleDisplay = useCallback(() => {

    setIsShow((prevIsShow) => !prevIsShow);

  },[]);
  return (
    <>
      {isShow ? <div className="flex justify-center space-x-2 absolute inset-x-1/2 text-3xl font-serif font-bold ">
        <p className="transition duration-700 ease-in-out delay-150 hover:-translate-x-1 hover:scale-95">{10 - count}<span className="text-white">+</span>
        {count}<span className="text-white">=</span>10</p>
      </div> :null}
      <button className="transition ease-in-out delay-150 hover:translate-x-1 flex font-bold font-serif w-max content-center text-2xl p-3"
              onClick={handleDisplay}>{isShow ? "hidden" :"display"}
      </button>
      <Main page="about"
          onClick ={handleClick} />
    </>
    
    
  )
}