import { Route, Routes } from "react-router-dom";
import PageTitle from "../general/PageTitle";
import UserDetails from "./user details/UserDetails";
import DemoPage from "./users list/UsersList";


export default function UserManagement(){
    return <>
        <Routes>
            <Route index element={
                <div className=''>
                    <PageTitle subTitle="manage users" title="Users List"/>
                    <DemoPage />
                </div>
            }/>
            <Route path="user-details/:id" element={
                <div className=''>
                    <PageTitle title="User Details"/>
                    <UserDetails />
                </div>
            }/>
            
        </Routes>
    </>
}