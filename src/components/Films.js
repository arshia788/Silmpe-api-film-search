import React from 'react';
import { makeStyles } from '@material-ui/core';

// component
import Card from './Card';

const useStyles=makeStyles((theme)=>({
    container:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexWrap:'wrap',
        padding:'10px 13px',
        [theme.breakpoints.down('xs')]:{
            padding:'0 5px'
        }
    }
}))

const Films = ({filterItems}) => {

    const classes= useStyles()

    return (
        <div className={classes.container}>

            {
                filterItems.map(item=> <Card key={item.imdbID} 
                    data={item}/>)
            }

        </div>
    );
};

export default Films;