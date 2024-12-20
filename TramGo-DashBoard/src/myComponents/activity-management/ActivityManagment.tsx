import { Route, Routes } from "react-router-dom";
import PageTitle from "../general/PageTitle";
import ActivityDetails from "./activity-details/activityDetails";
import DemoPage from "./activities-list/activitiesList";


export default function ActivityManagement(){
    return <>
        <Routes>
            <Route index element={
                <div className=''>
                    <PageTitle subTitle="manage users" title="Activities List"/>
                    <DemoPage />
                </div>
            }/>
            <Route path="user-details/:id" element={
                <div className=''>
                    <PageTitle title="User Details"/>
                    <ActivityDetails />
                </div>
            }/>
            
        </Routes>
    </>
}