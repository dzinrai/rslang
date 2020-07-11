import React from "react";
import './card.css'

interface CardProps {
    imageURL?: string,
    word?: string,
    isFlipped: boolean,
    onClick: any
}

export default function Card(props: CardProps) {

	return <div className="card-container" onClick={props.onClick}>
		<div className={"card" + (props.isFlipped ? " flipped" : "")}>
			{props.imageURL ? <img className="side front" src={props.imageURL} alt=''/> : <div className='word'>{props.word}</div>}
			<div className="side back"/>
		</div>
	</div>;
}