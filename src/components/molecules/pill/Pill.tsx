import './pill.css';
import { ReactNode } from 'react';

interface PillProps {
  flexible?: boolean;
  backgroundColor?: string;
  label: string; 
  onClick?: () => void;
  icon: ReactNode;
}

const Pill = ({flexible = false, backgroundColor, label, icon, ...props}: PillProps) => {
  const mode = flexible ? 'pill-flexible' : 'pill-standard';

  return (
    <button
      type="button"
      className={['pill', mode].join(' ')}
      style={{backgroundColor }}
      {...props}
    >
      {icon}
      {label}
    </button>
  );
};
export default Pill


