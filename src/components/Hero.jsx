

export default function Hero() {
  return (
    <div>
          <section className='relative w-full flex justify-around '>
          <div className="flex flex-col justify-center items-center m-20 max-w-xl px-6 lg:px-8">
                 
                 <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
                 <p className="italic w-200 mt-6 text-lg leading-8 text-gray-300">
                 We will launch your business into the stratosphere of success! Our expert team will navigate the vast expanse of technology, guiding you through the cosmos of innovation and helping your company reach new frontiers. Let's embark on this stellar journey together and elevate your business to infinity and beyond!.
                 </p>
             
         </div>
            <div className=" flex justify-center">
              <img
                  className='pointer-events-none select-none object-cover w-4/6 m-20 '
                  src='./public/image.png'
                  alt='image' />
            </div>
              
          </section>
      </div>
  )
}
