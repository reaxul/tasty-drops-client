import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  id: 0,
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks.push({ id: state.id, ...payload, subTask: [] });
      state.id++;
    },
    addSubtask: (state, { payload }) => {
      const { taskId, subtaskName } = payload;
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.subTask.push({ name: subtaskName, status: "pending" });
      }
    },
    removeTask: (state, { payload }) => {
      const filteredItem = state.tasks.filter((item) => item.id !== payload);
      state.tasks = filteredItem;
    },
  },
});

export const { addTask, addSubtask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
