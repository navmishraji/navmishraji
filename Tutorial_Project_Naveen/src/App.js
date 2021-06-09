import logo from './logo.svg';

import './App.css';
import Tutorial from './componets/Tutorails/Tutorail';
import TutorialList from './componets/Tutorails/TutorailList';
import { BrowserRouter } from 'react-router-dom';
import RouteHandle from './RouteHandler';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <RouteHandle/>
      </BrowserRouter>

    </div>
  );
}

export default App;
