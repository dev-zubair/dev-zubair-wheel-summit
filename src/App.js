import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.js';
import Donors from './components/Donors/Donors.js';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// const element = <FontAwesomeIcon icon={faCoffee} />

function App() {
  return (
    <div>
      <Header></Header>
      <Donors></Donors>
    </div>
  );
}

export default App;
