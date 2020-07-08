import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import style from './setting-button.module.css';

const SettingButton: React.FC = () => (
  <Button
    className={style.btn}
    shape="round"
    value="large"
  >
    Save
  </Button>
);

export default SettingButton;
