import React from 'react'

const MessageInput = ({ onChange, value, onClick, myInput }) => {
  return (
    <div>
      <label htmlFor="my-input">Message:</label>
      <input
        type="text"
        id="my-input"
        value={value}
        ref={myInput}
        onChange={onChange} />
      <input type="button" onClick={onClick} value="Send" />
    </div>
  )
}

export default MessageInput
