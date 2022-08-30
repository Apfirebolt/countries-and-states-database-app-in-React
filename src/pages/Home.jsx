import { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  
  const navigate = useNavigate()

  useEffect(() => {
    console.log('API to be called here')
    // eslint-disable-next-line
  }, [])

  return (
    <div className='ticket-page'>
      <p>
          Home Page
      </p>
    </div>
  )
}

export default HomePage
