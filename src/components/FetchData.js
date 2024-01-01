import { useEffect, useState } from "react";

function FetchData(){
    const [data, setData] = useState(null);
    useEffect(()=>{
        fetch("https://api.github.com/users/moonhighway")
        .then((response)=> response.json())
        .then(setData);
    },[])
    return(
        <p>{JSON.stringify(data,null, 2)}</p>
    )
}

export default FetchData;