import React from 'react'
import '../styles/Task.css'
import { BsListCheck } from "react-icons/bs";
const Task = () => {
  return (
    <div>
      <button className='todo'><BsListCheck/></button>
    </div>
  )
}

export default Task
