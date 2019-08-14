import React from 'react'

const MessageItem = ({ message, id }) => {
  return (
    <div data-id={id}>{message}</div>
  )
}

export default MessageItem
