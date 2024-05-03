// Write your JS code here
import './index.css'
import Cookies from 'js-cookie'
import {Redirect, withRouter} from 'react-router-dom'

const Login = props => {
  const onSubmitSuccess = jwtToken => {
    const {history} = props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  const onLogin = async () => {
    const name = 'rahul'
    const password = 'rahul@2021'
    const userDetails = {name, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    }
  }
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="con">
      <div>
        <h1>Please Login</h1>
        <button type="button" onClick={onLogin}>
          Login with Sample Creds
        </button>
      </div>
    </div>
  )
}
export default withRouter(Login)
