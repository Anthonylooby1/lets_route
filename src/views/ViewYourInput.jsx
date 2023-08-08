import React from 'react'
import YourInput from '../components/YourInput'
import { useParams } from 'react-router-dom';

const ViewYourInput = () => {

  const {color1} = useParams()
  const {color2} = useParams()
  return (
    <div style={{backgroundColor:color2}}>ViewYourInput
      <h1 style={{color: color1}}>This word is :Hello</h1>
      <h2>{color2}</h2>
    </div>
  )
}

export default ViewYourInput