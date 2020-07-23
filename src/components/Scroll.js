import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', height: '1200px', width: '1200' }}>
      {props.children}
    </div>
  );
};

export default Scroll;