import { Container } from './Container'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DesignMenu from './DesignMenu';
import { v4 } from 'uuid';
import React from 'react';
import { dimension } from './utils';

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
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: []
    }
  }

  addContent = (newBlock, x , y) => {
    const { defaultSize } = componentDefaultAttributes[newBlock.component];
    console.log(defaultSize)
    let newContent = this.state.content.concat({
      _uid: v4(),
      component: newBlock.component,
      headline: 'new card',
      position: {
        x: x,
        y: y,
      },
      size: defaultSize,
      style: {},
    });
    this.setState({
      content: newContent,
    });
  }

  editContent = (updatedBlock) => {
    console.log('edit content called', updatedBlock)
    const newContent = []
    this.state.content.forEach(block => {
      if(block._uid == updatedBlock._uid) {
        newContent.push(updatedBlock)
      }
      else {
        newContent.push(block);
      }
    });
    this.setState({
      content: newContent,
    });
    
  }

  render() {
    console.log(this.state)
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
