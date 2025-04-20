import React from 'react';
import {
  ThemeProvider,
  ThemeToggle,
  Layout,
  Menu,
  Breadcrumb,
  Card,
  Button,
  Table,
  Form,
  Input,
  Select,
  Divider,
  Typography,
} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const { Title, Paragraph, Text } = Typography;
const { SubMenu } = Menu;
const { Option } = Select;

// Sample data for the table
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

const DemoApp: React.FC = () => {
  return (
    <ThemeProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <Header className="header" style={{ display: 'flex', alignItems: 'center' }}>
          <div
            className="logo"
            style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginRight: '24px' }}
          >
            Ant Design
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ flex: 1 }}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Dashboard</Menu.Item>
            <Menu.Item key="3">Settings</Menu.Item>
          </Menu>
          <ThemeToggle style={{ marginLeft: '16px' }} />
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="User Management">
                <Menu.Item key="1">Users</Menu.Item>
                <Menu.Item key="2">Roles</Menu.Item>
                <Menu.Item key="3">Permissions</Menu.Item>
                <Menu.Item key="4">Groups</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="System Settings">
                <Menu.Item key="5">General</Menu.Item>
                <Menu.Item key="6">Security</Menu.Item>
                <Menu.Item key="7">Notifications</Menu.Item>
                <Menu.Item key="8">Backup</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="Reports">
                <Menu.Item key="9">Daily</Menu.Item>
                <Menu.Item key="10">Weekly</Menu.Item>
                <Menu.Item key="11">Monthly</Menu.Item>
                <Menu.Item key="12">Annual</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item>Users</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Typography>
                <Title>User Management</Title>
                <Paragraph>
                  This is a demo application showcasing the dark mode feature in Ant Design. You can
                  toggle between light and dark themes using the button in the header.
                </Paragraph>
              </Typography>

              <Divider />

              <Card title="User Form" style={{ marginBottom: 16 }}>
                <Form layout="vertical">
                  <Form.Item label="Username">
                    <Input placeholder="Enter username" />
                  </Form.Item>
                  <Form.Item label="Email">
                    <Input placeholder="Enter email" />
                  </Form.Item>
                  <Form.Item label="Role">
                    <Select defaultValue="user" style={{ width: '100%' }}>
                      <Option value="admin">Admin</Option>
                      <Option value="user">User</Option>
                      <Option value="guest">Guest</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary">Submit</Button>
                    <Button style={{ marginLeft: 8 }}>Cancel</Button>
                  </Form.Item>
                </Form>
              </Card>

              <Card title="User List">
                <Table columns={columns} dataSource={data} />
              </Card>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </ThemeProvider>
  );
};

export default DemoApp;
