import React from 'react'
import Facebook_logo from '../images/fbook.png'
import '../Style/Forgetten.css'
import { Link } from 'react-router-dom'

const Forgetten = () => {
  return (
   
    <main className='word'>
    <header>
        <img src={Facebook_logo} alt=""/>   
          
          <div id='facebook-login'>
            
            <input type="email"  placeholder="Email or phone" id='all5' required/>
           <input type="password" placeholder="Password" id='all5' required/>
           <Link to='/' id='submit'> Log In</Link>
            <Link to='/Forgetten' id="Forget-account">Forgotten account?</Link>
           </div>
    </header>
    <form className='coder'>
    <h2 style={{marginRight: 200}} className='first-title'>Find Your Account</h2>
    <hr/>
    
    
        <p className='first-sub-title' id='sub-title'>Please enter your email address or mobile number to search for your account.</p>
        <div className='input'>
    <input type="email" placeholder="Mobile number or email address" id='all1' required/>

    <hr/>
    <div className='cancel'>
        <Link to='/' id='cancel'>Cancel</Link>
        </div>
        <div className='search'>
            <Link to='/' id='search'>search</Link>
            </div>

    </div>
    </form>
    </main>
   
  )
}

export default Forgetten;
