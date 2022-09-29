import  {InputHTMLAttributes} from 'react'
import './inputField.css';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string,
    label: string
}

function InputField({name, label, ...props}:InputFieldProps) {
    return(
        <div className={"inputField"}>
            <label htmlFor={name}> {label}</label>
            <input id={name}{...props}></input>
        </div>
    );
};
export default InputField;