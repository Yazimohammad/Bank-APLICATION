import axios from "axios"
import React, { useEffect, useState } from "react"
import { ShowBankItem } from "./ShowBankItem"

export const ShowBanks=()=>{
    const [data,setData]=useState([])
    const getdata=async()=>{
        const result =await axios.get("http://localhost:3030/banks")
        console.log(result.data)
        setData(result.data)
    }
    useEffect(()=>{
        getdata()
    },[])
    return(
        <div>
         
            {data.map((item)=>(
                <ShowBankItem item={item}/>
            ))}
            
        </div>
    )
}