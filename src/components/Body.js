import React from 'react'
import '../Style/Body.css'
import Facebook_logo from '../images/facebook.png'
import {Link} from 'react-router-dom'

const Body = () => {
  
  return (
    <div className='body' >
<main>
  <div className='container'>
    <div className='left'>
      <img src={Facebook_logo} alt="" style={{width:260}}/>
      <p>Facebook helps you connect and share with the people in your life.</p>
    </div>

    <div className='right'>
      <form action="action">
        <input type="text" placeholder="Email address or phone number"/>
        <input type="password" placeholder="Password" required/>
        <Link to='/' id='Login-Button'>Log In</Link>
        <Link to ='/Forgetten' id='Forget-password' >Forgetten Password?</Link>
        <div className='Sign-up'>
          <Link to='/Sign' id='Sign-up-button'>Create New Account</Link>
          </div>
      </form>
      <p><Link to='/Create' className='create'><b>Create a page</b></Link> for a celebrity, brand or business. </p>
    </div>
      </div>
  </main>
  
  </div>  
    
  )
}

export default Body;