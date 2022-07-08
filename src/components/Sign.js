import React from 'react'
import {Link} from 'react-router-dom'
import Close from '../images/button.png'
import '../Style/sign.css'
import Background from '../images/background.png'


const Sign = () => {
  return (
    <div className='start' >
      <img src={Background} alt="" />
    <div className='form'>
          
          <div className='butn'>
          <Link to='/'><img className='rot' src={Close} alt=""/></Link>
         </div>
        
        
        <h2 className='third-title'> Sign Up</h2>
        <p className='third-sub-title' id='sub-text'>It's quick and easy</p>
      <hr/>
        <div className='output'>
          <input type="text" placeholder="first name" className='first-name' id="all6" required/>
          <input type="text" placeholder="Surname" className='surname' id='all6' required/>
          <input type="email"  placeholder="Mobile number or email address" id='all7' required/>
          <input type="password" placeholder="New password" id='all7' required />
        </div>
        <p className='title-3' id='title-3'> Date of Birth</p>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>16</option>
        <option>17</option>
        <option>18</option>
        <option>19</option>
        <option>20</option>
        <option>21</option>
        <option>22</option>
        <option>23</option>
        <option>24</option>
        <option>25</option>
        <option>26</option>
        <option>27</option>
        <option>28</option>
        <option>29</option>
        <option>30</option>
        <option>31</option>
      </select>
      <select>
        <option>Jan</option>
        <option>Feb</option>
        <option>Mar</option>
        <option>Apr</option>
        <option>May</option>
        <option>Jun</option>
        <option>Jul</option>
        <option>Aug</option>
        <option>Sep</option>
        <option>Oct</option>
        <option>Nov</option>
        <option>Dec</option>
        
      </select>
      <select>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
        <option>2019</option>
        <option>2018</option>
        <option>2017</option>
        <option>2016</option>
        <option>2015</option>
        <option>2014</option>
        <option>2013</option>
        <option>2012</option>
        <option>2011</option>
        <option>2010</option>
        <option>2009</option>
        <option>2008</option>
        <option>2007</option>
        <option>2006</option>
        <option>2005</option>
        <option>2004</option>
        <option>2003</option>
        <option>2002</option>
        <option>2001</option>
        <option>2000</option>
        <option>1999</option>
        <option>1998</option>
        <option>1997</option>
        <option>1996</option>
        <option>1995</option>
        <option>1994</option>
        <option>1993</option>
        <option>1992</option>
        <option>1991</option>
        <option>1990</option>
        <option>1989</option>
        <option>1988</option>
        <option>1987</option>
        <option>1986</option>
        <option>1985</option>
        <option>1984</option>
        <option>1983</option>
        <option>1982</option>
        <option>1981</option>
        <option>1980</option>
        
      </select>
      <p className='sub-3'>Gender</p>
      <div className='female' id='all0'>
        <label for="female">Female</label>
        <input type="radio" name="gender" value="female" />
      </div>
      <div className='male' id='all0'>
        <label for="male">Male</label>
        <input type="radio" name="gender" value="male"  style={{marginLeft:66}}/>
      </div>
      <div className='other' id='all0'>
        <label for="other">Custom</label>
        <input type="radio" name="gender" value="other" />
      </div>
      <p className='title-4'>
        People who use our service may have uploaded your contact information to Facebook. <Link to='/'>Learn more.</Link>
      </p>
      <p className='title-5'>
        By clicking Sign Up, you agree to our <Link to='/'> Terms, Data Policy </Link> and
        <Link to='/'> Cookie Policy.</Link> You may receive SMS notifications from us and can opt out at any time.
      </p>
      <Link to='/' id='finish'> Sign Up</Link>
    </div>
      </div>
  )
}

export default Sign;