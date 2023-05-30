import { useSelector } from "react-redux";

function Home() {
  const { user } = useSelector((state) => state.authReducer);
  console.log(user);
  
  return (
    <>
      {user ? <h1>User Sign In</h1> : <h1>This is Home page</h1>}
    </>
  );
}

export default Home;
