
import { ColumnDef } from "@tanstack/react-table"
import { ActionCell } from "./ActionCell"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Transport = {
  id: string
  type:string
  startTime:string
  startLocation:string  
  arrivalLocation:string
}

export const columns: ColumnDef<Transport>[] = [
  
  {
    accessorKey: "type",
    header: "Type",
    cell:({row})=>{
      const type = row.getValue('type')
      return <div className="">
        <h1 className={`font-medium text-center p-1 w-fit px-2 rounded-xl text-gray-600 border ${type=='train' ? 'border-green-600 bg-green-100 text-green-600 font-medium' : 'border-blue-600 bg-blue-100 text-blue-600 font-medium'}`}>{row.getValue('type')}</h1>
      </div>
    }
  },
  {
    accessorKey: "startLocation",
    header: "Start Location",
  },
  {
    accessorKey: "arrivalLocation",
    header: "Arrival Location",
  },
  {
    accessorKey: "startTime",
    header: "Start ",
  },
  {
    accessorKey: "duration",
    header: "Duration",
  },
  // {
  //   accessorKey: "cartStatus",
  //   header: "Cart Status",
  //   cell:({row})=>{
  //     const status = row.getValue('cartStatus')
  //     const style = status==='Activated' ? 
  //           'bg-green-100 text-green-500 border-green-300' :
  //           status==='Disactivated' 
  //           ? 'bg-orange-200 text-orange-500 border-orange-300'
  //           : 'bg-red-200 text-red-500 border-red-300'
  //     return <div className={`font-medium ${style}  rounded-xl w-fit p-1 px-2  border`}>
  //       {row.getValue('cartStatus')}
  //     </div>
  //   }
  // },
  {
    header:'Action',
    cell:()=><ActionCell />
  }
]
