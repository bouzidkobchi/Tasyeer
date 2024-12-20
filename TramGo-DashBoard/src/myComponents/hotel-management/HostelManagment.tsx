import { Route, Routes } from "react-router-dom";
import PageTitle from "../general/PageTitle";
import HotelDetails from "./hotel-details/HotelDetails";
import DemoPage from "./hotels-list/hotelsList";


export default function HotelManagement(){
    return <>
        <Routes>
            <Route index element={
                <div className=''>
                    <PageTitle subTitle="manage Hotels" title="Hotels List"/>
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