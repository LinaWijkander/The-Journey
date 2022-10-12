import './label.css';

interface LabelProps{
    label: string;
}

const Label = ({label="label text"}:LabelProps) => {
  return (
   
    <label className='journey-label'>{label}</label>
  )
}

export default Label