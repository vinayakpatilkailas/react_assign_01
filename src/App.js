import  "./Style.css";
import Classbased from './Component/Classbased';
import Functionbased from './Component/Functionbased';

function App() {
return (
  <>
    <h1 className="Main">Styling using functional and class components</h1>
  
    <Functionbased />
  
    <Classbased />  
  </>
);
}

export default App;
