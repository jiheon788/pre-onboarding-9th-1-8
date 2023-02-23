import { ITodo } from '@/pages/TodoPage';
import { useState } from 'react';
import TodoEditor from './TodoEditor';

interface ITodoProps {
  todo: ITodo;
}

const Todo = ({ todo }: ITodoProps) => {
  const [isUpdate, setIsUpdate] = useState(false);

  // TODO: onDelete, onCheck

  return (
    <li>
      {isUpdate ? (
        <TodoEditor />
      ) : (
        <>
          <label>
            <input type="checkbox" checked={todo.isCompleted} disabled />
            <span>{todo.todo}</span>
          </label>
          <div role="group">
            <button
              type="button"
              data-testid="modify-button"
              onClick={() => setIsUpdate(true)}
            >
              수정
            </button>
            <button type="button" data-testid="delete-button">
              삭제
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default Todo;
