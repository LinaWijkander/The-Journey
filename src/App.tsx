import './global-styles.css';
import Title from './components/atoms/title/Title';
import FactCardEdit from './components/organisms/fact-card-edit/FactCardEdit';


function App() {

  return (
      <>
       <Title text={"Title text"}/>
       {/*  <img src={camera} alt="flow" /> */}
       {/* <Icon icon={testIcon}/>  */}
       <FactCardEdit color={"#FFDFF3"} heading="When I was little, I used to dream about growing up to be"/>
      </>
   
    );
}
export default App;