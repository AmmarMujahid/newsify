import React from 'react'

const Button = ({ title, className }) => {
  return (
    <button className={`bg-[#1668E8] text-[#FFF] rounded-[50px] inline-block ${className}`}>{title}</button>
  )
}

export default Button