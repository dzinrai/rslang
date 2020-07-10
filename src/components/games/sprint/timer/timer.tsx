import React, { useState, useEffect } from 'react';
import { Progress } from 'antd'
import './timer.css'
// import styles from './timer.module.css';

interface TimerProps {
    playMode: boolean,
    setPlayMode: any,
    isActive: boolean,
    setIsActive: any,
}
const Timer = ({ playMode, setPlayMode, isActive, setIsActive}: TimerProps) => {
    const [seconds, setSeconds] = useState(3);
    
    // function toggle() {
    //   setIsActive(!isActive);
    // }
  
    // function reset() {
    //   setSeconds(60);
    //   setIsActive(false);
    // }
  
    useEffect(() => {
      let interval: any = null;
      if (isActive) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds - 1);
        }, 1000);
        if (seconds === 0) {
            setIsActive(false)
            if (!playMode) {
                setPlayMode(true)
                setIsActive(true)
                setSeconds(60)
            }
        }
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, seconds]);
  
    return (
      <div className="app">
        <Progress
        type="circle"
        strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
        }}
        percent={seconds*(playMode ? 1.6667 : 33.3333)}
        format={percent => `${(seconds)} s`}
        />
        {/* <div className="time">
          {seconds}s
        </div> */}
        {/* <div className="row">
          <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button className="button" onClick={reset}>
            Reset
          </button>
        </div> */}
      </div>
    );
  };
  
  export default Timer;
