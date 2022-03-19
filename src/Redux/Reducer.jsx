import {
  ADD_ITEMS_DELETE,
  ADD_ITEMS_FAIL,
  ADD_ITEMS_SUCCESS
} from "./ActionType";

const initState = {
  todo: [],
  isERR: false,
  loading: false
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ITEMS_SUCCESS:
      return {
        ...state,
        todo: [...state.todo, action.payload]
      };

    case ADD_ITEMS_FAIL:
      return {
        ...state,
        isERR: true,
        loading: false
      };

    case ADD_ITEMS_DELETE:
      const newTodos = state.todo.filter((todo) => todo.id !== action.payload);
      return {
        ...state,
        todo: newTodos
      };

    default:
      return state;
  }
};
