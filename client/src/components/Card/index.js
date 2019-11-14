import React from 'react';
import './Card.css';


const Card = props => (
    <div className="card" onClick={props.imageClick}>
        <div>
            <img className='image' id={props.name} alt={props.name} src={props.image} />
        </div>
            <br></br>
            <p>{props.name}</p>
    </div>
)

export default Card;