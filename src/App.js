import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import dogs from "./data"

export default function App()
{
    const cards = dogs.map(item => <Card 
        key={item.id}
        dog={item}
        />)

    return (
        <div className="container">
            <Navbar/>
            <Hero/>
            <div className="card--section">
                {cards}
            </div>
        </div>
    )
}