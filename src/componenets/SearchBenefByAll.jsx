import axios from "axios"
import React, { useEffect, useState } from "react"
import { Grid,Card,CardContent,TextField } from "@mui/material"
import { ShowBenefItem } from "./ShowBenefItem"

export const SearchBenefByAll=()=>{
    const [data,setData]=useState([])
    const [filtdata,setFiltdata]=useState([])
    const [search,setSearch]=useState("")

    const getdata=async()=>{
        const result = await axios.get("http://localhost:3030/benef")
        console.log(result.data)
        setData(result.data)
        setFiltdata(result.data)
    }
    useEffect(()=>{
        getdata()
    },[])
    useEffect(()=>{
        const result = filtdata.filter((item)=>item.bankname.toUpperCase().includes(search.toUpperCase()) || item.branchname.toUpperCase().includes(search.toUpperCase()) || item.bname.toUpperCase().includes(search.toUpperCase())  )
        setData(result)
    },[search])
    return(
        <div>
            <h3>Search Benef By Account</h3>
            <Card>
                <CardContent>
                    <TextField variant="outlined" label="Search By All" onChange={(e)=>setSearch(e.target.value)}/>
                </CardContent>
            </Card>
            <Grid container spacing={4}>
                <Grid item xs={0.4}></Grid>
            <Grid item xs={2}>
                <h4>Account Number</h4>
            </Grid>
            <Grid item xs={2}>
                <h4>Bank Name</h4>
            </Grid>
            <Grid item xs={2}>
                <h4>Branch Name</h4>
            </Grid>
            <Grid item xs={2}>
                <h4>Beneficiary Name</h4>
            </Grid>
            <Grid item xs={2}>
                <h4>Amount</h4>
            </Grid>
            </Grid>

            {data.map((item)=>(
                <ShowBenefItem item={item}/>
            ))}
        </div>
    )
}