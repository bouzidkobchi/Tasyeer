import { useEffect, useState } from "react"
import { Hotel, columns } from "./columns"
import { DataTable } from "./Table"

function getData():Hotel[]{
  return [
    {
      id: 'fjkdsl',
      name: 'Khaled',
      webSiteURL: "Activated",
      place: 'johndeo@gmail.com',
      picture: '/src/assets/user.jpg'
    },
    {
      id: 'fjkdsl',
      name: 'Samir',
      webSiteURL: "Blocked",
      place: 'samir@gmail.com',
      picture:'/src/assets/use2.jpg'
    },
    {
      id: 'fjkdsl',
      name: 'Imad',
      webSiteURL: "Disactivated",
      place: 'ima@gmail.com',
      picture:'/src/assets/user1.jpg'
    },
  ]
}

export default function DemoPage() {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<Hotel[]>([])
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
