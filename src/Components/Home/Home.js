import { useSelector } from "react-redux";
import ChatList from "../LeftSide/ChatList/ChatList";
import Messages from "../RightSide/Messages/Messages";

import Style from './Home.module.css'
import { chatSelector } from "../Redux/Reducer";

function Home() {
  const {chatWindow , activeUser} = useSelector(chatSelector);
  // console.log(activeUser);
  const { user } = useSelector((state) => state.authReducer);
  console.log(user);

    // if(!user){
    //     return <h1>Please authorize yourself</h1>
    // }
  
  return (
    <>
      <div className={Style.container}>
        <div className={Style.leftside}>
            <ChatList />
        </div>
        {chatWindow ? 
        <div className={Style.rightSide}>
          <Messages user = {activeUser.activeUser} />
        </div> : null}
      </div>
    </>
  );
}

export default Home;
