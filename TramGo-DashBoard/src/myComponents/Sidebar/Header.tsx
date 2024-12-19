import { colors } from "@/utils/colors";




export default function Header(){

    return <div className="flex gap-4 items-start ">
        <div className="w-14 h-14 rounded-full bg-blue-500 flex justify-center items-center">
            <img src="/src/assets/tramway.png" alt="" className="w-10" />
        </div>
            
        <div className="">
            <h1 className={`font-bold text-2xl text-[${colors.main}]`}>Tram<span className='text-blue-600'>Go</span></h1>
            <h3 className={`text-sm`}>Buy Tickets without limits</h3>
        </div>
    </div>
}