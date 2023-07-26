import { useEffect, useState } from 'react'
import { IUser } from '@/interfaces/user'
import './App.css'
import { Button, Form, Hello, Input, List } from './components';
import { ICar } from './interfaces/car';
import Table from './components/Table';
import { instance } from './axios/config';
import { pause } from './utils/pause';
import Counter from './components/Counter';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  // const [info] = useState<{
  //   name: string; children: IUser[]
  // }>({
  //   name: "Tien",
  //   children: [
  //     { id: 1, name: "Ngan" },
  //     { id: 2, name: "Thuy" }
  //   ]
  // })


  // const carsConfigData = [
  //   {
  //     lable: "Name",
  //     key: "name",
  //     render: (item: any) => <span className='uppercase text-red-500'>{item.name}</span>,
  //     header: (item: any) => <span className="text-green-500">{item.lable}</span>
  //   },
  //   {
  //     lable: "Price",
  //     key: "price",
  //     render: (item: any) => <span className='font-bold'>{item.price}</span>
  //   }
  // ]
  //   const postsData = [
  //     { id: 1, title: "Post 1", body: "Post 1 Body", author: "Datlt" },
  //     { id: 2, title: "Post 2", body: "Post 2 Body", author: "KienTT" },
  //     { id: 3, title: "Post 3", body: "Post 3 Body", author: "TungVM" },
  // ];
  // const [cars, setCars] = useState<ICar[]>([])
  // const [isLoading, setIsloading] = useState<boolean>(false)
  // const [error, setError] = useState<null>(null)

  // useEffect(() => {
  //   (async () => {
  //     setIsloading(true)
  //     try {
  //       await pause(1000)
  //       setCars(await instance.get("/cars"))
  //       setIsloading(false)
  //     } catch (error: any) {
  //       setError(error.message)
  //       setIsloading(false)
  //     }
  //   })();
  // }, [])


  // const addCar = (car: ICar) => {
  //   setCars([...cars, car])
  // }
  // const removeCar = (car: ICar) => {
  //   setCars(cars.filter((item) => item.id !== car.id))
  // }
  // const updateCar = (car: ICar) => { }
  // const fetchCar = () => { }


  return (
    <div>
      {/* <Counter /> */}
      <ProductList />
      <hr />
      <h2>List Cart</h2>
      <Cart />
      {/* <Hello name="Tien" age={20} info={info} /> */}
      {/* <div className="w-96 mx-auto border">
        <Form onAdd={addCar} />
        <List cars={cars} onRemove={removeCar} loading={isLoading} /> */}
      {/* <Table data={carsData} config={carsConfigData}/> */}
    </div>
    // </div>
  )
}

export default App

//pnpm i react-icons

// khi theem, xoas phair cos bieu tuong loading thay cho daaus  +