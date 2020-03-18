import React, { Component } from 'react';

import SwapiService from "../../services/swapi-service";

import './random-planet.css';
import Spinner from "../spinner";
import ErrorMessage from "../error-message";

export default class RandomPlanet extends Component {

  connect = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 2500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
     this.setState({
       planet,
       loading: false
     });
  };

  onError = (err) => {
    this.setState({
      error: true
    });
  };

  updatePlanet= () => {
    const id = Math.floor(Math.random() * 25) + 2;
    //const id = 222222;
    this.connect
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
  };

  render() {
    const { planet, loading, error} = this.state;

    const spinner = !error ? (loading ? <Spinner/> : null) : null;
    const errorMessage = error ? <ErrorMessage/> : null;
    const content = !loading ? <PlanetView planet={planet}/> : null;

    return (
        <div className="random-planet jumbotron rounded">
          {spinner}
          {errorMessage}
          {content}
        </div>
    );
  }
}

const PlanetView =  ( {planet} ) => {

  const {id, name, population, rotationPeriod, diameter} = planet;

  return(
      <React.Fragment>
        <img className="planet-image"
             alt="not found"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">RotationPeriod</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </React.Fragment>
  );
};
