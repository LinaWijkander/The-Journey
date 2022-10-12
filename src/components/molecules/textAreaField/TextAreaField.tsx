import { useState } from 'react'
import './textAreaField.css';
import Paragraph from '../../atoms/paragraph/Paragraph';
import Label from '../../atoms/label/Label';
import TextArea from '../../atoms/textArea/TextArea';

interface TextAreaFieldProps {
    placeholder?: string;
    /* rows?: number; */
    labelText: string;
    width?: string;
    height?: string;
}

/*todo fix states. setInput(e.target.value.length) */

const TextAreaField = ({placeholder, labelText, width, height}:TextAreaFieldProps) => {
    const [input, setInput] = useState("");
    const [count, setCount] = useState(0);
    const maxCount = 150;
   

  return (
    <div>
      <Label label={labelText}/>
      <TextArea placeholder={placeholder} width={width} height={height}/>
      <Paragraph text={ `${count}/${maxCount}`}/>
    </div>
  );
}

export default TextAreaField;