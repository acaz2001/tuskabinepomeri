import React from 'react'
import Kontent, { Naslov, PodNaslov, Tekst } from './typography/Kontent'
import Image from 'next/image'
import Link from 'next/link'
import { AspectRatio } from './ui/aspect-ratio'


function ResenjeKabine() {
  return (
    <div>
      <ResenjaKabineSekcija image={'/Problem sa kosinom2.jpg'}
      tekst={`Na ovoj slici vidimo da su ljudi imali problem sa kosinom, 
      kupatilo im se nalazilo u potkrovlju i nisu mogli nigde da nadju odgovarajuću 
      kabinu. Za ovakvu situaciju jedino rešenje jesu kabine po meri. Došli smo na
       lice mesta, uzeli mere, zaključili smo da je najbolje uraditi u ovom 
       slučaju kliznu kabinu a ne na šarke iz razloga jer su kupci imali lavabo
       (vidite na slici dole desno) pa vrata ne bi mogla da se otvaraju na spolja 
       a i unutra nije bilo mnogo mesta da bi se otvrala na unutra,klizna kabina je
        mnogo bolje rešenje ovde jer se otvara u svojoj dužini i ne zauzima dodatnog 
        prostora pri otvaranju.`} classname={'md:flex-row flex-col'}
        link={'https://www.verdestaklorezac.com/prodavnica/model-v03?variant=SREBRNA'}
        podnaslov={'Problem sa kosinom.'}/>
        <ResenjaKabineSekcija image={'/Problem malo kupatilo2.jpg'}
        tekst={`Kada je problem jako malo kupatilo!
        U ovom stanu su ljudi imali problem prvo jer im je kupatilo jako malo, i jos imaju lavabo i veš mašinu blizu kabine. Ovde nikako nije moglo da se stavi klizna kabina jer jednostavno nema dovoljno mesta da vrata klizaju i da se prodje, jer kabina je svega 70x70cm.
        Dogovorili smo se da napravimo ulaz da se otvaraju oba vrata i sa tim se dobija jako veliki i komotni prolaz u kabinu, vrata što se kače na zid se otvaraju unutra jer su manja i zauzimaju manje mesta, a vrata što idu na fiks se otvaraju spolja.
        Ovo je odlično iskoriščena kabina jer iako je kupatilo malo dobila se veoma funkcionalna kabina gde je komotno koristiti je kada se ulazi i izlazi, a i prilikom tuširanja ima mesta unutra.
        `} classname={'md:flex-row-reverse mt-10 flex-col'}
        link={'https://www.verdestaklorezac.com/prodavnica/modelv04?variant=SREBRNA'}
        podnaslov={'Problem sa malim kupatilom.'}/>
        <ResenjaKabineSekcija image={'/Problem zidovi2.jpg'}
        tekst={`Kupatilo ima dosta nekih pregradnih zidova. Za ovaj slučaj odlučili smo da stavimo kliznu kabinu umesto šarki. Kupatilo je dugačko i usko. Da se vrata na šarke otvaraju na unutra ne bi bilo mesta takodje i spolja ista stvar, tako da klizna je najbolja varijanta u ovom slučaju. 
        Još jedan problem je taj što se na kraju kupatila,kod prozora, nalazi šolja koja ima ozidanu konzolu i izgleda kao neki zidić mali. Zato je fiksno staklo urezano za taj zidić da bi išlo staklo do kraja zida.`} 
        classname={'md:flex-row mt-10 flex-col'}
        link={'https://www.verdestaklorezac.com/prodavnica/model-v03?variant=SREBRNA'}
        podnaslov={'Neobični zidovi.'}/>
    </div>
  )
}

export default ResenjeKabine

export function ResenjaKabineSekcija ({image,tekst,classname,link,podnaslov}) {
    return (
        <div className={`flex md:gap-10 items-start justify-between
        ${classname}`}>
                <Image src={image} width={630} height={540} alt='tus kabina po meri'
                className='rounded-4xl object-cover lg:w-[40%] w-full max-h-[600px] min-h-[250px]'/>

            <div className='w-full py-10'>
                <PodNaslov>{podnaslov}</PodNaslov>
                <Tekst className={''}>
                    {tekst}
                </Tekst>
                <Link href={link} target='_blank'>
                    <button className="text-black bg-transparent px-8 py-2 rounded-3xl
            font-medium cursor-pointer border-black border mt-5">
                        Vidite cenu na našem sajtu
                    </button>
                </Link>
                
            </div>
            
        </div>
    )
}
