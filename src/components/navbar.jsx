'use client'
import { useState, useEffect } from 'react';
import Link from "next/link";
import MenuBtn from "./menu-btn";


export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);


    return (
        <>
        <div className="flex justify-between items-center h-[100px] w-[100vw] bg-transparent px-[25px] md:bg-[#8B5CF680]">
            <div className="text-[#F9CE69] text-[48px] font-bold">
                TP
            </div>
            <div className="text-[24px] font-[400] hidden md:flex items-center justify-end gap-[50px] w-[463px] h-[75px] mr-[100px]">
                <Link href='#'>تواصل معنا</Link>
                <Link href='#'>أدواتنا</Link>
                <Link href='#'>أعمالنا</Link>
                <Link href='#'>الرئيسية</Link>
            </div>
            <div className="md:hidden">
                <MenuBtn></MenuBtn>
            </div>
            
                
            
        </div>
        </>
    )
}