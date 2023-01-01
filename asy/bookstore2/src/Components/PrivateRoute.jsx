import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children})=>{

    const location = useLocation();
    const isAuthV = useSelector((store)=>store.authReducer.isAuth);

    if(!isAuthV){
        return <Navigate to={'/login'} state={location.pathname} replace/>
    }
    else{
        return children;
    }
}

export default PrivateRoute;
// export {PrivateRoute}