import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import GlobalContext from "../context/GlobalContext";

const ComponentB = () => {
  const state = useContext(GlobalContext);
  return (
    <div>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
