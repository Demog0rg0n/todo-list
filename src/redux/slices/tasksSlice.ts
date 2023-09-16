import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type taskType = {
  title: string;
  status: boolean
}

type tasksSliceState = {
  tasks: taskType[];
  tasksType: "all" | "completed" | "active";
}

const initialState: tasksSliceState = {
  tasks: [],
  tasksType: "all"
}



export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, {payload}: PayloadAction<string>) {
      if(payload) {
        const task = {
          title: payload,
          status: false,
        }
        state.tasks.push(task)
      }
    },
    setTaskStatus(state, {payload}: PayloadAction<number>) {
      state.tasks[payload].status = !state.tasks[payload].status
    },
    setTasksType(state, {payload}: PayloadAction<"all" | "completed" | "active">) {
      state.tasksType = payload
    }
  },
})

export const { addTask, setTaskStatus, setTasksType } = tasksSlice.actions

export default tasksSlice.reducer