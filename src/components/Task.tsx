import React from 'react';
import { useAppDispatch } from '../redux/store';
import { setTaskStatus } from '../redux/slices/tasksSlice';

type taskProps = {
  title: string
  status: boolean
  index: number
}

const Task: React.FC<taskProps> = ({title, status, index}) =>  {

  const dispatch = useAppDispatch()

  return (
    <li 
      className={status? "task completed": "task"}
      onClick={() => dispatch(setTaskStatus(index))}
    >
      <div className="fake-checkbox">
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32c8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4C431.6 99.13 439.8 96 448 96C465.1 96 480 109.7 480 128z"/></svg>
      </div>
      <span>{title}</span>
    </li>
  );
}

export default Task;