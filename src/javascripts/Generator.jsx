// @flow

import React from 'react';

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
      value3: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleField2 = this.handleField2.bind(this);
    this.handleField3 = this.handleField3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value1: event.target.value,
    });
  }

  handleSubmit(event) {
    alert(`Value1:${this.state.value1}`);
    alert(`Value2:${this.state.value2}`);
    alert(`Value3:${this.state.value3}`);
    event.preventDefault();
  }

  handleField2(event) {
    this.setState({
      value2: event.target.value,
    });
  }

  handleField3(event) {
    this.setState({
      value3: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h2>Форма создания полей для дефектной ведомости</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Поле 1
            <br />
            <input type="text" value={this.state.value1} onChange={this.handleChange} />
          </label>
          <br />
          <label>Поле 2
            <br />
            <input type="text" value={this.state.value2} onChange={this.handleField2} />
          </label>
          <br />
          <label>Поле 3
            <br />
            <input type="text" value={this.state.value3} onChange={this.handleField3} />
          </label>
          <br />
          <input type="submit" value="Сгенерировать" />
        </form>
      </div>
    );
  }
}

export default Generator;
