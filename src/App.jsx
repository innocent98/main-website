import './App.scss'
import "../src/scss/_globals.scss"
import Auth from './atomic/organisms/Auth'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingPage/LandingPage'
import SignIn from './atomic/organisms/authfreme/authforms/SignIn'
import ForgotPassword from './atomic/organisms/authfreme/forgotpasswordflow/ForgotPassword'
import VerifyEmail from './atomic/organisms/authfreme/forgotpasswordflow/VerifyEmail'
import NewPassword from './atomic/organisms/authfreme/forgotpasswordflow/NewPassword'
import Success from './atomic/organisms/authfreme/forgotpasswordflow/Success'

function App() {
  return (
    <Routes>
      <Route exact path='/' Component={LandingPage} />
      <Route exact path='/signUp' Component={Auth} />
      <Route exact path='/signin' Component={SignIn} />
      <Route exact path="/forgot_password" Component={ForgotPassword}/>
      <Route exact path='forgot_password/verify_email' Component={VerifyEmail}/>
      <Route exact path='forgot_password/new_password' Component={NewPassword}/>
      <Route exact path='forgot_password/success' Component={Success}/>
    </Routes>
  )
}

export default App
