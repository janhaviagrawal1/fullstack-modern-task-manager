import { createSlice } from '@reduxjs/toolkit';

const savedTasks =
  JSON.parse(localStorage.getItem('tasks')) || [];

const initialState = {
  tasks: savedTasks,
};

const saveTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveTasks(state.tasks);
    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(
        task => task.id !== action.payload
      );
      saveTasks(state.tasks);
    },

    reorderTasks: (state, action) => {
      state.tasks = action.payload;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  }
});

export const { addTask, deleteTask, reorderTasks } = taskSlice.actions;
export default taskSlice.reducer;