import { Routes, Route, Navigate } from 'react-router-dom';
import SideBar from "./Sidebar";
import UserManagement from '../pages/UserManagement';
import Header from './Header';
import UserDetail from '../pages/UserDetail';


const Hero = () => {
    return (
        <div className="flex flex-row h-screen">

            <div className="h-full w-[15%]">
                <SideBar />
            </div>

            <div className="h-full flex flex-col w-[85%] overflow-y-auto">
                <Header />
                <div className='flex-1 overflow-y-auto p-5 bg-[#F0F1F2]'>
                    <Routes>
                        <Route path="/" element={<Navigate to="/user-management" />} />
                        <Route path='/user-management' element={<UserManagement />} />
                        <Route path="/user-management/:id" element={<UserDetail />} />
                    </Routes>

                </div>
            </div>
        </div>
    )
}
export default Hero;