import React, { useEffect } from 'react'
import './audio-icon.css'

const URL_CONTENT = 'https://raw.githubusercontent.com/dzinrai/rslang-data/master/';

interface AudioIconProps {
    word: any
    sayWord: any
}

export default ({ word, sayWord }: AudioIconProps) => {
    useEffect(() => {
        sayWord()
    })
    
    return (
        <div id="audioIcon">
            <span className="audioLines volumeChanges"></span>
            <span className="audioLines volumeChanges"></span>
            <span className="audioLines volumeChanges"></span>
            <span className="audioLines volumeChanges"></span>
        </div>
    )
}