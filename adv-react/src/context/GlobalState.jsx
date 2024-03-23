import React from "react";
import GlobalContext from "./GlobalContext";
import { useEffect, useReducer } from "react";

import axios from "axios";

const GlobalState = ({ children }) => {
  // const initialState =;
  const apiURL = "https://dummyjson.com/products";
  function reducer(state, action) {
    switch (action.type) {
      case "FETCH_PRODUCTS":
        return {
          loading: false,
          error: "",
          data: action.payload,
        };
      case "DELETE_PRODUCT":
        return {
          ...state,
          loading: false,
          data: state.data.filter((item) => item.id !== action.payload),
        };
      case "ERROR":
        return {
          loading: false,
          error: action.payload.message,
          data: [],
        };

      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
    data: [],
  });
  //state change
  //rerender

  useEffect(() => {
    const fetchURL = async () => {
      try {
        const { data } = await axios.get(apiURL);
        dispatch({ type: "FETCH_PRODUCTS", payload: data.products });
      } catch (error:any) {
        dispatch({ type: "ERROR", payload: error });
      }
    };
    fetchURL();
  }, []);

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
