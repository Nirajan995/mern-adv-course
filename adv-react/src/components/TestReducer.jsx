import React, { useContext } from "react";

import GlobalContext from "../context/GlobalContext";

const TestReducer = () => {
  const state = useContext(GlobalContext);

  return (
    <>
      {state.loading ? (
        <div>Loading...</div>
      ) : state.error ? (
        <div>{state.error}</div>
      ) : (
        <ul>
          {state.data.map((item) => {
            return (
              <li>
                {item.title}{" "}
                <button
                  onClick={() =>
                    dispatch({ type: "DELETE_PRODUCT", payload: item.id })
                  }
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default TestReducer;
