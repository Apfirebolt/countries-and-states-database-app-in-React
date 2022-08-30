import { useNavigate } from 'react-router-dom'

function Loader() {
  
  const navigate = useNavigate()

  return (
    <div className=''>
      <p>
        Loader
      </p>
    </div>
  )
}

export default Loader
