import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
                key= {item.id} //This line of code is added to avoid a Parent-Child issue arising in Console that always happens when applying method .map to Data
                img={img.coverImg}
                rating={img.stats.rating}
                reviewCount= {img.stats.reviewCount}
                location={img.location}
                title={img.title} 
                price={img.price}
        />
    )
})

        return (
            <div>
                <Navbar />
                {cards}
            </div>
        )
}