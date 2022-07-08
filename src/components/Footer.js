import React from 'react'
import '../Style/footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
  <div className='footer-contents'>
        <ol>
            <li>English (UK)</li>
            <li><Link to='/'>മലയാളം</Link></li>
            <li><Link to='/'>தமிழ்</Link></li>
            <li><Link to='/'>తెలుగు</Link></li>
            <li><Link to='/'>বাংলা</Link></li>
            <li><Link to='/'>اردو</Link></li>
            <li><Link to='/'>हिन्दी</Link></li>
            <li><Link to='/'>ಕನ್ನಡ</Link></li>
            <li><Link to='/'>Español</Link></li>
            <li><Link to='/'>Português (Brasil)</Link></li>
            <li><Link to='/'>Français (France)</Link></li>
            <li><button>+</button></li>
        </ol>

        <ol>
            <li><Link to ='/Sign'>Sign Up</Link></li>
            <li><Link to='/'>Log In </Link></li>
            <li><Link to='/'>Messenger</Link></li>
            <li><Link to ='/Facebook'>Facebook Lite</Link></li>
            <li><Link to='/'>Watch</Link></li>
            <li><Link to='/'>People</Link></li>
            <li><Link to='/'>Pages</Link></li>
            <li><Link to='/'>Page categories</Link></li>
            <li><Link to='/'>Places</Link></li>
            <li><Link to='/'>Games</Link></li>
            <li><Link to='/'>Locations</Link></li>
            <li><Link to='/'>Marketplace</Link></li>
            <li><Link to='/'>Facebook</Link></li>
            <li><Link to='/'>PayGroups</Link></li>
            <li><Link to='/'>Jobs</Link></li>
            <li><Link to='/'>Oculus</Link></li>
            <li><Link to='/'>Portal</Link></li>
            <li><Link to='/'>Instagram</Link></li>
            <li><Link to='/'>Local</Link></li>
            <li><Link to='/'>Fundraisers</Link></li>
            <li><Link to='/'>Services</Link></li>
            <li><Link to='/'>Voting Information Centre</Link></li>
            <li><Link to='/'>Groups</Link></li>
            <li><Link to='/'>About</Link></li>
            <li><Link to='/'>Create ad</Link></li>
            <li><Link to ='/Create'>Create Page</Link></li>
            <li><Link to='/'>Developers</Link></li>
            <li><Link to='/'>Careers</Link></li>
            <li><Link to='/'>Privacy</Link></li>
            <li><Link to='/'>Cookies</Link></li>
            <li><Link to='/'>AdChoices</Link></li>
            <li><Link to='/'>Terms</Link></li>
            <li><Link to='/'>Help</Link></li>
            <li><Link to='/'>Contact uploading and non-usersSettings</Link></li>
        </ol>
        <small>Meta © 2022</small>
    </div>
  </footer>

  )
}

export default Footer