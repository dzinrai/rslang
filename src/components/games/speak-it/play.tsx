import React, {useState} from "react";
import ButtonBack from '../controls/button-back/button-back'
import styles from './play.module.css'

export default () => {
    const [isSpeak, setIsSpeak] = useState(false)
    const styleWave =
        `${styles.waveContainer} ${isSpeak && styles.animate}`
    return (
        <>
           <ButtonBack />
           <div className={styles.mainContainer}>
               <div className={styleWave}>
                   {/*<img src={Wave} alt=""/>*/}
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


           </div>
        </>
    )
}
