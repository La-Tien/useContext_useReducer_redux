import { IUser } from '@/interfaces/user';
import React from 'react'

type HelloProps = {
    name: string,
    age: number,
    info: {
        name: string,
        children: IUser[];
    }
}

const Hello = ({name, age, info}: HelloProps) => {
  return (
    <div>
        <h1>Hello: {name}</h1>
        <h2>Age: {age}</h2>
        <ul>
            {info?.children.map((child) =>(
                <h3>{child.name}</h3>
            ))}
            <li></li>
        </ul>
    </div>
  )
}

export default Hello