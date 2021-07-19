import React from 'react';
const Task = props => {

  const style = {
    color: 'red',
  }

  const { id, text, date, important, active, finishDate } = props.task;


  if (active) {
    return (
      <>
        <div>
          <p>
            <strong style={important ? style : null}>{text}</strong> {date}  <button onClick={() => props.click(id)}>Made!</button>
            <button onClick={() => props.delete(id)}>X</button>
          </p>
        </div>
      </>
    )
  } else {

    const finish = new Date(finishDate).toLocaleString();
    console.log('w else', finishDate);

    return (
      <div><p>
        <strong>{text}</strong>, <em> zrobic do - ({date})</em>
        <br />
        Potwierdzenie wykonania: <span>{finish}</span> <button onClick={() => props.delete(id)}>X</button>
      </p></div>
    )
  }
}

export default Task;