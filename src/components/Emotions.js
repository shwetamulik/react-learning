import { useEffect, useState } from "react";

function Emotions(){
    const [emotion, setEmotion] = useState("Happy");

    const makeSad = () => {
        setEmotion("Sad");
    }
    const makeExcited = () => {
        setEmotion("Excited");
    }

    useEffect(()=>{
        console.log(emotion)
    },[emotion])

    return (
        <>
        <h1>Current emotion is {emotion}</h1>
        <button onClick={makeSad}>Sad</button>
        <button onClick={makeExcited}>Excited</button>
        </>
    )
}
export default Emotions;