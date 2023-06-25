import {Link,} from 'react-router-dom'
import {useState} from 'react'
import {useSignup} from '../hook/useSignup'
// import { UseAuthContext } from '../hook/useAuthContext';
// import {useValidator} from '../hook/useValidator'
import './login.css';

export default function Signup() {
  // const {verifiy} = useValidator()
  // const {user}= UseAuthContext();
  // const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password ,setPassword]= useState('')
  const { signup, isLoading , error}= useSignup()

  const handle_submit= async (e) =>{
    e.preventDefault()
    await signup(email, password)
    // const users = localStorage.getItem('user')
    
  }
  return (<div id= 'pos'>
    <form className="form"onSubmit={handle_submit} >
    <div className="header">Sign UP</div>
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
    <button disabled={isLoading} className="sigin-btn" type='submit'>signup</button>
    {error && <div className='error'>{error}</div>}
    <p className="signup-link">alrady have account <Link to={'/'}>login</Link></p>
    </div>
</form>
</div>
  )
}
