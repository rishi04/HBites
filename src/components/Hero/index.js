import React from 'react'
import Navbar from '../Navbar'
import { useState } from "react";
import Sidebar from '../Sidebar'
import {HeroContainer, HeroContent,HeroH1,HeroBtn,HeroP,HeroItems} from './HeroElement'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false); 

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
            <HeroItems>
            <HeroH1> Random Text </HeroH1>
            <HeroP> Ready in minutes</HeroP>
            <HeroBtn> Place Order</HeroBtn>
            </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
