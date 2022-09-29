import React, {createContext, useEffect, useState} from 'react';

import { getData } from '../api';

export const ItemProvider=createContext()

const ItemProviderContext = ({children}) => {

    const [products, setProducts]= useState([])
    console.log(products)

    useEffect(()=>{
        const fetchApi=async()=>{
            setProducts(await getData())
        }
        fetchApi()

    },[])

    return (
        <div>

            <ItemProvider.Provider value={{products, setProducts}}>    
                {children}
            </ItemProvider.Provider>
            
        </div>
    );
};

export default ItemProviderContext;