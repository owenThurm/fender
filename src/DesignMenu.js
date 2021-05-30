import React from 'react';
import Box from './Box';

export default () => (
  <div style={{ overflow: 'hidden', clear: 'both' }}>
    <Box name="Input" component="input" />
    <Box name="Card" component="card" />
    <Box name="Button" component="button" />
  </div>
);
