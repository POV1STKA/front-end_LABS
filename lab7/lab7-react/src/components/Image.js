import React from 'react';

const Image = ({ src, alt, width, id }) => {
  return (
    <img src={src} alt={alt} width={width} id={id} style={{ marginTop: '20px' }} />
  );
};

export default Image;
