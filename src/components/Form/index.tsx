import React, { useState } from 'react'
import { Button, Input } from '..'
import { ICar } from '@/interfaces/car'
import { IoMdAdd } from 'react-icons/io'
import { BiSolidUser } from 'react-icons/bi'

type FormProps = {
    onAdd: (car: ICar) => void
}

const Form = ({ onAdd }: FormProps) => {

    const [valueInput, setValueInput] = useState<string>("")
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (valueInput !== "") {
            onAdd({
                id: Math.floor(Math.random() * 1000),
                name: valueInput
            })
            const form = e.target as HTMLFormElement
            form.reset();
            setValueInput("")
        }
    }
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value)
    }
    return (
        <form onSubmit={onSubmit} action="" className="border-b mb-3 flex p-3 justify-between items-center">
            <Input placeholder="Car name" onChange={onHandleChange} prefix={<BiSolidUser />} />
            <Button type="primary" icon={<IoMdAdd />} ></Button>
        </form>
    )
}

export default Form