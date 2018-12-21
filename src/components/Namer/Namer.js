import React, { Component } from "react";
import ShowOptions from './ShowOptions';
import ShowNames from "./ShowNames";

class Namer extends Component {

    constructor() {
        super();
        this.state = { 
            data: [],
            showNames: false,
            includePrefix: false,
            includeSuffix: false
        };
    };   

    getNames() {
        fetch(`https://namegeneratorservice.herokuapp.com/api/plushies/`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
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
        let name = '';
        if(this.state.includePrefix) {
            name = this.state.data.prefix.shift() + ' ';
        }
        
        name += this.state.data.main.shift();
        
        if(this.state.includeSuffix) {
            name = name + ' ' + this.state.data.suffix.shift();
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


