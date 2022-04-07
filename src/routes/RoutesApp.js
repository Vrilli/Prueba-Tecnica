import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Pokemon from "../components/Pokemon"
import Home from '../components/Home'
import NavBar from '../components/NavBar'
import Profile from '../components/Profile'
import { Registro } from '../components/Register'

const RoutesApp = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/Register" element={<Registro />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/pokemon" element={<Pokemon />} />
            </Routes>
        </>
    )
}

export default RoutesApp
