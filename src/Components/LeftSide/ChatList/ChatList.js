import { useState } from 'react';
import Style from './ChatList.module.css'
import FriendList from '../FriendList/FriendList';

function ChatList(){
    const [isFriend, setIsFriend] = useState(false);

    const showFriendList = ()=>{
        setIsFriend(!isFriend);
    }
    return (
        <>
            <div className={Style.chatContainer}>
                <form>
                    <input type='text' placeholder='Search' />
                </form>
                <div onClick={showFriendList} className={Style.addNew}>
                    <div>Start New</div> 
                    <img alt='Add' src='https://www.shutterstock.com/image-vector/add-icon-plus-symbol-increase-260nw-1659251050.jpg' />
                </div>
                <div className={Style.FriendList}>
                    {isFriend ? <FriendList /> : null}
                </div>
            </div>
        </>
    )
}

export default ChatList;