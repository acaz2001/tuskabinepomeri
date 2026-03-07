import React from 'react'
import Link from "next/link";


function HeroBanner({naslov,tekst,button1Tekst,button2Tekst,button1Link,className}) {
  return (
    <div className={`flex flex-col items-center py-10 mb-10 w-full rounded-4xl
bg-[#f9f6fe] ${className}`}>
                <div className="mb-5">
                <Link href={'https://www.verdestaklorezac.com/'} target="_blank">
                    <button className="text-[#4aaf31] bg-transparent px-8 py-2 rounded-3xl
                    font-bold cursor-pointer border-[#4aaf31] border text-[12px]">
                        Staklorezac Verde
                    </button>
                </Link>
                </div>
                
                <h1 className="text-black text-center md:text-6xl text-3xl font-[550] tracking-[0.5px]
                md:px-0 px-5">
                    {naslov}
                </h1>
                <p className="text-[#9c9c9c] text-center pt-3 md:text-[18px] text-[14px] md:px-0 px-5">
                    {tekst}
                </p>
                
                
                {/* Buttons*/}
                <div className="flex md:flex-row flex-col gap-2 mt-5">
                <Link href={button1Link ? `${button1Link}` : '/#cene'}>
                    <button className="text-white bg-black px-8 py-2 rounded-3xl
                    font-medium cursor-pointer text-[12px] md:text-[14px]"
                    >
                        {button1Tekst ? button1Tekst : 'Kako se kreću cene'}
                    
                    </button>
                </Link>
                <Link href={'https://www.verdestaklorezac.com/tus-kabine'} target='_blank'>
                    <button className="text-black bg-transparent px-8 py-2 rounded-3xl
                    font-medium cursor-pointer border-black border text-[12px] md:text-[14px]">
                    Gotovi modeli
                    </button>
                </Link>
                </div>
                </div>
  )
}

export default HeroBanner
