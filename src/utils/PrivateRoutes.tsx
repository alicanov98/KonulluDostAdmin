import {Navigate, Outlet} from "react-router-dom";
const PrivateRoutes =()=>{
    const token = localStorage.getItem('konulludost')
    return(
     token ? <Outlet/> : <Navigate to={'/login'}/>
    )}
export default PrivateRoutes
