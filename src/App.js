import React, { Component } from 'react';
import './App.css';
import ftgbatard from './data.json';
import PanelSound from './components/PanelSound';

class App extends Component {

  getList(){
    return ftgbatard.list.map(item => (
      <PanelSound item={item}></PanelSound>
    ))
  }

  render() {
    console.log(ftgbatard);
    let html = this.getList();

    return (
      <div className="App">
        {html}
      </div>
    );
  }
}

export default App;
