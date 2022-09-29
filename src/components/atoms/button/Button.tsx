import './button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label?: string | JSX.Element; 
  onClick?: () => void;
  //withIcon?: boolean;
  //svg?: string;
}
// Button
// isLoading
// basic
// pill
// long Button
// disabled
// pill with icon

export const Button = ({primary = false, size = 'medium', backgroundColor, label = "Button", ...props}: ButtonProps) => {
  const mode = primary ? 'button-primary' : 'button-secondary';
  //const Icon = svg ? svg : "Button";
  return (
    <button
      type="button"
      className={['button', `button-${size}`, mode].join(' ')}
      style={{backgroundColor }}
      {...props}>
        {label}
    </button>
  );
};
