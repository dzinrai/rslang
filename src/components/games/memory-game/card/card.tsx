import React from 'react';
import './card.css';

interface CardProps {
    imageURL?: string,
    word?: string,
    isFlipped: boolean,
    onClick: any
}

export default function Card({
  imageURL, word, isFlipped, onClick,
}: CardProps) {
  return (
    <button className="card-container" onClick={onClick} type="button">
      <div className={`card${isFlipped ? ' flipped' : ''}`}>
        {imageURL ? <img className="side front" src={imageURL} alt="" /> : <div className="word">{word}</div>}
        <div className="side back" />
      </div>
    </button>
  );
}
