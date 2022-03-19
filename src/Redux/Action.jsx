import { ADD_ITEMS, ADD_ITEMS_DELETE, ADD_ITEMS_SUCCESS } from "./ActionType";

export const addItems = () => ({
  type: ADD_ITEMS
});

export const addItemsSuccess = (message) => ({
  type: ADD_ITEMS_SUCCESS,
  payload: message
});

export const addItemsDelete = (id) => ({
  type: ADD_ITEMS_DELETE,
  payload: id
});
