import React from "react"

export default function Card(props) {
    return (
    <div className="card">
        <img src= {`../images/${props.img}`} className= "card--image" />
        <div className="card--stats">
            <img src="../images.star.png" />
            <span>{props.rating}</span>
            <span className="gray">({props.reviewCount})</span>
            <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span>/person</p>
            </div>
    )
}


//In line 7, the challenge is to pass only the file extension and 
//name as strings to my img.prop, instead of the whole path. 
//Things I cannot do: 
//1 e.g "../images" = { props.img } > This makes no sense

//2 USING THE ES6 TEMPLATE STRING SYNTAX
//BACKTICKS AND DOLLAR SIGNS, BAYBAY
// `../images/${props.img}`
//We need the backticks to create a String Literal that admits a ${Placeholder} , but we cannot leave it at that because   :
//we also need to wrap these backticks into curly braces to create an instance of
//Research INTERPELATION IN JS