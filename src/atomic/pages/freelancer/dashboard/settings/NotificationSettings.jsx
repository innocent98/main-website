import React from 'react'
import Container from '../../../../atoms/container/Container'
import Button from '../../../../atoms/button/Button'

const NotificationSettings = () => {
  return (
    <main className='noticifation--settings'>
      <form action="">
        <h3>
          Notification
        </h3>
        <Container variant="wrapper--flex--fit" className="notification-sec-wrapper">
          <div>
            <h4>Messages</h4>
            <p>Notify me with notifications concerning chat messages or inquiries</p>
          </div>
          <div>
            <input type="checkbox" />
          </div>
        </Container>
        <Container variant="wrapper--flex--fit" className="notification-sec-wrapper">
          <div>
            <h4>Messages</h4>
            <p>Notify me with notifications concerning chat messages or inquiries</p>
          </div>
          <div>
            <input type="checkbox" />
          </div>
        </Container>
        <Container variant="wrapper--flex--fit" className="notification-sec-wrapper">
          <div>
            <h4>Messages</h4>
            <p>Notify me with notifications concerning chat messages or inquiries</p>
          </div>
          <div>
            <input type="checkbox" />
          </div>
        </Container>
        <div className='hr'></div>
        <Container variant="wrapper--flex">
          <div>
            <input type="checkbox" />
          </div>
          <p>Unsubscribe from emails</p>
        </Container>
        <Button variant="default--fit">
          Save Changes
        </Button>
      </form>
    </main>
  )
}

export default NotificationSettings
