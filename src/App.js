import { Container } from './Container'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DesignMenu from './DesignMenu';
import { v4 } from 'uuid';
import React from 'react';

const data = {
  content: {
    body: [
      {
        _uid: "BUY6Drn9e1",
        component: "Input",
        headline: "Input 1"
      },
      {
        _uid: "gJZoSLkfZV",
        component: "Card",
        title: "Card 1"
      },
      {
        _uid: "X1JAfdsZxy",
        component: "Input",
        headline: "Input 2"
      }
    ]
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: []
    }
  }

  addContent = (newBlock, x , y) => {
    let newContent = this.state.content.concat({
      _uid: v4(),
      component: newBlock.component,
      headline: 'new card',
      positionX: x,
      positionY: y,
      style: {},
    });
    this.setState({
      content: newContent,
    });
  }

  editContent = (updatedBlock) => {
    const newContent = []

    this.state.content.forEach(block => {
      if(block._uid = updatedBlock._uid) {
        block.positionX = updatedBlock.positionX
        block.positionY = updatedBlock.positionY
        block.style = updatedBlock.style
      }
      newContent.push(block);
    });
    this.setState({
      continue: newContent,
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
          <DndProvider backend={HTML5Backend}>
            <Container editContent={this.editContent} addContent={this.addContent} content={this.state.content}/>
            <DesignMenu/>
          </DndProvider>
      </div>
    );
  }
}

export default App;
