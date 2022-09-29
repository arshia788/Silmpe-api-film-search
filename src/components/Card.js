import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle=makeStyles((theme)=>({

    card:{
        width:'30%',
        overflow:'hidden',
        borderRadius:'7px',
        marginTop:theme.spacing(3.3),
        [theme.breakpoints.down('xs')]:{
            width:'100%',
        }
    },

    img:{
        width:'100%',
        objectFit:'cover',
        height:'620px',
    },

    info:{
        background:'orange',
        color:'#fff',
        height:'100%',
        paddingBottom:'15px',
        paddingTop:'10px',
        textAlign:'center',
    }

}))

const Card = ({data}) => {

    const classes= useStyle()

    return (
        <div className={classes.card}>
            <img src={data.Poster} alt={data.Title}
            className={classes.img}/>

            <div className={classes.info}>
                <p>{data.Title}</p>
            </div>
        </div>
    );
};

export default Card;