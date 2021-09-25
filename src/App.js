import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faCoffee} />

function App() {
  return (
    <div>
      <h1 className='title'>{element} Create React File</h1>
    </div>
  );
}

export default App;
