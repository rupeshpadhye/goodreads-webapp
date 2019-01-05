import React from 'react';
import { Layout } from 'antd';
import SearchBooks from './SearchBooks';


const { Header, Content } = Layout;

const App = () => (
  <Layout className="app">
    <Layout className="app-background">
      <Content className="content">
        <SearchBooks />
      </Content>
    </Layout>
    <Layout className="footer">
      Powered by Goodreads API
    </Layout>
  </Layout>
);
export default App;