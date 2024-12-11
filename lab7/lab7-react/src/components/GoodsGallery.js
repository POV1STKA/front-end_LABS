import React from 'react';
import GoodsCard from './GoodsCard';
import product1 from './images/xurma-saron.jpg';
import product2 from './images/ananas.jpg';
import product3 from './images/feixoa.jpg';
import product4 from './images/mandarin.jpg';
import product5 from './images/pitaiya-cervona.jpg';
import product6 from './images/pomelo.jpg';

const GoodsGallery = () => {
  const goods = [
    {
      id: 1,
      image: product1,
      title: 'Хурма',
      price: 200,
    },
    {
      id: 2,
      image: product2,
      title: 'Ананас',
      price: 150,
    },
    {
      id: 3,
      image: product3,
      title: 'Фейхоа',
      price: 300,
    },
    {
      id: 4,
      image: product4,
      title: 'Мандарин',
      price: 120,
    },
    {
      id: 5,
      image: product5,
      title: 'Питахайя червона',
      price: 300,
    },
    {
      id: 6,
      image: product6,
      title: 'Помело',
      price: 170,
    },
  ];

  return (
    <div className="goods-gallery">
      {goods.map((item) => (
        <GoodsCard key={item.id} image={item.image} title={item.title} price={item.price} />
      ))}
    </div>
  );
};

export default GoodsGallery;
