// import { Parent } from "./components/Parent";
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import { Child } from "./components/Child";
// import { createContext } from "react";
import { Parents1 } from "./components/Parents1";

export const getdata=createContext()
function App() {
  const a="Asif"
  return (
    <div >
      <getdata.Provider value={a}>
        {/* <Parent/>  */}
      </getdata.Provider>
      <Parents1/>
     
    </div>
  );
}

export default App;
