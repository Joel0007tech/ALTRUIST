import React from 'react'
import { fixedLink } from '../constants'
// import './Style.css'

const Volunteers = () => {
  const Font = {
    fontFamily: 'Roboto, sans-serif',
  };
  return (
    <div>
      <div className='vol'>
      <div className='pt-10'>
<div className='flex justify-center flex-col gap-5 bg-blue-900 w-[1200px] relative m-auto p-10 pl-18 pr-18 rounded-t-md sm:w-auto sm:flex-col'>
  <div>
  <h3 className='text-white text-center text-2xl font-bold' style={Font}>
Join our  volunteer Team
</h3>
  </div>
  <div>
    
  </div>
<details>
  <summary className='text-center text-white text-2xl font-bold sm:text-xl' style={Font}>Designers</summary>
  <div className='flex flex-col'>
  <p className='relative m-auto text-white text-xl text-center' style={Font}>Individuals who would want to use their skills to create<br/>
   appealing graphics for promotional materials, social media,<br/>
    and events to enhance the organization's visual identity..</p>
   <a href='https://docs.google.com/forms/d/e/1FAIpQLScQEvqNr5bSxUEEFvvOEOLAR9_sC_n62poUzcMBKm3PI2M_XA/viewform?usp=pp_url&usp=embed_facebook' className=' bg-white p-3 text-center w-44
            rounded-md font-semibold leading-relaxed
            hover:bg-blue-300 hover:text-white bottom-4 mt-10 relative m-auto' style={Font}>
            {fixedLink.vol}
          </a>
  </div>
</details>
<details>
  <summary className='text-center text-white text-2xl font-bold sm:text-xl' style={Font}>Social Media Manager</summary>
  <div className='flex flex-col'>
  <p className='relative m-auto text-white text-xl text-center' style={Font}>Volunteers who are willing to develop content,<br/>
   engage with the audience, run campaigns, and maintain<br/>
    a positive online presence for the organization.</p>
   <a href='https://docs.google.com/forms/d/e/1FAIpQLScQEvqNr5bSxUEEFvvOEOLAR9_sC_n62poUzcMBKm3PI2M_XA/viewform?usp=pp_url&usp=embed_facebook' className=' bg-white p-3 text-center w-44
           relative rounded-md font-semibold leading-relaxed
            hover:bg-blue-300 hover:text-white bottom-4 mt-10 m-auto' style={Font}>
            {fixedLink.vol}
          </a>
  </div>
</details>
<details>
  <summary className='text-center text-white text-2xl font-bold sm:text-xl' style={Font}>Content Creator</summary>
  <div className='flex flex-col'>
  <p className='relative m-auto text-white text-xl text-center' style={Font}>volunteers with strong writing skills who<br/>
   can craft compelling content like blog posts,<br/>
    articles, and newsletters to effectively communicate<br/>
     the organization's mission and activities
</p>
   <a href='https://docs.google.com/forms/d/e/1FAIpQLScQEvqNr5bSxUEEFvvOEOLAR9_sC_n62poUzcMBKm3PI2M_XA/viewform?usp=pp_url&usp=embed_facebook' className=' bg-white p-3 text-center w-44
           relative rounded-md font-semibold leading-relaxed
            hover:bg-blue-300 hover:text-white bottom-4 mt-10 m-auto' style={Font}>
            {fixedLink.vol}
          </a>
  </div>
</details>
<details>
  <summary className='text-center text-white text-2xl font-bold sm:text-xl' style={Font}>Project/Program Assistant</summary>
  <div className='flex flex-col'>
  <p className='relative m-auto text-white text-xl text-center' style={Font}>volunteers who would love to support project<br/>
   or program management, help with scheduling,<br/>
    documenting, and communication to ensure the<br/> smooth execution of initiatives.</p>
   <a href='https://docs.google.com/forms/d/e/1FAIpQLScQEvqNr5bSxUEEFvvOEOLAR9_sC_n62poUzcMBKm3PI2M_XA/viewform?usp=pp_url&usp=embed_facebook' className=' bg-white p-3 text-center w-44
           relative rounded-md font-semibold leading-relaxed
            hover:bg-blue-300 hover:text-white bottom-4 mt-10 m-auto' style={Font}>
            {fixedLink.vol}
          </a>
  </div>
</details>
</div>
      </div>
      </div>

    </div>
  )
}

export default Volunteers