export const createStore = (reducer, initialState) => {
  const currentReducer = reducer;
  let currentState = initialState;
  let listener = () => {};

  return {
    getState() {
      return currentState;
    },
    dispatch(action) {
      currentState = currentReducer(currentState, action);
      listener();
      return action;
    },
    subscribe(newListener) {
      listener = newListener;
    },
  };
};
