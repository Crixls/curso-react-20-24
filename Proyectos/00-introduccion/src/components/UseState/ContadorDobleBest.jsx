import React, { useState } from 'react'
const initialState={ // este es el valor inicial de friends
    cris:0,
    ana:0,
}

const ContadorDobleBest = () => {
    const [friends, setFriend] = useState(initialState);

    function handleIncrement(friendName){
        setFriend({
            ...friends,
            [friendName]:friends.friendName+1 
        });
    }
    // function handleIncrement(friendName){
    //     setFriend((prevFriends)=>{
    //         ...friends,
    //         [friendName]:prevFriends.friendName+1,
    //     });
    // }

    return (
        <>
            <div>
                <span>Cris tiene: <strong>{friends.cris}</strong></span>
                <button onClick={()=>handleIncrement("cris")}>Aumentamos +1 amigo</button>
            </div>
            <div>
                <span>Ana tiene: <strong>{friends.ana}</strong></span>
                <button onClick={()=>handleIncrement("ana")}>Aumentamos +1 amigo</button>
            </div>
        </>
    )
}

export default ContadorDobleBest
