import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import React from 'react';
import { Row, Col } from 'antd';
import { dimension } from './utils';
import DesignMenu from './DesignMenu';
import { Container } from './Container';
import Block from './Models/Block';

const componentDefaultAttributes = {
  input: {
    defaultSize: dimension(200, 70),
  },
  card: {
    defaultSize: dimension(400, 200),
  },
  button: {
    defaultSize: dimension(200, 70),
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
    };
  }

  addContent = (newBlock, x, y) => {
    const { defaultSize } = componentDefaultAttributes[newBlock.component];
    const newContent = new Block(
      newBlock.component,
      { x, y },
      defaultSize,
      {},
    );
    this.setState((prevState) => ({
      content: [
        ...prevState.content,
        newContent,
      ],
    }));
  }

  editContent = (updatedBlock) => {
    const newContent = [];
    const { content } = this.state;
    content.forEach((block) => {
      if (block.id === updatedBlock.id) {
        newContent.push(updatedBlock);
      } else {
        newContent.push(block);
      }
    });
    this.setState({
      content: newContent,
    });
  }

  render() {
    const { content } = this.state;

    return (
      <div className="App">
        <DndProvider backend={HTML5Backend}>
          <Row gutter={40}>
            <Col>
              <Container
                editContent={this.editContent}
                addContent={this.addContent}
                content={content}
              />
            </Col>
            <Col>
              <DesignMenu />
            </Col>
          </Row>
        </DndProvider>
      </div>
    );
  }
}

export default App;
