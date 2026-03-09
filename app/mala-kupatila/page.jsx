import React from 'react'
import Link from "next/link";
import HeroBanner from '../../components/HeroBanner'
import Kontent, { Naslov, PodNaslov, Tekst } from "../../components/typography/Kontent"
import {ResenjaKabineSekcija} from '../../components/ResenjeKabine'
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";


function MalaKupatila() {
  return (
    <div>
        <main className="max-w-[1950px] mx-auto md:px-10 px-5 pt-10 flex flex-col items-center 
      justify-center relative">
            <HeroBanner naslov={'Moguće je da imate funkcionalnu kabinu u malom kupatilu.'}
            tekst={'Tuš kabine po meri'}
            button1Tekst={'Početna stranica'}
            button1Link={'/'}
            className={'sticky md:px-5 px-2'}
            />

            <div className='w-full'>
                <Naslov>
                    Tuš kabina po meri za funkcionalnu kabinu u malom kupatilu.
                </Naslov>
                <Tekst>
                    Mnogo nam dolaze ljudi i žale nam se da ne mogu da nađu kabinu koja
                    odgovara dimenzijama njihovog malog kupatila.
                </Tekst>
                <Tekst>
                    Znamo teško je uklopiti neophodne stvari za kupatilo kao veš mašina,
                    lavabo, wc šolja itd. ako je prostor ograničen, a još uz to treba i 
                    kabina.
                </Tekst>
                <Tekst>
                    Ako je nešto teško ne znači da je nemoguće, pokazalo se da je najbolje 
                    i jedino rešenje za taj slučaj tuš kabine po meri.
                </Tekst>
                <Tekst>
                    Često ljudi biraju izradu po meri jer postoji dosta varijacija u samom 
                    izgledu, kakav će vam biti okov i koje boje, koja vrsta stakla, kakvog 
                    je položaja kabina, i tako mogu uklopiti svoju kabinu u svoj prostor da 
                    mogu komotno da je koriste.
                </Tekst>
                <Tekst>
                    Jedino rešenje vam je da radite tuš kabine po meri.
                </Tekst>
            </div>

            <div className='w-full md:mt-20'>
                <Naslov>
                    Primeri da vidite kakva rešenja mogu da budu sa kabinama po meri kada je mali prostor.
                </Naslov>
                <ResenjaKabineSekcija image={'/sarke10.avif'}
                    tekst={`
                    Ako imate prostor slobodan od zida do zida 70-90cm nije moguće da stavite
                    kliznu kabinu, nego samo na šarke. Na slici kabina je širine 80cm i to je
                    savršeno da se stavi ovako jedan fiks od 30cm koji će držati vrata koja su
                    50cm. 50cm je sasvim okej ulaz da mogu svi da prođu. 
                    `} 
                    classname={'md:flex-row flex-col mt-5'}
                    link={'https://www.verdestaklorezac.com/prodavnica/modelv04?variant=SREBRNA'}
                    podnaslov={'Kada je prolaz oko 80cm.'}
                    buttonText= {'Vidite sve o kabinama na šarke'}
                />
                <ResenjaKabineSekcija image={'/klizna10.jpg'}
                    tekst={`
                    Za ovaj prolaz već može da se stavi klizna kabina sa jednim fiksnim delom i
                    jednim vratima, sa ulazom nekih 47cm što je okej prolaz da svako ulazi
                    i izlazi.
                    Ovo je idealno rešenje jer klizne kabine ne zahtevaju dodatni prostor kada
                    se otvaraju vrata, vrata ovde klizaju tj. otvaraju se i zatvaraju u svojoj
                    dužini. Moglo je u ovom kupatilu da se stavi i kabina na šarke, u tom slučaju
                    bi se vrata kačila na zid a sa druge strane bi bilo fiksno staklo koje bi služilo
                    samo da prihvata vrata kada se zatvaraju. Onda bi se vrata ovde otvarala 
                    na spolja jer unutra nema toliko mesta.
                    

                    `} 
                    classname={'md:flex-row-reverse flex-col mt-5'}
                    link={'/#klizne'}
                    podnaslov={'Kada je prolaz oko 100cm.'}
                    buttonText= {'Vidite sve o kliznim kabinama'}
                />
                <ResenjaKabineSekcija image={'/Problem malo kupatilo2.jpg'}
                    tekst={`Kada je problem jako malo kupatilo!
                    U ovom stanu su ljudi imali problem prvo jer im je kupatilo jako malo, i jos imaju lavabo i veš mašinu blizu kabine. Ovde nikako nije moglo da se stavi klizna kabina jer jednostavno nema dovoljno mesta da vrata klizaju i da se prodje, jer kabina je svega 80x70cm.
                    Dogovorili smo se da napravimo ulaz da se otvaraju oba vrata i sa tim se dobija jako veliki i komotni prolaz u kabinu, vrata što se kače na zid se otvaraju unutra jer su manja i zauzimaju manje mesta, a vrata što idu na fiks se otvaraju spolja.
                    Ovo je odlično iskoriščena kabina jer iako je kupatilo malo dobila se veoma funkcionalna kabina gde je komotno koristiti je kada se ulazi i izlazi, a i prilikom tuširanja ima mesta unutra.
                    `} 
                    classname={'md:flex-row flex-col mt-5'}
                    link={'https://www.verdestaklorezac.com/prodavnica/modelv04?variant=SREBRNA'}
                    podnaslov={'Malo i usko kupatilo.'}
                />
                <ResenjaKabineSekcija image={'/Problem zidovi2.jpg'}
                    tekst={`Kupatilo ima dosta nekih pregradnih zidova. Za ovaj slučaj 
                    odlučili smo da stavimo kliznu kabinu umesto šarki. Kupatilo je 
                    dugačko i usko. Da se vrata na šarke otvaraju na unutra ne bi bilo 
                    mesta takodje i spolja ista stvar, tako da klizna je najbolja 
                    varijanta u ovom slučaju. Još jedan problem je taj što se na kraju 
                    kupatila,kod prozora, nalazi šolja koja ima ozidanu konzolu i izgleda
                    kao neki zidić mali. Zato je fiksno staklo urezano za taj zidić da bi
                    išlo staklo do kraja zida.`} 
                    classname={'md:flex-row-reverse flex-col mt-5'}
                    link={'https://www.verdestaklorezac.com/prodavnica/modelv04?variant=SREBRNA'}
                    podnaslov={'Usko kupatilo.'}
                />
                
            </div>

        <div className="w-full justify-start mt-10">
          <Naslov className={''}>
            Montaža traje 1-3 sata.
          </Naslov>
          <Tekst className={''}>
           Što se tiče montaže, kabina bude gotova za 2-3 sata, čak se Paravan montira i za kraće vreme za 40-50min.
          </Tekst>
          <Tekst className={''}>
            Postupak montaže je takav da se prvo lepe U profili na pločice, nema bušenja, nakon toga ubacuju fiksna stakla u njih i silikoniraju se da bi se fiksirala i zaštitila kabina da ne curi voda.
          </Tekst>
          <Tekst className={''}>
            Sledeće je da se montiraju vrata, ako su šarke onda se kače na fiks ili zid, a ako su klizna montira se prvo šina po kojoj klizaju vrata na fiksna stakla pa se onda kače vrata da klizaju.
          </Tekst>
          <Tekst className={''}>
            Kada je paravan u pitanju isto se prvo stavljaju U profili koji se lepe na pločice, ubacuje se staklo i silikonira, na kraju se stavlja teleskop koji se buši u zid i šrafi za staklo da time dodatno učvrsti staklo.
          </Tekst>
          <div className="w-full h-[1px] bg-gray-500 my-2">
          </div>
        </div>

        <div className="w-full justify-start mt-10">
          <Naslov className="">
            Dugotrajnost kabine.
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

        <div className="w-full justify-start mt-10">
          <Naslov className="">
            Garancija na okov 3 godine.
          </Naslov>
          <Tekst className="text-black">
            Sav okov na kabinama je od prohroma što znači da nema rđanja, dok su lajsne koje se lepe na zid i na pločice od elektropoliranog aluminijuma i isto ne rđa.
          </Tekst>
          <Tekst className="text-black">
            Kod Kabina kao što je Klizna dobra stvar je što se apsolutno sav okov koji je potreban nalazi iznad glave i nema nikakvog kontakta sa vodom time nema šta da haba okov.Što se tiče vrata na Šarke i Paravana ista je situacija sa tim što će donja šarka kod vrata biti niže i biće malo u kontaktu sa vodom.
          </Tekst>
          <Tekst className="text-black">
            Okov možete da birate u osnovnoj sivoj boji ili može biti u crnoj ili zlatnoj boji (mat i sjaj).
          </Tekst>
          <Tekst className="text-black">
            Ako vam ne odgovaraju ove boje okov može da se plastificira u bilo koju boju koju hoćete.
          </Tekst>
          <Tekst className="text-black">
            Okov se može plastificirati u bilo koju boju (najčešće je to crna i zlatna boja) time možete još više uklopiti kabinu u vaš enterijer ako vam se to svidja.
          </Tekst>
          <div className="w-full h-[1px] bg-gray-500 my-2">

          </div>
        </div>

        <div id="cene" className="w-full justify-start mt-10">
          <Naslov className={''}>
            Kako se kreću cene.
          </Naslov>
          <Tekst className={''}>
            Cena je 90 eura po kvadratu sa montažom plus okov.
          </Tekst>
          <Tekst className={''}>
            Ako hoćete da saznate cenu za vašu kabinu morate da nas kontaktirate.
          </Tekst>
          <div className="w-full h-[1px] bg-gray-500 my-2">
          </div>
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
          <div className="w-full h-[1px] bg-gray-500 my-2">
          </div>
        </div>
        
        {/*
        <div className="w-full my-10">
          <h1 className="text-black text-4xl text-left pb-5 font-bold">Vi birate boju okova i stakla.</h1>
          <FaqKabine />
        </div>
        */}

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

export default MalaKupatila
