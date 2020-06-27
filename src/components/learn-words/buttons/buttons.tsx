import React, { useContext, useEffect, useState } from 'react';
import styles from './buttons.module.css';
import { Button } from 'antd';
import { CheckOutlined  } from '@ant-design/icons';
import { HistoryOutlined } from '@ant-design/icons';
import { Switch } from 'antd';

function Buttons() {
    function onChange(checked:boolean) {
        console.log(`switch to ${checked}`);
      }
    return (
    <>
        <div className={styles.buttonsContainer}>
            {/* <Button type="primary" icon={<CheckOutlined />} size="large" shape="circle">            
    </Button>
    <div>
    <button
        className={styles.showResults}
        type="button">
        Show Results
        </button>
        </div> */}
        <div className={styles.buttonsInfo}>Indicate difficulty level</div>
        <div className={styles.levelButtons}>
        <Button className={styles.buttonHard} >Hard</Button>
        <Button className={styles.buttonNormal}>Normal</Button>
        <Button className={styles.buttonEasy} >Easy</Button>
        </div>
        <Button type="primary" icon={<HistoryOutlined />} size="large" shape="circle">            
            </Button>
        </div>
        <div className={styles.switchContainer}>
            <div>
        <Switch onChange={onChange} />
        <span>Only new words</span>
        </div>
        <div>
        <Switch defaultChecked onChange={onChange} />
        <span>All words</span>
        </div>
        <div>
        <Switch onChange={onChange} />
        <span>Difficult words</span>
        </div>
        </div>
</>
    )
}

export default Buttons;