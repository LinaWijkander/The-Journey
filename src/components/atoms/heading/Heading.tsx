import './heading.css';

type HeadingProps = {
    text: String;
    size: "small"|"medium"|"large"|"huge";
    color: string
}


function Heading ({text, size, color}: HeadingProps){
    if(size === "small")
        return(<h4 style={{color}}className={['heading', `heading-${size}`].join(' ')}>{text}</h4>);
    if(size === "medium")
        return(<h3 style={{color}}className={['heading', `heading-${size}`].join(' ')}>{text}</h3>);
    if(size === "large")
        return(<h2 style={{color}} className={['heading', `heading-${size}`].join(' ')}>{text}</h2>);
    if(size === "huge")
        return(<h1 style={{color}} className={['heading', `heading-${size}`].join(' ')}>{text}</h1>);
  
        return(<h1>Default heading large</h1>)
}

export default Heading;