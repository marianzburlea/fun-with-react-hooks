import React, { useState, useReducer, useRef, useEffect } from 'react'
import MessageInput from '../message-input';
import { messageListReducer } from './message-list.reducer';
import axios from 'axios'
import { addMessageAction, initMessageListAction } from './message-list.action';
import Title from '../title';
import MessageItem from '../message-item';

const getId = () => ~~(Math.random() * 999999)
const API_URL = 'https://frontend-code-test.herokuapp.com/messages'
const getDefaultMessage = () => ({ message: '', localId: getId(), delivered: false })

const MessageList = () => {
  const [message, setMessage] = useState(getDefaultMessage())
  const [messageList, updateMessageList] = useReducer(messageListReducer, [])
  const myInput = useRef()

  useEffect(() => {
    const localMessageList = JSON.parse(window.localStorage.getItem('messageList')) || []
    if (localMessageList.length) {
      updateMessageList(initMessageListAction(localMessageList))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('messageList', JSON.stringify(messageList))
  }, [messageList])

  const handleInputChange = e => {
    const { value } = e.target

    setMessage({
      ...message,
      message: value,
    })
  }

  const handleOnClick = () => {
    const data = { ...message }
    axios
      .post(
        API_URL,
        data
      )
      .then(({ data }) => {
        updateMessageList(addMessageAction(data))
        setMessage(getDefaultMessage())
        myInput.current.focus()
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        console.log('Request done')
      })
  }

  const renderMessageList = () =>
    messageList.map(message => <MessageItem key={message.id} {...message} />)

  return (
    <div>
      <Title>Message list</Title>
      {renderMessageList()}
      <Title>Add message to list</Title>
      <MessageInput
        value={message.message}
        onClick={handleOnClick}
        myInput={myInput}
        onChange={handleInputChange} />
    </div>
  )
}

export default MessageList
