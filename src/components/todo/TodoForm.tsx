import useInputs from '@/lib/hooks/useInputs';
import { useState } from 'react';
import { createTodo } from '@/api/todo';

const TodoForm = ({ getTodos }: { getTodos: () => void }) => {
  const [todoData, onChangeTodoData, setTodoData] = useInputs({ todo: '' });
  const [isProcessing, setIsProcessing] = useState(false);

  const onCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsProcessing(true);

    createTodo(todoData)
      .then(() => {
        getTodos();
      })
      .catch((err) => {
        alert(err.response.data.message || err.statusText);
      })
      .finally(() => {
        setIsProcessing(false);
        setTodoData({ todo: '' });
      });
  };

  return (
    <form onSubmit={onCreate} className="input-group mb-3">
      <input
        data-testid="new-todo-input"
        className="form-control"
        placeholder="할 일 추가하기"
        id="todo"
        name="todo"
        type="text"
        value={todoData.todo}
        onChange={onChangeTodoData}
        disabled={isProcessing}
      />
      <button
        type="submit"
        data-testid="new-todo-add-button"
        className="btn btn-dark"
      >
        추가
      </button>
    </form>
  );
};

export default TodoForm;
