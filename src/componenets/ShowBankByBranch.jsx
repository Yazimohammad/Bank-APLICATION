import axios from "axios"
import React, { useEffect, useState } from "react"
import { Card,CardContent,TextField } from "@mui/material"
import { ShowBankItem} from "./ShowBankItem"

export const ShowBankByBranch=()=>{
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
        const filtered = filtdata.filter((item)=>item.branch.toUpperCase().includes(txt.toUpperCase()))
        setData(filtered)
    },[txt])
    return(
        <div>
            
            <Card>
                <CardContent>
                    <TextField onChange={(e)=>setTxt(e.target.value)} label="Search By Branch" variant="outlined"/>
                </CardContent>
            </Card>
            {data.map((item)=>(
                <ShowBankItem item={item}/>
            ))}

        </div>
    )
}