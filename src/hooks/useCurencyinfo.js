import {useState,useEffect} from 'react'

function useCurencyinfo(currency){   
    console.log("hlo")
    const [data,setData]=useState({})
    useEffect(()=>{   
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>{ setData(res[currency])})
        .catch((er)=>console.log(er))
    },[currency])
    return data
}
export default useCurencyinfo;