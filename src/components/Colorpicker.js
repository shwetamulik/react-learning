import { useRef, useState } from "react";

function ColorPicker(){
    const [text, setText] = useState();
    const [color, setColor] = useState();

    const onChange = (e) => {
        e.preventDefault();
        
       setText(text);
       setColor(e.target.value);
       document.body.style.backgroundColor = color;

       console.log("text and color",text,color)
       
    }
return(
    <>
    <input type="text" placeholder="Add color" value={text}/>
    <input type="color" value = {color} onChange={onChange}/>

    <p>Selected Color: {color}</p>

   
    </>
)
}
export default ColorPicker;