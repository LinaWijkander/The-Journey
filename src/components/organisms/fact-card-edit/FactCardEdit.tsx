import './factCardEdit.css';
import Card from "../../atoms/card/Card";
import {Button} from "../../atoms/button/Button"; 
import TextAreaField from "../../molecules/textAreaField/TextAreaField";
import Heading from '../../atoms/heading/Heading';
import '../../../global-styles.css'

interface FactCardEditProps {
  heading: string;
  color: string;
}

  //todo: the previous text should be displayed when editing

  const FactCardEdit = ({heading="My secret talent is", color="#FFDFF3"}:FactCardEditProps) => {
   
    return(
        <Card cardWidth='340px' cardHeight='500px' color={color}>
            <div className={'factCardEdit-content'}>
              <Heading headingLevel="h2" text={heading} size="large" bold/>
              <TextAreaField labelText='Write your answer' width='280px' height='160px'/>
              <Button label="Done"/>
            </div>
        </Card>
    )
  }
  export default FactCardEdit;