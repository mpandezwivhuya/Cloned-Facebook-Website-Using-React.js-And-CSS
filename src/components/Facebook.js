import React from 'react'
import {Link} from 'react-router-dom'
import Phone from '../images/phone.jpg'
import Icon from '../images/fb-icon.png'
import Download from '../images/d-icon.png'
import Google from '../images/google.png'
import '../Style/facebook.css'

const Facebook = () => {
  return (
    <div className='brave' >
    <header className='fb-lite' >
    <div className='facebook-lite'>
        <img className='img' src={Phone} alt="" id='fb-sideload-icon'/>
        <img className='img-fb' src={Icon} alt="" id='sideload-icon'/>
        <h2 className='head'>Facebook Lite</h2>
        <p className='faster'>A faster Facebook experience for Android.</p>
        <Link to='/' id='download-btn' > Download</Link>
        <img className='down' src={Download} alt=""/>
        
        <Link to='/'><img className='google-btn' src={Google} alt="" id='google'/></Link>
        <p className='megabyte'>1.92 MB</p>
    </div>
    </header>

    <div className='python' style={{backgroundColor:'white'}}>
    <p className='heading' >This version of Facebook uses less data and works in all network conditions.</p>
    <p className='text' >Facebook Lite:</p>
        <p className= 'number-one' >. is installed quickly - the app is smaller, so it's quick to download and uses less storage space;</p>
        
            <p className='number-two'>. works on old Android phones - you can use it on older Android phones that are not supported by the regular Facebook app;</p>
 
            <p className='number-three'>. uses less data - be more efficient with your mobile data. Save money by using less data;</p>

            <p className='number-four'>. loads quickly - it is our fastest app. Upload photos faster and see updates from friends;</p>

            <p className='number-five'>. works on all networks - it is designed for 2G networks and areas with slow or unstable Internet connections.</p>
            <p id='android' style={{fontWeight: 600, color:' #141823'}}>Compatibility:</p>
            <p id='android-version' style={{color:'#1c1e21', fontSize: 15}}>Android 2.2 or higher</p>
            <p id='update' style={{fontWeight: 600, color:' #141823'}}>Last updated:</p>
            <p id='updated-date' style={{color:'#1c1e21', fontSize: 15}}>15 June 2022</p>
  </div>

  <div className='contents'>
    <div className='top'>
        <ol>
            <li style={{color: '#8a8d91'}}>English (UK)</li>
            <li><Link to ='/'>മലയാളം</Link></li>
            <li><Link to ='/'>தமிழ்</Link></li>
            <li><Link to ='/'>తెలుగు</Link></li>
            <li><Link to ='/'>বাংলা</Link></li>
            <li><Link to ='/'>اردو</Link></li>
            <li><Link to ='/'>हिन्दी</Link></li>
            <li><Link to ='/'>ಕನ್ನಡ</Link></li>
            <li><Link to ='/'>Español</Link></li>
            <li><Link to ='/'>Português (Brasil)</Link></li>
            <li><Link to ='/'>Français (France)</Link></li>
            <li style={{ color: ' #4b4f56'}}><button>+</button></li>
        </ol>

        <ol>
            <li><Link to ='/Sign'>Sign Up</Link></li>
            <li><Link to='/'>Log In </Link></li>
            <li><Link to ='/'>Messenger</Link></li>
            <li><Link to ='/Facebook'>Facebook Lite</Link></li>
            <li><Link to ='/'>Watch</Link></li>
            <li><Link to ='/'>People</Link></li>
            <li><Link to ='/'>Pages</Link></li>
            <li><Link to ='/'>Page categories</Link></li>
            <li><Link to ='/'>Places</Link></li>
            <li><Link to ='/'>Games</Link></li>
            <li><Link to ='/'>Locations</Link></li>
            <li><Link to ='/'>Marketplace</Link></li>
            <li><Link to ='/'>Facebook</Link></li>
            <li><Link to ='/'>PayGroups</Link></li>
            <li><Link to ='/'>Jobs</Link></li>
            <li><Link to ='/'>Oculus</Link></li>
            <li><Link to ='/'>Portal</Link></li>
            <li><Link to ='/'>Instagram</Link></li>
            <li><Link to ='/'>Local</Link></li>
            <li><Link to ='/'>Fundraisers</Link></li>
            <li><Link to ='/'>Services</Link></li>
            <li><Link to ='/'>Voting Information Centre</Link></li>
            <li><Link to ='/'>Groups</Link></li>
            <li><Link to ='/'>About</Link></li>
            <li><Link to ='/'>Create ad</Link></li>
            <li><Link to ='/Create'>Create Page</Link></li>
            <li><Link to ='/'>Developers</Link></li>
            <li><Link to ='/'>Careers</Link></li>
            <li><Link to ='/'>Privacy</Link></li>
            <li><Link to ='/'>Cookies</Link></li>
            <li><Link to ='/'>AdChoices</Link></li>
            <li><Link to ='/'>Terms</Link></li>
            <li><Link to ='/'>Help</Link></li>
            <li><Link to ='/'>Contact uploading and non-usersSettings</Link></li>
        </ol>
        <small>Meta © 2022</small>
    </div>
    </div>
  </div>
  
 
  )
}

export default Facebook;