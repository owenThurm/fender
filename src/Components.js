import React from 'react';
import Input from './Components/Input';
import Card from './Components/Card';
import Button from './Components/Button';
import BlockComponent from './BlockComponent';

const Components = {
  input: Input,
  card: Card,
  button: Button,
};

export default (block, editContent, content) => {
  const { id, component } = block;

  if (typeof Components[component] !== 'undefined') {
    return React.createElement(BlockComponent, {
      key: id,
      block,
      Component: Components[component],
      editContent,
      content,
    });
  }
  return React.createElement(
    () => (
      <div>
        The component
        {' '}
        {block.component}
        {' '}
        has not been created yet.
      </div>
    ),
    { key: id },
  );
};
