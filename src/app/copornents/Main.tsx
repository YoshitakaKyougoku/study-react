"use client"

import { useCounter } from "@/src/app/hooks/useCounter";

export function Main() {
  const {count, isShow, handleDisplay, handleClick} = useCounter()
  return (
    
    <div className="flex flex-col justify-between p-24">

      {isShow ? <div className="flex justify-center space-x-2 absolute inset-x-1/2 text-3xl font-serif font-bold ">
        <p className="transition duration-700 ease-in-out delay-150 hover:-translate-x-1 hover:scale-95">{10 - count}<span className="text-white">+</span>
        {count}<span className="text-white">=</span>10</p>
      </div> :null}
      <button className="transition ease-in-out delay-150 hover:translate-x-1 flex font-bold font-serif w-max content-center text-2xl p-3"
              onClick={handleDisplay}>{isShow ? "hidden" :"display"}
      </button>

      <button className="text-2xl " onClick = {handleClick} >ボタン</button>
      

      
    </div>
  )
}
