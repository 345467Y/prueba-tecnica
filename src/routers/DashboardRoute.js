import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Add from '../components/Add';
import AddMonitor from '../components/AddMonitor';
import List from '../components/List';
import ListMonitores from '../components/ListMonitores';
import NavBars from '../components/NavBars';
import Home from '../components/Home';
import TraerAPi from '../components/TraerAPi';


const DashboardRoute = () => {
    return (
       
             <>
            <NavBars/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/add" element={<Add/>} />
                    <Route path="/addMonitor" element={<AddMonitor/>} />
                    <Route path="/list" element={<List/>} />
                    <Route path="/listMonitores" element={<ListMonitores/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/cargarApi" element={<TraerAPi/>} />
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </>
    
    );
};

export default DashboardRoute;