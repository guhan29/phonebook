import React from 'react'

const Notification = ({ message }) => {
  if(message[0] == null) {
    return <></>
  } else {
    return (
      <div>
        <h1 className={message[0]}>{message[1]}</h1>
      </div>
    )
  }
}

export default Notification