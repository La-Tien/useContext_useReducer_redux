import React from 'react'
import { Button } from '@/components'
import { ICar } from '@/interfaces/car'
import { GoTrash } from 'react-icons/go'

type ItemProps = {
  car: ICar,
  onRemove: (car: ICar) => void
}
const Item = ({ car, onRemove }: ItemProps) => {
  return (
    <li className='flex justify-between items-center p-2 border-b border-red-200'>
      {car.name}{""}
      <Button type="danger" onClick={() => onRemove(car)} icon={<GoTrash />}>  </Button></li>
  )
}

export default Item