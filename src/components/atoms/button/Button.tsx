import './button.css';

interface ButtonProps {
  disabled?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label?: string; 
  icon?: JSX.Element
  onClick?: () => void;
}

export const Button = ({disabled = false, size = 'small', backgroundColor, icon, label = "Button", ...props}: ButtonProps) => {
  const mode = disabled ? 'button-disabled' : 'button-regular';
  return (
    <button
      type="button"
      className={['RegularMedium', 'button', `button-${size}`, mode].join(' ')}
      style={{backgroundColor }}
      {...props}>
        {icon}{label}
    </button>
  );
};

