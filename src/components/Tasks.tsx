import React from 'react';
import { useAppSelector } from '../redux/store';
import Task from './Task';

const Tasks: React.FC = () =>  {

  const {tasks, tasksType} = useAppSelector(state => state.tasksSlice)

  return (
    <ul className='tasks'>
      { tasksType === "all" &&
        tasks.map((task, index) => (
          <Task key={index} {...task} index={index}/>
        ))
      }
      {
        tasksType === "active" &&
        tasks.filter((task) => {if (task.status === false) {return true} else return false}).map((task, index) => (
          <Task key={index} {...task} index={index}/>
        ))
      }
      {
        tasksType === "completed" &&
        tasks.filter((task) => {if (task.status === true) {return true} else return false}).map((task, index) => (
          <Task key={index} {...task} index={index}/>
        ))
      }
    </ul>
  );
}

export default Tasks;