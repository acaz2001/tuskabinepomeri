import React from 'react'
import HeroBanner from '../../components/HeroBanner'
import ProizvodParavan from '../../components/listaProzvoda/ProizvodParavan'
import { promises as fs } from 'fs';
import { Naslov, Tekst, PodNaslov } from '../../components/typography/Kontent';
import Image from 'next/image';
import { Card, CardContent } from "../../components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import ProizvodPoMeri from "../../components/forms/ProizvodPoMeri";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Metadata } from "next";
import Script from 'next/script';


const metadata = {
  title: "Paravani za tus kabine"
  ,
  description: "Kaljeno staklo moderan dizajn za tus paravane.",
  authors: [{ name: "Verde Staklorezac" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }},
    openGraph: {
    type: "website",
    locale: "sr_SRB", // or "es_ES" for Spanish
    url: "https://www.tuskabinepomeri.rs/paravani-za-tus-kabine",
    title: "Paravani za tus kabine",
    description: "Kaljeno staklo moderan dizajn za tus paravane.",
    images: [
      {
        url: "/paravan4.jpg",
        width: 450,
        height: 600,
        alt: "Paravan za tus kabine",
      },
    ],
    siteName: "Tus kabine po meri",
  },


};


async function ParavaniZaTusKabinePage() {
  const fileParavan = await fs.readFile(process.cwd() + '/data/kabineParavan.json');
  const dataParavan = JSON.parse(fileParavan);

  return (
    <div className='bg-white'>
        <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.tuskabinepomeri.rs",
                "url": "https://www.tuskabinepomeri.rs",
                "name": "Tus kabine po meri",
                "description": "Kaljeno staklo moderan dizajn za tus paravane.",
                "publisher": {
                    "@id": "https://www.tuskabinepomeri.rs/paravani-za-tus-kabine"
                },
                "inLanguage": "srp-Srp"
                })
            }}
        />
        <main className="max-w-[1950px] mx-auto md:px-10 px-5 pt-10 flex flex-col items-start 
        justify-center relative">
            <HeroBanner 
            naslov={'Kaljeno staklo za paravane, gotovi modeli i izrada po meri.'}
            tekst={'Moderan dizajn, brz rok izrade i montaze, pristupačne cene.'}
            button1Tekst={'Početna stranica'}
            button1Link={'/'}
            className={'sticky md:px-5 px-2'}
            />

            <div className="w-full justify-start mt-0">
                <Naslov>
                    Modeli paravana i cene.
                </Naslov>
                <Tekst>
                    Klikom na model vodi vas na određeni model sa merama i cenama.
                </Tekst>
            </div>

            <div className="mt-5 grid lg:grid-cols-3 lg:grid-rows-1 gap-5
          md:grid-cols-2 grid-cols-1">
                <ProizvodParavan data={dataParavan}/>
            </div>

            <div className="w-full justify-start mt-10">
                <Naslov>
                    Preporučene dužine paravana.
                </Naslov>
                <Tekst>
                    Kupcima uvek preporučujemo da stavljaju paravan bar 100-110cm 
                    širine, da voda ne bi prskala van kabine, jer ako je male dužine 
                    paravan kada se tuširate jako onda hoće da prska dalje od paravana.
                </Tekst>
            </div>

            <div className="w-full my-0">

            
                <Carousel className="my-5">
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                            <Image src={'/paravan1.jpg'} width={450} height={450} alt="Tus Kabina"
                            className="rounded-3xl"/>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                            <Image src={'/paravan2.jpg'} width={450} height={450} alt="Tus Kabina"
                            className="rounded-3xl"/>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                            <Image src={'/paravan3.jpg'} width={450} height={450} alt="Tus Kabina"
                            className="rounded-3xl"/>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                            <Image src={'/paravan4.jpg'} width={450} height={450} alt="Tus Kabina"
                            className="rounded-3xl"/>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                            <Image src={'/paravan5.jpg'} width={450} height={450} alt="Tus Kabina"
                            className="rounded-3xl"/>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                            <Image src={'/paravan6.jpg'} width={450} height={450} alt="Tus Kabina"
                            className="rounded-3xl"/>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="ml-3"/>
                <CarouselNext className="mr-3"/>
                </Carousel>
          </div>

            <div className="w-full justify-start mt-18">
                <Naslov>
                    Šta se sve nalazi na paravanu od okova.
                </Naslov>
                <Tekst>
                    Ispod imate sliku sa detaljnim prikazom okova koji se ugrađuje u kabini.
                </Tekst>
            </div>

            <div className="flex md:flex-row flex-col md:gap-0 gap-5 items-start my-12">
                <Image src={'/dijagramparavan.jpg'} width={610} height={574} alt="Dijagram Sarke Kabine"/>
                <div className="flex md:flex-col flex-col items-start">
                <Image src={'/dijagramparavanspecs.jpg'} width={610} height={574} alt="Dijagram Klizne Kabine Specifikacija"/>
                <Card className="mx-auto w-full mt-2">
                <CardContent>
                    <Collapsible className=" rounded-md">
                    <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="group w-full">
                        Detaljni opis elemenata okova
                        <IoIosArrowDown className="ml-auto group-data-[state=open]:rotate-180" />
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                        <div className="mt-3">
                        <Tekst className="">1. Konektor koji se šrafi u zid i u koji se stavlja i šrafi šipka. </Tekst>
                        <Tekst className="">2. Konektor koji se šrafi u zid i u koji se stavlja i šrafi šipka.</Tekst>
                        <Tekst className="">3. Cev služi da učvrsti celu kabinu. Pričvršćuje se za konektor na zidu i za one na fiksnim staklima.</Tekst>
                        <Tekst className="">4. Silikon koji ide u lajsne da voda ne bi ulazila u njih.</Tekst>
                        <Tekst className="">5. Profili u koje se ubacuje staklo.</Tekst>
                        </div>
                    </CollapsibleContent>
                    </Collapsible>
                </CardContent>
                </Card>

                </div>
            </div>

            <div className="w-full justify-start mt-10">
                <Naslov className="">
                    Vi birate boju okova i stakla.
                </Naslov>
                <Tekst className="text-black">
                    Postoje kupatila u svakavnim bojama pločica, tamnih ili svetlih boja, kod nekih kupatila tamnih boja pločica i na primer crnih slavina, elemenata itd. najlepše ide crni okov za tuš kabinu.
                </Tekst>
                <Carousel className="my-5">
                    <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                        <Image src={'/okovcrni1.jpg'} width={450} height={450} alt="Tus Kabina"
                        className="rounded-3xl"/>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                        <Image src={'/okovcrni2.jpg'} width={450} height={450} alt="Tus Kabina"
                        className="rounded-3xl"/>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                        <Image src={'/okovcrni3.jpg'} width={450} height={450} alt="Tus Kabina"
                        className="rounded-3xl object-cover"/>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                        <Image src={'/okovzlatni2.jpg'} width={450} height={450} alt="Tus Kabina"
                        className="rounded-3xl"/>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                        <Image src={'/klizna8.jpg'} width={450} height={450} alt="Tus Kabina"
                        className="rounded-3xl"/>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                        <Image src={'/sarke1.jpg'} width={450} height={450} alt="Tus Kabina"
                        className="rounded-3xl"/>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                        <Image src={'/sarke8.jpg'} width={450} height={450} alt="Tus Kabina"
                        className="rounded-3xl"/>
                    </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="ml-3"/>
                    <CarouselNext className="mr-3"/>
                </Carousel>
                <Tekst className="text-black">
                    Ovo su super primeri da vam prikažemo kada je lepo stavljati okov u boji. Ako imate neke elemente,slavinu, pečurku u nekoj određenoj boji možete se odlučiti da vaša kabina ima okov u boji. Ima slučajeva kada u kupatilu i nisu stvari u nekoj boji nego su srebrne ali na primer pločice imaju neku boju koja bi se uklopila sa nekom bojom okova. 
                </Tekst>
                <div className="w-full h-[1px] bg-gray-500 my-2">
                </div>
            </div>

            <div className="w-full justify-start mt-18">
                <Naslov>
                    Montaža traje 40 min - 1 sat.
                </Naslov>
                <Tekst>
                    Postupak montaže je takav da se prvo lepe U profili na pločice, 
                    nema bušenja, nakon toga ubacuju fiksna stakla u njih i silikoniraju 
                    se da bi se fiksirala i zaštitila kabina da ne curi voda.
                </Tekst>
                <Tekst>
                    Sledeće je da se montiraju vrata, ako su šarke onda se kače na fiks
                    ili zid, a ako su klizna montira se prvo šina po kojoj klizaju vrata
                    na fiksna stakla pa se onda kače vrata da klizaju.
                </Tekst>
                <Tekst>
                    Kada je paravan u pitanju isto se prvo stavljaju U profili koji se
                    lepe na pločice, ubacuje se staklo i silikonira, na kraju se 
                    stavlja teleskop koji se buši u zid i šrafi za staklo da time dodatno 
                    učvrsti staklo.
                </Tekst>
                <div className="w-full h-[1px] bg-gray-500 my-2">
                </div>
            </div>
            
            <div className="w-full justify-start mt-10">
                <Naslov className="">
                    Dugotrajnost paravana.
                </Naslov>
                <Tekst className="text-black">
                    Ako ste odgovorna osoba i pazite da ne lupate vratima,čistite redovno kabinu od kamenca njena dugotrajnost će vam biti neograničena.          
                </Tekst>
                <Tekst className="text-black">
                    Staklo koje se montira je pod obavezno kaljeno, to znači da je to staklo ojačano od običnog i mnogo je otpornije na udarce, daje sigurnost od povreda prilikom loma jer i ako se desi da pukne, staklo će pući na mnogo malih komadića 8x8mm.        
                </Tekst>
                <Tekst className="text-black">
                    Okov je od prohroma odličnog kvaliteta, može se plastificirati u bilo koju boju (najčešće je to crna i zlatna boja) time možete još više uklopiti kabinu u vaš enterijer ako vam se to svidja.
                </Tekst>
                <div className="w-full h-[1px] bg-gray-500 my-2">

                </div>
            </div>

            <div className="w-full justify-start mt-8">
                <Naslov className="mt-10">
              Koje staklo ugrađujemo na kabinama?
                </Naslov>
                <Tekst className="text-black">
                    Svako staklo na svim kabinama je debljine 8mm. Staklo je kaljeno zbog sigurnosti i izdržljivosti. Staklo može biti i u boji: braon, sivo, matirano.
                </Tekst>
                <div className="flex md:flex-row flex-col gap-5 mt-5">
                    <Image src={'/parsolbronza.jpg'} width={351} height={351} alt="parsol staklo" className="rounded-3xl"/>
                    <Image src={'/parsol1.jpg'} width={351} height={351} alt="parsol staklo" className="rounded-3xl"/>
                    <Image src={'/717zX2y+cRL.jpg'} width={351} height={351} alt="parsol staklo" className="rounded-3xl"/>
                </div>
                <PodNaslov className={'mt-5'}>
                    Šta znači kaljeno staklo?
                </PodNaslov>
                <Tekst className="text-black">
                    Kada je staklo kaljeno to znači da je staklo prošlo kroz mašinski proces zagrevanja na 650° C  i naglog hlađenja. Ovaj proces proizvodnje ga čini jačim i otpornijim na toplotu i do 400-500% od običnog stakla. Cilj procesa kaljenja je prvenstveno poboljšanje trajnost i konstrukcije i toplotne čvrstoće stakla, čime se povećava njegova otpornost i sposobnost da izdrže toplinu. 
                </Tekst>
                <PodNaslov className={'mt-5'}>
                    Prednosti kaljenog stakla.
                </PodNaslov>
                <Tekst className="text-black ">
                    Kaljeno staklo je i do pet puta jače i izdržljivije od običnog stakla.
                </Tekst>
                <Tekst className="text-black ">
                    Još jedna prednost kaljenog stakla jeste sigurnost, ukoliko dođe do lomljenja, staklo se rasprši u hiljadu komadića. Čak i ukoliko dođe do lomljenja, zbog procesa kaljenja komadi će biti jako mali i tupi i samim tim znatno bezbedniji nego da su delovi običnog stakla.
                </Tekst>
                <div className="w-full h-[1px] bg-gray-500 my-2">
                </div>
            </div>

            <div className="w-full justify-start mt-10">
          <Naslov className="">
            Staklo može biti i u boji.
          </Naslov>
          <Tekst className="text-black">
            Ovde nema mnogo toga da se priča, ako vam se sviđa da staklo bude u nekoj boji stavite tako, ako ne stavite providno.
            Iskreno kod stakala u boji se mnogo više vidi kamenac, moguće je da se održava ali je teže nego providno.
            Sa druge strane matirano staklo je dobro za kamenac jer se ne vidi toliko na mat staklu pošto je to staklo sa spoljne strane hrapavo matirano a iznutra je glatko i onda stranu unutra što kvasite neće se videti toliko kamenac.
            Boja i matirano staklo su skuplje nego providno.          
          </Tekst>
          <Carousel className="my-5">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                <Image src={'/klizna1.jpg'} width={450} height={450} alt="Tus Kabina"
                className="rounded-3xl"/>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                <Image src={'/sarke6.jpg'} width={450} height={450} alt="Tus Kabina"
                className="rounded-3xl"/>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                <Image src={'/bojaStaklaSiva2.jpg'} width={450} height={450} alt="Tus Kabina"
                className="rounded-3xl"/>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                <Image src={'/klizna6.jpg'} width={450} height={450} alt="Tus Kabina"
                className="rounded-3xl"/>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                <Image src={'/klizna9.jpg'} width={450} height={450} alt="Tus Kabina"
                className="rounded-3xl"/>
              </CarouselItem>
              
            </CarouselContent>
            <CarouselPrevious className="ml-3"/>
            <CarouselNext className="mr-3"/>
          </Carousel>
          </div>

            <div className="w-full justify-start mt-10">
                <Naslov className={''}>
                    Kakav je proces izrade kada se odlučite da radite kabinu.
                </Naslov>
                <Tekst className={''}>
                    1. Ako se odlučite za kabinu, kontaktirajte nas na 0603170707, ili na mejl verdestaklo011@gmail.com
                </Tekst>
                <Tekst className={''}>
                    2. U roku od 2 dana dolazimo do vas da uzmemo mere.
                </Tekst>
                <Tekst className={''}>
                    3. Rok za izradu kabine je 7-10 dana.
                </Tekst>
                <Tekst className={''}>
                    4. Montaža.
                </Tekst>
                <div className="w-full h-[1px] bg-gray-500 my-2">
                </div>
            </div>

            <div className="w-full justify-start mt-10">
                <Naslov className={''}>
                    Kako da naručite kabini po meri.
                </Naslov>
                <Tekst className={'pb-2'}>
                    Možete nas kontaktirati na broj telefona ili na mejl.
                </Tekst>
                <div className="mt-2">
                    <div className="flex md:flex-row flex-col gap-2 -mt-2">
                    <Link href={'tel:0603170707'} >
                        <button className="text-black bg-transparent px-8 py-2 rounded-3xl flex flex-row items-center gap-2
                        w-fit font-medium cursor-pointer border-black border text-[12px] md:text-[14px]">
                        0603170707
                        <span><FiPhone /></span>
                        </button>
                    </Link>
                    <button className="text-black bg-transparent px-8 py-2 rounded-3xl flex flex-row items-center gap-2
                    font-medium cursor-pointer border-black border text-[12px] md:text-[14px] w-fit">
                        verdestaklo011@gmail.com
                        <span><IoMailOutline /></span>
                    </button>
                    </div>
                </div>
                <div id="po-meri" className="mt-10">
                    <PodNaslov className={''}>
                    Popunite formu da dobijete ponudu za tuš kabinu po meri.
                    </PodNaslov>
                    <Tekst className={'-mt-2'}>
                    Unesite potrebne podatke, na kraju kliknite na dugme "Pošaljite upit"
                    da pošaljete upit.
                    </Tekst>
                    <Tekst className={'mb-5'}>
                    U roku od 2-3 sata dobićete pounudu na vaš mejl ili broj telefona.


                    </Tekst>

                    <ProizvodPoMeri />
                </div>
                <div className="w-full h-[1px] bg-gray-500 my-2">
                </div>
            </div>

            <div className="w-full my-10">
                <div>
                    <PodNaslov className={''}>
                        Naša radnja: Bulevar Kralja Aleksandra 546, Zvezdara
                    </PodNaslov>
                    <div className="flex md:flex-row flex-row gap-2 -mt-2">
                    <Link href='https://www.google.com/maps/place/VERDE/@44.7796507,20.5235281,18.27z/data=!4m14!1m7!3m6!1s0x475a707f686851f7:0x916237bc5a376f02!2sVERDE!8m2!3d44.7794862!4d20.5254332!16s%2Fg%2F11_rpxb50!3m5!1s0x475a707f686851f7:0x916237bc5a376f02!8m2!3d44.7794862!4d20.5254332!16s%2Fg%2F11_rpxb50?entry=ttu&g_ep=EgoyMDI2MDIxNy4wIKXMDSoASAFQAw%3D%3D'
                    target='_blank'>
                        <button className="text-white bg-black px-8 py-2 rounded-3xl
                        font-medium cursor-pointer text-[12px] md:text-[14px]">
                        Google Mapa
                        </button>
                    </Link>
                    </div>
                </div>
                
                    {/* <ButtonMailto label="Write me an E-Mail" mailto="mailto:verdestaklo011@gmail.com" />*/}

                
            </div>

            

            


        </main>
    </div>
  )
}

export default ParavaniZaTusKabinePage
