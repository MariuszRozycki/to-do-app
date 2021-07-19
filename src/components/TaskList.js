import React from 'react';
import Task from './Task';

const TaskList = props => {

  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

  done.sort((a, b) => {
    if (done.length) return b.finishDate - a.finishDate
  });

  if (active.length >= 2) {
    active.sort((a, b) => {

      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    })
  }


  const activeTasks = active.map(task => (
    <Task key={task.id} task={task} click={props.click} delete={props.delete} />
  ))

  const doneTasks = done.map(task => (
    <Task key={task.id} task={task} click={props.click} delete={props.delete} />
  ))

  // console.log('doneTask', doneTasks);
  return (
    <>
      <div className="active">
        <h2>Zadania do zrobienia:</h2>
        {activeTasks.length > 0 ? activeTasks : 'Nie masz nic do roboty!'}
        <p>==================================================================================</p>
      </div>
      <br />
      <br />
      <br />
      <div className='done'>
        <h2>Zadania zrobione: <em>({done.length})</em></h2>
        {doneTasks.length > 5 && <span style={{ fontSize: 10 }}>Wyswietlonych jest 5 ostatnich elementow</span>}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
}





export default TaskList;