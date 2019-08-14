import { messageListReducer } from "../message-list.reducer";
import { ADD_MESSAGE_TO_LIST } from "../message-list.const";

describe('@@@ Message list reducer', () => {
  it('should add a message to list', () => {
    const list = [{ delivered: true, message: 'first', id: 12123123 }]
    const data = { delivered: false, message: 'second', id: 3453453453 }

    const action = {
      type: ADD_MESSAGE_TO_LIST,
      data
    }

    const expected = [
      ...list,
      { ...data, delivered: true }
    ]
    const result = messageListReducer(list, action)

    expect(result).toEqual(expected)
  })
})
