import React from 'react'
import { fixedLink } from '../constants'
const Volunteers = () => {
  return (
    <div>
      <div>
        <h3 className='text-black text-center text-2xl font-bold'>
Join our  volunteer Team
</h3>
<div className='flex justify-center flex-col gap-5 bg-green-500'>
<details>
  <summary className='text-center'>Designer</summary>
  <div className='flex flex-col'>
  <p className='relative m-auto'>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions,<br/>
   international pavilions, award-winning fireworks and seasonal special events.</p>
   <a href='' className=' bg-white p-3 text-center w-44
            rounded-md font-semibold leading-relaxed
            hover:bg-blue-300 hover:text-white bottom-4 mt-10 relative m-auto'>
            {fixedLink.text}
          </a>
  </div>
</details>
<details>
  <summary className='text-center'>Designer</summary>
  <div className='flex flex-col'>
  <p className='relative m-auto'>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions,<br/>
   international pavilions, award-winning fireworks and seasonal special events.</p>
   <a href='' className=' bg-white p-3 text-center w-44
           relative rounded-md font-semibold leading-relaxed
            hover:bg-blue-300 hover:text-white bottom-4 mt-10 m-auto'>
            {fixedLink.text}
          </a>
  </div>
</details>
<details>
  <summary className='text-center'>Designer</summary>
  <div className='flex flex-col'>
  <p className='relative m-auto'>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions,<br/>
   international pavilions, award-winning fireworks and seasonal special events.</p>
   <a href='' className=' bg-white p-3 text-center w-44
           relative rounded-md font-semibold leading-relaxed
            hover:bg-blue-300 hover:text-white bottom-4 mt-10 m-auto'>
            {fixedLink.text}
          </a>
  </div>
</details>
<details>
  <summary className='text-center'>Designer</summary>
  <div className='flex flex-col'>
  <p className='relative m-auto'>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions,<br/>
   international pavilions, award-winning fireworks and seasonal special events.</p>
   <a href='' className=' bg-white p-3 text-center w-44
           relative rounded-md font-semibold leading-relaxed
            hover:bg-blue-300 hover:text-white bottom-4 mt-10 m-auto'>
            {fixedLink.text}
          </a>
  </div>
</details>
</div>
      </div>
    </div>
  )
}

export default Volunteers