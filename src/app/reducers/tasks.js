const task = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        id: action.id,
        description: action.description,
        status: 'todo',
        dueDate: action.dueDate,
        tags: action.tags,
        favorite: action.favorite,
        _synchronised: action.synchronised
      };
    case 'TOGGLE_TASK':
      if (state.id !== action.id) {
        return state;
      }
      return { ...state, status: (state.status === 'done' ? 'todo' : 'done') };
    default:
      return state;
  }
};

const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        task(undefined, action)
      ];
    case 'TOGGLE_TASK':
      return state.map(t =>
        task(t, action)
      );
    default:
      return state;
  }
};

export default tasks;
