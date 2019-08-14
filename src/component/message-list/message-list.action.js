import {
  ADD_MESSAGE_TO_LIST,
  INIT_MESSAGE_LIST
} from "./message-list.const";

export const addMessageAction = data => ({
  data,
  type: ADD_MESSAGE_TO_LIST
})

export const initMessageListAction = data => ({
  data,
  type: INIT_MESSAGE_LIST
})
