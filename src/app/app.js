import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTasks, completeTask } from './actions';
import TaskList from './taskList';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getTasks());
  }

  handleCompleteTask(task) {
    const { dispatch } = this.props;

    dispatch(completeTask(task.id));
  }

  render() {
    const { dispatch, habits, dailies, todos } = this.props;

    return (
      <div className="container">
        <section>
          <h3>Habits</h3>
          <TaskList
            onCompleteTask={(task) => this.handleCompleteTask(task)}
            tasks={habits} type="habit" />
        </section>
        <section>
          <h3>Dailies</h3>
          <TaskList
            onCompleteTask={(task) => this.handleCompleteTask(task)}
            tasks={dailies} type="daily" />
        </section>
        <section>
          <h3>Todos</h3>
          <TaskList
            onCompleteTask={(task) => this.handleCompleteTask(task)}
            tasks={todos} type="todo" />
        </section>
      </div>
    );
  }
}

function select(state) {
  return {
    habits: state.tasks.filter(task => task.type === 'habit'),
    dailies: state.tasks.filter(task => task.type === 'daily'),
    todos: state.tasks.filter(task => task.type === 'todo')
  };
}

export default connect(select)(App);
