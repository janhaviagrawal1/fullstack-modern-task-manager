import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import {
  DragDropContext,
  Droppable,
  Draggable
} from '@hello-pangea/dnd';

import {
  removeTask,
  reorderTasks
} from './taskSlice';

export default function TaskList() {
  const reduxTasks =
    useSelector(state => state.tasks.tasks) || [];

  const [tasks, setTasks] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setTasks(reduxTasks);
  }, [reduxTasks]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(tasks);

    const [movedItem] = items.splice(
      result.source.index,
      1
    );

    items.splice(
      result.destination.index,
      0,
      movedItem
    );

    // ✅ instant UI update
    setTasks(items);

    // ✅ backend persistence
    dispatch(reorderTasks(items));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Draggable
                key={task._id}
                draggableId={task._id.toString()}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      padding: '10px',
                      margin: '10px 0',
                      border: '1px solid #ccc',
                      borderRadius: '5px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      background: '#f9f9f9',
                      ...provided.draggableProps.style
                    }}
                  >
                    <span
                      style={{
                        color:
                          task.priority === 'high'
                            ? 'red'
                            : task.priority === 'medium'
                            ? 'orange'
                            : 'green'
                      }}
                    >
                      {task.text} ({task.priority})
                    </span>

                    <button
                      onClick={() =>
                        dispatch(removeTask(task._id))
                      }
                    >
                      ❌
                    </button>
                  </div>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}