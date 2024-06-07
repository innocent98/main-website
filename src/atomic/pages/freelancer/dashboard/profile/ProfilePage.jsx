import { NavLink } from 'react-router-dom'
import ProfileInfo from './ProfileInfo';
import ProfileProjects from './ProfileProjects';

const ProfilePage = () => {
  return (
    <main className='profile-wrapper'>
      <NavLink to="/overview" className="link">Back to dashboard</NavLink>
      <section className="profile-wrapper__flex">
        <ProfileInfo />
        <ProfileProjects />
      </section>
    </main>
  )
}

export default ProfilePage
