import React from 'react';
import './App.css';

class CombinationLock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit=(event)=> {
    const usedCombination = [
      "one",
      "who",
      "two",
      "bob",
      "add",
      "owl",
      "fab",
      "den",
      "mia",
      "tat",
    ];
    let isTrue;
    for (let i = 0; i < this.state.value.length; i++) {
      let findWord = usedCombination.find((el) => el[i] === this.state.value[i]);
      if (!findWord) {
        isTrue = "Not Possible";
        break;
      }
      if (i === this.state.value.length - 1) {
        isTrue = "Possible";
      }
    }
    alert('Combination lock of: ' + this.state.value + " is " + isTrue);
    this.setState({
      value:''
    })
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{textAlign:"center", marginTop:"10%"}}>
        <h2>
          Test 1 Combination Lock
        </h2>
        <label>
          Enter 3 Dials : 
          <input type="text" value={this.state.value} onChange={this.handleChange} style={{marginLeft:"5px"}}/>
        </label>
        <input type="submit" value="Submit" style={{marginLeft:"5px"}}/>
      </form>
    );
  }
}

export default CombinationLock;
