import React from 'react'
import '../styles/Profile.css'
import praveen from '../Components/assets/praveen.jpg'
const Profile = () => {
  return (
    <div className='profile'>
       <img  className='avatar' src={praveen} />
    </div>
  )
}

export default Profile
