import React from "react"
import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import { Link } from "react-router-dom"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export const Navbar=()=>{
    return(
        <div>
        <BottomNavigation >
            <Link to="/">
                <BottomNavigationAction label="Home" icon={<HomeIcon fontSize="large"/>} showLabel/>
            </Link>
            <Link to="/banks">
                <BottomNavigationAction label="Banks" icon={<AccountBalanceIcon fontSize="large"/>} showLabel/>
            </Link>
            <Link to="/benef"><BottomNavigationAction label="Manage Beneficiary" icon={<ManageAccountsIcon fontSize="large"/>} showLabel/></Link>
        
        
        </BottomNavigation>

        </div>
    )
}