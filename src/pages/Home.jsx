import React from 'react'
import { Link } from 'react-router-dom'
import bgImage from '../bg.jpg';
import Navbar from '../components/Navbar';
import Background from '../assets/b18.jpg'
const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="h-[300px] sm:h-[400px] bg-cover md:h-[500px] lg:h-screen md:bg-contain bg-mix-blend-overlay flex flex-col justify-center items-start " style={{ backgroundImage: `url(${Background})` }}>
                <div className='opacity-40 bg-black h-[375px] sm:h-[470px] md:h-[575px] lg:h-[826px] absolute inset-0'></div>
                <div className='w-[63%] md:[43%] h-[80%] py-7 px-10 z-1'>
                    <h1 className='text-3xl md:text-[68px] md:leading-[80px] lg:text-[82px] lg:leading-[100px] text-white font-bold'>Welcome To E-commerce Website</h1>
                    <div className='text-[14px] md:text-[18px] font-semibold text-black my-12'>
                        <Link to={'/allproducts'}><button className='bg-orange-600 text-white text-md md:text-2xl rounded px-3 md:px-10 py-2 transform transition-transform duration-200 hover:scale-110 ' >Latest Products</button></Link>
                    </div>
                </div>
            </div>
            <div className='w-full my-10 flex flex-col items-center'>
                {/* <h1 className='text-6xl font-bold'>Popular</h1>
                <div className='my-4 bg-black w-[20%] h-[8px] rounded-[20px]'></div> */}
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Raw Denim Heirloom Man Braid
                            <div class="hidden sm:block">Selfies Wayfarers</div>
                        </h1>
                        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                            <div class="p-4 md:w-1/3 flex">
                                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div class="flex-grow pl-6">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2>
                                    <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                                    <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div class="p-4 md:w-1/3 flex">
                                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                        <circle cx="6" cy="6" r="3"></circle>
                                        <circle cx="6" cy="18" r="3"></circle>
                                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                    </svg>
                                </div>
                                <div class="flex-grow pl-6">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
                                    <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                                    <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div class="p-4 md:w-1/3 flex">
                                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div class="flex-grow pl-6">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Neptune</h2>
                                    <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                                    <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:w-[50%] lg:px-10 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font text-left sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            <div class="hidden lg:inline-block">Limited TIme Product</div>
                        </h1>
                        <p class="mb-8 leading-relaxed text-left">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get it Now</button>
                        </div>
                    </div>
                    <div class="lg:w-[50%] md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src="https://picsum.photos/id/445/700/500" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
