import { useState } from 'react'
import './textArea.css';

interface TextAreaProps {
    placeholder?: string;
    width?: string | number;
    height?: string | number;
}


const TextArea = ({placeholder="Type here", width="342px", height="140px"}:TextAreaProps) => {
    const [input, setInput] = useState("");
    
  return (
    <div>
      <textarea
        placeholder={placeholder}
        className="RegularMedium"
        value={input}
        name="note"
        style={{height: height, width: width}}
        onChange={(e) =>{
          setInput(e.target.value)
          console.log(e.target.value.length)
          }
        } 
      />
    </div>
  );
}

export default TextArea