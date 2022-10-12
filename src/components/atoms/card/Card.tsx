import React from 'react'
import './card.css';

interface CardProps {
    children?: React.ReactNode,
    styling?: React.CSSProperties;
    cardWidth?: string;
    cardHeight?: string;
    color?: string;
  }
  
  const Card = ({children, color, cardHeight = "260px", cardWidth = "200px"}:CardProps): React.ReactElement => {
    const styling: React.CSSProperties = {
      width: cardWidth,
      height: cardHeight,
      backgroundColor: color,
    }
      return(

    <div className={"card"} style={styling}>{children}</div>
  )
  }
  export default Card;