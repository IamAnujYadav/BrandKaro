import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
      </div>
      <div className="about-right">
        <h3>ABOUT BRAND KARO</h3>
        <h2>A Personal Brand for Every Professional in Bharat</h2>
        <p>At Brandkaro, we believe in the power of a strong brand to transform a business. Our mission is to help companies, both big and small, navigate the complexities of branding and stand out in a crowded marketplace. We combine creative strategy with practical solutions to build brands that are not only memorable but also deeply connected to their audience. We are driven by the success of our clients and are passionate about helping them tell their unique story to the world.</p>
        <p>Founded on the principle that every business has a compelling story to tell, Brandkaro was born out of a desire to simplify the branding process. We saw a need for a partner that could offer expert guidance without the jargon or fluff. Our journey began with a simple idea: to make professional, impactful branding accessible to everyone. We've since grown into a team of strategists and creatives dedicated to helping businesses grow through authentic, powerful branding.</p>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum voluptates incidunt sapiente excepturi voluptatem perferendis optio aliquid eos quasi delectus provident aut rem in quos quam necessitatibus, quis et.</p> */}
      </div> 
    </div>
  )
}

export default About
