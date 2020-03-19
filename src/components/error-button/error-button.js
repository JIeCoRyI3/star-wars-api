import React, {Component} from 'react';

import './error-button.css';

export default class ErrorButton extends Component{

    state = {
      renderError: false
    };



    render() {

        console.log('render');
        if(this.state.renderError){
            this.foo.bar = 0;
        }

        return (
            <button onClick={() => this.setState({renderError:true})}
                    type="button"
                    className="btn btn-danger"
                    style={{marginBottom: 30+'px',
                            marginLeft: 30+'px'}}>
                Throw Error
            </button>
        );
    }
};

