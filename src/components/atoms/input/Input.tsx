import './input.css';

interface InputProps {
    name: string,
    placeholder: string,
    styling?: React.CSSProperties;
    size?: 'small' | 'large';
}

function Input({name, size="large", placeholder="placeholder text", ...props}:InputProps) {
    return(
        <div>
            <input className={['RegularMedium', `input-${size}`].join(' ')} placeholder={placeholder} id={name}{...props}></input>
        </div>
    );
};
export default Input;