import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { AuthContext } from '../context/Auth'
import { CartContext } from '../context/cart'

const Cart = () => {
    const { cart, setCart } = useContext(CartContext)
    const { auth, setAuth } = useContext(AuthContext)
    const [totalPrice, setTotalPrice] = useState(0)

    const remove = function (id) {
        const filter = cart.filter(cart => cart._id !== id)
        setCart(filter)
        localStorage.setItem('cart', JSON.stringify(filter))

    }

    useEffect(function () {
        let amount = 0
        const price = cart.map(cart => {
            amount += cart.price
        });
        setTotalPrice(amount)
    }, [cart])

    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(' ') + '...';
    };
    return (
        <div>
            <Navbar />
            <div className='py-20 w-[80%] m-auto flex'>
                {cart.length > 0 ?
                    <table class="table w-[70%]">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(cart => (
                                <tr key={cart._id}>
                                    <td className='w-[40%] '><img className='w-[80%] my-2 border-2' src={`http://localhost:4000/${cart.image}`}></img></td>
                                    <td className='w-[50%] items-center'>
                                        <h1 className='text-2xl font-semibold'>{cart.name}</h1>
                                        <h1 className='text-lg'>{truncateText(cart.des, 20)}</h1>
                                        <h1 className='text-xl font-semibold'>${cart.price}.00</h1>
                                        <button className="btn btn-danger" onClick={() => remove(cart._id)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    : (
                        <p className='w-[70%]'>No products found</p>)}

                <div className='border-1 border-gray-300 w-[30%] p-5 '>
                    <p className='text-3xl font-semibold mb-4'>Cart Total</p>
                    <div className='flex items-center justify-between my-1'>
                        <h1 className='text-lg font-medium '>SubTotal</h1>
                        <h1 className='text-lg font-medium '><td>${totalPrice}.00</td></h1>
                    </div>
                    <div className='flex items-center justify-between mb-3'>
                        <h1 className='text-lg font-medium '>Shipping Fee</h1>
                        <h1 className='text-lg font-medium  '>Free</h1>
                    </div>
                    <div className='flex items-center justify-between mb-3'>
                        <h1 className='text-xl font-bold '>Total</h1>
                        <h1 className='text-xl font-bold  '><td>${totalPrice}.00</td></h1>
                    </div>
                    {!auth || !auth.user ?
                        <Link to='/login'><button className='bg-orange-600 text-white text-[16px] rounded px-6 py-2 transform transition-transform duration-200 hover:scale-110 '>Login before Checkout</button></Link> :
                        (<div>
                            <div className='flex items-center justify-between mb-3'>
                                <h1 className='text-xl font-bold '>Details</h1>
                                <div className='flex flex-col items-end'> 
                                    <h1 className='text-lg font-medium '><td>{auth.user.name}</td></h1>
                                    <h1 className='text-lg font-medium  '><td>{auth.user.email}</td></h1>
                                </div>

                            </div>
                            <button className='bg-orange-600 text-white text-[16px] rounded px-6 py-2 transform transition-transform duration-200 hover:scale-110 ' >Proceed With Checkout</button>
                        </div>)
                    }
                </div>

            </div>
        </div>

    )
}

export default Cart
