import { Flex } from 'antd';
import React, { useState } from 'react';
import {Text} from './styled'
function CardDescription(props) {
    const[Des,setDes]=useState("");
    // const onChangeDes=(event)=>{setDes.event.target.value}
    return (
        <div style={{display:'flex',justifyContent:'space-between',height:'30px',width:'30px',marginTop:'10vh',marginLeft:'10vh'}}>
            <img src='https://cdn-icons-png.flaticon.com/128/2991/2991147.png' style={{marginRight:'20'}}/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/4/48/BLANK_ICON.png'/>
            <img src='https://cdn-icons-png.flaticon.com/128/10096/10096351.png'/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/4/48/BLANK_ICON.png'/>
            <img src='https://cdn-icons-png.flaticon.com/128/732/732221.png'/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/4/48/BLANK_ICON.png'/>
            <img src='https://cdn1.iconfinder.com/data/icons/andriod-app-logo/32/icon_flipkart-64.png'/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/4/48/BLANK_ICON.png'/>
            <img src='https://cdn2.iconfinder.com/data/icons/logos-9/64/Logos_adobe-64.png'/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/4/48/BLANK_ICON.png'/>
            <img src='https://gopostr.s3.amazonaws.com/favicon_url/xSoFSLiFXh2DOGNb6PC4U4lVjf0yBTUDN9jeYrsZ.jpg'/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/4/48/BLANK_ICON.png'/>
            <img src='https://cdn-icons-png.flaticon.com/128/5968/5968914.png'/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/4/48/BLANK_ICON.png'/>
            <img src='https://cdn-icons-png.flaticon.com/128/6033/6033714.png'/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/4/48/BLANK_ICON.png'/>
            <img src='https://cdn-icons-png.flaticon.com/128/5969/5969147.png'/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/4/48/BLANK_ICON.png'/>
            <img src='https://cdn-icons-png.flaticon.com/128/882/882628.png'/>
        </div>
    );
}

export default CardDescription;