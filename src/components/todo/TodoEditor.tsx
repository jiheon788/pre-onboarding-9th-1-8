import { updateTodo } from '@/api/todo';
import useInputs from '@/lib/hooks/useInputs';
import { ITodo } from '@/pages/TodoPage/types';
import { useState } from 'react';

const TodoEditor = ({
  todo,
  getTodos,
  setIsUpdate,
}: {
  todo: ITodo;
  getTodos: () => void;
  setIsUpdate: (isUpdate: boolean) => void;
}) => {
  const [todoEdit, onChangeTodoEdit] = useInputs(todo);
  const [isProcessing, setIsProcessing] = useState(false);

  const onUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsProcessing(true);

    const { todo, isCompleted, id } = todoEdit;
    updateTodo({ todo, isCompleted, id })
      .then((_) => {
        getTodos();
      })
      .catch((err) => {
        alert(err.response.data.message || err.statusText);
      })
      .finally(() => {
        setIsProcessing(false);
        setIsUpdate(false);
      });
  };

  return (
    <form
      onSubmit={onUpdate}
      className="d-flex justify-content-between align-items-center"
      style={{ width: '100%' }}
    >
      <label
        className="d-flex gap-3 align-items-center"
        style={{ width: '80%' }}
      >
        <input
          type="checkbox"
          checked={todo.isCompleted}
          readOnly
          className="form-check-input flex-shrink-0"
        />
        <input
          className="form-control"
          data-testid="modify-input"
          name="todo"
          value={todoEdit.todo}
          onChange={onChangeTodoEdit}
          disabled={isProcessing}
        />
      </label>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="submit"
          data-testid="submit-button"
          className="btn btn-outline-dark btn-sm"
        >
          제출
        </button>
        <button
          type="button"
          data-testid="cancel-button"
          onClick={() => setIsUpdate(false)}
          className="btn btn-outline-dark btn-sm"
        >
          취소
        </button>
      </div>
    </form>
  );
};

export default TodoEditor;
