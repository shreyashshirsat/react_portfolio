import React from 'react'
const page = () => {
  return (
    <>
      {/*Body*/}
      <div className='bg-black text-white h-screen fixed w-screen'>
        {/*Navbar*/}
        <div className='flex justify-end px-4 h-16 text-2xl items-center gap-10 fixed top-0 left-0 w-full z-10 bg-black'>
          <a href='#'>Home</a>
          <a href='#'>Projects</a>
          <a href='#'>About</a>
        </div>

        {/*Hero Section*/}
        <div className='hero-section h-screen flex items-center justify-center flex-col gap-5'>
          <h1 className='text-9xl'>REFLEXION</h1>
          <h1 className='text-2xl'>INDEPENDENT 3D ARTIST</h1>
          <h1 className='text-2xl'>TURNING CONCEPTS INTO IMMERSIVE ART</h1>
          <a href='#content'><img src='/assets/arrow-down-long-solid.svg' className='w-28 invert transform transition-transform duration-300 hover:translate-y-[20px]'/></a>
        </div>

        {/*Content*/}
        <div id='content' className='content-section h-screen flex items-center justify-center flex-col gap-5'>
          <h1 className='text-9xl'>CONTENT</h1>
          <h1 className='text-2xl'>VIEW MY LATEST PROJECTS</h1>
        </div>

      </div>
    </>
  )
}

export default page