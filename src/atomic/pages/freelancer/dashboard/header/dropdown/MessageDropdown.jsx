import React, { useState } from 'react'

const MessageDropdown = () => {
  const [isNotificationEmpty, setIsNotificationEmpty] = useState(true)
  return (
    <section>
      <div>
        <p>Notifications</p>
      </div>
      {isNotificationEmpty ? <div>
        <p>No notifications yet</p>
        <p>All your notifications will show here</p>
      </div> : ""}
    </section>
  )
}

export default MessageDropdown
