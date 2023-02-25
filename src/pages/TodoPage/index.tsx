import { getTodo } from '@/api/todo';
import TodoForm from '@/components/todo/TodoForm';
import TodoItem from '@/components/todo/TodoItem';
import { ITodo } from '@/pages/TodoPage/types';
import { useCallback, useEffect, useState } from 'react';

const TodoPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const getTodos = useCallback(() => {
    getTodo()
      .then((res) => setTodos(res.data))
      .catch((err) => {
        alert(err.response.data.message || err.statusText);
      });
  }, []);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <div className="container my-5">
      <h1 className="display-5 fw-bold">Todos</h1>
      <TodoForm getTodos={getTodos} />
      <ul className="list-group w-auto">
        {todos.length === 0 ? (
          <div>Todos is empty :</div>
        ) : (
          todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} getTodos={getTodos} />;
          })
        )}
      </ul>
    </div>
  );
};

export default TodoPage;
