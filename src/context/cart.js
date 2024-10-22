import React, { useState, useEffect } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = function ({ children }) {
    const [cart, setCart] = useState([])

    useEffect(function () {
        let checkItems = JSON.parse(localStorage.getItem('cart'))
        console.log(checkItems)
        setCart(checkItems)
    }, [])

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}

        </CartContext.Provider>
    )
}


