
import { ColumnDef } from "@tanstack/react-table"
import { ActionCell } from "./ActionCell"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Place = {
  id: string
  title: string
  image: string
  location: string
  category: string
}

export const columns: ColumnDef<Place>[] = [
  {
    accessorKey: "id",
    header: "#Id",
  },
  {
    accessorKey: "image",
    header: "IMAGE",
    cell:({row})=>{
      return <div className="">
        <img src={row.getValue('image')} alt="" className="object-cover bg-blue-400 w-10 h-10 rounded-xl" />
      </div>
    }
  },
  {
    accessorKey: "title",
    header: "Title",
    cell:({row})=>{
      return <div className="">
        <h1 className='font-medium text-gray-600'>{row.getValue('title')}</h1>
      </div>
    }
  },
  {
    accessorKey: "category",
    header: "Category",
    cell:({row})=>{
      return <div className="">
        <h1 className='font-medium text-center rounded-xl p-2  w-fit px-3 border border-purple bg-purple-100 text-purple-600 '>{row.getValue('category')}</h1>
      </div>
    }
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    header:'Action',
    cell:()=><ActionCell />
  }
]
