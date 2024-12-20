import { useEffect, useState } from "react"
import { Transport, columns } from "./columns"
import { DataTable } from "./Table"

function getData():Transport[]{
  return [
    {
      id: 'sdlakfjs',
      type:"train",
      startTime:'14:40',
      startLocation:'deles',  
      arrivalLocation:'corso'
    },
  ]
}

export default function DemoPage() {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<Transport[]>([])
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
