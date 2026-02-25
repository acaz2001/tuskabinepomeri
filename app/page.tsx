import Image from "next/image";
import {FeaturedImageGallery} from '../components/FeaturedImageGallery'
import ProductList from '../components/productList'
import { sanityFetch } from '../sanity/lib/live'
import { getAllProductsQuery } from '../sanity/lib/queries'
import getAllProducts from "@/sanity/lib/getAllProducts";
import VrsteKabina from "../components/VrsteKabina"
import { Card, CardContent } from "../components/ui/card"
import Kontent, { Naslov, PodNaslov, Tekst } from "../components/typography/Kontent"
import ResenjeKabine from "../components/ResenjeKabine"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import FaqKabine from '../components/faqKabine'
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { IoIosArrowDown } from "react-icons/io";
import MyComponentMaps from '../components/MyComponentMaps'
import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import ButtonMailto from '../components/ButtonMailto'



const images = [
    { src: 'https://images.unsplash.com/photo-1768310481123-9c8e4e6fc61a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', aspect_ratio: 4 / 3 },
   
]

const overlays = ['Image 1'];

const overlayStyle = {} as const;

export default async function Home() {
  const { data: products } = await sanityFetch({ query: getAllProductsQuery })
  return (
    <div className="bg-white w-full">
      <main className="max-w-[1950px] mx-auto md:px-10 px-5 pt-10 flex flex-col items-center 
      justify-center">
        <div className="flex flex-col items-center py-10 mb-10 w-full rounded-4xl
         bg-[#f9f6fe]">
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
            Izrada Tuš Kabina Po Meri
          </h1>
          <p className="text-[#9c9c9c] text-center pt-3 md:text-[18px] text-[14px] md:px-0 px-5">
            Na stranici cete naučiti sve što treba da znate o tuš kabinama po meri.
          </p>
        
        
        {/* Buttons*/}
        <div className="flex md:flex-row flex-col gap-2 mt-5">
          <Link href={'/#cene'}>
            <button className="text-white bg-black px-8 py-2 rounded-3xl
            font-medium cursor-pointer text-[12px] md:text-[14px]"
            >
              Kako se kreću cene
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

        {/*Gallery 
        <FeaturedImageGallery/>
        */}

        <div className="w-full justify-start">
          <Naslov className="">
            Zašto baš izrada po meri.
          </Naslov>
          <Tekst className="text-black ">
            Često ljudi biraju izradu po meri jer postoji dosta varijacija u samom izgledu, kakav će vam biti okov i koje boje, koja vrsta stakla, kakvog je položaja kabina, i tako mogu dobiti svoju kabinu koju su zamislili ili videli negde na internetu.
          </Tekst>
          <div className="w-full h-[1px] bg-gray-500 my-2">

          </div>
        </div>

        <div className="w-full justify-start mt-10">
          <Naslov className="">
            Kabine za svako kupatilo.
          </Naslov>
          <Tekst className="">
            Često nam ljudi dolaze sa problemima jer za svoje kupatilo ne mogu da nađu odgovarajuću kabinu, mere se ne poklapaju sa onim u salonima,
            imaju malo kupatilo ili neku kosinu na primer podkrovlje...          
          </Tekst>
          <Tekst className="">
            Za sve te probleme ima rešenje, svako kupatilo može da ima svoju funkcionalnu modernog izgleda tuš kabinu.
          </Tekst>
          <div className="w-full h-[1px] bg-gray-500 my-2">

          </div>
        </div>

        <div className="w-full justify-start mt-10">
          <Naslov className={''}>
            Najčešći problemi sa kojima se ljudi susreću i naša rešenja sa kabina po meri!
          </Naslov>
          <ResenjeKabine />
        </div> 


        <div className="w-full justify-start mt-10">
          <Naslov className="-mb-8">
            Koje sve kabine postoje i kako da izaberete savršenu za vas.
          </Naslov>
          <VrsteKabina/>
          <Tekst className="-mt-5">
            Zavisi dosta od prostora i mogućnosti u kupatilu , ako imate veš mašinu na primer i vrata na šarke će vam udarati u mašinu onda je bolja opcija ugraditi Klizna Vrata jer ona ne izlaze iz gabarita kabine.          
          </Tekst>
          <Tekst className="">
            Druga stvar je estetika, nekim ljudima se jednostavno više svidja Klizna kabina nego na Šarke, nekima obrnuto.        
          </Tekst>
          <div className="w-full h-[1px] bg-gray-500 my-2">

          </div>
          
        </div>


        <div className="w-full justify-start mt-10">
          <Naslov className="">
            Klizne kabine, često najbolje rešenje!
          </Naslov>
          <Tekst className="">
            Klizne kabine su se pokazale kao najbolje rešenje za kupatilo, ako imate uslova da je ugradite. 
            Zašto? Klizne kabine savršeno blokiraju vodu da ne izlazi van kabine, bolje nego kabine na šarke, zatvorena je sa svih strana i svaki prostor i gde bi mogla da prođe voda zatvoreno je gumama.
            Bitna stvar je ta da sav sistem za klizanje koji se ugradjuje, nalazi se iznad vaše glave i time nema kontakt sa vodom i nema šta da ga haba.
          </Tekst>
          <Tekst className="">
            Još jedna dobra stvar kod kliznih je ta da ne zahtevaju pri otvaranju dodatni prostor, vrata se otvaraju u toj dužini kolika je kabina.
          </Tekst>
          <Carousel className="my-5">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                <Image src={'/klizna1.jpg'} width={450} height={450} alt="Tus Kabina"
                className="rounded-3xl"/>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                <Image src={'/klizna2.jpg'} width={450} height={450} alt="Tus Kabina"
                className="rounded-3xl"/>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                <Image src={'/klizna3.jpg'} width={450} height={450} alt="Tus Kabina"
                className="rounded-3xl"/>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                <Image src={'/klizna4.jpg'} width={450} height={450} alt="Tus Kabina"
                className="rounded-3xl"/>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                <Image src={'/klizna5.jpg'} width={450} height={450} alt="Tus Kabina"
                className="rounded-3xl"/>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                <Image src={'/klizna7.jpg'} width={450} height={450} alt="Tus Kabina"
                className="rounded-3xl"/>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                <Image src={'/klizna8.jpg'} width={450} height={450} alt="Tus Kabina"
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

          <div className="flex md:flex-row flex-col md:gap-0 gap-5 items-start my-7">
            <Image src={'/dijagramklzna.avif'} width={610} height={574} alt="Dijagram Klizne Kabine"/>
            <div className="flex md:flex-col flex-col items-start">
              <Image src={'/dijagramklznaspec.avif'} width={610} height={574} alt="Dijagram Klizne Kabine Specifikacija"/>
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
                        <Tekst className="">1. Točkić koji se fiksira na vrata i koji kliza po šini(14)</Tekst>
                        <Tekst className="">2. Fiksira šinu po kojoj klizaju vrata sa fiksnim staklom.</Tekst>
                        <Tekst className="">3. Osigurava da vrata ne spadnu sa šine, da ne mogu da se pomeraju gore dole.</Tekst>
                        <Tekst className="">4. Konektor koji fiksira zid sa šipkom i učvršćuje kabinu.</Tekst>
                        <Tekst className="">5. Graničnik stopira vrata da ne udaraju o zid ili o neku drugu prepreku.</Tekst>
                        <Tekst className="">6. Ručica za otvaranje vrata, ima raznih izgleda.</Tekst>
                        <Tekst className="">7. Vođica na dnu kabine da vrata ne bi šetala levo desno.</Tekst>
                        <Tekst className="">8. Konektor koji spaja šipku sa fiksnim staklom.</Tekst>
                        <Tekst className="">10. Guma koja sprečava da voda prska van kabine i stavlja se na fiks.</Tekst>
                        <Tekst className="">11. Silikon koji ide u lajsne da voda ne bi ulazila u njih.</Tekst>
                        <Tekst className="">12. Poklopac koji ide u lajsnu da voda ne ulazi u nju.</Tekst>
                        <Tekst className="">13. Profili u koje se ubacuje staklo.</Tekst>
                        <Tekst className="">14. Šipka po kojoj klizaju vrata.</Tekst>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
              <Link href={'https://www.verdestaklorezac.com/tus-kabine/klizne'} target='_blank'>
                <button className="text-white bg-black px-8 py-2 rounded-3xl
                font-medium cursor-pointer text-[14px] md:text-[16px] mt-4">
                  Ovde možete da vidite sve modele kliznih kabina i cene.
                </button>
              </Link>

            </div>
          </div>

          <Naslov className="mt-10">
            Kabine na šarke.
          </Naslov>
          <Tekst className="">
            Kabina koja koristi metalne šarke za osiguravanje staklenih vrata, a osnovna karakteristika su vrata koja se otvaraju ka unutra ili napolje u zavisnoti od prostora, što je čini prilagodljivom različitim rasporedima kupatila. 
          </Tekst>
          <Tekst className="">
            Vrata su pričvršćena na fiksno staklo ili zid pomoću šarki, što mu omogućava da se okreće ka unutra ili ka spolja (neki modeli podržavaju otvaranje u oba smera).
          </Tekst>
          <Tekst className="">
            Kabine su opremljene magnetnom gumom i visokoelastičnim silikonskim gumama duž ivica kako bi se osiguralo čvrsto prianjanje kada su zatvorene, minimizirajući prskanje vode.
          </Tekst>
          <Tekst className="">
            Ranije smo spomenuli da klizne kabine bolje zaustavljaju vodu da ne izlazi napolje, razlog je to što kod kabina na šarke ne može u potpunosti da se zatvori deo kod šarki i onda kada se prska direktno na šarke može da prođe malo vode van kabine.
          </Tekst>
          <Carousel className="my-5">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                <Image src={'/sarke1.jpg'} width={450} height={450} alt="Tus Kabina"
                className="rounded-3xl"/>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                <Image src={'/sarke2.jpg'} width={450} height={450} alt="Tus Kabina"
                className="rounded-3xl"/>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                <Image src={'/sarke3.jpg'} width={450} height={450} alt="Tus Kabina"
                className="rounded-3xl"/>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                <Image src={'/sarke4.jpg'} width={450} height={450} alt="Tus Kabina"
                className="rounded-3xl"/>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                <Image src={'/sarke5.jpg'} width={450} height={450} alt="Tus Kabina"
                className="rounded-3xl"/>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                <Image src={'/sarke6.jpg'} width={450} height={450} alt="Tus Kabina"
                className="rounded-3xl"/>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4 basis-1/1">
                <Image src={'/sarke7.jpg'} width={450} height={450} alt="Tus Kabina"
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
          
          <div className="flex md:flex-row flex-col md:gap-0 gap-5 items-start my-7">
            <Image src={'/dijagramsarke.jpg'} width={610} height={574} alt="Dijagram Sarke Kabine"/>
            <div className="flex md:flex-col flex-col items-start">
              <Image src={'/dijagramsarkespecs.jpg'} width={610} height={574} alt="Dijagram Klizne Kabine Specifikacija"/>
              <Card className="mx-auto w-full mt-3">
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
                      <Tekst className="">1. Šarke koje se fiksiraju na fiksno staklo ili zid i drže vrata.</Tekst>
                      <Tekst className="">2. Konektor koji se šrafi u zid i u koji se stavlja i šrafi šipka.</Tekst>
                      <Tekst className="">3. Konektor koji se šrafi za fiksno staklo i za šipku.</Tekst>
                      <Tekst className="">4. Konektor koji se šrafi za staklo, kroz njega prolazi šipka na koju se fiksira takođe.</Tekst>
                      <Tekst className="">5. Ručica može biti raznih izgleda.</Tekst>
                      <Tekst className="">6. Cev služi da učvrsti celu kabinu. Pričvršćuje se za konektor na zidu i za one na fiksnim staklima.</Tekst>
                      <Tekst className="">7. Guma koja sprečava da voda prska van kabine i stavlja se na fiks.</Tekst>
                      <Tekst className="">8. Magnet koji se stavlja na vrata i fiksni dovratnik, služi da drži i prislanja vrata za dovratni fiks.</Tekst>
                      <Tekst className="">9. Okapnica guma, stavlja se na dnu vrata, služi da vraća vodu u kabinu kada se voda sliva po vratima.</Tekst>
                      <Tekst className="">10. Silikon koji ide u lajsne da voda ne bi ulazila u njih.</Tekst>
                      <Tekst className="">11. Profili u koje se ubacuje staklo.</Tekst>
                      <Tekst className="">12. Poklopac koji ide u lajsnu da voda ne ulazi u nju.</Tekst>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
            <Link href={'https://www.verdestaklorezac.com/tus-kabine/sarke'} target='_blank'>
                <button className="text-white bg-black px-8 py-2 rounded-3xl
                font-medium cursor-pointer text-[14px] md:text-[16px] mt-4">
                  Ovde možete da vidite sve modele kliznih kabina i cene.
                </button>
            </Link>

            </div>
          </div>


          <Naslov className="mt-10">
            Paravani, najjednostavnije.
          </Naslov>
          <Tekst className="">
            Ako hoćete jednostavnost i da uštedite, a da imate pregradu u kupatilo onda je idealno rešenje paravan.
            Jedno staklo sa profilima vertikalno i horizontalno i na vrhu teleskop koji dodatno učvršćuje staklo i to je to.
          </Tekst>
          <Tekst className="">
            Kupcima uvek preporučujemo da stavljaju paravan bar 100-110cm širine, da voda ne bi prskala van kabine, jer ako je male dužine paravan kada se tuširate jako onda hoće da prska dalje od paravana.
          </Tekst>
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
          
          <div className="flex md:flex-row flex-col md:gap-0 gap-5 items-start my-7">
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
            <Link href={'https://www.verdestaklorezac.com/tus-kabine/paravan'} target='_blank'>
                <button className="text-white bg-black px-8 py-2 rounded-3xl
                font-medium cursor-pointer text-[14px] md:text-[16px] mt-4">
                  Ovde možete da vidite sve modele kliznih kabina i cene.
                </button>
            </Link>

            </div>
          </div>
          
        <div className="w-full h-[1px] bg-gray-500 my-2">

          </div>
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
          <Naslov className={''}>
            Havarija kod kabina se retko dešava.
          </Naslov>
          <Tekst className={''}>
            Kabine su pomoću sistema za klizanje i nošenja stakla odlično osigurane.Kod kliznih postoje osigurači koji se pričvršćuju na staklo a nalaze se direktno ispod šine po kojoj klizaju vrata i time osigurači ne daju vratima da ispadnu sa šine.
          </Tekst>
          <Tekst className={''}>
            Kod kabina na šarke vrata drže šarke koje su pričvršćene za fiksno staklo ili zid tako da vrata ne mogu da spadnu.
            U slučajima koja se desi havarija onda je to uglavnom razlog ne adekvatnog korišćenja, lupanje vratima.
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


        <div className="w-full justify-start mt-10">
          <Naslov className="">
            Boja stakla.
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
      {/*<MyComponentMaps /> */}
      
      </main>
    </div>
  );
}
