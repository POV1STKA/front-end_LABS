import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import GoodsGallery from './components/GoodsGallery';

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <h1>Галерея товарів</h1>
      <GoodsGallery />
    </div>

  );
};

export default App;
