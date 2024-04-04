import React from 'react'
import User from './User'
import UserClass from './UserClass'
const About = () => {
  return (
    <div>
        <h1>About Us</h1>
        <h2>This is a tutorial on React</h2>

        <h1>Our team</h1>
        <User name={'Shishir (function)'}/>
        <UserClass name={'Shishir (Class)'}/>
    </div>
  )
}

export default About