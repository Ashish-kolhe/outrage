import React from 'react'

const Features = () => {
  return (
    <div className='p-5 lg:p-10 bg-white'>
        <div className='text-center p-2 pb-16 lg:p-10'>
            <div className=' flex justify-center pb-4'>
            <p className='border px-2 w-fit rounded-2xl text-xs '> Features </p>
            </div>
<h1 className=' text-3xl lg:text-5xl font-bold '>Everything you need to succeed</h1>
<p className='p-2 text-gray-500 text-sm lg:text-md'>Our Platfrom has all the courses to prepare you for real world, with interships suitable for your skills.</p>
        </div>
        <div className="flex w-full flex-col lg:flex-row gap-5">
  <div className="card bg-white border hover:shadow-sm border-neutral-200 rounded-box grid h-32 grow place-items-center px-5">
  <div className="flex items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg><div className="text-2xl font-semibold leading-none tracking-tight">Real-World Experience </div>
  
  </div>
  <p className='max-w-sm text-gray-500 text-sm'>Project-based courses with practical assignments, Industry-relevant skills for job readiness</p>
  </div>
  
  <div className="card bg-white border hover:shadow-sm border-neutral-200 rounded-box grid h-32 grow place-items-center px-5">
  <div className="flex items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg><div className="text-2xl font-semibold leading-none tracking-tight">Affordability </div></div>
  <p className='max-w-sm text-gray-500 text-sm'>Budget-friendly courses & free internships,Pay-per-course model, no hidden costs</p>
  </div>
</div>
<div className="flex w-full flex-col lg:flex-row py-10 gap-5">
  <div className="card bg-white border hover:shadow-sm border-neutral-200 rounded-box grid h-32 grow place-items-center px-5">
  <div className="flex items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open-check"><path d="M12 21V7"/><path d="m16 12 2 2 4-4"/><path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"/></svg><div className="text-2xl font-semibold leading-none tracking-tight">Flexible Learning </div></div>
  <p className='max-w-sm text-gray-500 text-sm'>No strict deadlines – learn at your convenience, Mobile-friendly platform for on-the-go learning</p>
  </div>
  
  <div className="card bg-white border hover:shadow-sm border-neutral-200 rounded-box grid h-32 grow place-items-center px-5">
  <div className="flex items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg><div className="text-2xl font-semibold leading-none tracking-tight">Certification & Career Growth </div></div>
  <p className='max-w-sm text-gray-500 text-sm '>Earn certificates for completed courses & internships, Build an impressive digital portfolio</p>
  </div>
</div>
    </div>
  )
}

export default Features
