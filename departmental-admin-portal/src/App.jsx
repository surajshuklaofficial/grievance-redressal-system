import { useState } from 'react';

import { Navbar, SubNavbar, Auth, Sidebar } from './components';
import { Home } from './containers';

const App = () => {

    const [ sidebar, setSidebar] = useState(false);
    
    const [departmentID, setDepartmentID ] = useState(JSON.parse(localStorage.getItem('profile'))?.departmentID || 0);
    const [department, setDepartment] = useState(JSON.parse(localStorage.getItem('profile'))?.department || 'Ministry of Housing and Urban Affairs');

    
    return (
        <section className=''>  
            <div className=''>
                <Navbar setSidebar={setSidebar} department={department}/>
                <SubNavbar setDepartment={setDepartment}/>
                { !departmentID ? <Auth /> : <Home departmentID = {departmentID}/>}
            </div>

            { sidebar && <Sidebar sidebar={sidebar} setSidebar={setSidebar}/> }

        </section>
    )   
}

export default App;