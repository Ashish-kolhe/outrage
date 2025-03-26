import React from 'react'

const Courses = () => {
    return (
        <div className='p-5 lg:p-10 bg-white text-black'>
            <div className='text-center p-2 pb-5 lg:p-10'>
            <div className=' flex justify-center pb-4'>
            <p className='border px-2 w-fit rounded-2xl text-xs border-black text-black'> Best for you </p>
            </div>
                <h1 className=' text-3xl lg:text-5xl font-bold '>Featured Courses</h1>
                <p className='p-2 text-gray-500 text-sm lg:text-md'>Trending & High-Demand Courses to Supercharge Your Career!</p>
            </div>
            <div className="flex w-full flex-col lg:flex-row gap-5">
                <div className="card bg-white border border-neutral-200 hover:shadow-sm text-black w-fit ">
                    <div className="card-body">
                        <h2 className="card-title">UI/UX Design Mastery <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path fill="#000000" d="M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"/></svg></h2>
                        <p className='text-gray-500'>Learn Figma, Adobe XD, and user-centered design principles.</p>
                     
                        <div className="card-actions justify-end">
                
                            <button className="btn btn-outline">Enroll</button>
                        </div>
                        <p className='justify-start text-gray-500'>Duration: 2 Months</p>
                    </div>
                </div>

                <div className="card bg-white border border-neutral-200 hover:shadow-sm text-black w-fit ">
                    <div className="card-body">
                        <h2 className="card-title">Data Science & Machine Learning  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><path fill="#000000" d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm144 4c-24.3 0-44 19.7-44 44l0 48c0 24.3 19.7 44 44 44l32 0c24.3 0 44-19.7 44-44l0-48c0-24.3-19.7-44-44-44l-32 0zm-4 44c0-2.2 1.8-4 4-4l32 0c2.2 0 4 1.8 4 4l0 48c0 2.2-1.8 4-4 4l-32 0c-2.2 0-4-1.8-4-4l0-48zm140-44c-11 0-20 9-20 20c0 9.7 6.9 17.7 16 19.6l0 76.4c0 11 9 20 20 20s20-9 20-20l0-96c0-11-9-20-20-20l-16 0zM132 296c0 9.7 6.9 17.7 16 19.6l0 76.4c0 11 9 20 20 20s20-9 20-20l0-96c0-11-9-20-20-20l-16 0c-11 0-20 9-20 20zm96 24l0 48c0 24.3 19.7 44 44 44l32 0c24.3 0 44-19.7 44-44l0-48c0-24.3-19.7-44-44-44l-32 0c-24.3 0-44 19.7-44 44zm44-4l32 0c2.2 0 4 1.8 4 4l0 48c0 2.2-1.8 4-4 4l-32 0c-2.2 0-4-1.8-4-4l0-48c0-2.2 1.8-4 4-4z"/></svg></h2>
                        <p className='text-gray-500'>Master Python, Pandas, NumPy, and ML algorithms with real-world projects.</p>
                     
                        <div className="card-actions justify-end">
                
                            <button className="btn btn-outline">Enroll</button>
                        </div>
                        <p className='justify-start text-gray-500'>Duration: 4 Months</p>
                    </div>
                </div>
              
            </div>
            <div className="flex w-full flex-col lg:flex-row gap-5 pt-5">
                <div className="card bg-white border border-neutral-200 hover:shadow-sm text-black w-full ">
                    <div className="card-body">
                        <h2 className="card-title">Full-Stack Web Development <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path fill="#000000" d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg></h2>
                        <p className='text-gray-500'>Learn HTML, CSS, JavaScript, React, and Node.js to build modern web apps.</p>
                     
                        <div className="card-actions justify-end">
                
                            <button className="btn btn-outline">Enroll</button>
                        </div>
                        <p className='justify-start text-gray-500'>Duration: 3 Months</p>
                    </div>
                </div>

          
              
            </div>
            <div className="flex w-full flex-col lg:flex-row gap-5 pt-5">
            <div className="card bg-white border border-neutral-200 hover:shadow-sm text-black w-fit ">
                    <div className="card-body">
                        <h2 className="card-title">Digital Marketing & SEO  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="27" viewBox="0 0 576 512"><path fill="#000000" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM229.5 173.3l72 144c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7L253.2 328l-90.3 0-5.4 10.7c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l72-144c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3zM208 237.7L186.8 280l42.3 0L208 237.7zM392 256a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm24-43.9l0-28.1c0-13.3 10.7-24 24-24s24 10.7 24 24l0 96 0 48c0 13.3-10.7 24-24 24c-6.6 0-12.6-2.7-17-7c-9.4 4.5-19.9 7-31 7c-39.8 0-72-32.2-72-72s32.2-72 72-72c8.4 0 16.5 1.4 24 4.1z"/></svg></h2>
                        <p className='text-gray-500'>Master social media marketing, Google Ads, and SEO strategies.</p>
                     
                        <div className="card-actions justify-end">
                
                            <button className="btn btn-outline">Enroll</button>
                        </div>
                        <p className='justify-start text-gray-500'>Duration: 2.5 Months</p>
                    </div>
                </div>

                <div className="card bg-white border border-neutral-200 hover:shadow-sm text-black w-fit ">
                    <div className="card-body">
                        <h2 className="card-title">Cybersecurity & Ethical Hacking  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><path fill="#1e3050" d="M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48l-59.9 0C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4l-59.9 0c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208l-12.4 0c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2L168 224c-22.1 0-40-17.9-40-40l0-14.4c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4l0 14.4c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"/></svg></h2>
                        <p className='text-gray-500'>Learn penetration testing, network security, and ethical hacking techniques.</p>
                     
                        <div className="card-actions justify-end">
                
                            <button className="btn btn-outline">Enroll</button>
                        </div>
                        <p className='justify-start text-gray-500'>Duration: 3 Months</p>
                    </div>
                </div>
                <div className="card bg-white border border-neutral-200 hover:shadow-sm text-black w-fit ">
                    <div className="card-body">
                        <h2 className="card-title">Mobile App Development <svg xmlns="http://www.w3.org/2000/svg" height="24" width="18" viewBox="0 0 384 512"><path fill="#1e3050" d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z"/></svg></h2>
                        <p className='text-gray-500'>Build cross-platform mobile apps with Flutter & React Native from scratch.</p>
                     
                        <div className="card-actions justify-end">
                
                            <button className="btn btn-outline">Enroll</button>
                        </div>
                        <p className='justify-start text-gray-500'>Duration: 3 Months</p>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Courses