import Label from '../../atoms/label/Label';
import Input from '../../atoms/input/Input';
import './inputField.css';

interface InputFieldProps {
    name: string,
    label: string,
    placeholder: string,
    size: "small" | "large"
}

function InputField(props:InputFieldProps) {
    return(
        <div>
            <Label label={props.label}/>
            <Input size={props.size} name={props.name} placeholder={props.placeholder}/>
        </div>
    );
};
export default InputField;