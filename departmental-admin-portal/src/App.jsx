import { Navbar, Auth } from './components';
import { Home } from './containers';

const App = () => {

    
    const departmentID = JSON.parse(localStorage.getItem('profile'))?.departmentID || 0;
    console.log(departmentID);

    return (
        <>
            <Navbar />
            { !departmentID ? <Auth /> : <Home departmentID = {departmentID}/>}
        </>
    )   
}

export default App;