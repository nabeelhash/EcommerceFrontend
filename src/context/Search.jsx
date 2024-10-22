import { createContext } from "react";
import React, { useState, useEffect } from 'react'
export const SearchContext = createContext()

export const SearchProvider = function({children}){
    const [search,setSearch] = useState('')
    const [filter,setFilter] = useState([])

    useEffect(function(){

    },[])
    return(
        <SearchContext.Provider value={{search,setSearch,filter,setFilter}}>
            {children}
        </SearchContext.Provider>
    )
}