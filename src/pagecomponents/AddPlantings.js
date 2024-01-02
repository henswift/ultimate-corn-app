import React, { useState } from 'react';
import './AddPlantings.css';

function AddPlantings() {
  const [taskContent, setTaskContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      content: taskContent,
      completed: false,
    };

    fetch('https://657a4ab21acd268f9afae0fa.mockapi.io/tasks', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newTask),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((task) => {
        // do something with the new task
      })
      .catch((error) => {
        // handle error
      });
  };

  return (
    <div className="AddPlantings">
      <form onSubmit={handleSubmit}>
        <label>
          Task Content:
          <input
            type="text"
            value={taskContent}
            onChange={(e) => setTaskContent(e.target.value)}
          />
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddPlantings;
