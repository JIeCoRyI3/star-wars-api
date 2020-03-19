import React, {Component} from 'react';

import './people-page.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorMessage from "../error-message";

export default class PeoplePage extends Component {

    state = {
        selectedPerson: null,
        error: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({error: true});
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    };

  render() {
      if(this.state.error){
          return <ErrorMessage/>;
      }

      return (
          <div className="row mb2">
              <div className="col-md-6">
                  <ItemList onItemSelected={this.onPersonSelected}/>
              </div>
              <div className="col-md-6">
                  <PersonDetails personId={this.state.selectedPerson}/>
              </div>
          </div>
      );
  }
};
