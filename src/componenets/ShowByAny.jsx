import React, { useState,useEffect } from "react"
import { Card,CardContent,TextField } from "@mui/material"
import axios from "axios"
import { ShowBankItem } from "./ShowBankItem"

export const ShowByAny=()=>{
    const [data,setData]=useState([])
    const [filtdata,setFiltdata]=useState([])
    const [txt,setTxt]=useState("")
    const getdata=async()=>{
        const result =await axios.get("http://localhost:3030/banks")
        setData(result.data)
        setFiltdata(result.data)
    }
    useEffect(()=>{
        getdata()
    },[])
    useEffect(()=>{
        const filtered = filtdata.filter((item)=>item.name.toUpperCase().includes(txt.toUpperCase()) || item.branch.toUpperCase().includes(txt.toUpperCase()) || item.city.toUpperCase().includes(txt.toUpperCase()) )
        setData(filtered)
    },[txt])
    return(
        <div>
            <div>
                <Card>
                    <CardContent>
                        <TextField onChange={(e)=>setTxt(e.target.value)} label="Show Bank By any" variant="outlined"/>
                    </CardContent>
                </Card>
                {data.map((item)=>(
                    <ShowBankItem item={item}/>
                ))}

            </div>
        </div>
    )
}