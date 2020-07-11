import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import styles from './setting-button.module.css';

type Props = {
  clicked: () => void;
}

const SettingButton: React.FC<{ clicked: () => void }> = ({ clicked }: Props) => (
  <Button
    className={styles.btn}
    shape="round"
    value="large"
    onClick={() => clicked()}
  >
    Save
  </Button>
);

export default SettingButton;
