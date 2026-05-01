import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { reorderTasks, deleteTask } from './taskSlice';

export default function TaskList() {
  const tasks = useSelector(state => state.tasks.tasks) || [];
  const dispatch = useDispatch();

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [movedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, movedItem);

    dispatch(reorderTasks(items));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasks
              ?.filter(task => task && task.id)
              .map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={task.id.toString()}
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
                      onClick={() => dispatch(deleteTask(task.id))}
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