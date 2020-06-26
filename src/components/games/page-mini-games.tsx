import React from "react";
import styles from './page-mini-games.module.css';
import Games from './../landing-page/games/games'

export default () => {
    return (
        <div className={styles.gamesWrapper}>
            <Games/>
        </div>
    )
}
