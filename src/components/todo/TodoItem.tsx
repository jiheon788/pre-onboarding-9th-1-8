import { deleteTodo, updateTodo } from '@/api/todo';
import { ITodo } from '@/pages/TodoPage/types';
import { useState } from 'react';
import TodoEditor from './TodoEditor';

const TodoItem = ({
  todo,
  getTodos,
}: {
  todo: ITodo;
  getTodos: () => void;
}) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const onCheckTodo = (selectedTodo: ITodo) => {
    const { todo, isCompleted, id } = selectedTodo;
    setIsProcessing(true);
    updateTodo({
      todo,
      isCompleted: !isCompleted,
      id,
    })
      .then((_) => {
        getTodos();
      })
      .catch((err) => {
        alert(err.response.data.message || err.statusText);
      })
      .finally(() => {
        setIsProcessing(false);
      });
  };

  const onClickDeleteButton = (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    setIsProcessing(true);
    deleteTodo({ id })
      .then((_) => {
        getTodos();
      })
      .catch((err) => {
        alert(err.response.data.log || err.log);
      })
      .finally(() => {
        setIsProcessing(false);
      });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isUpdate ? (
        <TodoEditor todo={todo} getTodos={getTodos} setIsUpdate={setIsUpdate} />
      ) : (
        <>
          <label className="d-flex gap-3">
            <input
              type="checkbox"
              className="form-check-input flex-shrink-0"
              checked={todo.isCompleted}
              onChange={() => onCheckTodo(todo)}
              disabled={isProcessing}
            />
            <span className="pt-1 form-checked-content">{todo.todo}</span>
          </label>
          <div
            role="group"
            className="btn-group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              className="btn btn-outline-dark btn-sm"
              data-testid="modify-button"
              onClick={() => setIsUpdate(true)}
            >
              수정
            </button>
            <button
              type="button"
              className="btn btn-outline-dark btn-sm"
              data-testid="delete-button"
              onClick={() => onClickDeleteButton(todo.id)}
              disabled={isProcessing}
            >
              삭제
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
