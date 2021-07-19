import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {

  counter = 0;

  state = {
    tasks: [
      // {
      //   id: 1,
      //   text: 'To find job',
      //   date: '2021-08-15',
      //   important: false,
      //   active: true,
      //   finishDate: null
      // }
    ]
  }

  handleChangeStatus = (id) => {
    console.log('handleChangeStatus() Dzila w App.js! Element o id: ' + id);
    let tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
        console.log(task.finishDate);
      }
    })
    this.setState({
      tasks
    })
    console.log(tasks);
  }

  handleDeleteTask = (id) => {
    // console.log(id);
    // console.log('handleDeleteTask() Dzila w App.js!');
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id)
    // const deleteTask = tasks.splice(index, 1);

    // console.log(deleteTask);
    // this.setState({
    //   tasks: tasks
    // })
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks: tasks
    })
  }

  add = (text, date, important) => {
    // console.log('Dodany objekt');

    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null
    }
    this.counter++;

    // console.log(task);

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))

    return true
  }


  render() {
    return (
      <div className="App">
        <h1>TO DO APP</h1>
        <AddTask add={this.add} />
        <TaskList
          tasks={this.state.tasks}
          click={this.handleChangeStatus}
          delete={this.handleDeleteTask}
        />

      </div>
    );
  }
}

export default App;
