import React from 'react';
import './Card.css';

const Card = ({ name, email, id }) => {
    return (
        <div className='tc cardBg dib br3 pa3 ma2 grow shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?150x150`}></img>
            <div>
                <h2 className='nameBg'>{name}</h2>
                <p className='textBg' >{email}</p>
            </div>
        </div>
    );
}

export default Card;