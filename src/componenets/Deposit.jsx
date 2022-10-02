import React, { useState,useEffect } from "react"
import axios from "axios"
import { TextField,Button,Grid ,Card,CardContent,Alert} from "@mui/material"

export const Deposit=()=>{
    const [accno,setAccno]=useState("")
    const [amnt,setAmnt]=useState("")
    const [isvalid,setIsvalid]=useState(false)
    const [msg,setMsg]=useState("")
   
    const handlesubmit=async()=>{
          const url="http://localhost:3030/api/updatebenef"
          const payload={
              accno,amnt
          }
          const result = await axios.post(url,payload)
          setMsg(result.data)
          handlecancel()
    }
    const handlecancel=()=>{
        setAccno("")
        setAmnt("")
    }
    useEffect(()=>{
        setIsvalid(accno.length===10 && amnt>=100)
    },[accno,amnt])

    return(
        <div>
            <Card>
                <CardContent >
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <TextField variant="outlined" label="Account Number" value={accno} onChange={(e)=>setAccno(e.target.value)}/>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField variant="outlined" label="Amount" value={amnt} onChange={(e)=>setAmnt(e.target.value)}/>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="contained" disabled={!isvalid} onClick={handlesubmit}>Submit</Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="contained" color="error" onClick={handlecancel}>Cancel</Button>
                        </Grid>
                        <Grid item xs={12}>
                            {msg!=="" && <Alert severity="success">{msg}</Alert> }
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

        </div>
    )
}