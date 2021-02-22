import Navbar from './containers/Navbar'
import Algorithms from './containers/Algorithms'
import MultiplePointers from './components/MultiplePointers'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import MergeSort from './components/MergeSort';
import QuickSort from './components/QuickSort';
import BubbleSort from './components/BubbleSort';
import LinkedList from './components/SingleLinkedList';

const App = () => {
  return (
    <div className="App h-screen">
      <Router>
        <Navbar />
        <Switch>
            <Route path="/" exact render={() => <Home /> }/>
            <Route path="/multiple-pointers" exact render={() => <MultiplePointers /> }/> 
            <Route path="/merge-sort" exact render={() => <MergeSort /> }/> 
            <Route path="/quick-sort" exact render={() => <QuickSort /> }/> 
            <Route path="/bubble-sort" exact render={() => <BubbleSort /> }/> 
            <Route path="/linked-list" exact render={() => <LinkedList /> }/>
            <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
