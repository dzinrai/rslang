import React from "react";
import styles from './button-back.module.css'
import {useHistory} from "react-router";

export default () => {
    const history = useHistory()
    const EndGameHandler = () => {
        history.push('/mini-games')
    }
    return (
        <button className={styles.button} onClick={EndGameHandler}>
            Back to mini Games
        </button>)
}
