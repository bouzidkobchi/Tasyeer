import { Route, Routes } from "react-router-dom";
import PageTitle from "../general/PageTitle";
import HotelDetails from "./hostel-details/HostelDetails";
import DemoPage from "./hostel-list/hostelsList";


export default function HostelManagement(){
    return <>
        <Routes>
            <Route index element={
                <div className=''>
                    <PageTitle subTitle="manage Hostels" title="Hostels List"/>
                    <DemoPage />
                </div>
            }/>
            <Route path="user-details/:id" element={
                <div className=''>
                    <PageTitle title="User Details"/>
                    <HotelDetails />
                </div>
            }/>
            
        </Routes>
    </>
}