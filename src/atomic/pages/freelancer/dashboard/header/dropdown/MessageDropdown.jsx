import React, { useState } from 'react'

const MessageDropdown = () => {
  const [isNotificationEmpty, setIsNotificationEmpty] = useState(true)
  return (
    <section className='message--dropdown'>
      <div>
        <p>Messages</p>
      </div>
      {isNotificationEmpty ? <div>
        <p>Your Inbox is Empty</p>
        <p>All your conversations will show here</p>
      </div> : ""}
    </section>
  )
}

export default MessageDropdown
