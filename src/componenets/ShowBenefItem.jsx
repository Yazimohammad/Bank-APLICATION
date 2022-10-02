import React from "react"
import { Grid,Card } from "@mui/material"

export const ShowBenefItem=({item})=>{
    return(
        <div>
       
            <Card className="rowdata">
                
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <h3>{item.accno}</h3>
                    </Grid>
                    <Grid item xs={2}>
                        <h3>{item.bankname}</h3>
                    </Grid>
                    <Grid item xs={2}>
                        <h3>{item.branchname}</h3>
                    </Grid>
                    <Grid item xs={2}>
                        <h3>{item.bname}</h3>
                    </Grid>
                    <Grid item xs={2}>
                        <h3>{item.amnt}</h3>
                    </Grid>
                    <Grid item xs={2}>
                        <h3>{item.isActive}</h3>
                    </Grid>
                    
                </Grid>
            </Card>
        </div>
    )
}