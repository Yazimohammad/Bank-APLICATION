import React,{useState,useEffect} from "react"
import axios from "axios"
import { Grid,Card,CardContent,Button } from "@mui/material"
import Select from "react-select"
import { ShowBankItem } from "./ShowBankItem"

export const AdvanceBankSearch=()=>{
    const [name,setName]=useState("All")
    const [branch,setBranch]=useState("All")
    const [city,setCity]=useState("All")
    const [data,setData]=useState([])
    const optionsname=[
        {value:"All",label:"All"},
        {value:"HDFC", label:"HDFC"},
        {value:"Axis",label:"Axis"},
        {value:"ICICI",label:"ICICI"}
    ]
    const optionsbranch=[
        {value:"All",label:"All"},
        {value:"Shivaji Nagar",label:"Shivaji Nagar"},
        {value:"Taroda Naka",label:"Taroda Naka"},
        {value:"Anjanaya Nagar",label:"Anjanaya Nagar"}
    ]
    const optionscity=[
        {value:"All",label:"All"},
        {value:"Nanded",label:"Nanded"},
        {value:"Pune",label:"Pune"},
        {value:"Belgaum",label:"Belgaum"}
    ]
    const handleChangeName=(selectedVal)=>{
        setName(selectedVal.value)
    }
    const handleChangeBranch=(selectedVal)=>{
        setBranch(selectedVal.value)
    }
    const handleChangeCity=(selectedVal)=>{
        setCity(selectedVal.value)
    }
    const handlesearch=async()=>{
        let payload={}
        if(name!=="All")payload["name"]=name;
        if(branch!=="All")  payload["branch"]=branch;
        if(city!=="All")  payload["city"]=city;
        const result=await axios.post("http://localhost:3030/api/getbank",payload)
        setData(result.data)
    }
    return(
        <div>
            <Grid container spacing={2} style={{marginTop:"10px"}}>
                <Grid item xs={3}>
                <Select options={optionsname} onChange={handleChangeName}/>
                </Grid>
                <Grid item xs={3}>
                    <Select options={optionsbranch} onChange={handleChangeBranch}/>
                </Grid>
                <Grid item xs={3}>
                    <Select  options={optionscity} onChange={handleChangeCity}/>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" onClick={handlesearch}>Search</Button>
                </Grid>
            </Grid>
            {data.map((item)=>(
                <ShowBankItem item={item}/>
            ))}
        </div>
    )
}