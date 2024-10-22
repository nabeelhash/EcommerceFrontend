// import React from 'react'
// import { useEffect, useState } from 'react'
// import toast from 'react-hot-toast'
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';

// import { Link } from 'react-router-dom'

// const Profile = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [img, setImg] = useState('')

//     const navigate = useNavigate()
//     const [description, setDescription] = useState('')
//     const [createFile, setCreateFile] = useState('')
//     const [message, setMessage] = useState('');



//     useEffect(function () {
//         const fetchData = async function () {
//             try {
//                 console.log('click')
//                 let response = await fetch('http://localhost:4000/current', {
//                     method: 'GET',
//                     headers: { "Content-Type": "application/json" },
//                     credentials: 'include'
//                 })
//                 if (!response.ok) {
//                     return toast.error('Something went wrong')
//                 }
//                 const result = await response.json();
//                 console.log(result)
//                 // toast.success('User Info')
//                 setName(result.name);
//                 setEmail(result.email)
//                 setImg(result.avatar)


//             }
//             catch (error) {
//                 return console.log(error)
//             }
//         }
//         fetchData()
//     }, [])


//     const handleUpload = async function (e) {
//         const file = e.target.files[0]
//         try {
//             const formData = new FormData();
//             formData.append('pic', file)
//             // Upload the image to the server
//             let response = await fetch('http://localhost:4000/updateAvatar', {
//                 method: 'PATCH',
//                 body: formData,
//                 credentials: 'include',
//             });
//             if (!response.ok) {
//                 return toast.error('Image upload failed');
//             }
//             const result = await response.json()
//             setImg(result.profileImage)
//             console.log(result.profileImage)
//             toast.success('Image uploaded successfully');
//         }
//         catch (error) {
//             console.log(error);
//             toast.error('An error occurred');
//         }
//     }


//     const imgUrl = `http://localhost:4000/${img}`




//     return (
//         <div className='bg-gray-300 h-full'>
//             <Navbar />
//             <div className='flex h-[90%]'>
//                 <Sidebar />
//                 <div className='w-[100%] flex flex-col justify-start items-start m-auto md:p-3 bg-gray-200'>

//                     <div className='flex flex-col relative w-full h-[300px] md:h-[600px]'>
//                         <img src={imgUrl} className='w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] rounded-[100px] border-3 border-white absolute top-[92%] left-[12%] sm:top-[100%] sm:left-[12%] md:top-[90%] md:left-[15%] lg:top-[90%] lg:left-[12%] transform -translate-x-[50%] -translate-y-[50%]'></img>
//                         <div className='z-10 absolute top-[10%] left-[90%] transform -translate-x-[50%] -translate-y-[50%] text-white'>
//                             <div class="dropdown">
//                                 <button data-bs-toggle="dropdown" aria-expanded="false">
//                                     <i class="fa-solid fa-ellipsis text-2xl text-white bg-black rounded-[30px] py-1 px-2"></i>
//                                 </button>
//                                 <ul class="dropdown-menu px-3 py-2">
//                                     <li data-bs-toggle="modal" data-bs-target="#exampleModal" class=" text-black text-md cursor-pointer" >Update Cover</li>
//                                     <li data-bs-toggle="modal" data-bs-target="#exampleModal1" class=" text-black text-md cursor-pointer" >Update Profile</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className='flex flex-row gap-2 my-2 absolute top-[90%] left-[58%] sm:top-[100%] sm:left-[50%] md:top-[90%] md:left-[58%] lg:top-[90%] lg:left-[38%] transform -translate-x-[50%] -translate-y-[50%]'>
//                             <h1 className='text:xs md:text-3xl text-white '>{name}</h1>
//                         </div>
//                     </div>


//                     {/* <!-- Profile Modal --> */}
//                     <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                         <div class="modal-dialog">
//                             <div class="modal-content">
//                                 <div class="modal-header">
//                                     <h1 class="modal-title fs-5" id="exampleModalLabel" className='font-semibold text-xl'>Upload Profile Picture</h1>
//                                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                                 </div>
//                                 <div class="modal-body">
//                                     <input type='file' accept='image/' onChange={handleUpload}></input>

//                                 </div>
//                                 <div class="modal-footer">
//                                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className='flex bg-gray-200 w-[100%] py-20'>
//                         <div className='w-[90%] px-8 py-4 mx-auto bg-white rounded flex flex-col gap-3'>
//                             <div className='flex items-center justify-center gap-3'>
//                                 <img src={imgUrl} className='w-[45px] h-[45px] rounded-[50px]'></img>
//                                 <textarea type="text" value={description} onChange={function (e) { setDescription(e.target.value) }} className='w-full h-[30px] px-2 py-1' placeholder='Whats in your mind?' />
//                             </div>
//                             <div className='flex justify-around md:justify-between'>
//                                 <input type="file" accept='image/*' onChange={function (e) { setCreateFile(e.target.files[0]) }} />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Profile
