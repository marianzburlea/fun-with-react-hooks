import { ADD_MESSAGE_TO_LIST, INIT_MESSAGE_LIST } from "./message-list.const";

export const messageListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_MESSAGE_TO_LIST:
      return [...state, { ...action.data, delivered: true }]
    case INIT_MESSAGE_LIST:
      return [...action.data]
    default:
      return state;
  }
}
