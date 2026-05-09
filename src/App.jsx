import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import TaskForm from './features/tasks/TaskForm';
import TaskList from './features/tasks/TaskList';
import ThemeToggle from './components/ThemeToggle';

import { fetchTasks } from './features/tasks/taskSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: '100vh',
        paddingTop: '40px',
        background: '#f5f5f5'
      }}
    >
      <div
        className="app-container"
        style={{
          width: '100%',
          maxWidth: '600px',
          background: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }}
      >
        <ThemeToggle />

        <h1
          style={{
            textAlign: 'center',
            marginBottom: '20px'
          }}
        >
          Fullstack Task Manager 🚀
        </h1>

        <TaskForm />

        <div style={{ marginTop: '20px' }}>
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;