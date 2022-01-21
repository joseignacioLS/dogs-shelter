import React from "react"
import dog_1 from "../images/dog-korky.jpg"
import dog_2 from "../images/dog-raider.jpg"
import dog_3 from "../images/dog-rocky.jpg"
import dog_4 from "../images/dog-rocky2.jpg"
import dog_5 from "../images/dog-tiber.jpg"
import dog_6 from "../images/dog-toby.jpg"


export default function Hero()
{
    return (
        <section className="hero--section">
            <div className="photogrid">
                <div className="grid--c">
                    <img src={dog_1} className="photogrid--pic"/>
                    <img src={dog_2} className="photogrid--pic"/>
                    
                </div>
                    <div className="grid--c">
                    <img src={dog_3} className="photogrid--pic"/>
                    <img src={dog_4} className="photogrid--pic"/>
                        
                    </div>
                    <div className="grid--c">
                    <img src={dog_5} className="photogrid--pic"/>
                    <img src={dog_6} className="photogrid--pic"/>
                        
                    </div>
            </div>
            
            <div className="title--section">            
                <h1 className="title">Welcome to Alicante's Imaginary Dog Shelter</h1>
                <p className="description">Unfortunatelly, despite this being a coding project, dog shelters exists and they need help. Please do not buy, adopt.All animals deserve a second chance.</p>
            </div>
        </section>
    )
}