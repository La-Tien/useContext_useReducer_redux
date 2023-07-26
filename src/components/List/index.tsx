import { ICar } from '@/interfaces/car'
import React from 'react'
import { Item } from '..'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

type ListProps = {
  cars: ICar[],
  onRemove: (car: ICar) => void,
  loading?: boolean
}

const List = ({ cars, onRemove, loading }: ListProps) => {
  return (
    <div>
      {loading ? (
          <SkeletonTheme baseColor='#202020' highlightColor='#444'>
            <Skeleton count={5} height={35} />
          </SkeletonTheme>) : (
      <ul>    
          { cars?.map((car: ICar) => (
            <Item key={car.id} car={car} onRemove={onRemove} />
          ))}
      </ul>
      )}
    </div >
  );
}

export default List