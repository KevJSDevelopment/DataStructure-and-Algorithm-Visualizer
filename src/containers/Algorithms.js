import React from 'react'
import MultiplePointers from '../components/MultiplePointers'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../components/Home';
import MergeSort from '../components/MergeSort';

const Algorithms = () => {
    
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact render={() => <Home /> }/>
                    <Route path="/multiple-pointers" exact render={() => <MultiplePointers /> }/> 
                    <Route path="/merge-sort" exact render={() => <MergeSort /> }/> 
                    <Redirect to="/"/>
                </Switch>
            </Router>
        </div>
    )
}

export default Algorithms
