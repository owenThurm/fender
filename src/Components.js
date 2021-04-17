import Input from './Components/Input';
import Card from './Components/Card';
import Button from './Components/Button';
import React from 'react';


const Components = {
  Input: Input,
  Card: Card,
  Button: Button,
};

export default block => {
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      key: block._uid,
      block: block
    });
  }
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
};