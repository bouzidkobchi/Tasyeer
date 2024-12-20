import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { colors } from "@/utils/colors"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { Bus, TrainFront } from "lucide-react";
import { Transport } from "./trasnport-list/columns";

export default function Header({
    setData,
}: {
    setData: React.Dispatch<React.SetStateAction<Transport[]>>;
}) {

    const [transportType, setTransportType] = useState<string>('bus')

    return <div className="flex justify-end mb-6">
        <Button className={`text-green font-medium dbg-[${colors.main}] text-white py-0  flex  rounded-lg  px-3 `}>
            <Dialog>
                <DialogTrigger>Add</DialogTrigger>
                <DialogContent className="min-w-fit">
                    <DialogHeader>
                        <DialogTitle className={`text-[${colors.main}] mb-14 text-3xl`}>Add New Transport </DialogTitle>
                        <div style={{marginBottom:'60px'}} className="flex gap-10 justify-between items-star mb-10">
                            
                            <div className="w-full">
                                <div className="flex flex-col gap-2 justify-between mb-4 min-w-[300px]">
                                    <label htmlFor="title" className="min-w-fit font-medium">Title</label>
                                    <Input  id="title" type="text" className="h-fit w-full"/>
                                </div>
                                <div className="flex flex-col gap-2 justify-between mb-4 min-w-[300px]">
                                    <label className="min-w-fit font-medium">Type</label>
                                    <div className="flex gap-2">
                                        <div onClick={()=>setTransportType('bus')} className={`cursor-pointer ${transportType==='bus' ? 'border-blue-500 outline-blue-500 outline-3' :'outline-none'} rounded-xl flex-1 border flex gap-2 justify-center p-4`}>
                                            <Bus />
                                            <span className="text-lg ">Bus</span>
                                        </div>
                                        <div onClick={()=>setTransportType('train')} className={`cursor-pointer ${transportType==='train' ? 'border-blue-500 outline-blue-500 outline-3' :'outline-none'} rounded-xl flex-1 border flex gap-2 justify-center p-4`}>
                                            <TrainFront />
                                            <span className="text-lg ">Train</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="">
                                    <label htmlFor="type" className="min-w-fit font-medium mb-2 block">Location</label>
                                    <div className="flex gap-2"> 
                                        <div className="flex flex-col gap-2 justify-between mb-4 min-w-[300px]">
                                            <Input placeholder="start location" type="text" className="h-fit w-full"/>
                                        </div>
                                        <div className="flex flex-col gap-2 justify-between mb-4 min-w-[300px]">
                                            <Input placeholder="arrival location" type="text" className="h-fit w-full"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <label htmlFor="type" className="min-w-fit font-medium mb-2 block">Time</label>
                                    <div className="flex gap-2"> 
                                        <div className="flex flex-col gap-2 justify-between mb-4 min-w-[300px]">
                                            <Input placeholder="start" type="time" className="h-fit w-full"/>
                                        </div>
                                        <div className="flex flex-col gap-2 justify-between mb-4 min-w-[300px]">
                                            <Input placeholder="arrival in" type="text" className="h-fit w-full"/>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <div className="">
                                    <label htmlFor="" className="flex gap-3 items-center font-medium">
                                        Visibility 
                                        <Switch />
                                    </label>
                                </div> */}
                            </div>
                        </div>
                        <Button className="mt-10 block">Create</Button>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </Button>
    </div>
}