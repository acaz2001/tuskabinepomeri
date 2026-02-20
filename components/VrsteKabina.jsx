import React from 'react'
import Image from 'next/image'
import { LuArrowUpRight } from "react-icons/lu";
import Link from 'next/link';
import AnimatedOnScroll from './AnimatedOnScroll';



function VrsteKabina() {
  return (
    <AnimatedOnScroll>
    <div className='flex w-full items-start justify-start my-10 h-fit'>
    <main className='h-fit flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-6 sm:gap-6  lg:h-fit md:h-fit sm:h-fit 
    md:grid md:grid-cols-3 lg:grid-rows-1 flex-wrap items-center justify-between w-full'>
      
      <div className='group relative  w-full'>
      <section className='collection group bg-[#f9f6fe] relative w-[100%]  
      lg:w-[100%] md:w-[100%] h-[275px] rounded-2xl flex 
      flex-col items-center justify-items-start cursor-pointer'>
        <Link href="https://www.verdestaklorezac.com/tus-kabine/klizne" target='_blank'>
        <h1 className=
        'pt-1 text-[3.8rem] font-semibold transition-all duration-400 ease-in-out group-hover:scale-[1.05]'>
        Klizne</h1>
        <Image width={224} height={224} className='absolute top-5 transform translate-x-[-10%] w-[14rem] ' src={"/tus-kabina-klizna.png"} alt='tus-kabina-klizna'></Image>
        {/*
        <div className='bg-amber-600 w-fit absolute bottom-0 right-[0] rounded-3xl p-3  '>
        <LuArrowUpRight className='text-[1.6rem] transition-transform duration-400 ease-in-out group-hover:rotate-45'/>
        </div>
        */}

        </Link>
      </section>
        <div className='collection-arrow absolute bottom-3 right-3.5 z-50'>
          <LuArrowUpRight className= 
            'arrow-collection bg-white p-3 text-[2.9rem] rounded-4xl transition-transform duration-400 ease-in-out group-hover:rotate-45'/>
          </div>
        </div>

        <div className='group relative  w-full'>
        <section className='collection group bg-[#f9f6fe] relative w-[100%]  lg:w-[100%] md:w-[100%] h-[275px] rounded-2xl flex flex-col
        justify-items-center items-center cursor-pointer py-2'>
          <Link href="https://www.verdestaklorezac.com/tus-kabine/sarke" target='_blank'>
          <h1 className='text-[3.8rem] font-semibold transition-all duration-400 ease-in-out group-hover:scale-[1.05]'>
            Šarke</h1>
          <Image width={224} height={224} alt='tus-kabina-sarke' className='absolute top-5 w-[14rem] translate-x-[-8%]' src={"/tus-kabina-sarke.png"}></Image>
          {/* 
          <div className='bg-amber-600 w-fit absolute bottom-0 right-[0] rounded-3xl p-3  '>
          <LuArrowUpRight className='text-[1.6rem] transition-transform duration-400 ease-in-out group-hover:rotate-45'/>
          </div>
          */}
          </Link>
        </section>
          <div className=' absolute bottom-3 right-3.5 z-50'>
            <LuArrowUpRight className= 
              'arrow-collection bg-white p-3 text-[2.9rem] rounded-4xl transition-transform duration-400 ease-in-out group-hover:rotate-45'/>
        </div>
      </div>

      <div className='group relative  w-full'>
      <section className='collection group bg-[#f9f6fe] relative w-[100%]  lg:w-[100%] md:w-[100%] h-[275px] 
      rounded-2xl flex flex-col items-center justify-items-start cursor-pointer'>
        <Link href="https://www.verdestaklorezac.com/tus-kabine/paravan" target='_blank'>
        <h1 className='text-[3.8rem] font-semibold transition-all duration-400 ease-in-out 
        group-hover:scale-[1.05]'>
          Paravani
        </h1>
        <Image width={224} height={224} className='absolute top-4 transform translate-x-[] w-[14rem]' src={"/tus-kabina-paravan.png"} alt='tus-kabina-paravan'></Image>
        {/* 
        <div className='bg-amber-600 w-fit absolute bottom-0 right-[0] rounded-3xl p-3  '>
        <LuArrowUpRight className='text-[1.6rem] transition-transform duration-400 ease-in-out group-hover:rotate-45'/>
        </div>
        */}
        </Link>
        
      </section>
        <div className='absolute bottom-3 right-3.5 z-50'>
          <LuArrowUpRight className= 
          'arrow-collection bg-white p-3 text-[2.9rem] rounded-4xl transition-transform duration-400 ease-in-out group-hover:rotate-45'/>
        </div>
      </div>
    </main>
    </div>
    </AnimatedOnScroll>
  )
}

export default VrsteKabina
