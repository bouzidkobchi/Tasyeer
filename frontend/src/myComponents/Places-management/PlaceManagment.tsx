import { Route, Routes } from "react-router-dom";
import PageTitle from "../general/PageTitle";
import HotelDetails from "./place-details/PlaceDetails";
import DemoPage from "./place-list/placeList";
import Header from "./Header";


export default function PlaceManagement(){
    return <>
        <Routes>
            <Route index element={
                <div className=''>
                    <PageTitle subTitle="manage Places" title="Places List"/>
                    <Header />
                    <DemoPage />
                </div>
            }/>
            <Route path="user-details/:id" element={
                <div className=''>
                    <PageTitle title="Place  Details"/>
                    <HotelDetails />
                </div>
            }/>
            
        </Routes>
    </>
}