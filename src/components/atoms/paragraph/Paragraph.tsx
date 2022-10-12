import "./paragraph.css";

interface ParagraphProps {
    text: string | number;
    italic?: boolean;
    size?: "small" | "medium";
    fontSize?: number;
    color?: string;
}

// todo: Change classnames. textAreaField & this css is sharing p{}

const Paragraph = ({text="Paragraph text", italic=false, size="medium", fontSize=17, color="#191B36" }:ParagraphProps) => {
  //const emphasis = italic ? "italic" : "regular";
  const emphasis = italic ? "DMSans-Italic" : "DMSans-Regular";
  
  const styles={
    "font-size": fontSize,
    color: color,
    "font-family": emphasis,
  }

  return (
    <p style={styles} /* className={[`${emphasis}`, `paragraph-${size}`].join(' ') }*/>{text}</p>
  )
}

export default Paragraph