import './title.css';

type TitleProps = {
    text: String;
    size?: 'small' | 'large';
}

function Title ({text = "This is a title", size="large"}: TitleProps){
    
        return(<h1 className={`title-${size}`}>{text}</h1>) 
}

export default Title;
