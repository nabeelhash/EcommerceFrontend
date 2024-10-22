import { React, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const [name, setName] = useState('')
    const [des, setDes] = useState('')
    const [img, setImg] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState([])
    const [stock, setStock] = useState()
    const [rating, setRating] = useState(0)
    const [totalRatings, setTotalRatings] = useState(0)
    const [comment, setComment] = useState('')
    const [noOfReviews, setNoOfReviews] = useState(0)
    const [showReview, setShowReview] = useState([])
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(function () {
        const fetchData = async function () {
            try {
                const response = await fetch(`https://ecommerce-backend-pi-neon.vercel.app/singleproduct/${id}`, {
                    method: 'GET',
                    credentials: 'include'
                })
                if (!response.ok) {
                    return toast.error('Something went wrong')
                }
                const result = await response.json();
                console.log(result)
                toast.success('Successful')
                setName(result.name)
                setDes(result.des)
                setImg(result.image)
                setPrice(result.price)
                setStock(result.stock)
                setCategory(result.category)
                setTotalRatings(result.rating)
                setNoOfReviews(result.numOfReviews)
                setShowReview(result.reviews)
            }
            catch (error) {
                toast.error(`Failed ${error.message}`)
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const addReview = async function () {
        try {
            const response = await fetch(`https://ecommerce-backend-pi-neon.vercel.app/review/${id}`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json' // Ensure correct content type
                },
                body: JSON.stringify({ rating, comment })
            })
            if (!response.ok) {
                return toast.error('Something went wrong')
            }
            const result = await response.json();
            console.log(result)
            const filtered = showReview.map(review => review._id === result._id ? result : review)
            setShowReview(filtered)
            toast.success('Successful')

        }
        catch (error) {
            toast.error(`Failed ${error.message}`)
            console.log(error)
        }
    }
    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(' ') + '...';
    };

    return (
        <div className='flex flex-col items-center justify-center bg-gray-300'>
            <Navbar />
            {/* <div className='flex p-2 w-[100%] md:p-5 md:w-[80%]'>
                <img className='mb-3 w-[46%] h-[300px] sm:h-[400px] md:w-[46%] md:h-full' src={`http://localhost:4000/${img}`}></img>
                <div className='flex flex-col items-start  lg:px-20 lg:py-12   bg-white w-[50%]'>
                    <p className='px-2 pt-3 md:px-0 md:pt-0 text-lg md:text-2xl text-center font-semibold mb-0 md:mb-3 '>{name}</p>
                    <p class="px-2 md:px-0 text-3xl  md:text-4xl font-bold my-3 text-blue-700">${price}.00</p>
                    <p className='text-sm px-2 md:text-md lg:text-[18px] lg:leading-7 md:px-0 text-left font-medium mb-3 break-words'>{truncateText(des, 50)}</p>
                    <p className='text-md px-2 md:text-lg md:px-0 text-left font-semibold mb-3'>Total Ratings: {totalRatings}</p>
                </div >
            </div> */}
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded" src={`http://localhost:4000/${img}`} />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">{category}</h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
                            <div class="flex mb-4">
                                <span class="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span class="text-gray-600 ml-3">{noOfReviews} Reviews</span>
                                </span>
                                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a class="text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a class="text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a class="text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p class="leading-relaxed">{truncateText(des, 50)}</p>
                            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div class="flex">
                                    <span class="mr-3">Color</span>
                                    <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                </div>
                                <div class="flex ml-6 items-center">
                                    <span class="mr-3">Size</span>
                                    <div class="relative">
                                        <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                            <option>SM</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex">
                                <span class="title-font font-medium text-2xl text-gray-900">${price}.00</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='flex flex-col justify-start w-[80%]'>
                <p className='text-xl text-left font-semibold my-2'>Reviews({noOfReviews})</p>

                <p className='text-xl text-left font-medium'></p>
                {showReview.map(review => (
                    <div className=' mb-3'>
                        {review.comment}
                    </div>
                ))}
            </div>

            <div className='w-[80%] flex flex-col px-10 py-3 bg-gray-700'>
                <div class="flex flex-col">
                    <label for="exampleInputEmail1" class="form-label text-2xl text-white font-semibold">Give ratings</label>
                    <input type="Number" className='bg-white rounded px-3 py-2 border-gray-200 border-[2px] mt-1 mb-2' placeholder='Type Your Rating' id="exampleInputEmail1" value={rating}
                        onChange={function (e) { setRating(e.target.value) }} aria-describedby="emailHelp" />
                </div>
                <div class="flex flex-col">
                    <label for="exampleInputEmail1" class="form-label text-2xl text-white font-semibold">Give Comment</label>
                    <input type="text" className='bg-white rounded px-3 py-2 border-gray-200 border-[2px] mt-1 mb-2' placeholder='Type Your Comment' id="exampleInputEmail1" value={comment}
                        onChange={function (e) { setComment(e.target.value) }} aria-describedby="emailHelp" />
                </div>
                <button className="btn btn-primary my-4 " onClick={addReview}>Add review</button>
            </div>


        </div >
    )
}

export default SingleProduct
