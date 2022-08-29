import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import NavStore from "../pages/navStore/NavStore";
import Login from "../../src/auth/login/Login";
import SignUp from "../../src/auth/signUp/SignUp"
import LogOut from "../../src/auth/logOut/LogOut"
import Home from "../pages/home/Home"
import PrivateRounting from './PrivateRounting';
import NavBar from "../navBar/NavBar"
import Contact from "../pages/contact/Contact.js"
import About from "../pages/about/About.js"
import Service from '../pages/service/Service';
import AddToCart from '../pages/addToCart/AddToCart';
import Search from '../pages/search/Search';
function Rounting() {

    return (
        <BrowserRouter>
            <NavBar />


            <Routes>
                <Route element={
                    <PrivateRounting />}>

                    <Route
                        path="/"
                        element={
                            <Home />

                        }
                    />


                    <Route
                        path="/About"
                        element={
                            <About />

                        }
                    />
                        <Route
                        path="/Service"
                        element={
                            <Service />

                        }
                    />
                    <Route
                        path="/NavStore"
                        element={
                            <NavStore />

                        }
                    />
                    <Route
                        path="/Contact"
                        element={
                            <Contact />

                        }
                    />
                    <Route
                        path="/LogOut"
                        element={
                            <LogOut />

                        }
                    />
                   <Route path='/addTocart'
                   element={
                    <AddToCart/>
                   }
                   />
                     <Route path='/search'
                   element={
                    <Search/>
                   }
                   />







                </Route>


                <Route path="/login" element={<Login />} />
                <Route path="/SignUp" element={<SignUp />} />





            </Routes>


        </BrowserRouter>
    )
}
export default Rounting