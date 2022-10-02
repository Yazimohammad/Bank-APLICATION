import React, { useState, useEffect } from "react";
import {
  Card,
  TextField,
  Grid,
  Button,
  CardContent,
  Alert,
} from "@mui/material";
import axios from "axios";

export const AddBenef = () => {
  const [accno, setAcc] = useState(0);
  const [bname, setBenef] = useState("");
  const [bankname, setBank] = useState("");
  const [branchname, setBranch] = useState("");
  const [amnt, setAmount] = useState(0);
  const [isActive] = useState(1);
  const [isvalid, setIsvalid] = useState(false);
  const [issuccess, setIssuccess] = useState("");
  const [issuffamount, setIssuffamount] = useState(false);
  const [isvalidacc, setIsvalidacc] = useState(false);

  useEffect(() => {
    setIssuffamount(amnt >= 500 || amnt === 0);
  }, [amnt]);
  useEffect(() => {
    setIsvalidacc(accno.length === 10);
  }, [accno]);

  useEffect(() => {
    setIsvalid(
      accno.length === 10 &&
        bname.length >= 3 &&
        bankname.length >= 3 &&
        branchname.length >= 4 &&
        amnt >= 500
    );
  }, [accno, bname, bankname, branchname, amnt]);

  const handlesubmit = async () => {
    const url = "http://localhost:3030/api/addbenef";
    const payload = {
      accno,
      bname,
      bankname,
      branchname,
      amnt,
      isActive,
    };
    const result = await axios.post(url, payload);
    console.log(result.data);
    if (result.status === 200) {
      setIssuccess(result.data);
      setAcc("");
      setBenef("");
      setBank("");
      setBranch("");
      setAmount("");
    }
  };

  const handlecancle = () => {
    setAcc("");
    setBenef("");
    setBank("");
    setBranch("");
    setAmount("");
  };

  return (
    <div>
      <Card>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={4}></Grid>
            <Grid item xs={2}>
              <h3>Account Number</h3>
            </Grid>
            <Grid item xs={2}>
              <TextField
                value={accno}
                variant="outlined"
                label="Account no"
                required
                type="Number"
                onChange={(e) => setAcc(e.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              {isvalidacc ? (
                <Alert severity="success"> Account Number is Valid</Alert>
              ) : (
                accno !== 0 && (
                  <Alert severity="error"> Account Number is not Valid</Alert>
                )
              )}
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={2}>
              <h3>Beneficiary Name</h3>
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={bname}
                variant="outlined"
                label="Beneficiary Name"
                required
                onChange={(e) => setBenef(e.target.value.toUpperCase())}
              />
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={2}>
              <h3>Bank Name</h3>
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={bankname}
                variant="outlined"
                label="Bank Name"
                required
                onChange={(e) => setBank(e.target.value.toUpperCase())}
              />
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={2}>
              <h3>Branch Name</h3>
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={branchname}
                variant="outlined"
                label="Branch Name"
                required
                onChange={(e) => setBranch(e.target.value.toUpperCase())}
              />
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={2}>
              <h3>Enter Amount</h3>
            </Grid>
            <Grid item xs={2}>
              <TextField
                value={amnt}
                variant="outlined"
                label="Enter Amount"
                required
                type="Number"
                onChange={(e) => setAmount(e.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              {!issuffamount && (
                <Alert severity="error"> Amount should be more then 500</Alert>
              )}
            </Grid>
            <Grid item xs={5}></Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                disabled={!isvalid}
                onClick={handlesubmit}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" onClick={handlecancle}>
                Cancle
              </Button>
            </Grid>
            <Grid item xs={12}>
              {issuccess !== "" && (
                <Alert severity="success">{issuccess}</Alert>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
