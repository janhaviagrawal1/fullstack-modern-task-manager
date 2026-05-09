import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from './taskSlice';

export default function TaskForm() {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('medium');
  const dispatch = useDispatch();

  const getPriority = (text) => {
    const lower = text.toLowerCase();

    if (lower.includes('urgent') || lower.includes('asap') || lower.includes('today')) {
      return 'high';
    }

    if (lower.includes('later') || lower.includes('sometime')) {
      return 'low';
    }

    return 'medium';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const smartPriority = getPriority(text);

    dispatch(createTask({
      text,
      priority
    }));

    setText('');
    setPriority('medium');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
        style={{ padding: '10px', width: '60%', marginRight: '10px' }}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={{ padding: '10px', marginRight: '10px' }}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button style={{ padding: '10px', width: '15%' }}>Add</button>
    </form>
  );
}