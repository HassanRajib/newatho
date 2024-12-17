
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Landing = () => {
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token')
      const response = await axios.get('http://localhost:3001/auth/home',{
      
      headers: {
        "Authorization" : `Bearer ${token}` 
      }
    })
    console.log(response)
  }
  fetchUser()
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