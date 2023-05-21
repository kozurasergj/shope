import React from 'react';
import { Layout } from 'antd';
import CardsProduct from './CardsProduct/CardsProduct';
import TableProducts from './TableProducts/TableProducts';

const { Header, Content, Footer } = Layout;

const Page = () => {

  return (
    <Layout >
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', margin: '16px 0' }}>
        <div style={{ padding: "24", minHeight: "380" }} >
          <TableProducts />
          <CardsProduct />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout >
  );
};

export default Page;