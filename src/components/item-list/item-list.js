import React, { Component } from 'react';

import './item-list.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component {

    connect = new SwapiService();

    state = {
        peopleList: null
    };

    componentDidMount() {
        this.connect
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                });
            });
    }

    renderItem (arr){
        return arr.map(({id, name}) => {
            return (
                <li key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            );
        })
    }

    render() {

        const {peopleList} = this.state;

        if (!peopleList){
            return <Spinner/>;
        }

        const items = this.renderItem(peopleList);

        return (
          <ul className="item-list list-group">
              {items}
          </ul>
        );
  }
}
