import Navbar from './Navbar'
import Algorithms from './Algorithms'
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div className="App h-screen flex flex-row">
      <Router>
        <Navbar />
        <Algorithms />
      </Router>
    </div>
  );
}

export default App;
