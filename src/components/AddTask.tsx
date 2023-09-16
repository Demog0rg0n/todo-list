import React from 'react';
import { addTask } from '../redux/slices/tasksSlice';
import { useAppDispatch } from '../redux/store';

const AddTask: React.FC = () =>  {

  const [task, setTask] = React.useState<string>("")
  const dispatch = useAppDispatch()

  return (
    <div className="addTask">
      <input 
        onChange={(e) => setTask(e.target.value)} 
        type="text" 
        className='addTask__input' 
        value={task}
        placeholder='Новая задача...'
        data-testid="add-task-input"
      />
      <button 
        className="addTask__button"
        data-testid="add-task-button"
        onClick={() => {
            dispatch(addTask(task))
            setTask("")
        }}
      >
        +
      </button>
    </div>
  );
}

export default AddTask;