import { Container } from './Container'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DesignMenu from './DesignMenu';
import { useState } from 'react';
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

  addContent = newBlock => {
    console.log(this.state)
    let newContent = this.state.content.concat({
      _uid: v4(),
      component: newBlock.component,
      headline: 'new card'
    });
    this.setState({
      content: newContent,
    });
  }

  render() {
    return (
      <div className="App">
          <DndProvider backend={HTML5Backend}>
            <Container content={this.state.content}/>
            <DesignMenu addContent={this.addContent}/>
          </DndProvider>
      </div>
    );
  }

}

export default App;
