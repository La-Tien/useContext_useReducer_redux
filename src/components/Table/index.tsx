import { ICar } from '@/interfaces/car'
import React from 'react'

type TableProps = {
    data: any[],
    config: any[],

}

const Table = ({ data, config }: TableProps) => {
    const renderHeaders = config.map((column) => {
        // if (column.header) {
        //     return <th></th>
        // }
        return <th key={column.key}>{ column.header ? column?.header(column) : column.lable}</th>
    })

    const renderRows = data.map((item) => {
        const renderCell = config.map((column) => {
            return <tr key={item.key}>{column.render ? column.render(item) : item[column.key]}</tr>
        })
        return <tr key={item.id}>column.render{renderCell}</tr>
    })
    return (
        <div>
            <table>
                <thead>
                    <tr>{renderHeaders}</tr>
                </thead>
                <tbody>
                    {renderRows}
                </tbody>
            </table>
        </div>
    )
}

export default Table