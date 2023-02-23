import { createTodo, getTodos } from '@/api/todos';
import Todo from '@/components/Todo';
import useInputs from '@/lib/hooks/useInputs';
import { useEffect, useState } from 'react';

export interface ITodo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: string | number;
}

const TodoPage = () => {
  const [isProcessing, setIsProcessing] = useState(false);
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
    if (!isProcessing) {
      setIsProcessing(true);

      createTodo(newTodo).then((_) => {
        loadTodos();
        setNewTodo({ todo: '' });
        setIsProcessing(false);
      });
    }
  };

  return (
    <div>
      <h1>Todos</h1>
      <div>
        <form onSubmit={onCreate}>
          <div>
            <input
              type="text"
              placeholder="할 일을 입력해주세요."
              data-testid="new-todo-input"
              name="todo"
              value={newTodo.todo}
              onChange={onChangeNewTodo}
            />
            <button
              type="submit"
              data-testid="new-todo-add-button"
              disabled={isProcessing}
            >
              추가
            </button>
          </div>
        </form>
        <ul>
          {todos.length === 0 ? (
            <div>todos is empty :(</div>
          ) : (
            todos.map((todo: ITodo) => <Todo key={todo.id} todo={todo} />)
          )}
        </ul>
      </div>
    </div>
  );
};

export default TodoPage;
