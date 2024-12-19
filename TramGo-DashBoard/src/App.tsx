
import SideBar from "./myComponents/Sidebar/SideBar"
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom"
import UserManagement from "./myComponents/user-management/UserManagment"
import SubscriptionsManagement from "./myComponents/subscriptions management/SubscriptionsManagement"
import { Login } from "./myComponents/auth/Login"
import DashBoard from "./myComponents/Dashboard/index.tsx"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import EventsManagement from "./myComponents/events management/EventsManagement.tsx"


function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="app" element={<div className='flex'>
            <SideBar />
            <div className="flex-1 p-6">
              <Outlet />
            </div>
          </div>}>
              <Route path="dashboard" element={<DashBoard />}/>
              <Route path="users-management/*" element={<UserManagement />}/>
              {/* <Route path="demands-management" element={<Button>Hello2</Button>}/> */}
              <Route path="events-management" element={<EventsManagement />}/>
              <Route path="subscriptions-management" element={<SubscriptionsManagement />}/>

          </Route>
          <Route path='/auth/login' element={<Login />} />
          <Route path='*' element={<Navigate to='auth/login'/>} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  )
}

export default App
