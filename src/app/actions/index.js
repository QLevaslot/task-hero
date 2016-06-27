let nextTaskId = 0;

export const addTask = (description) => ({
  type: 'ADD_TASK',
  id: nextTaskId++,
  description
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTask = (id) => ({
  type: 'TOGGLE_TASK',
  id
});
