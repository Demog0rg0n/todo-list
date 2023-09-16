import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { setTasksType } from '../redux/slices/tasksSlice';

const App: React.FC = () =>  {

  const dispatch = useAppDispatch()
  const {tasks, tasksType} = useAppSelector(state => state.tasksSlice)

  return (
    <footer className="footer">
      <div className="tasks-left">
        {tasks.filter((task) => {if (task.status === false) {return true} else return false}).length + " "}
        items left
      </div>
      <ul className="tasksTypes">
        <li 
          className={tasksType === "all"? "tasksType active": "tasksType"}
          onClick={() => dispatch(setTasksType("all"))}
        >All</li>
        <li 
          className={tasksType === "active"? "tasksType active": "tasksType"}
          onClick={() => dispatch(setTasksType("active"))}
        >Active</li>
        <li 
          className={tasksType === "completed"? "tasksType active": "tasksType"}
          onClick={() => dispatch(setTasksType("completed"))}
        >Completed</li>
      </ul>
    </footer>
  );
}

export default App;
