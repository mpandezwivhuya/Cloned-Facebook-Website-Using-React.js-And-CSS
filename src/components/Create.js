
import React from 'react'
import Create_logo from '../images/create.png'
import {Link} from 'react-router-dom'
import Brand from '../images/brand.png'
import Community from '../images/community.png'
import '../Style/create.css'


const Create = () => {
  return (
    <div className='body' >
     
       <div className='header' style={{backgroundColor:'#426bbd' , height:100}}>
        <img src={Create_logo} alt="" /> 
          
           <div id='login'>
                <Link to='/Sign' id='sign-up'>Sign Up</Link>
            <div class='login'>
            <Link to ='/' id='join-login'>Join or log in to Facebook</Link>
            </div>
            
           </div>
           </div>
       <div className='main' style={{padding: 50, backgroundColor:'#f0f2f5'}}>

           <h2 className='second-title'>Create a Page</h2>
        <p className='news'>Connect your business, yourself or your cause to the worldwide community of people on Facebook. To get started, choose a Page category. </p>
        <div id='row'> 
        <div className='col1'>

            <div className='left-side'>
                <img src={Brand} alt=""/>
                <h2>Business or brand</h2>
                <p>Showcase your products and services, spotlight your brand and reach more customers on Facebook.</p>
                <div className='Get-started'>
                    <Link to ='/' id='Get-started'>Get started</Link>
                    </div>
            </div>
            <div className='col2'>
            <div className='right-side'>
                <img src={Community} alt=""/>
                <h2>Community or public figure</h2>
                <p>Connect and share with people in your community, organisation, team, group or club.</p>
                <div className='Get-started'>
                    <Link to ='/' id='Get-started'>Get started</Link>
                    </div>
            </div>
            </div>
         </div>
        </div>
        </div>

    </div>
  
  )
}

export default Create;
