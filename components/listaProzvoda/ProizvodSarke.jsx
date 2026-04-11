
import React from 'react'
import { LuArrowUpRight } from "react-icons/lu";
import Link from 'next/link'
import Image from 'next/image';



function ProizvodSarke({ data }) {
  if (!data) return null;

  console.log ("Proizvod data" ,data.kabina.map((x)=> console.log(x.imeModela)))

  return (
    <>
   
   {data.kabina.map((x) => 
    
        
        <main key={x.id} className='relative group w-[100%] lg:w-[100%] z-40'>
        
        <div className='relative'>
        <Link href={`${x.link}`} target='_blank'> 
        <div className=' product bg-[#f9f6fe] flex items-center justify-center relative w-[100%] h-[82%] rounded-2xl cursor-pointer z-40'>
            <Image width={412} height={412} alt={x.imeModela}  src={x.slikaModela}
            className='w-[90%] p-5 my-3 transition-all duration-400 ease-in-out group-hover:scale-[1.05]
            object-cover object-center'>
            </Image>

        </div>
        </Link>
        <Link href={`${x.link}`} target='_blank'>
        <div className='arrow bg-[#ede4fc] rounded-4xl  absolute bottom-[3%] left-[87.2%] z-50 '>
            <LuArrowUpRight className=
            'p-3 text-[2.9rem] rounded-4xl transition-transform duration-400 ease-in-out group-hover:rotate-45'/>
        </div>
        </Link>
        </div>
        <div className='mt-2 z-50'>
            <h1 className='text-[1.3rem] font-medium'>
            {x.imeModela}
            </h1>
            <p className='text-[0.9rem] text-[#6c6474] font-medium mt-1'>
            RSD <span>{x.cenaModela},₀₀</span>    
            </p>
        </div>

        </main>
    )}
    </>
  )
}

export default ProizvodSarke
