import React from 'react';
import styles from './correct-answer.module.css'

const URL_CONTENT = 'https://raw.githubusercontent.com/dzinrai/rslang-data/master/';

interface CorrectAnswerProps {
    answer: any
}

export default ({ answer }: CorrectAnswerProps) => {
    console.log('ans', answer)
    if (!answer) return null
    return (
        <div className={styles.container}>
            <img className={styles.image} src={`${URL_CONTENT + answer.image}`} alt=""/>
            <div className={styles.answerWord}>{answer.word}</div>   
        </div>
    )
}