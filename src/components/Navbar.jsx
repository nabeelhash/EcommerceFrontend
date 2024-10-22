import { useContext } from 'react'
import { useEffect } from 'react'
import { React, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/Auth'
import { CartContext } from '../context/cart'
import { SearchContext } from '../context/Search'
import Logo from '../assets/logo.png'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { auth, setAuth } = useContext(AuthContext)
  const { cart, setCart } = useContext(CartContext)
  const { search, setSearch } = useContext(SearchContext)

  console.log(auth)
  useEffect(function () {
    console.log(location.pathname)
  })

  const handle = async function (e) {
    console.log('click')
    try {
      e.preventDefault();
      const response = await fetch('https://ecommerce-backend-pi-neon.vercel.app/logout', {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: 'include'

      })
      if (!response.ok) {
        return toast.error('Something went wrong')
      }
      const result = await response.json();
      toast.success('Logout Successful')
      console.log(result)
      localStorage.removeItem('auth')
      setAuth(null)
      navigate('/')
    }
    catch (error) {
      toast.error(`Logout failed ${error.message}`)
      console.log(error)
    }
  }
  return (
    <div className="sticky top-0 w-[100%] h-[10%] flex flex-col justify-center bg-gray-100 text-black z-10">
      <div className='flex justify-between items-center py-3 px-4 md:py-3 md:px-16 gap-2'>
        <div className='text-md w-[33%] sm:w-[20%] md:w-[18%] lg:w-[12%] font-bold'>
          <Link to={'/'}><img src={Logo} className='w-[100%]' /></Link>
        </div>
        <div className='text-[16px] font-semibold lg:block'>
          <ul className='flex items-center'>
            {/* <Link to='/profile'><li className='px-4'>Profile</li></Link> */}
            {/* <Link to="/login"><li className='px-4'>Login</li></Link>
            <Link to="/register"><li className='px-4'>Register</li></Link> */}
            <input type='text' placeholder='Search' className='border-2 hidden md:block rounded-[5px] px-3 py-1 text-gray-600 font-medium' value={search} onChange={function (e) { setSearch(e.target.value) }}></input>

          </ul>
        </div>
        <div className='text-[16px] font-semibold text-white flex justify-center items-center gap-3'>
          {auth && auth.user ? <div class="dropdown">
            <button class=" btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {auth.user.name}
            </button>
            <ul class="dropdown-menu">
              <Link to="/update-password"><li className='text-md px-2'>Update Password</li></Link>

            </ul>
          </div> : null}
          {auth && auth.user ? (
            <button className='bg-gradient-to-r from-purple-700 to-blue-600 rounded px-4 py-2 transform transition-transform duration-200 hover:scale-110 hover:bg-blue-700' onClick={handle}>Logout</button>
          ) : (
            <Link to={'/login'}><button className='bg-gradient-to-r from-purple-700 to-blue-600 rounded px-4 py-2 transform transition-transform duration-200 hover:scale-110 hover:bg-blue-700'>Login</button></Link>
          )}
          <Link to={'/cart'}><div className='text-black relative'>
            <i class="fa-solid fa-cart-shopping text-[22px]"></i><p className='text-white text-[14px] bg-black rounded-[20px] px-[7px]  absolute top-[-10%] left-[125%] transform -translate-x-[50%] -translate-y-[50%]'> {cart.length}</p>
          </div></Link>

        </div>
      </div>
    </div>
  )
}

export default Navbar
// ${location.pathname === '/login' ? 'border-b-2 border-white pb-2'  :''}