import { useEffect, useState } from "react"
import { Place, columns } from "./columns"
import { DataTable } from "./Table"

function getData():Place[]{
  return [
    {
      id: 'fjkdsl',
      title: 'Khaled',
      image:'/src/assets/user.jpg',
      location:"hda el dar",
      category:'gardient'
    },
  ]
}

export default function DemoPage() {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<Place[]>([])
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