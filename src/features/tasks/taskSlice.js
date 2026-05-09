import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'http://localhost:5000/api/tasks';

export const reorderTasks = createAsyncThunk(
  'tasks/reorder',
  async (tasks) => {
    await axios.put(
      'http://localhost:5000/api/tasks/reorder',
      tasks
    );

    return tasks;
  }
);

// GET tasks
export const fetchTasks = createAsyncThunk('tasks/fetch', async () => {
  const res = await axios.get(API);
  return res.data;
});

// ADD task
export const createTask = createAsyncThunk('tasks/add', async (task) => {
  const res = await axios.post(API, task);
  return res.data;
});

// DELETE
export const removeTask = createAsyncThunk('tasks/delete', async (id) => {
  await axios.delete(`${API}/${id}`);
  return id;
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: { tasks: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(reorderTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(t => t._id !== action.payload);
      });
  }
});

export default taskSlice.reducer;