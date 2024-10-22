import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import CreateCategory from '../components/CreateCategory'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { AuthContext } from '../context/Auth'

const Category = () => {
    const navigate = useNavigate()
    const { auth, setAuth } = useContext(AuthContext)
    useEffect(function () {
        if (!auth) {
            navigate('/login')
        }
    }, [])

    return (
        <div>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                <CreateCategory />
            </div>

        </div>
    )
}

export default Category
