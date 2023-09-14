import { useState } from 'react';

import { Navbar, Auth, Sidebar } from './components';
import { Home } from './containers';

const App = () => {

    const [ sidebar, setSidebar] = useState(false);
    
    const departmentID = JSON.parse(localStorage.getItem('profile'))?.departmentID || 0;
    
    return (
        <section className=''>  
            <div className=''>
                <Navbar setSidebar={setSidebar} />
                { !departmentID ? <Auth /> : <Home departmentID = {departmentID}/>}
            </div>

            { sidebar && <Sidebar sidebar={sidebar} setSidebar={setSidebar}/> }

        </section>
    )   
}

export default App;