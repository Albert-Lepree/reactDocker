import './App.css';
//import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import { Container } from 'react-bootstrap';
import ClientForm from './components/ClientForm';


function App() {
  return (
    <div className="App">
      <ClientForm />
    </div>
  );
}

export default App;


/* <Container>
<Row>
 <form>
   <label>
     Name:
     <input type="text" name="name" />
   </label>
   <input type="submit" value="Submit" />
 </form>
</Row>
<ClientForm />
</Container> */