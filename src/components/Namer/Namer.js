import React, { Component } from "react";
import ShowOptions from './ShowOptions';
import ShowNames from "./ShowNames";
import axios from 'axios';
import * as Sentry from '@sentry/browser';

class Namer extends Component {

    constructor() {
        super();
        this.state = { 
            data: [],
            showNames: false,
            includePrefix: false,
            includeSuffix: false,
            gotData: false
        };
    };   

    getNames = async () => {
        try {
            const { data } = await axios.get(`https://namegeneratorservice.herokuapp.com/api/plushies/`);
            this.setState({ data, gotData: true });
        }
        catch(e) {
            Sentry.captureException(error);
            this.setState({ gotData: false });
        }
    };

    componentDidMount() {
        this.getNames();
    };

    setPrefix = () => {       
        const prefixSelection = !this.state.includePrefix;
        this.setState({ includePrefix: prefixSelection });
    };

    setSuffix = () => {  
        const suffixSelection = !this.state.includeSuffix;
        this.setState({ includeSuffix: suffixSelection });
    };

    showNames = () => {
        const nameSelection = !this.state.showNames;
        this.setState({ showNames: nameSelection });
    }

    showOptions = () => {
        const nameSelection = !this.state.showNames;
        this.setState({ 
            showNames: nameSelection,
            includePrefix: false,
            includeSuffix: false
        });
        this.getNames();
    };

    getName = () => {
        const { includePrefix, includeSuffix, data } = this.state;

        let name = '';
        if(includePrefix) {
            name = data.prefix.shift() + ' ';
        }
        
        name += data.main.shift();
        
        if(includeSuffix) {
            name = name + ' ' + data.suffix.shift();
        }
        return name;
    }

    render() { 
        return(
            <div className="card">
                <div className="card-image">
                    <img src="images/namer.jpg" alt="Cute dog in unicorn costume"/>
                </div>
                <div className="card-content">
                    <span className="card-title grey-text text-darken-4">Ridicuolus Pet &amp; Plushie Name Generator</span>
                    <div className="name-selection center-align">
                        {(!this.state.showNames)? <ShowOptions 
                            setPrefix={this.setPrefix}
                            setSuffix={this.setSuffix}
                            showNames={this.showNames}
                            gotData={this.state.gotData}
                            /> : 
                            <ShowNames 
                                showOptions={this.showOptions}
                                getName={this.getName}
                            />         
                            }
                    </div>
                    
                </div>
            </div>
        );
    }
};

export default Namer;


