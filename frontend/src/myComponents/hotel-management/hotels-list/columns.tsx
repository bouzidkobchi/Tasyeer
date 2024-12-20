
import { ColumnDef } from "@tanstack/react-table"
import { ActionCell } from "./ActionCell"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Hotel = {
  id: string
  name: string
  webSiteURL: string
  place: string
  picture: string
}

export const columns: ColumnDef<Hotel>[] = [
  {
    accessorKey: "picture",
    header: "IMAGE",
    cell:({row})=>{
      return <div className="">
        <img src={row.getValue('picture')} alt="" className="object-cover bg-blue-400 w-10 h-10 rounded-xl" />
      </div>
    }
  },
  {
    accessorKey: "name",
    header: "Name",
    cell:({row})=>{
      return <div className="">
        <h1 className='font-medium text-gray-600'>{row.getValue('name')}</h1>
      </div>
    }
  },
  {
    accessorKey: "webSiteURL",
    header: "WebSiteURL",
  },
  {
    accessorKey: "place",
    header: "Place",
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
    header:'',
    id:'action',
    cell:({row})=><ActionCell plan={row} />
  }
]
