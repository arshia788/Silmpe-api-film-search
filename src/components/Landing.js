import React, {useContext, useState} from 'react';

import {makeStyles} from '@material-ui/core';

// components
import Films from './Films';

// context
import { ItemProvider } from '../context/ItemProviderContext';


const useStyle=makeStyles((theme)=>({
    container:{
        background:"navy",
        width:'100%',
        height:'100%',
        boxSizing:'border-box',
        paddingTop:'10px'
    }, 

    holderInput:{
        width:'100%',
        textAlign:'center',
        borderBottom:'1px solid #fff',
        paddingBottom:'30px'
    },

    input:{
        padding:'10px 30px',
        border:'none',
        outline:'none',
        borderRadius:'5px',
        fontSize:'1rem'
    }


}))

const Landing = () => {

    const classes= useStyle()

    const {products, setProducts}= useContext(ItemProvider)
    console.log(products)

    const [input, setInput]=useState('')

    const filterItems= products.filter(item=> item.Title.toLowerCase().includes(input.toLowerCase()))
    
    
    

    return (
        <div className={classes.container}>
            
            <div className={classes.holderInput}>
                <input className={classes.input} placeholder="search..."
                 type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
            </div>

           <Films filterItems={filterItems}/>

        </div>
    );
};

export default Landing;