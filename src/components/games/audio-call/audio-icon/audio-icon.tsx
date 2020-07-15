import React, { useEffect } from 'react';
import './audio-icon.css';

interface AudioIconProps {
    word?: any
    sayWord: any
}

export default ({ sayWord }: AudioIconProps) => {
  useEffect(() => {
    sayWord();
  });

  return (
    <div id="audioIcon">
      <span className="audioLines volumeChanges" />
      <span className="audioLines volumeChanges" />
      <span className="audioLines volumeChanges" />
      <span className="audioLines volumeChanges" />
    </div>
  );
};
