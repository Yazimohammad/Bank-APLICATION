import React, { useState } from "react"
import { Tabs,Tab } from "@mui/material"
import { AddBank } from "./AddBank"
import { ShowBanks } from "./ShowBanks"
import { ShowBankByCity } from "./showBankByCity"
import { ShowBankByBranch } from "./ShowBankByBranch"
import { ShowBankByName } from "./ShowBankByName"
import { ShowByAny } from "./ShowByAny"
import { AdvanceBankSearch } from "./AdvanceBankSearch"
import { ShowBenef } from "./ShowBenef"
import { Deposit } from "./Deposit"
import { Withdraw } from "./Withdraw"

export const Banks=()=>{
    const [val,setVal]=useState("deposit")
    return(
        <div >
            <h3>Bank Home</h3>
            <Tabs value={val} onChange={(e,value)=>setVal(value)}>
                <Tab value="accholder" label="Account Holder"/>
                <Tab value="deposit" label="Deposit"/>
                <Tab value="withdraw" label="Withdraw"/>
                <Tab value="addbank" label="Add Bank"/>
                <Tab value="showbanks" label="Show Banks"/>
                {/* <Tab value="showbycity" label="Show Bank By City"/> */}
                {/* <Tab value="showbybranch" label="Show Bank By Branch"/> */}
                <Tab value="showbyname" label="Show Bank By Name"/>
                <Tab value="showbyany" label="Show By Any"/>
                <Tab value="showadvance" label="Advance Bank Search"/>
            </Tabs>
            {val==="accholder" && <ShowBenef/>}
            {val==="deposit" && <Deposit/>}
            {val==="withdraw" && <Withdraw/>}
            {val==="addbank" && <AddBank/>}
            {val==="showbanks" && <ShowBanks/>}
            {val==="showbycity" && <ShowBankByCity/>}
            {val==="showbybranch" && <ShowBankByBranch/>}
            {val==="showbyname" && <ShowBankByName/>}
            {val==="showbyany" && <ShowByAny/>}
            {val==="showadvance" && <AdvanceBankSearch/>}
        </div>
    )
}