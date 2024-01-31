import React from 'react';

export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:px-8">
      
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
            <p>
              “"Working with StellarTech was an absolute game-changer for our business. Their team's expertise and dedication to our project were truly stellar. They guided us through every step of the process with precision and creativity, helping us reach new heights we never thought possible. If you're looking for a tech consulting partner that's out of this world, look no further than StellarTech."”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-200">Judith Black</div>
              
              <div className="text-gray-600">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
