/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from "react";
import { fetchData } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectCateg, setSelectCateg] = useState("Indian politics");

  useEffect(() => {
    fetchDataFromCateg(selectCateg)
    console.log(`calling api for ${selectCateg}`)
  }, [selectCateg])

  const fetchDataFromCateg =  (category)=>{
    console.log(`calling api for ${selectCateg}`)
    setLoading(true)
    fetchData(`search/?q=${category}`).then((response)=>{
        setSearchResults(response)
        setLoading(false)
    })
  }
  


  return (
    <Context.Provider
      value={
        {loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCateg,
        setSelectCateg}
      }
    >
        {props.children}
    </Context.Provider>
  );
};
