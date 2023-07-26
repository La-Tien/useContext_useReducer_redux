import React from 'react'

type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string,
  prefix?: React.ReactNode
};

const Input = ({ onChange, placeholder, prefix }: InputProps) => {
  return (
    <div className="flex items-center justify-between space-x-2 border border-red-500 w-full px-2 mr-2">
      {prefix && prefix}
      <input onChange={onChange} placeholder={placeholder} className=" w-full p-2 outline-none" />
    </div>
  )
}

export default Input