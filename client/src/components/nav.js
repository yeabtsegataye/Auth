import {Link} from 'react-router-dom'
import {UseAuthContext} from '../hook/useAuthContext'
import {UseLogout} from '../hook/useLogout';

export const Nave = () => {
    const {user}= UseAuthContext()
    const {logout}= UseLogout()  
    const handl_logout = ()=>{
      logout()
    }

  return (
        <div>
            <nav className="navbar navbar-expand-sm bg-body-tertiary">
  <div className="container-fluid">
    <Link to={'/Home'} className="navbar-brand" >facebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={'/Home'} className="nav-link active mt-2" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">

         {user && <Link to={'/profile'} className="nav-link mt-2" >Profile</Link>} 
       
        </li>
        <li className="nav-item ">
         {!user && <Link to={'/'} className="nav-link" ><button className='btn btn-primary'>Login</button></Link>}
         {user && <Link to={'/'} className="nav-link"onClick={handl_logout} ><button className='btn btn-primary'> LOG OUT</button> <span id='emailname'>{user.email}</span></Link>}
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}