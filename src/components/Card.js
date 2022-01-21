import React from "react"
import ff_tag from "../images/ff_tag.png"


export default function Card(props)
{
    return (

        <div className="card">
            {props.dog.family_friendly && <img className="ff--tag" src={ff_tag} />}
            <img className="card--img" src={`./images/${props.dog.img}`}/>
            <div className="card--stats">
                <h3>{props.dog.name}</h3>
                <ul>
                    <li><b>{props.dog.age}</b> years old</li>
                    <li>{props.dog.race}</li>
                </ul>
            </div>
        </div>
    )
}