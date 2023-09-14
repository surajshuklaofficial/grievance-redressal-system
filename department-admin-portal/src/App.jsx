import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Navbar, SubNavbar, Auth, Sidebar } from './components';
import { Home } from './containers';

const App = () => {

    const [ sidebar, setSidebar] = useState(false);
    
    const [department, setDepartment] = useState(JSON.parse(localStorage.getItem('profile'))?.department || "");

    
    return (
        <section className=''>  
            <div className=''>
                <Navbar setSidebar={setSidebar} department={department}/>
                <SubNavbar setDepartment={setDepartment}/>
                <BrowserRouter>
                    <Routes>

                        <Route path="/auth" element={<Auth />} />
                        <Route path="/dashboard" element={<Home />} />
                        <Route path='*' element={ !department? <Navigate to='/auth' />: <Navigate to='/dashboard' />} />
                    </Routes>
                </BrowserRouter>
            </div>

            { sidebar && <Sidebar sidebar={sidebar} setSidebar={setSidebar}/> }
            
        </section>
    )   
}

export default App;