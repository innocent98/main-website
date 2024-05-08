import React from 'react'
import { useState } from 'react'

const NotificationDropdown = () => {
  const [isNotificationEmpty, setIsNotificationEmpty] = useState(true)
  return (
    <div>
      <section className='notification--dropdown'>
        <div>
          <p>Notifications</p>
        </div>
        {isNotificationEmpty ? <div>
          <p>No notification yet</p>
          <p>All your notifications will show here</p>
        </div> : ""}
      </section>
    </div>
  )
}

export default NotificationDropdown
