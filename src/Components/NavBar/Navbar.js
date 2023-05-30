import { Outlet } from "react-router";

import Style from './Navbar.module.css';
import { useDispatch, useSelector } from "react-redux";
import { chatSelector } from "../Redux/Reducer";
import { LogIN } from "../Redux/Reducer";
import { Link } from "react-router-dom";

function NavBar(){
    const {isLogin} = useSelector(chatSelector);
    console.log(isLogin);
    const dispatch = useDispatch();


    const toggleSignIN = ()=>{
        dispatch(LogIN(!isLogin));
    }

    return (
        <>
            <nav>
                <div className={Style.heading}>
                    <h1>Chat-MONKEY</h1>
                </div>
                <div className={Style.userLogIn}>
                    <Link className="link" to = {isLogin ? 'singUp' : 'singIN'}>
                        <h1 onClick={toggleSignIN}>{isLogin ? 'SignUP' : 'SignIN'}</h1>
                    </Link>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
export default NavBar;