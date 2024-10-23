import { React, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'

import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { useContext } from 'react'
import { CartContext } from '../../context/cart'
import { SearchContext } from '../../context/Search'

const AllBlogs = () => {
    const [products, setProducts] = useState([]);
    const { cart, setCart } = useContext(CartContext)
    const { search,setSearch} = useContext(SearchContext)
    const { filter,setFilter} = useContext(SearchContext)


    console.log(search)

    useEffect(function () {
        const fetchData = async function () {
            try {
                const response = await fetch('https://ecommerce-backend-pi-neon.vercel.app/allProducts', {
                    method: 'GET',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' }

                })
                if (!response.ok) {
                    console.log('Something went wrong')
                }
                const result = await response.json();
                console.log(result)
                toast.success('All Products Here')
                setProducts(result)

            }
            catch (error) {
                toast.error(`Login failed ${error.message}`)
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const handleDelete = async function (id) {
        const check = window.confirm('Are you sure?')
        if (!check) {
            return
        }
        console.log(id)
        try {
            const response = await fetch(`https://ecommerce-backend-pi-neon.vercel.app/delete/${id}`, {
                method: 'DELETE',
                credentials: 'include'
            })
            if (!response.ok) {
                console.log('Something went wrong')
            }
            const result = await response.json();
            console.log(result)
            const filter = products.filter(product => product._id !== id)
            setProducts(filter)
            toast.success('Product Deleted')

        }
        catch (error) {
            toast.error(`Failed ${error.message}`)
            console.log(error)
        }
    }


    const handleCart = function (p) {
        const check = cart.find(cart => cart._id === p._id)
        if (check) {
            return
        }
        const updateCart = [...cart, p]
        setCart(updateCart)
        localStorage.setItem('cart', JSON.stringify(updateCart))
    }

    useEffect(function(){
        let filteredProducts = products
        if(search){
            filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(search.toLowerCase())
            ); 
        }
        setFilter(filteredProducts)
      },[search,products])

    return (
        <div className='bg-gray-800 h-full'>
            <Navbar />
            <div className='flex'>
                <Sidebar className='hidden md:block' />

                <div class="card w-[80%] flex flex-row flex-wrap justify-center gap-3 items-center py-20" >
                    {filter.map(product => (
                        <div key={product._id} className='w-[60%] md:w-[40%] lg:w-[23%] mb-5 border-1 border-gray-200'>
                            <Link to={`/singleProduct/${product._id}`}><img className='w-[100%]' src={`${product.image}`} /></Link>
                            <div class="card-body">
                                <div className='flex justify-between'>
                                    <h5 class="text-3xl font-semibold ">{product.name}</h5>
                                    <p class="text-xl font-semibold my-2 text-blue-700">${product.price}.00</p>
                                </div>

                                <p class="text-lg font-medium">Category: {product.category}</p>
                                <p class="text-lg font-medium ">Stock: {product.stock}</p>
                                <div className='flex items-center my-2 justify-start gap-2 md:gap-2'>
                                    <Link><button onClick={() => handleCart(product)} className='btn btn-primary text-[16px] md:text-[18px] text-white transform transition-transform duration-200 hover:scale-105'>Add to cart</button></Link>
                                    <i onClick={() => handleDelete(product._id)} class="fa-solid fa-trash text-[16px] md:text-[18px] text-white bg-blue-600 px-2 py-2 rounded-[5px]"></i>
                                    <Link to={`/updateProduct/${product._id}`}><i class="fa-regular fa-pen-to-square text-[16px] md:text-[18px] text-white bg-blue-600 px-2 py-2 rounded-[5px]"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default AllBlogs
