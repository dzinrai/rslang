import React from 'react';
import YouTube from '@u-wave/react-youtube';
import { Modal, Button } from 'antd';

type PropsType = {
  visible: boolean;
  onOk: any;
}

const VideoGuide: React.FC<{
  visible: boolean, onOk: any
}> = ({ visible, onOk }: PropsType) => (
  <Modal
    title="Application video guide"
    centered
    visible={visible}
    onCancel={() => onOk()}
    width={690}
    footer={[
      <Button key="ok" type="primary" onClick={() => onOk()}>
        OK
      </Button>,
    ]}
  >
    <YouTube
      video="ZuuVjuLNvFY"
      width={640}
      height={480}
      paused={!visible}
    />
  </Modal>
);

export default VideoGuide;
