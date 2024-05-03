// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect, withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const history = props
    history.replace('/login')
  }
  return (
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
