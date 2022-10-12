import React from 'react'
import './factCard.css';
import Card from "../../atoms/card/Card";
import {Button} from "../../atoms/button/Button";
import {penIcon} from '../../../assets/icons';
import Heading from '../../atoms/heading/Heading';


interface FactCardProps {
  heading: string;
}
  
  const FactCard = ({heading="Fact card heading" }:FactCardProps) => {
    const styles: React.CSSProperties = {
        width: "280",
        height: "340",
        backgroundColor: "#BDC9FF",
      }
    return(
        <Card styling={styles}>
            <div className={'factCard-content'}>
                <Heading text={heading} size='medium' headingLevel='h2' bold/>
                <Button icon={penIcon} size="small" label="Answer"/>
            </div>
        </Card>
    )
  }
  export default FactCard;