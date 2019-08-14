import { ADD_MESSAGE_TO_LIST, INIT_MESSAGE_LIST } from "../message-list.const";
import { addMessageAction, initMessageListAction } from "../message-list.action";

describe('@@@ Message list Action', () => {
  it('should return an action object', () => {
    const data = {
      message: 'la ba ba',
      id: 9127398217
    }
    const expected = {
      type: ADD_MESSAGE_TO_LIST,
      data
    }
    const result = addMessageAction(data)

    expect(result).toEqual(expected)
  })

  it('should return an action object for a list', () => {
    const data = [{
      message: 'la ba ba',
      id: 9127398217
    },
    {
      message: 'na na la ba',
      id: 343464645645
    }]
    const expected = {
      type: INIT_MESSAGE_LIST,
      data
    }
    const result = initMessageListAction(data)

    expect(result).toEqual(expected)
  })
})
