'use client'

import { useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const handleClick = () => {
    axios
      .get(`https://notes-backend-tawny.vercel.app/api/driver/${number}`)
      .then((res) => {
        setName(res.data)
      })
  }

  return (
    <>
      <h1>F1 Drivers test for notes</h1>
      <div>
        <input
          type='text'
          placeholder='Driver Number'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={handleClick}>Find Driver</button>
      </div>
      <p>{name}</p>
    </>
  )
}

export default Home
