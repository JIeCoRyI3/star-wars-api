import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends Component{

    state = {
        toggle: true,
        selectedPerson: null
    };

 toggled = () => {
     this.setState((state) => {
         return {toggle: !state.toggle}
     })
 };

 onPersonSelected = (id) => {
    this.setState({
        selectedPerson: id
    })
 };

 render() {
     const {toggle} = this.state;

     return (
         <div className="container">
             <Header />
             {toggle ? <RandomPlanet /> : null}
             <button onClick={this.toggled} type="button" className="btn btn-warning" style={{marginBottom: 30+'px'}}>Toggle Random Planet</button>
             <div className="row mb2">
                 <div className="col-md-6">
                     <ItemList onItemSelected={this.onPersonSelected}/>
                 </div>
                 <div className="col-md-6">
                     <PersonDetails personId={this.state.selectedPerson}/>
                 </div>
             </div>
         </div>
     );
 }
};