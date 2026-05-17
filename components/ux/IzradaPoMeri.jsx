import Image from 'next/image'
import React from 'react'
import { Naslov, PodNaslov, Tekst } from '../typography/Kontent'


function IzradaPoMeri() {
  return (
    <div className='flex md:flex-row flex-col w-full md:gap-15 md:my-0 flex-col-reverse
    gap-10'>
      

      <section className='flex flex-col items-start gap-5'>
        <div>
            <Naslov>Zašto baš izrada po meri.</Naslov>
        </div>
        <div className='flex flex-col gap-10'>
            <IzradaPoMeriKartica ikonica={'/check.png'}
            naslov={'Dosta varijacija u samom izgledu.'}
            tekst={`Često ljudi biraju izradu po meri jer postoji dosta varijacija u 
            samom izgledu, kakav će vam biti okov i koje boje, koja boja stakla(siva,braon,mat), 
            kakvog je položaja kabina.`}/>
            <IzradaPoMeriKartica ikonica={'/check.png'}
            naslov={'Dimenzije koje vam odgovaraju.'}
            tekst={`Svaka kabina se radi po vašim merama, idealno ako imate manje
            kupatilo pa je teško naći odgovarajuću kabinu, idealno za svako 
            kupatilo.`}/>
            <IzradaPoMeriKartica ikonica={'/check.png'}
            naslov={'Kabine za svako kupatilo.'}
            tekst={`Često nam ljudi dolaze sa problemima jer za svoje kupatilo ne mogu
            da nađu odgovarajuću kabinu, mere se ne poklapaju sa onim u salonima, 
            imaju malo kupatilo ili neku kosinu na primer podkrovlje...`}/>
        </div>
      </section>
    </div>
  )
}

function IzradaPoMeriKartica({ikonica,naslov,tekst}) {
    return (
        <main className='flex flex-col items-start gap-3'>
            <div className='flex flex-row gap-2 items-center'>
                <Image src={ikonica} width={35} height={29} alt='ikonica'/>
                <PodNaslov className={'!pb-0'}>{naslov}</PodNaslov>
            </div>
            <div>
                <Tekst>{tekst}</Tekst>
            </div>
        </main>
    )
}

export default IzradaPoMeri
