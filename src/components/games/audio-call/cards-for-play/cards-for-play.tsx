import React from 'react';
import './cards-for-play.css';
import { CSSTransition } from 'react-transition-group';
/*eslint-disable*/
interface CardsForPlayProps {
    cards: any,
    currentWord: any,
    setCurrentWord: any,
    checkWord: any,
    appearCards: boolean
}

export default ({
  cards, currentWord, checkWord, appearCards,
}: CardsForPlayProps) => {
  if (!cards || !currentWord) return null;
  return (
    <>
      {cards.map((card: any) => (
        <CSSTransition in={appearCards} appear key={card.id} timeout={1000} classNames="example">
          <div
            onClick={(event) => checkWord(event, card.word)}
            className="card"
          >
            {card.wordTranslate}
          </div>
        </CSSTransition>
      ))}
    </>
  );
};
