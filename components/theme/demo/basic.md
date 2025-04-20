---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

The most basic usage.

```jsx
import { ThemeProvider, ThemeToggle, Button, Card, Switch, Table, Form, Input } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

const Demo = () => {
  return (
    <ThemeProvider>
      <div style={{ marginBottom: 16 }}>
        <ThemeToggle />
        <span style={{ marginLeft: 8 }}>Toggle Theme</span>
      </div>

      <Card title="Card Example" style={{ marginBottom: 16 }}>
        <p>Card content</p>
        <Button type="primary">Primary Button</Button>
        <Button style={{ marginLeft: 8 }}>Default Button</Button>
        <Button type="dashed" style={{ marginLeft: 8 }}>
          Dashed Button
        </Button>
        <Button type="link" style={{ marginLeft: 8 }}>
          Link Button
        </Button>
      </Card>

      <Card title="Form Example" style={{ marginBottom: 16 }}>
        <Form layout="inline">
          <Form.Item label="Username">
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item label="Password">
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </Card>

      <Card title="Table Example">
        <Table columns={columns} dataSource={data} size="small" />
      </Card>
    </ThemeProvider>
  );
};

ReactDOM.render(<Demo />, mountNode);
```
