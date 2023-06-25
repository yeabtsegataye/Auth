import {Link} from 'react-router-dom'
import {useState} from 'react'
import { useLogin } from '../hook/useLogin'
import { UseAuthContext } from '../hook/useAuthContext'
import {useValidator} from '../hook/useValidator'

import './login.css'

export default function Login() {
  const {verifiy} = useValidator()

  const {user} = UseAuthContext()
  const {isLoading, error, login}= useLogin()
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  // const navigate = useNavigate(); 

const handle_submit=async (e) =>{
  e.preventDefault()
  await login(email, password);
  if(user){
    verifiy()
    // navigate('/profile')
  }
  
}

  return (<div id= 'pos'>
    <form className="form" onSubmit={handle_submit}>
    <div className="header">Log IN</div>
    <div className="inputs">
        <input
            placeholder="Email" 
            className="input"
            type="text"
            value={email}
            onChange = {(e)=>{
              setEmail(e.target.value)
            }}
            /> 
        <input 
              placeholder="Password" 
              className="input" 
              type="password"
              value={password}
              onChange = {(e)=>{
                setPassword(e.target.value)
              }}
              />
    <div className="checkbox-container">
        <label className="checkbox">
        <input type="checkbox" id="checkbox"/>
        </label>
        <label type="checkbox" className="checkbox-text">Remember me</label>
    </div>
    <button disabled={isLoading} className="sigin-btn" type='submit'>Login</button>
    {error && <div className='error'>{error}</div>}
    <p className="signup-link">Don't have an account? <Link to={'./signup'}>signup</Link></p>
    </div>
</form>
</div>
  )
}
