import { Route, Routes } from "react-router-dom";
import PageTitle from "../general/PageTitle";
import Header from "./Header";
import HotelDetails from "./hostel-details/HostelDetails";
import DemoPage from "./hostel-list/hostelsList";


export default function HostelManagement(){
    return <>
        <Routes>
            <Route index element={
                <div className=''>
                    <PageTitle subTitle="manage Auberges" title="Auberges List"/>
                    <Header/>
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