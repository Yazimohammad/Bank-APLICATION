import axios from "axios";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { ShowBenefItem } from "./ShowBenefItem";

export const ShowBenef = () => {
  const [data, setData] = useState([]);

  const getdata = async () => {
    const result = await axios.post("http://localhost:3030/api/getbenef");
    console.log(result.data);
    setData(result.data);
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
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
      {data.map((item) => (
        <ShowBenefItem item={item} />
      ))}
    </div>
  );
};
