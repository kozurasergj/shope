import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import React from 'react';
import { Card, Col, Row, Image, Typography, Tag, Button } from 'antd';
import { Dispatch } from 'redux';
import { getCard } from '../../store/getICard';
import { Card as CustomCard } from '@/interface/interfaces';
const { Paragraph } = Typography;

const CardsProduct = () => {
  const dispatch = useDispatch<Dispatch<any>>();
  const cards = useSelector((state: any) => state.reducerCard.cards);

  useEffect(() => {
    dispatch(getCard());
  }, []);

  return (
    < Row gutter={[24, 24]} style={{ borderRadius: '10px', padding: '20px', background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./bg.jpg)" }} >
      {cards?.map((card: CustomCard) => (
        <Col span={6} key={card.id} style={{ overflow: "hidden" }}>
          <Card bordered={false} style={{ overflow: "hidden", padding: '0px' }}>
            <Image src={card.imageUrl} alt={card.name} />
            <div className='description'>
              <span className='name'>{card.count}</span>
              <span className='name'>{card.name}</span>
              <span className='name'>{card.price}</span>
            </div >
            <button className='button' >Buy</button>
            <button className='button'>Comments</button>
          </Card>
        </Col >
      ))
      }
    </ Row >
  )
}

export default CardsProduct;
