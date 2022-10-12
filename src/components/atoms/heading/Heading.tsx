import './heading.css';

interface HeadingProps {
    text: string;
    bold?: boolean;
    headingLevel: "h2" |"h3" | "h4" | "h4" |"h6" ;
    color?: string;
    fontSize?: string;
    lineHeight?: string;
    size: "xs" | "small" | "medium" | "large"
}

const Heading = ({headingLevel="h2", text="Heading Text", size="medium", bold=false}:HeadingProps) => {
const H = headingLevel;
const emphasis = bold ? "-bold" : "";

  return (
    <H className={['heading', `heading-${size}${emphasis}`].join(' ')}>{text}</H>
  )
}

export default Heading