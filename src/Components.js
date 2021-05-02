import Input from './Components/Input';
import Card from './Components/Card';
import Button from './Components/Button';
import BlockComponent from './BlockComponent';
import React from 'react';


const Components = {
  input: Input,
  card: Card,
  button: Button,
};

export default (block, editContent) => {
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(BlockComponent, {
      key: block._uid,
      block: block,
      Component: Components[block.component],
      editContent: editContent,
    });
  }
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
};