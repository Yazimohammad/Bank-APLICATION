import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { getdata } from "../App";

export const Child = (props) => {
  const result = useContext(getdata);
  const [txt, setTxt] = useState("");

  return (
    <div>
      <h1>Child</h1>
      <h4>{result}</h4>
      <input type="text" onChange={(e) => setTxt(e.target.value)} />
      <button onClick={() => props.aaa(txt)}>SUBMIT</button>
    </div>
  );
};
