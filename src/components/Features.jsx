import React from 'react';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'


const features = [
  {
    name: 'Custom Software Development.',
    description:
    'Elevate your digital presence with our custom software development services. From intuitive web applications to scalable mobile solutions, we design and develop tailored software solutions that drive efficiency, enhance user experiences, and accelerate business growth'
      ,
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Cybersecurity Solutions.',
    description: 'Protect your digital assets with our comprehensive cybersecurity solutions. From threat assessments to proactive monitoring and incident response, we safeguard your business from cyber threats and ensure compliance with industry regulations.',
    icon: LockClosedIcon,
  },
  {
    name: 'AI and Machine Learning.',
    description: 'Unlock the power of data with our AI and machine learning solutions. From predictive analytics to intelligent automation, we harness the latest advancements in artificial intelligence to drive data-driven insights and optimize business processes..',
    icon: ServerIcon,
  },
]


export default function Features() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
             
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Expertise</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              At StellarTech Consulting, we pride ourselves on our comprehensive range of tech consulting services designed to empower businesses and drive innovation. With our team of experienced professionals and cutting-edge solutions, we deliver tailored strategies and implementations to help you stay ahead in today's rapidly evolving digital landscape..
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
