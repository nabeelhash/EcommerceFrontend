import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Profile from './pages/Profile';
import AdminPage from './pages/AdminPage';
import UpdatePassword from './pages/Auth/UpdatePassword';
import Home from './pages/Home';
import ForgetPassword from './pages/Auth/ForgetPassword';
import Otp from './pages/Auth/Otp';
import UserInfo from './pages/UserInfo';
import Single from './pages/Single';
import Cart from './pages/Cart';

import CreateProduct from './pages/Products/CreateProduct'
import AllProducts from './pages/Products/AllProducts'
import UpdateProduct from './pages/Products/UpdateProduct'
import SingleProduct from './pages/Products/SingleProduct'

import { AuthProvider } from './context/Auth';
import Category from './pages/Category';
import { CartProvider } from './context/cart';
import { SearchProvider } from './context/Search';

const App = () => {


    return (
        <AuthProvider>
            <CartProvider>
                <SearchProvider>
                <BrowserRouter>
                    <Toaster />
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/admin' element={<AdminPage />}></Route>
                        <Route path='/profile' element={<Profile />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/register' element={<Register />}></Route>
                        <Route path='/update-password' element={<UpdatePassword />}></Route>
                        <Route path='/forget-password' element={<ForgetPassword />}></Route>
                        <Route path='/otp' element={<Otp />}></Route>
                        <Route path='/user' element={<UserInfo />}></Route>
                        <Route path='/single/:id' element={<Single />}></Route>
                        <Route path='/createproduct' element={<CreateProduct />}></Route>
                        <Route path='/category' element={<Category />}></Route>
                        <Route path='/allproducts' element={<AllProducts />}></Route>
                        <Route path='/singleProduct/:id' element={<SingleProduct />}></Route>
                        <Route path='/updateProduct/:id' element={<UpdateProduct />}></Route>
                        <Route path='/cart' element={<Cart />}></Route>

                    </Routes>
                </BrowserRouter>
                </SearchProvider>
            </CartProvider>
        </AuthProvider>
    );
};
export default App;