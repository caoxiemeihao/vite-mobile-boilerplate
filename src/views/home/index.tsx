import { useState } from 'react';
import { Button, Dialog } from 'antd-mobile'
import styles from './index.module.less';

export default () => {
  const [counter, setCounter] = useState(0);

  const clickBtn = () => {
    setCounter(counter + 1);
  };

  const clickAlert = () => {
    Dialog.alert({
      content: '人在天边月上明',
      onConfirm: () => {
        console.log('Confirmed')
      },
    })
  };

  return (
    <div className={styles.container}>
      <div className="box">
        <div>{counter}</div>
        <Button onClick={clickBtn}>按钮</Button>
        <div />
        <Button color='primary' onClick={clickAlert}>弹窗</Button>
      </div>
    </div>
  );
};
