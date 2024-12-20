import { useEffect, useState } from "react"
import { Auberge, columns } from "./columns"
import { DataTable } from "./Table"

function getData():Auberge[]{
  return [
    {
      id: '1',
      name: 'Khaled',
      place: 'Jelfa',
      price: 58994,
      capacity: 47,
      picture: '/src/assets/user.jpg'
    },{
      id: '2',
      name: 'Khaled',
      place: 'Jelfa',
      price: 58994,
      capacity: 47,
      picture: '/src/assets/use2.jpg'
    },{
      id: '3',
      name: 'Khaled',
      place: 'Jelfa',
      price: 58994,
      capacity: 47,
      picture: '/src/assets/user1.jpg'
    }
  ]
}

export default function DemoPage() {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<Auberge[]>([])
    useEffect(()=>{
        const data1 = getData()
        setData(data1)
    },[])

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
