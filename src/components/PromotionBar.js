import React from 'react'
import Button from './button'

const PromotionBar = () => {
  return (
    <section className='bg-secondaryColor py-[11px] flex gap-[16px] justify-center items-center'>
      <Button title="New" className="px-[23px] py-[7px]" />
      <p className='text-[14px] font-medium'>Using Teamly is a manifesto in itself. It is simply the best choice for your email marketing</p>
    </section>
  )
}

export default PromotionBar
