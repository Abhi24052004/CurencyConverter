import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {InputBox} from './components'
import useCurencyinfo from './hooks/useCurencyinfo'
import './output.css'

function App() {
  let [from,setFrom]=useState("usd")
  let [to,setTo]=useState("inr")
  let [amt,setAmt]=useState(0)
  let [convertedAmt,setConvertedAmt]=useState(0)
  let curency=useCurencyinfo(from)
  let option=Object.keys(curency)
  function calc(){
    console.log(amt+" "+curency[to]+" "+to)
    setConvertedAmt(amt*curency[to])
  }
  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg)`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amt}
                                onAmountChange={(amnt)=>setAmt(amnt)}
                                onCurrencyChange={(curr)=>setFrom(curr)}
                                currencyOption={option}
                                selectCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={()=>{
                                  setFrom(to)
                                  setTo(from)
                                  setAmt(convertedAmt)
                                  setConvertedAmt(amt)
                                }}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmt}
                                onAmountChange={(amnt)=>setConvertedAmt(amnt)}
                                onCurrencyChange={(curr)=>setTo(curr)}
                                currencyOption={option}
                                selectCurrency={to}
                                prop="readonly"
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={ calc}>
                            Convert {from} to {to}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default App
