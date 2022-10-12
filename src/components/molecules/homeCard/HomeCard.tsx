import Card from '../../atoms/card/Card'
import Paragraph from '../../atoms/paragraph/Paragraph'

interface HomeCardProps {
    header: string,
    description: string,
}

const HomeCard = ({header = "Ustwobies", description = "Meet us"}:HomeCardProps) => {
  return (
    <Card cardWidth="342px" cardHeight="140px"> 
        <div>
            <Paragraph text={header}/>
            <Paragraph text={description}/>
        </div>
    </Card>
  )
}

export default HomeCard