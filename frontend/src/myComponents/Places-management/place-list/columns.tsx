
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
    header: "Id",
  },
  {
    accessorKey: "pictures",
    header: "IMAGE",
    cell:({row})=>{
      return <div>
        <img src={import.meta.env.VITE_SERVER_URL + row.getValue('pictures')[0]?.url} alt="" className="object-cover bg-blue-400 w-10 h-10 rounded-xl" />
      </div>
    }
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "place",
    header: "Place",
  },
  {
    header:'Action',
    cell:()=><ActionCell />
  }
]
