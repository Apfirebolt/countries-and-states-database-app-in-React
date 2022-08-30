import { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function StateDetail() {
  
  const navigate = useNavigate()

  useEffect(() => {
    console.log('API to be called here')
    // eslint-disable-next-line
  }, [])

  return (
    <div className=''>
      <p>
        State Detail Page
      </p>
    </div>
  )
}

export default StateDetail
