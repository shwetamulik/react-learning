import { useReducer } from "react";

function Checkbox(){
    const [check, setCheck] = useReducer( check => !check, false)
    return(
        <>
        <input type="checkbox" value={check} onChange={setCheck}/>
        <label>{check ? "Uncheck it": "Checked it"}</label>
        </>
    )
}
export default Checkbox;