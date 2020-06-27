import React, {useEffect, useState, useRef, useContext} from "react";
import ButtonBack from '../controls/button-back/button-back';
import styles from './play.module.css';
import Modal from './modal-window'
import {storeWords} from "../../../context/contextWords";
import getWords from "../../../services/getWords";
import SpeakMode from './speak-mode'
import defaultImage from './../../../img/megaphone.svg'

const URL_CONTENT = 'https://raw.githubusercontent.com/dzinrai/rslang-data/master/'

export default () => {
    const wordsState = useContext(storeWords);
    const dispatchWords = wordsState.dispatch;
    const [words, setWords] = useState<any>([]);
    const [page, setPage] = useState(1);
    const [isPlayMode, setIsPlayMode] = useState(true);
    const preloadWords = async (page : number) => {
        const wordsFromBackend = await getWords({ page, group: 0 });
        setWords(wordsFromBackend);
        console.log(wordsFromBackend)
        dispatchWords({ type: 'setWords', value: wordsFromBackend });
    };
    useEffect(() => {
        wordRef.current = new Array(words.length)
        preloadWords(page);
    }, []);
    const wordRef = useRef<any>([])
    const [correctWords, setCorrectWords] = useState<any>([])
    const [isResultsOpen, setIsResultsOpen] = useState(false)
    const [currentWord, setCurrentWord] = useState<any>({})
    const sayWord = (word : any) => {
        setCurrentWord(word)
        const newSound = new Audio(URL_CONTENT + word.audio)
        newSound.play()
    }
    const toggleModal = () => {
        isResultsOpen ? setIsResultsOpen(false) : setIsResultsOpen(true)
        if (isPlayMode) setIsPlayMode(false)
    }
    const newGame = () => {
        setPage(page + 1)
        setCorrectWords([])
        wordRef.current.map((item: any) => {
            item.classList.remove('disable')
        })
        preloadWords(page + 1);
        toggleModal()
        setIsPlayMode(true)
    }
    const toggleMode = () => {
        isPlayMode ? setIsPlayMode(false) : setIsPlayMode(true)
    }

    return (
        <>
            <ButtonBack/>
            <div className={styles.mainContainer}>
                {isPlayMode ? <SpeakMode
                           correctWords={correctWords}
                           wordRef={wordRef}
                           setCorrectWords={setCorrectWords}
                           words={words}
                           URL_CONTENT={URL_CONTENT}
                /> :
                    <div className={styles.imageContainer}>
                        <img src={currentWord.image ? URL_CONTENT + currentWord.image : defaultImage} alt=""/>
                        <span>{currentWord.wordTranslate ? currentWord.wordTranslate : ''}</span>
                    </div>
                }
                <div className={`${styles.wordsContainer} ${!isPlayMode && styles.clickable}`}>
                    {words.map((word : any, index: any) => <div
                        key={index}
                        className={styles.wordElement}
                        ref={el => wordRef.current[index] = el}
                        data-word={word.word}
                        data-id={index}
                        data-img={word.image}
                        data-translate={word.wordTranslate}
                        onClick={() => !isPlayMode ? sayWord(word) : null}
                    >
                        <span className={styles.wordTitle}>{word.word}</span>
                        <p className={styles.wordTranscription}>{word.transcription}</p>
                    </div>)}</div>
                <div className={styles.footerButtons}>

                    <div onClick={toggleMode} className={styles.btnSwitchMode}>
                        {isPlayMode ? <>Switch to train mode</> : <> Switch to play mode </>}
                    </div>
                    <div onClick={toggleModal} className={styles.btnResults}>Results</div>

                </div>
            </div>

            <Modal
                isResultsOpen={isResultsOpen}
                newGame={newGame}
                toggleModal={toggleModal}
                correctWords={correctWords}
                words={words}
                URL_CONTENT={URL_CONTENT}
            />

        </>
    )
}
