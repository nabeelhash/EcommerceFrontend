import { React, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UpdateBlog = () => {
    const [name, setName] = useState('')
    const [des, setDes] = useState('')
    const [img, setImg] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState([])

    const [category, setCategory] = useState([])
    const [stock, setStock] = useState()
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
                    console.log('Something went wrong')
                }
                const result = await response.json();
                console.log(result)
                toast.success('Successful')
                setName(result.name)
                setDes(result.des)
                setImg(result.image)
                setPrice(result.price)
                setStock(result.stock)

            }
            catch (error) {
                toast.error(`Failed ${error.message}`)
                console.log(error)
            }
        }
        fetchData()
    }, [])

    useEffect(function () {
        const fetchData = async function () {
            try {
                console.log('click')
                let response = await fetch('https://ecommerce-backend-pi-neon.vercel.app/categoryAll', {
                    method: 'GET',
                    headers: { "Content-Type": "application/json" },
                    credentials: 'include'
                })
                if (!response.ok) {
                    return toast.error('Something went wrong')
                }
                const result = await response.json();
                console.log(result)
                toast.success('User Info')
                setCategory(result)
            }
            catch (error) {
                return console.log(error)
            }
        }
        fetchData()
    }, [])

    const handleSubmit = async function (e) {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('pic', file); // Append file to FormData
            formData.append('name', name);
            formData.append('des', des);
            formData.append('price', price);
            formData.append('category', selectedCategory);
            formData.append('stock', stock);

            const response = await fetch(`https://ecommerce-backend-pi-neon.vercel.app/updateProduct/${id}`, {
                method: 'PATCH',
                credentials: 'include',
                body: formData
            })
            if (!response.ok) {
                toast.error('error')
                return console.log('Something went wrong')
            }
            const result = await response.json();
            console.log(result)
            toast.success('Post Updated Successfully')
            navigate('/allproducts')
        }
        catch (error) {
            console.log(error.message)
        }
    }
console.log(selectedCategory)



    return (
        <div className='flex flex-col items-center justify-center bg-gray-100'>
            <Navbar />
            <div className='flex flex-col items-center py-10 px-10 sm:px-12 md:px-20 lg:px-32 w-full'>
                <div className='flex gap-3 items-center justify-center'>
                    <h1 className='text-lg font-semibold'>Select Category</h1>
                    <select value={selectedCategory} onChange={function(e){setSelectedCategory(e.target.value)}} className='px-4 py-2'>
                        {category.map(category => (
                            <option key={category._id} value={category.name}>{category.name}</option>
                            
                        ))}
                    </select>
                </div>
                <div class="flex flex-col w-full">
                    <label for="exampleInputEmail1" class="form-label">Title</label>
                    <input type="email" className='border-gray-200 h-[50px] rounded w-full px-3 py-2 border-[2px] mt-1 mb-2' placeholder='Type Your Blog Title' id="exampleInputEmail1" value={name}
                        onChange={function (e) { setName(e.target.value) }} aria-describedby="emailHelp" />
                </div>
                <div class="flex flex-col w-full">
                    <label for="exampleInputEmail1" class="form-label">Description</label>
                    <textarea type="email" className=' h-[300px] rounded w-full px-3 py-2 border-gray-200 border-[2px] mt-1 mb-2' placeholder='Type Your Blog Title' id="exampleInputEmail1" value={des}
                        onChange={function (e) { setDes(e.target.value) }} aria-describedby="emailHelp" />
                </div>
                <div class="flex flex-col w-full">
                    <label for="exampleInputEmail1" class="form-label">Price</label>
                    <textarea type="email" className=' h-[50px] rounded w-full px-3 py-2 border-gray-200 border-[2px] mt-1 mb-2' placeholder='Type Your Blog Title' id="exampleInputEmail1" value={price}
                        onChange={function (e) { setPrice(e.target.value) }} aria-describedby="emailHelp" />
                </div>
                <div class="flex flex-col w-full">
                    <label for="exampleInputEmail1" class="form-label">Stock</label>
                    <input type="email" className=' h-[50px] rounded w-full px-3 py-2 border-gray-200 border-[2px] mt-1 mb-2' placeholder='Type Your Blog Title' id="exampleInputEmail1" value={stock}
                        onChange={function (e) { setStock(e.target.value) }} aria-describedby="emailHelp" />
                </div>
                <input type='file' accept='image/*' onChange={function (e) { setFile(e.target.files[0]) }}></input>
                <img className='mb-3 w-[50%]' src={`${img}`}></img>

                <button className='text-white bg-black rounded px-4 py-2 transform transition-transform duration-200 hover:scale-110 hover:bg-blue-700' onClick={handleSubmit}>Update Blog</button>


            </div>
        </div>
    )
}
export default UpdateBlog
