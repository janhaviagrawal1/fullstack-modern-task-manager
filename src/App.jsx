import TaskForm from './features/tasks/TaskForm';
import TaskList from './features/tasks/TaskList';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: '100vh',
        background: '#f5f5f5',
        paddingTop: '40px'
      }}
    >
      <div className="app-container">
        <ThemeToggle />
        <h1 style={{ textAlign: 'center' }}>
          AI Task Manager 🚀
        </h1>

        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;