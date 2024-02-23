import { useEffect, useReducer } from "react";
import "./App.css";
import axios from "axios";
import ComponentA from "./components/ComponentA";
import TestMemoization from "./components/TestMemoization";
import GlobalState from "./context/GlobalState";
import Users from "./components/Users";

function App() {
  let i = 1;
  let j = 1;

  console.log({ test: "i === j" }, i === j);
  let obj = {
    name: 1,
  };

  let obj2 = {
    name: 1,
  };

  console.log({ test: "obj === obj2" }, obj === obj2);

  // 1. Create Context
  // 2. Create state
  // 3. provider -> value
  // 4. Component -> useContext

  return (
    <>
      {/* <TestReducer /> */}
      {/* <TestMemoization />
       */}
      <GlobalState>
        <ComponentA />
      </GlobalState>
      <Users />
    </>
  );
}

export default App;
