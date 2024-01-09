import React from 'react'
const initialState={ // este es el valor inicial de friends
    cris:0,
    ana:0,
}

const ContadorDoble = () => {
    const [friends, setFriend] = useState(initialState);

    function handleIncrementCris(){//para reformular es prevValue en los parentesis
        setFriend({...friends,cris:friends.cris+1}) //tres puntos es una copia de friends
    }
    function handleIncrementAna(){//para reformular es prevValue en los parentesis
        setFriend({...friends,ana:friends.ana+1}) //tres puntos es una copia de friends
    }

    // function handleIncrementCris(prevFriends){//para reformular es prevValue en los parentesis
    //     setFriend({...prevFriends,cris:prevFriends.cris+1}) //tres puntos es una copia de friends
    // }




    return (
        <>
            <div>
                <span>Cris tiene: <strong>{friends.cris}</strong></span>
                <button onClick={handleIncrementCris}>Aumentamos +1 amigo</button>
            </div>
            <div>
                <span>Ana tiene: <strong>{friends.ana}</strong></span>
                <button onClick={handleIncrementAna}>Aumentamos +1 amigo</button>
            </div>
        </>
    )
}

export default ContadorDoble
