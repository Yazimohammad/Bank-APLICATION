import React, { useState } from "react";
import { Child } from "./Child";
import { Link } from "react-router-dom";

export const Parent = ({ txt }) => {
  const [data, setData] = useState([]);
  const handlesubmit = (txt) => {
    setData([...data, txt]);
  };
  return (
    <div>
      <h1>Parent</h1>
      <h4>{data}</h4>
      <h4>{txt}</h4>
      <Child aaa={handlesubmit} />
    </div>
  );
};
