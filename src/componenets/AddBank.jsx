import React, { useEffect, useState } from "react"
import { Grid ,TextField,Button,Card,CardContent,Alert} from "@mui/material"
import axios from "axios"

export const AddBank=()=>{
    const [name,setName]=useState("")
    const [branch,setBranch]=useState("")
    const [city,setCity]=useState("")
    const [isvalid,setIsvalid]=useState(false)
    const [issuccess,setIssuccess]=useState(false)

    useEffect(()=>{
        setIsvalid( name.length>=3 &&  branch.length>=3 &&  city.length>3)
    },[name,branch,city])

    const handlesubmit=async()=>{
        const url = "http://localhost:3030/api/addbank"
        const payload={
            name,
            branch,
            city
        }
        const result=await axios.post(url,payload)
        if(result.status===200)
        {setIssuccess(true)
            setName("")   
            setBranch("")
            setCity("")
        }
    }

    const handlecancel=()=>{
        setName("")   
        setBranch("")
        setCity("")
    }

    return(
        <div>
            <Card>
                <CardContent>
            <Grid container spacing={2}>
                <Grid item xs={4}></Grid>
                <Grid item xs={2}>
                    <h3>Bank Name</h3>
                </Grid>
                <Grid item xs={6}>
                    <TextField value={name} label="Enter Bank Name" variant="outlined" onChange={(e)=>setName(e.target.value.toUpperCase())}/>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={2}>
                    <h3>Bank Branch</h3>
                </Grid>
                <Grid item xs={6}>
                    <TextField value={branch} label="Enter Bank Branch" variant="outlined" onChange={(e)=>setBranch(e.target.value.toUpperCase())}/>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={2}>
                    <h3> City</h3>
                </Grid>
                <Grid item xs={6}>
                    <TextField value={city} label="Enter City" variant="outlined" onChange={(e)=>setCity(e.target.value.toUpperCase())}/>
                </Grid>
                <Grid item xs={5}></Grid>
                <Grid item xs={2}>
                    <Button variant="contained" disabled={!isvalid} onClick={handlesubmit}>Submit</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" onClick={handlecancel}>Cancel</Button>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                {issuccess && <Alert severity="success">Bank is added Successfully....</Alert>}
            </Grid>
                </CardContent>
            </Card>

        </div>
    )
}