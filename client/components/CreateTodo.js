import React, { Component } from 'react';
import { createTodo } from '../store/todos';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CreateTodo extends Component {
  constructor() {
    // The super keyword is used to call the constructor of its parent class to access the parent's properties and methods
    super();
    this.state = {
      taskName: '',
      assignee: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    // If the event does not get explicitly handled, its default action should not be taken as it normally would be
    event.preventDefault();
    this.props.createTodo({ ...this.state });
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const { assignee, taskName } = this.state;
    const { handleSubmit,  handleChange} = this;
    return (
      <form id='todo-form' onSubmit={handleSubmit}>
        <label htmlFor='taskName'>Task Name:</label>
        <input name='taskName' value={taskName} onChange={handleChange} />

        <label htmlFor='assignee'>Assign To:</label>
        <input name='assignee' value={assignee} onChange={handleChange}/>

        <button type='submit'>Submit</button>
        <Link to='/'>Cancel</Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  createTodo: (todo) => dispatch(createTodo(todo, history))
});

export default connect(null, mapDispatchToProps)(CreateTodo);
