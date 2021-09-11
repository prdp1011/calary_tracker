import React from 'react';

const overlay = {
  position: 'absolute',
  display: 'block',
  top: '50%',
  left: '50%',
  backgroundColor: 'transparent',
  zIndex: 100
}

const Loader = ({ loading }) => {
  return (
    loading ?
      <div style={loading ? overlay : {}}>
        Loading...
      </div> : null
  );
}

export default Loader;
