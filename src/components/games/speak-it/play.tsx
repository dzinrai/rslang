import React, {useEffect, useState, useRef} from "react";
import ButtonBack from '../controls/button-back/button-back';
import styles from './play.module.css';
import Modal from './modal-window'

declare const window: any;
export default () => {
    const words = [
        {word: 'adventure', transcription: '[ədvéntʃər]'},
        {word: 'capital', transcription: '[ədvéntʃər]'},
        {word: 'approach', transcription: '[ədvéntʃər]'},
        {word: 'chemical', transcription: '[ədvéntʃər]'},
        {word: 'laboratory', transcription: '[ədvéntʃər]'},
        {word: 'mood', transcription: '[ədvéntʃər]'},
        {word: 'evil', transcription: '[ədvéntʃər]'},
        {word: 'carefully', transcription: '[ədvéntʃər]'},
    ]

    const wordRef = useRef<any>([])
    useEffect(() => {
        startListen()
        wordRef.current = new Array(words.length)
        recognition.interimResults = true;
        recognition.addEventListener('end', recognition.start)
        return () => {
            console.log('endss')
            recognition.removeEventListener('end', recognition.start);
            recognition.stop()
        }
    }, [])

    const [isSpeak, setIsSpeak] = useState(false)
    const [sayWord, setSayWord] = useState('')
    const [correctWords, setCorrectWords] = useState<any>([])
    const [isResultsOpen, setIsResultsOpen] = useState(false)
    const styleWave =
        `${styles.waveContainer} ${isSpeak && styles.animate}`
    let recognition = new window.webkitSpeechRecognition();
    let transcriptArray = []
    let transcript = ''
    const speechResult = (event: any) => {
        transcriptArray = Array.from(event.results).map((result: any) => result[0]).map(result => result.transcript)
        transcript = transcriptArray.join().toLowerCase()
        setSayWord(transcript)
        wordRef.current.map((item: any) => {
            if ((item && item.dataset.word === transcript) && !item.classList.contains('disable')) {
                item.classList.add('disable')
                const newArray = correctWords
                newArray.push(transcript)
                setCorrectWords(newArray)
            }
        })
    }
    let startListen = () => {
        recognition.start()
        recognition.addEventListener('result', speechResult)
        recognition.addEventListener('soundstart', () => {
            setIsSpeak(true)
        })
        recognition.addEventListener('end', () => {
            setIsSpeak(false)
        })
    }

    const toggleModal = () => {
        isResultsOpen ? setIsResultsOpen(false) : setIsResultsOpen(true)
    }

    const newGame = () => {
        // todo
    }

    return (
        <>
            <ButtonBack/>
            <div className={styles.mainContainer}>
                <div className={styleWave}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.speakBlock}>
                    {sayWord}
                </div>
                <div className={styles.wordsContainer}>
                    {words.map((word, index: any) => <div
                        key={index}
                        className={styles.wordElement}
                        ref={el => wordRef.current[index] = el}
                        data-word={word.word}
                    >
                        <span className={styles.wordTitle}>{word.word}</span>
                        <p className={styles.wordTranscription}>{word.transcription}</p>
                    </div>)}</div>
                <div className={styles.footerButtons}>
                    <div className={styles.correctWords}> {correctWords.length} <span>correct words</span></div>
                    <div onClick={toggleModal} className={styles.btnResults}>Results</div>
                </div>
            </div>

            <Modal
                isResultsOpen={isResultsOpen}
                newGame={newGame}
                toggleModal={toggleModal}
                correctWords={correctWords}
                words={words}
            />

        </>
    )
}
