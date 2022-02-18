import {
  Button,
  Form,
  Input,
  Dialog,
} from 'antd-mobile'
import styles from './index.module.less';

export default (
  props: { onClick: (logined: boolean) => void; },
) => {
  const onFinish = (values: any) => {
    Dialog.alert({
      content: JSON.stringify(values),
    });
    props.onClick(true);
  };

  return (
    <div className={styles.container}>
      <Form
        onFinish={onFinish}
        footer={
          <Button block type='submit' color='primary' size='large'>
            提交
          </Button>
        }
      >
        <Form.Header>基础用法</Form.Header>
        <Form.Item
          name='姓名'
          label='姓名'
          rules={[{ required: true, message: '姓名不能为空' }]}
        >
          <Input placeholder='请输入姓名' />
        </Form.Item>
        <Form.Item name='address' label='地址'>
          <Input placeholder='请输入地址' />
        </Form.Item>
      </Form>
    </div>
  );
};
