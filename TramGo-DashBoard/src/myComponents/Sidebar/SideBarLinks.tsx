import { CalendarFold, Users, NotepadText, Grid2x2Check } from "lucide-react";
import SideBarLink from "./SideBarLink";



export default function SideBarLinks(){
    



    return <div className="flex flex-col gap-2">
        <SideBarLink to='/app/dashboard' title="DashBoard" icon={<Grid2x2Check size={'20'}/>}/>
        <SideBarLink to='/app/users-management' title="Users Management" icon={<Users size={'20'}/>}/>
        {/* <SideBarLink to='/app/demands-management' title="Demands Management" icon={<BookUser size={20} />}/> */}
        <SideBarLink to='/app/events-management' title="Events Management" icon={<CalendarFold size={20}/>}/>
        <SideBarLink to='/app/subscriptions-management' title="Subscriptions Management" icon={<NotepadText size={20} />}/>
        
    </div>
}