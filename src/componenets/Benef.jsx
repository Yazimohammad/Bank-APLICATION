import React, { useState } from "react"
import { Tabs,Tab } from "@mui/material"
import { SearchBenefByAll } from "./SearchBenefByAll"
import { ShowBenef } from "./ShowBenef"
import { AddBenef } from "./AddBenef"

export const Benef=()=>{
    const [val,setVal]=useState("addbenef")
    return(
        <div>
            <h3>Manage Beneficiary</h3>
            <Tabs value={val} onChange={(e,value)=>setVal(value)}>
                <Tab value="addbenef" label="Add Beneficiary"/>
                <Tab value="showbenef" label="Show Benef"/>
                <Tab value="searchbyall" label="Search Benef By All"/>
            </Tabs>
            {val==="addbenef" && <AddBenef/>}
            {val==="showbenef" && <ShowBenef/>}
            {val==="searchbyall" && <SearchBenefByAll/>}
            

        </div>
    )
}