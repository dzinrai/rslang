import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Timer from '../sprint/timer/timer'
import ModalWindow from '../sprint/modal-window'
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
	const [firstCard, setFirstCard] = useState();
	const [secondCard, setSecondCard] = useState();
    const [amountCorrect, setAmountCorrect] = useState(0)
    const [playMode, setPlayMode] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const [isResultsOpen, setIsResultsOpen] = useState(false);
    const correctWords: any = useRef([])
    const openedResults: any = useRef(false);
    const fullCorrectWordsList: any = useRef([])

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
				setTimeout(() => setCardIsFlipped(card.id, true), index++ * 50);
			}
			setTimeout(() => setCanFlip(true), cards.length * 100);
		}, 3000);
	}, []);
    /*eslint-disable*/
    useEffect(() => {
        if (!isActive && playMode && !openedResults.current) {
        fullCorrectWordsList.current = words.filter((word: any) => correctWords.current.includes(word.id))
        setIsResultsOpen(true);
        openedResults.current = true;
        cards.map((card: any) => {setCanFlip(false); setCardIsFlipped(card.id, false)})
        }
    });
    /* eslint-enable */



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
        setAmountCorrect(amountCorrect + 1)
        correctWords.current.push(firstCard.wordId)
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
        {isResultsOpen
        && (
        <ModalWindow
        isResultsOpen={isResultsOpen}
        toggleModal={() => setIsResultsOpen(false)}
        correctWords={fullCorrectWordsList.current}
        words={words}
        URL_CONTENT={URL_CONTENT}
        />
        )}
        <ButtonBack />
        <div className='timer-container'>
          <Timer 
          playMode={playMode}
          setPlayMode={(mode: boolean) => setPlayMode(mode)}
          isActive={isActive}
          setIsActive={(active: boolean) => setIsActive(active)}
        />
        </div>
        <div className="game container-md">
		<div className="cards-container">
			{cards.map((card: any) => <Card onClick={() => onCardClick(card)} key={card.id} {...card}/>)}
		</div>
	    </div>;

        <div className='correctWords'>
        {' '}
        {amountCorrect}
        {' '}
        <span>correct words</span>
        </div>
    </>
  );
};
