import React from 'react';
import { Layout, Menu } from 'antd';
import { MenuOutlined, HomeOutlined, OrderedListOutlined } from '@ant-design/icons';
import ListIcon from '../assets/icon.png';

const {Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: '100vh',
    padding: '24px 0',
    color: '#fff',
    backgroundColor: '#fff',
};
  
const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    position: 'fixed',
    overflow: 'hidden',
    left: 0,
    top: 0,
    bottom: 0,
    height: '100vh',
    maxHeight: window.screen.height,
    padding: '0 24px',
    // width: '15em',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: '#fff',
    backgroundColor: '#fff',
    boxShadow: '0px 4px 23px 0px rgba(0, 0, 0, 0.05)'
};

const spanStyle: React.CSSProperties = {
    color: 'white',
    backgroundColor: '#1d4ed8',
    padding: '5px',
    borderRadius: '99px',
    fontWeight: 600,
    //marginTop: 'Auto'
};

const menuStyle: React.CSSProperties = {
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    gap: '5em',
    border: 'none', 
}

  interface Props {
    children: React.ReactNode
}

const AppLayout = (props: Props) => {
  return (
    <Layout>
      <Sider breakpoint={'xs'} onBreakpoint={() => {}} style={siderStyle} width={100}>
        <Menu 
            mode="vertical"
            style={menuStyle}
            items={[
                {
                    key: 1,
                    icon: <MenuOutlined />
                },
                {
                    key: 2,
                    icon: <HomeOutlined />
                },
                {
                    key: 3,
                    icon: <img style={{height: 20}} src={ListIcon} alt='img' />
                }
            ]}
        />
        <div>
            <span style={spanStyle}>E.A</span>
        </div>
      </Sider>
        <Layout style={{ marginLeft: 100 }}>
            <Content style={contentStyle}>{props.children}</Content>
        </Layout>
    </Layout>
  )
}

export default AppLayout