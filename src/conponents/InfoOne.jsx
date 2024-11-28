import React from 'react'

function InfoOne() {
  return (
    <div className='container mx-auto flex items-center py-16'>
      <div className='w-1/2'>
        <img src="https://plus.unsplash.com/premium_photo-1661962473906-c2cbc40fb71d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-auto rounded-lg' />
      </div>
      <div className='w-1/2 px-6'>
        <h2 className='text-3xl font-semibold'>Welcome to Our Website</h2>
      <p className='text-gray-600 mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam obcaecati blanditiis neque error reprehenderit magnam modi, aut architecto dolorum aperiam?</p>
      </div>
    </div>
  )
}

export default InfoOne
