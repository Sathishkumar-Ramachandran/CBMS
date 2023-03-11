import React, { useState } from "react";
import { NavLink } from "react-bootstrap";


const Card = (prop) => {
    const [title, setTitle] = useState('');
    const [cardvalue, setCardvalue] = useState('');
    const [link, setcardlink] = useState('');

    {/*  if(prop){
        prop.map(item) => ((
       title = {item.title} 
        ))
    }
*/}
    return(
        <div className="card">


            <div className="cardtitle">{prop.title}</div>
            <div className="cardvalue">{prop.cardvalue}</div>
            <div className="valuelink">{prop.link}</div>

        </div>
    )
}

export default Card;