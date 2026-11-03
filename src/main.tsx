import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import App from './App';
import './styles.css';

const theme = {
  token: {
    colorPrimary: '#2463a6',
    colorInfo: '#2463a6',
    colorSuccess: '#16866e',
    colorWarning: '#c58a36',
    colorError: '#d35f60',
    colorText: '#172b42',
    colorTextSecondary: '#718096',
    colorBgLayout: '#f3f6fa',
    colorBgContainer: '#ffffff',
    colorBorder: '#e5ebf2',
    borderRadius: 10,
    borderRadiusLG: 15,
    fontFamily: "'DM Sans', Inter, Arial, sans-serif",
    controlHeight: 36,
  },
  components: {
    Layout: { bodyBg: '#f3f6fa', headerBg: '#ffffff', siderBg: '#142b45' },
    Menu: { darkItemBg: 'transparent', darkItemSelectedBg: 'rgba(70,154,205,.22)', darkItemSelectedColor: '#ffffff' },
    Table: { headerBg: '#f7f9fc', headerColor: '#718096', rowHoverBg: '#f8fbfe' },
    Button: { primaryShadow: 'none' },
  },
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
