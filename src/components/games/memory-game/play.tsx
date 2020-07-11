import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import cardImages from "../../cards";
import Card from "./card/card";
// import deepcopy from "deepcopy";
import ButtonBack from '../controls/button-back/button-back';
// import styles from './play.module.css';
import './play.css'
const URL_CONTENT = 'https://raw.githubusercontent.com/dzinrai/rslang-data/master/';

function shuffleArray(array: any) {
	return array.sort(() => .5 - Math.random());
}

function generateCards(words: any) {
	const wordsCards = shuffleArray(words)
		.map((word: any) => ({
            id: uuidv4(),
			wordId: word.id,
			imageURL: URL_CONTENT + word.image,
			isFlipped: false,
			canFlip: true
		}))
    
    const imagesCards = shuffleArray(words)
		.map((word: any) => ({
            id: uuidv4(),
			wordId: word.id,
			word: word.word,
			isFlipped: false,
			canFlip: true
		}))

	return shuffleArray(wordsCards.concat(imagesCards));
}

interface PlayProps {
    words: any
}

export default ({ words }: PlayProps) => {

	const [cards, setCards] = useState(generateCards(words));
	const [canFlip, setCanFlip] = useState(false);
	const [firstCard, setFirstCard] = useState(cards[0]);
	const [secondCard, setSecondCard] = useState(cards[0]);

	function setCardIsFlipped(cardID: string, isFlipped: boolean) {
		setCards((prev: any) => prev.map((c: any) => {
			if (c.id !== cardID)
				return c;
			return {...c, isFlipped};
		}));
	}
	function setCardCanFlip(cardID: string, canFlip: boolean) {
		setCards((prev: any) => prev.map((c: any) => {
			if (c.id !== cardID)
				return c;
			return {...c, canFlip};
		}));
	}

	// showcase
	useEffect(() => {
		setTimeout(() => {
			let index = 0;
			for (const card of cards) {
				setTimeout(() => setCardIsFlipped(card.id, true), index++ * 100);
			}
			setTimeout(() => setCanFlip(true), cards.length * 100);
		}, 3000);
	}, []);


	function resetFirstAndSecondCards() {
		setFirstCard(null);
		setSecondCard(null);
	}

	function onSuccessGuess() {
		setCardCanFlip(firstCard.id, false);
		setCardCanFlip(secondCard.id, false);
		setCardIsFlipped(firstCard.id, false);
		setCardIsFlipped(secondCard.id, false);
		resetFirstAndSecondCards();
	}
	function onFailureGuess() {
		const firstCardID = firstCard.id;
		const secondCardID = secondCard.id;

		setTimeout(() => {
			setCardIsFlipped(firstCardID, true);
		}, 1000);
		setTimeout(() => {
			setCardIsFlipped(secondCardID, true);
		}, 1200);

		resetFirstAndSecondCards();
	}

	useEffect(() => {
		if (!firstCard || !secondCard)
			return;
		(firstCard.wordId === secondCard.wordId) ? onSuccessGuess() : onFailureGuess();
	}, [firstCard, secondCard]);


	function onCardClick(card: any) {
		if (!canFlip)
			return;
		if (!card.canFlip)
			return;

		if ((firstCard && (card.id === firstCard.id) || (secondCard && (card.id === secondCard.id))))
			return;

		setCardIsFlipped(card.id, false);

		(firstCard) ? setSecondCard(card) : setFirstCard(card);
	}
  return (
    <>
        <ButtonBack />
        <div className="game container-md">
		<div className="cards-container">
			{cards.map((card: any) => <Card onClick={() => onCardClick(card)} key={card.id} {...card}/>)}
		</div>
	    </div>;

        <div className='correctWords'>
        {' '}
        {7}
        {' '}
        <span>correct words</span>
        </div>
    </>
  );
};
