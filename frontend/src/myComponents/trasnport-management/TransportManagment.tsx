import { Route, Routes } from "react-router-dom";
import PageTitle from "../general/PageTitle";
import HotelDetails from "./trasnport-details/TrasnportDetails";
import DemoPage from "./trasnport-list/trasnportList";
import Header from "./Header";


export default function TransportManagement(){
    return <>
        <Routes>
            <Route index element={
                <div className=''>
                    <PageTitle subTitle="manage Trasnports" title="Transport List"/>
                    <Header />
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