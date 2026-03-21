'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function ProizvodPoMeriForma({}) {
 // const [state, handleSubmit] = useForm("https://formspree.io/f/xkgkqonj");
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [grad, setGrad] = useState('');
  const [postanskiBroj, setPostanskiBroj] = useState('');
  const [address, setAddress] = useState('');
  const [adresa, setAdresa] = useState('');
  const [message, setMessage] = useState('');
  const [dimenzija, setDimenzija] = useState('');
  const [sirina, setSirina] = useState('');
  const [visina, setVisina] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ledBoja, setLedBoja] = useState("Žuta boja");
  const [okovBoja, setOkovBoja] = useState("Siva");
  const [bojaStakla, setBojaStakla] = useState("Providno")
  const [vrstaKabine, setVrstaKabine] = useState("Paravan")
  const [modelKabine, setModelKabine] = useState()
  const [bojaRama, setBojaRama] = useState("");

  useEffect(() => {
    if (vrstaKabine === 'Paravan') {
      setModelKabine === ''
    }
  })


  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log('Order submitted:', { name, phone, address, message });
    setFormSubmitted(true);
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/mkoqeqkd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone,grad, address,adresa, message, dimenzija,sirina, visina,
          okovBoja,bojaStakla,vrstaKabine,modelKabine
        })
      })

      if (response.ok) {
        // Reset form after submission
        setTimeout(() => {
          setName('');
          setPhone('');
          setAddress('');
          setMessage('');
          setDimenzija('');
          setLedBoja('');
          setOkovBoja('');
          setSirina('');
          setVisina('');
          setBojaStakla('');
          setFormSubmitted(false);
          setSuccess(true)
        }, 3000);
      } else {
        console.log('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form: ', error)
    }
  };

  //if (state.succeeded) {
  //  handleRedirect();
  //    return <p>Thanks for joining!</p>;
 //     
 // }

 console.log ('Vrsta kabine ', vrstaKabine)
 console.log ('Model kabine ', modelKabine)
  return (
    <>
    {/*
            {formSubmitted ? (
          <div className="success-message">
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">Vaša forma je poslata, bićete kontaktirani u najkraćem roku.</p>
          </div>
        ) : (
    */}
          <div className='flex flex-col items-start max-w-[1618px]'>
            <form onSubmit={handleSubmit} className='flex flex-col items-start w-[100%] lg:w-[100%] gap-3'>

                <label htmlFor="name" className='justify-items-start text-[0.95rem] font-medium'>Ime i prezime:</label>
                <input 
                  className='bg-[#f9f6fe] p-2.5 w-[100%] rounded-lg text-[0.9rem]'
                  type="text" 
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              
                <label htmlFor="phone" className='justify-items-start text-[0.95rem] font-medium'>Broj telefona</label>
                <input 
                  className='bg-[#f9f6fe] p-2.5 w-[100%] rounded-lg text-[0.9rem]'
                  type="tel" 
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />

                <label htmlFor="grad" className='justify-items-start text-[0.95rem] font-medium'>Grad</label>
                <input 
                  className='bg-[#f9f6fe] p-2.5 w-[100%] rounded-lg text-[0.9rem]'
                  type="text" 
                  id="grad"
                  value={grad}
                  onChange={(e) => setGrad(e.target.value)}
                  required
                />
                
                <label htmlFor="postanskiBroj" className='justify-items-start text-[0.95rem] font-medium'>Poštanksi broj</label>
                <input 
                  className='bg-[#f9f6fe] p-2.5 w-[100%] rounded-lg text-[0.9rem]'
                  type="number" 
                  id="postanskiBroj"
                  value={postanskiBroj}
                  onChange={(e) => setPostanskiBroj(e.target.value)}
                  required
                />

                <label htmlFor="adresa" className='justify-items-start text-[0.95rem] font-medium'>Adresa i broj</label>
                <input 
                  className='bg-[#f9f6fe] p-2.5 w-[100%] rounded-lg text-[0.9rem]'
                  type="tel" 
                  id="adresa"
                  value={adresa}
                  onChange={(e) => setAdresa(e.target.value)}
                  required
                />
                

                <label htmlFor="address" className='justify-items-start text-[0.95rem] font-medium'>Email adresa:</label>
                <input 
                  className='bg-[#f9f6fe] p-2.5 w-[100%] rounded-lg text-[0.9rem]'
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />

                <>
                  <label htmlFor="dimenzija" className='justify-items-start text-[0.95rem] font-medium'>Dimenzija (unesite u centimetrima):</label>
                  <input 
                    className='bg-[#f9f6fe] p-2.5 w-[100%] rounded-lg text-[0.9rem]'
                    id="dimenzija"
                    value={dimenzija}
                    onChange={(e) => setDimenzija(e.target.value)}
                    required
                  />
                  <label htmlFor="visina" className='justify-items-start text-[0.95rem] font-medium'>Visina (unesite u centimetrima):</label>
                  <input 
                    className='bg-[#f9f6fe] p-2.5 w-[100%] rounded-lg text-[0.9rem]'
                    id="visina"
                    value={visina}
                    onChange={(e) => setVisina(e.target.value)}
                    required
                  />       
                  <label htmlFor="bojaStakla" className='justify-items-start text-[0.95rem] font-medium'>Staklo boja:</label>
                    <select
                        name="bojaStakla"
                        value={bojaStakla}
                        onChange={(e) => setBojaStakla(e.target.value)}
                        required
                        className="border border-gray-300 p-2 rounded-md w-full"
                      >
                        <option value="Providno">Providno</option>
                        <option value="Sivo">Sivo</option>
                        <option value="Braon">Braon</option>
                        <option value="Matirano">Matirano</option>
                  </select>
                  <label htmlFor="vrstaKabine" className='justify-items-start text-[0.95rem] font-medium'>Vrsta Kabine:</label>  
                  <select
                        name="vrstaKabine"
                        value={vrstaKabine}
                        onChange={(e) => setVrstaKabine(e.target.value)}
                        required
                        className="border border-gray-300 p-2 rounded-md w-full"
                      >
                        <option value="Klizna">Klizna kabina</option>
                        <option value="Sarke">Kabina na šarke</option>
                        <option value="Paravan">Paravan</option>
                        
                  </select>   
                  <label htmlFor="modelKabine" className='justify-items-start text-[0.95rem] font-medium'>Model Kabine:</label>   
                  {vrstaKabine === 'Klizna' ? 
                  <div className='w-full'>
                    <select
                          name="modelKabine"
                          value={modelKabine}
                          onChange={(e) => setModelKabine(e.target.value)}
                          required
                          className="border border-gray-300 p-2 rounded-md w-full"
                        >
                          <option value="v01">Dupla klizna</option>
                          <option value="v02">Bočni fiks</option>
                          <option value="v03">Od zida do zida</option>
                          
                    </select>  
                    <div className='mt-5'>
                      {modelKabine === 'v01' ? <Image src={'/Model V01.jpg'} width={350} height={350} alt='' className='rounded-2xl'/> : null}
                      {modelKabine === 'v02' ? <Image src={'/Model V03.jpg'} width={350} height={350} alt='' className='rounded-2xl'/> : null}
                      {modelKabine === 'v03' ? <Image src={'/Model V02.jpg'} width={350} height={350} alt='' className='rounded-2xl'/> : null}
                    </div>
                  </div>
                  : null}
                  {vrstaKabine === 'Sarke' ? 
                  <div className='w-full'>
                    <select
                          name="modelKabine"
                          value={modelKabine}
                          onChange={(e) => setModelKabine(e.target.value)}
                          required
                          className="border border-gray-300 p-2 rounded-md w-full"
                        >
                          <option value="V08">Model V08</option>
                          <option value="V10">Model V10</option>
                          <option value="V05">Model V05</option>
                          <option value="V07">Model V07</option>
                          <option value="V09">Model V09</option>
                          <option value="V04">Model V04</option>
                    </select>  
                    <div className='mt-5'>
                    {modelKabine === 'V08' ? <Image src={'/Model V08.jpg'} width={350} height={350} alt='' className='rounded-2xl'/> : null}
                    {modelKabine === 'V10' ? <Image src={'/Model V10.jpg'} width={350} height={350} alt='' className='rounded-2xl'/> : null}
                    {modelKabine === 'V05' ? <Image src={'/Model V05.jpg'} width={350} height={350} alt='' className='rounded-2xl'/> : null}
                    {modelKabine === 'V07' ? <Image src={'/Model V07.jpg'} width={350} height={350} alt='' className='rounded-2xl'/> : null}
                    {modelKabine === 'V09' ? <Image src={'/Model V09.jpg'} width={350} height={350} alt='' className='rounded-2xl'/> : null}
                    {modelKabine === 'V04' ? <Image src={'/Model V04.jpg'} width={350} height={350} alt='' className='rounded-2xl'/> : null}                                                                                          
                    </div>
                  </div>
                  : null}
                  {vrstaKabine === 'Paravan' ?
                  <div className='w-full'>
                    <select
                          name="modelKabine"
                          value={modelKabine}
                          onChange={(e) => setModelKabine(e.target.value)}
                          required
                          className="border border-gray-300 p-2 rounded-md w-full"
                        >
                          <option value="V25">Model V25</option>
                          <option value="V27">Model V27</option>
                          <option value="V30">Model V30</option>
                          
                    </select> 
                    <div className='mt-5 w-full'>
                    {modelKabine === 'V25' ? <Image src={'/Tus kabina v25 sivo.jpg'} width={350} height={350} alt='' className='rounded-2xl'/> : null}
                    {modelKabine === 'V27' ? <Image src={'/Tus kabina v27 sivo.jpg'} width={350} height={350} alt='' className='rounded-2xl'/> : null}
                    {modelKabine === 'V30' ? <Image src={'/Tus kabina v030 sivo.jpg'} width={350} height={350} alt='' className='rounded-2xl'/> : null}
                   </div>  
                    </div>
                  : null}
                  
                    <label htmlFor="okovBoja" className='justify-items-start text-[0.95rem] font-medium'>Boja okova:</label>
                    <select
                        name="okovBoja"
                        value={okovBoja}
                        onChange={(e) => setOkovBoja(e.target.value)}
                        required
                        className="border border-gray-300 p-2 rounded-md w-full"
                      >
                        <option value="Siva">Siva</option>
                        <option value="Mat crna">Mat crna</option>
                        <option value="Mat zlatna">Mat zlatna</option>
                        <option value="Sjaj zlatna">Sjaj zlatna</option>
                      </select>
                  </>

                


              
                <label htmlFor="orderNote" className='justify-items-start text-[0.95rem] font-medium'>Dodatni zahtevi (nije obavezno):</label>
                <textarea 
                  className='bg-[#f9f6fe] p-2.5 pb-12 w-[100%] rounded-lg text-[0.9rem]'
                  id="orderNote"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ovde pišite ako hoćete još neke dodatne izmene na proizvodu..."
                  //required
                />

              
              <button type="submit" 
              className={`bg-black text-white text-[0.95rem] font-medium w-[100%] rounded-lg pb-2 pt-2 mt-5 cursor-pointer 
              ${loading ? 'bg-red500' : success ? 'bg-green-400' : null}`}>
                {success ? 'Uspešno poslato' : loading ? 'Slanje...' : 'Pošaljite upit'}
              </button>
            </form>
          </div>
        
        </>
  );
}

function  ProizvodPoMeri() {
  return (
    <ProizvodPoMeriForma/>
  );
}

export default ProizvodPoMeri;