import apiClient from '@/api/apiClient';
import { createTodoType, deleteTodoType, updateTodoType } from './types';

export const getTodo = async () => {
  return await apiClient({
    method: 'get',
    url: '/todos',
  });
};

export const createTodo = async ({ todo }: createTodoType) => {
  return await apiClient({
    method: 'post',
    url: '/todos',
    data: {
      todo,
    },
  });
};

export const updateTodo = async ({ todo, isCompleted, id }: updateTodoType) => {
  return await apiClient({
    method: 'put',
    url: `/todos/${id}`,
    data: {
      todo,
      isCompleted,
    },
  });
};

export const deleteTodo = async ({ id }: deleteTodoType) => {
  return await apiClient({
    method: 'delete',
    url: `/todos/${id}`,
  });
};
