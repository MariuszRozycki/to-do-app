import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
  state = {
    text: '',
    checked: false,
    value: new Date().toISOString().slice(0, 10),

  }


  handleDate = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleText = e => {
    this.setState({
      text: e.target.value,
    })

  }

  handleCheckbox = e => {
    // console.log('Dziala checkbox');
    this.setState({
      checked: e.target.checked,
    })
  }

  handleClick = () => {

    const { text, checked, value } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, value, checked);
      if (add) {
        this.setState({
          text: '',
          checked: false,
          value: new Date().toISOString().slice(0, 10),
        })
      }
    } else return alert('Zadanie musi miec wiecej niz dwa znaki!')
  }

  render() {

    const minDate = new Date().toISOString().slice(0, 10);
    let maxDate = new Date().toISOString().slice(0, 4) * 1 + 1;
    maxDate = maxDate + '-12-31'

    // console.log(this.state.value);
    // console.log('minDate', minDate);
    // console.log('maxDate', maxDate);

    return (
      <div className="form">
        <input type="text" placecholder="Dodaj zadanie" value={this.state.text} onChange={this.handleText} />
        <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckbox} />
        <label htmlFor="impotrant">Priorytet</label>
        <label htmlFor="date">Do kiedy zrobic</label>
        <input type="date" value={this.state.value} min={minDate} max={maxDate} onChange={this.handleDate} />
        <button onClick={this.handleClick}>Dodaj</button>
      </div>
    );
  }
}

export default AddTask;