import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';
import PeoplePage from "../people-page";
import ErrorMessage from "../error-message";
import ErrorButton from "../error-button";

export default class App extends Component{

    state = {
        toggle: true,
        error: false
    };

     toggled = () => {
         this.setState((state) => {
             return {toggle: !state.toggle}
         })
     };

    componentDidCatch(error, errorInfo) {
        this.setState({error: true});
    }

    render() {
     const {toggle, error} = this.state;

     if(error){
         return <ErrorMessage/>;
     }

     return (
         <div className="container">
             <Header />
             {toggle ? <RandomPlanet /> : null}
             <button onClick={this.toggled} type="button" className="btn btn-warning" style={{marginBottom: 30+'px'}}>Toggle Random Planet</button>
             <ErrorButton/>
             <PeoplePage/>
         </div>
     );
 }
};