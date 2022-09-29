import './pill.css';
import  Icon  from '../../atoms/icon/Icon';

interface PillProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string; 
  onClick?: () => void;
  outlined?: boolean;
}

// todo fix for setting line height for button text to be centered lineHeight: 1.65

const Pill = ({primary = false, size = 'medium', backgroundColor, label, outlined, ...props}: PillProps) => {
  const mode = primary ? 'pill-primary' : 'pill-secondary';
  const border = outlined ? 'pill-outlined' : 'pill';
  return (
    <button
      type="button"
      className={['pill', `pill-${size}`, mode, border].join(' ')}
      style={{backgroundColor }}
      {...props}
    >
        {<Icon/>}
      {label}
      
    </button>
  );
};
export default Pill


