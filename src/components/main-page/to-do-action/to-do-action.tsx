import React from 'react';

import { Button } from 'antd';
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import styles from './to-do-action.module.css';
import { ReactComponent as ToDoActionImage } from '../../../img/layer-2-main-page.svg';

function ToDoAction() {
    return(
        <div className={styles.actions_container}>
            <div className={styles.btn_container}>
       <Link to="/statistic"><Button  className={`${styles.btn_default} ${styles.btn}`} shape="round" value="large">See statistic</Button></Link>
       <Link to="/statistic"><Button className={styles.btn} type="primary" shape="round" value="large">Play Random Game</Button></Link>
        <Link to="/learn-words"><Button className={`${styles.btn_default} ${styles.btn}`} shape="round" value="large">Start learning words</Button></Link>
       </div>
        <ToDoActionImage/>
        </div>
    )
}

export default ToDoAction;
