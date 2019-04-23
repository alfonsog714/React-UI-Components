import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/ButtonComponents/NumberButton";
import { Input } from "./components/DisplayComponents/CalculatorDisplay";
import { ClearButton } from "./components/ButtonComponents/ActionButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }
  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <ClearButton handleClear={() => this.setState({ input: "" })}>
            Clear
          </ClearButton>
          <div className="row">
            <Button handeClick={this.addToInput}>7</Button>
            <Button handeClick={this.addToInput}>8</Button>
            <Button handeClick={this.addToInput}>9</Button>
            <Button handeClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handeClick={this.addToInput}>4</Button>
            <Button handeClick={this.addToInput}>5</Button>
            <Button handeClick={this.addToInput}>6</Button>
            <Button handeClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handeClick={this.addToInput}>1</Button>
            <Button handeClick={this.addToInput}>2</Button>
            <Button handeClick={this.addToInput}>3</Button>
            <Button handeClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handeClick={this.addToInput}>.</Button>
            <Button handeClick={this.addToInput}>0</Button>
            <Button handeClick={this.addToInput}>=</Button>
            <Button handeClick={this.addToInput}>-</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
