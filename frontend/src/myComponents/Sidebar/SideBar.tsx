import Header from "./Header";
import SideBarLinks from "./SideBarLinks";



export default function SideBar(){

    return <div className="p-6  min-w-[300px] max-w-[400px] h-[100vh] bg-slate-100">
        <Header />
        {/* separator */}
        <div className="bg-gray-400 h-[1px] w-full my-6" />
        {/* separator */}
        <SideBarLinks />
    </div>
}