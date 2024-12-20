import { Route, Routes } from "react-router-dom";
import PageTitle from "../general/PageTitle";
import HotelDetails from "./trasnport-details/TrasnportDetails";
import DemoPage from "./trasnport-list/trasnportList";


export default function TrasnportManagement(){
    return <>
        <Routes>
            <Route index element={
                <div className=''>
                    <PageTitle subTitle="manage Trasnports" title="Trasnports List"/>
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