import React, { Component } from 'react'
import FormList from "../components/FormList";

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <div>
        <FormList {...this.state} onDelete={this.props.onDelete} todosL={this.props.todos}  />
      </div>
    )
  }
}
