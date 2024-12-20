import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { colors } from "@/utils/colors"
import { useNavigate } from "react-router-dom"




export const Login=()=>{
    const navigate = useNavigate();
    return <div className="flex justify-center items-center">

        <div className="rounded-xl border p-3 mt-28">
            <h1 className={`text-3xl text-[${colors.main}] text-center my-5 mb-6 font-bold `}>Login</h1>
            <h3 className={`text-lg font-medium text-gray-600 mb-10 text-center`}>Welcome back 👋</h3>
            <div className="grid w-full max-w-sm items-center font-medium gap-1.5 mb-2">
                <label htmlFor="email" className="ml-1">Email</label>
                <Input type="email" id="email" placeholder="Enter your email" className="w-[300px]"/>
            </div>
            <div className="grid w-full max-w-sm items-center font-medium gap-1.5 mb-2">
                <label htmlFor="password" className="ml-1">Password</label>
                <Input type="password" id="password" placeholder="Enter your Password" className="w-[300px]"/>
            </div>
            <Button className="w-full my-4 mb-6 " onClick={()=>navigate('/app/admins-management')}>Login In</Button>
        </div>
    </div>
}