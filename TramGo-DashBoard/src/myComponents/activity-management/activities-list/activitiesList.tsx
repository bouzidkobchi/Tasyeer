import { useEffect, useState } from "react"
import { Activity, columns } from "./columns"
import { DataTable } from "./Table"

function getData():Activity[]{
  return [

  ]
}

export default function DemoPage() {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<Activity[]>([])
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
