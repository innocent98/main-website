
import "./notification.scss";
import{ Link} from "react-router-dom"

const Notification = ({ notifications }) => {


  return (
    <div className='notification-box'>
        <div className='notification-box_header'>
            <h3>Notification</h3>
        </div>
        <div className='notification-box_content'>
            {notifications.length > 0 ? (
                notifications.map(notification => (
                  <div key={notification.id} className='notification-card'>
                    <div className='notification-card_image'>
                    
                    </div>
                    <div className='notification-card_content'>
                        <div><p>{notification.message}</p></div>
                        <div>
                            <p style={{color:"#777777"}}>{notification.timestamp}</p>
                            <Link to={notification.profileLink}><button>View Profile</button></Link>
                        </div>
                    </div>
                  </div>
                ))
            ) : (
              <div className='no-notification'>
                <p>No Notification yet</p>
                <p>All your notifications will show here</p>
              </div>
            )}
        </div>
    </div>
  );
};

export default Notification;

