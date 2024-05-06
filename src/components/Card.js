import React from "react"

export default function Card(props) {
    return (
        <section className="card-section">
            <img className="card-image" src={`photocards/${props.imgUrl}`} alt="not found"/>
            <h2 className="card-group">{props.group}</h2>
            <h1 className="card-heading">{props.eng_name}</h1>
            <span className="card-price">{`Years Active: ${props.years_active}`}</span>
            <span className="card-kor-name">{`Korean: ${props.kor_name}`}</span>
            <span className="card-dob">{`DOB: ${props.dob}`}</span>
            <span className="card-album">{`Latest Album: ${props.latest_album}`}</span>
        </section>
    )
}