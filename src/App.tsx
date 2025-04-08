import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainLayout from './components/MainLayout.tsx';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Counters from './pages/Counters';
import {JSX} from "react";

export default function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="settings" element={<Settings/>}/>
                    <Route path="counters" element={<Counters/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}