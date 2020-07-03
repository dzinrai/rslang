import React, { useContext, useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

interface AudioProps {
    audioWord: any,
    audioExample: any,
    audioMeaning: any
}

function AudioAutoplay({ audioWord, audioExample, audioMeaning }: AudioProps){
    const [nextAudio, setNextAudio] = useState(0)

    return (
        <div>
        <ReactAudioPlayer
          src={`https://raw.githubusercontent.com/dzinrai/rslang-data/master/${audioWord}`}
          autoPlay={true}
          controls={false}
          onEnded={() => setNextAudio(nextAudio + 1)}
        />
        {(nextAudio === 1) && <ReactAudioPlayer
          src={`https://raw.githubusercontent.com/dzinrai/rslang-data/master/${audioExample}`}
          autoPlay={true}
          controls={false}
          onEnded={() => setNextAudio(nextAudio + 1)}
        />}
        {(nextAudio === 2) && <ReactAudioPlayer
          src={`https://raw.githubusercontent.com/dzinrai/rslang-data/master/${audioMeaning}`}
          autoPlay={true}
          controls={false}
          onEnded={() => setNextAudio(nextAudio - 2)}
        />}
        </div>
    )
}

export default AudioAutoplay