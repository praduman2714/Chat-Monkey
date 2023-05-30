// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Style from './SingUp.module.css';
import { LogIN, chatSelector } from '../Redux/Reducer';
import { signUp } from '../Redux/authReducer';
import { useRef } from 'react';
import { useNavigate } from 'react-router';

function SingUP() {
  const { isLogin } = useSelector(chatSelector);
  const { loading , error } = useSelector((state) => state.authReducer);
  // console.log(loading);
  // console.log(isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  // const [errorr, setError] = useState(null);

  const handleClick = () => {
    dispatch(LogIN(!isLogin));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setError(null); // Reset error state

    try {
       await dispatch(
        signUp({
          email: emailRef.current.value,
          password: passwordRef.current.value,
          name: nameRef.current.value,
        })
      );
      
      if(error)
        navigate('/singIN');
    } catch (error) {
      // setError(error.message);
      alert(error.message);
    }
  };

  return (
    <div className={Style.container}>
      <h1>Sign-UP</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Name' ref={nameRef} />
        <input type='text' placeholder='Email' ref={emailRef} /> <br />
        <input type='password' placeholder='Password' ref={passwordRef} /> <br />
        <button onClick={handleClick}>{loading ? '...' : 'Sign-UP'}</button> <br />
        {error && <p>Error: {error}</p>} {/* Display the error message if error exists */}
      </form>
    </div>
  );
}

export default SingUP;
