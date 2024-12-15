
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Landing = () => {
  useEffect(() => {
    const fetchUser = () => {
      const response = axios.get('http://localhost:3001/auth/home')
      
    }
  }, [])
  return (
    <div>
        <button className='justify-center'>
            <Link to='/signup'>hello</Link>
        </button>
    </div>
  )
}

export default Landing