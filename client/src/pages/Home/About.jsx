import React from 'react'
import SectionTitle from '../../components/SectionTitle'

const About = () => {
  return (
    <div>
      <SectionTitle title={'About'} />

        <div className="flex w-full items-center gap-5">
            <div className='flex items-center'>
                <img src="https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg" alt="developer" />
            </div>
            <div className='flex flex-col gap-5 w-1/2'>
                <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sequi. Ullam aperiam aut recusandae quaerat ducimus consectetur corporis. Fugit dicta reiciendis qui nostrum cum facere?
                </p>
                <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sequi. Ullam aperiam aut recusandae quaerat ducimus consectetur corporis. Fugit dicta reiciendis qui nostrum cum facere?
                </p>
            </div>
        </div>
    </div>
  )
}

export default About
