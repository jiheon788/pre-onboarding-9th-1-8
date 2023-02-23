import { createTodo, getTodos } from '@/api/todos';
import useInputs from '@/lib/hooks/useInputs';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface ITodo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: string | number;
}

const TodoPage = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [newTodo, onChangeNewTodo, setNewTodo] = useInputs({ todo: '' });

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = () => {
    getTodos().then((res) => {
      setTodos(res.data);
    });
  };

  const onCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createTodo(newTodo).then((_) => {
      loadTodos();
      setNewTodo({ todo: '' });
    });
  };

  return (
    <div className="container my-5">
      <h1 className="display-5 fw-bold">Todos</h1>
      <div className="px-4 py-5">
        <form onSubmit={onCreate}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="할 일을 입력해주세요."
              data-testid="new-todo-input"
              name="todo"
              value={newTodo.todo}
              onChange={onChangeNewTodo}
            />
            <button
              className="btn btn-dark"
              type="submit"
              data-testid="new-todo-add-button"
            >
              추가
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoPage;
