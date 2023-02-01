import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <section className='flex flex-col items-center justify-center my-16'>
        <hr className='w-full bg-black'></hr>
        <div className='text-sm text-slate-600 my-8'>
            Powered By<Link className='ml-1 hover:text-indigo-500' href="https://softleafapplications.com">SoftleafApplications</Link> 
        </div>


    </section>
  )
}

export default Footer