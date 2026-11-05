// import React from 'react'
import Navbar from '../Components/Navbar/navbar'
import HeroSection from '../Components/Hero Section/heroSection'
import AiBenefits from '../Components/Ai Benefits/aiBenefits'
import AiTypes from '../Components/Ai Types/aiTypes'
import Contact from '../Components/Contact/contact'
import Footer from '../Components/Footer/footer'

function Home() {
    return (
    <>
    <Navbar/>
    <main>
        <HeroSection/>
        <AiTypes/>
        <AiBenefits/>
        <Contact/>
    </main>
    <Footer/>
    </>
    )
}

export default Home
