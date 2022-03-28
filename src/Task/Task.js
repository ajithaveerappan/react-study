import React from  'react';
import "./Task.css";
import Demo from "../Demo/Demo";
import india from "./india.png";
import usflag from "./usflag.png";
import jaflag from "./jaflag.png";
import cflag from "./cflag.png";
import rflag from "./rflag.png";
import pimage from "./pimage.png";
const Task=()=>{
    const FileList=[
        {picture:india, country_name: "india",capital: "delhi", currency: "rupee",
        population:"130 crores"},
        {picture:usflag, country_name: "america",capital: "newyork", currency: "dollar",
        population:"80 crores" },
        {picture:jaflag, country_name: "japan",capital: "tokyo", currency: "yen",
        population:"50 crores"},
        {  picture:cflag,country_name: "china",capital: "beiging", currency: "yuan",
        population:"150 crores"},
        { picture:rflag, country_name: "russia",capital: "moscow", currency: "rubel",
        population:"40 crores"},
        {picture:pimage, country_name: "pakistan",capital: "islamabad", currency: "rupee",
        population:"70crores"},
       
    ];
    return (
        <div className='container'>
    {
    FileList.map((Data) => {
        const{picture,country_name,capital,currency,population}=Data;
        return <Demo  picture={picture} country_name={country_name} capital={capital}
         currency={currency} population={population}></Demo>;
         
    })
}

    
        </div>
    );
};
export default Task;



