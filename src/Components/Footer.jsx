import React from 'react'
import '../Components/Footer.css';
import {FaLinkedin,FaTwitterSquare,FaGithub,FaFacebookSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <div className='Outer'>
<section className='Inner'>
  <aside className='icons'>
    <FaFacebookSquare size={50} className='hover:scale-105 cursor-pointer' color='white' /> <FaGithub size={50} className='hover:scale-105 cursor-pointer' color='white'/> <FaTwitterSquare className='hover:scale-105 cursor-pointer' size={50} color='white'/> <FaLinkedin size={50} className='hover:scale-105 cursor-pointer' color='white'/>
  </aside>
<div className='foot'>
  <ul c className='footer-menu' style={{margin:'auto',fontWeight:'bolder', display:'flex',listStyle:'none',height:'2rem',justifyContent:'space-between'}}> <li>Info</li> <li>Support</li> <li>Marketing</li> <li>Refund</li></ul>
  <ul className='footer-link' style={{display:'flex',fontWeight:'bolder',listStyle:'none',height:'2rem',justifyContent:'space-between',marginTop:'6px'}}>  <li>Terms of Use</li> <li>Privacy Policy</li> <li>Career</li> <li>About</li></ul>
  </div>
</section>
<aside style={{width:'100%',padding:'15px 0px 15px 0px',display:'flex', justifyContent:'center',position:'absolute', bottom:'0'}}>
<p style={{color:'white'}}>©2022 Saurabh Pranjale Supermarket </p>
</aside>
    </div>
    </>
  )
}

export default Footer