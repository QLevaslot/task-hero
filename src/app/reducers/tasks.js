const task = (state, action) => {
  let newState = {};
  switch (action.type) {
    case 'ADD_TASK':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TASK':
      if (state.id !== action.id) {
        return state;
      }
      newState = state;
      newState.completed = !state.completed;
      return newState;
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
