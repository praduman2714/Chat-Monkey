// import { useState } from "react";
import { useDispatch } from "react-redux";
import data from "../../../data";
import styles from './FriendList.module.css';
import {   ChatWindow } from "../../Redux/Reducer";

function FriendList() {
    // const [chatWindow, setChatWindow] = useState(false);
    // const {chatWindow} = useSelector(chatSelector);
    const dispatch = useDispatch();

    const handleClick = (friend)=>{
        // (!chatWindow);
        dispatch(ChatWindow({ chatWindow: true, activeUser: friend }));
    }
    return (
        <div className={styles.friendList}>
        {data.map((friend, index) => (
            <div onClick={()=> handleClick(friend)} key={index} className={styles.friendItem}>
            <img className={styles.profilePicture} alt="DP" src={friend.dp} />
            <div className={styles.friendInfo}>
                <h3 className={styles.friendName}>{friend.name}</h3>
                <h5 className={styles.lastMessage}>{friend.lastMessage}</h5>
            </div>
            </div>
        ))}
        </div>
    );
}

export default FriendList;
