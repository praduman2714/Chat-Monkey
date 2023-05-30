import { Link, useNavigate } from "react-router-dom";
import Style from './SingIn.module.css';
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../Redux/authReducer";


function SingIN(){
    const {loading, error} = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
      
        try {
          await dispatch(signIn({ email: email.trim(), password: password.trim() }));
      
          if (!error) {
            navigate('/');
          }
        } catch (error) {
          alert(error);
        }
      };
      

    return (
        <>
            <div className={Style.container}>
                <h1>Sing-IN</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" ref={emailRef} /> <br/>
                    <input type="password" placeholder="Password" ref={passwordRef} /> <br />
                    <button>{loading ? '...' : 'Sign-In'}</button> <br/>
                    <Link  to = '/singUp'>
                        New User?
                    </Link>
                    <span>
                        {error ? error : null}
                    </span>
                </form>
            </div>
        </>
    )
}
export default SingIN;