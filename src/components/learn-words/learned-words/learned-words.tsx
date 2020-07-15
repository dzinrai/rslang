import React from 'react';
import styles from './learned-words.module.css';

interface LearnedProps {
    learned: number,
    allWords: number,
}

function LearnedWords({
    learned, allWords,
}: LearnedProps) {
    return (

        <span className={styles.learned}>
            Learned {learned} cards out of {allWords}
        </span>)
}

export default LearnedWords;